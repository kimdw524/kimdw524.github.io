import path from 'path';
const PostTemplate = path.resolve('./src/templates/Post.tsx');

export const createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    {
      allMdx {
        nodes {
          id
        }
      }
    }
  `);

  const posts = result.data.allMdx.nodes;

  posts.forEach((post: { id: string }) => {
    actions.createPage({
      path: `/posts/${post.id}`,
      component: PostTemplate,
      context: {
        id: post.id,
      },
      defer: true,
    });
  });
};
