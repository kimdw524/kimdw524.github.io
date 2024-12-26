import path from 'path';

const createPostPage = async ({ createPage, graphql }) => {
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
};

const createTagPage = async ({ createPage, graphql }) => {
  const tagTemplate = path.resolve(`src/templates/tag.tsx`);
  const result = await graphql(`
    {
      allMarkdownRemark {
        group(field: { frontmatter: { tags: SELECT } }) {
          tag: fieldValue
        }
      }
    }
  `);

  for (const { tag } of result.data.allMarkdownRemark.group) {
    createPage({
      path: `tag/${tag}`,
      component: tagTemplate,
      context: {
        tag: tag,
      },
    });
  }
};

export const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  await createPostPage({ createPage, graphql });
  await createTagPage({ createPage, graphql });
};

export const onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  const config = getConfig();
  const miniCssExtractPlugin = config.plugins.find((plugin) => plugin.constructor.name === 'MiniCssExtractPlugin');
  if (miniCssExtractPlugin) {
    miniCssExtractPlugin.options.ignoreOrder = true;
  }
  actions.replaceWebpackConfig(config);
};
