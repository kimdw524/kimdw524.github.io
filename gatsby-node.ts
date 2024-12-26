import type { Actions, CreatePagesArgs, GatsbyNode } from 'gatsby';
import path from 'path';

const createPostPage = async ({
  graphql,
  createPage,
}: {
  graphql: CreatePagesArgs['graphql'];
  createPage: Actions['createPage'];
}) => {
  const postTemplate = path.resolve(`src/templates/post.tsx`);
  const result = (await graphql(`
    query Post {
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

const createTagPage = async ({
  graphql,
  createPage,
}: {
  graphql: CreatePagesArgs['graphql'];
  createPage: Actions['createPage'];
}) => {
  const tagTemplate = path.resolve(`src/templates/tag.tsx`);
  const { data }: { data?: Queries.TagQuery } = await graphql(`
    query Tag {
      allMarkdownRemark {
        group(field: { frontmatter: { tags: SELECT } }) {
          tag: fieldValue
        }
      }
    }
  `);

  if (!data?.allMarkdownRemark.group) {
    return;
  }

  for (const { tag } of data.allMarkdownRemark.group) {
    createPage({
      path: `tag/${tag}`,
      component: tagTemplate,
      context: {
        tag: tag,
      },
    });
  }
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions;

  await createPostPage({ graphql, createPage });
  await createTagPage({ graphql, createPage });
};

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions, getConfig }) => {
  const config = getConfig();
  const miniCssExtractPlugin = config.plugins.find(
    (plugin: { constructor: { name: string } }) => plugin.constructor.name === 'MiniCssExtractPlugin',
  );
  if (miniCssExtractPlugin) {
    miniCssExtractPlugin.options.ignoreOrder = true;
  }
  actions.replaceWebpackConfig(config);
};
