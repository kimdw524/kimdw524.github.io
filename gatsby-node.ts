import path from 'path';

export const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`src/templates/post.tsx`);
  const result = (await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `)) as {
    data: {
      allMarkdownRemark: {
        edges: {
          node: {
            frontmatter: {
              slug: string;
            };
            id: string;
          };
        }[];
      };
    };
  };

  const edges = result.data.allMarkdownRemark.edges;

  for (let i = 0; i < edges.length; i++) {
    const prev = i > 0 ? edges[i - 1] : undefined;
    const next = i < edges.length - 1 ? edges[i + 1] : undefined;

    createPage({
      path: `post/${edges[i].node.frontmatter.slug}`,
      component: postTemplate,
      context: {
        id: edges[i].node.id,
        prev: prev?.node.id || '',
        next: next?.node.id || '',
      },
    });
  }

  result.data.allMarkdownRemark.edges.forEach((edge) => {});
};
