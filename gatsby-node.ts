import path from 'path';
const TagListTemplate = path.resolve('./src/templates/TagListTemplate.tsx');
const PostTemplate = path.resolve('./src/templates/PostTemplate.tsx');

const createPosts = async (result, actions) => {
  const posts = result.data.allMdx.nodes;
  posts.forEach((post: { id: string; frontmatter: { id: string; tags: string[] } }) => {
    actions.createPage({
      path: `/posts/${post.frontmatter.id}`,
      component: PostTemplate,
      context: {
        id: post.id,
      },
      defer: false,
    });
  });
};

const createTags = async (result, actions) => {
  const posts = result.data.allMdx.nodes;
  const mapTag = new Map<string, string[]>();
  posts.forEach((post: { id: string; frontmatter: { tags: string[] } }) => {
    post.frontmatter.tags.forEach((tag) => {
      if (!mapTag.has(tag)) {
        mapTag.set(tag, []);
      }
      mapTag.get(tag)?.push(post.id);
    });
  });

  mapTag.forEach((posts, tag) => {
    actions.createPage({
      path: `/tags/${tag}`,
      component: TagListTemplate,
      context: {
        tag,
      },
      defer: false,
    });
  });
};

export const createPages = async ({ actions, graphql }) => {
  const resultPosts = await graphql(`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            id
            tags
          }
        }
      }
    }
  `);
  await createPosts(resultPosts, actions);
  await createTags(resultPosts, actions);
};
