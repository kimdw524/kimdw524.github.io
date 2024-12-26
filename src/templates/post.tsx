import { graphql, PageProps } from 'gatsby';
import { useRef } from 'react';

import { formatDate } from '@/utils/time';

import SEO from '@/components/common/SEO';
import Layout from '@/components/layout/Layout';
import PostNavigation from '@/components/post/PostNavigation';
import TagList from '@/components/post/TagList';
import ToC from '@/components/post/ToC';
import Profile from '@/components/profile/Profile';

import { markdown } from '@/styles/markdown.css';
import * as s from '@/styles/page/post.css';

interface PostPageProps extends PageProps<Queries.PostPageQuery> {
  pageContext: {
    tag: string;
  };
}

const PostPage = ({ data }: PostPageProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <Layout>
      <div className={s.container}>
        <div className={s.header}>
          <h2 className={s.title}>{data.markdownRemark?.frontmatter?.title}</h2>
          <div className={s.date}>{formatDate(data.markdownRemark?.frontmatter?.date || '')}</div>
          <TagList tags={(data.markdownRemark?.frontmatter?.tags || []) as string[]} />
        </div>
        <div className={s.content} ref={contentRef}>
          <div className={markdown} dangerouslySetInnerHTML={{ __html: data.markdownRemark?.html || '' }} />
          <div className={s.toc}>
            <ToC contentRef={contentRef} />
          </div>
        </div>
        <div className={s.profile}>
          <Profile />
        </div>
        <div className={s.navigation}>
          <div className={s.navigationItem}>
            {data.prev && (
              <PostNavigation
                direction="prev"
                slug={data.prev?.frontmatter?.slug || ''}
                title={data.prev?.frontmatter?.title || ''}
              />
            )}
          </div>
          <div className={s.navigationItem}>
            {data.next && (
              <PostNavigation
                direction="next"
                slug={data.next?.frontmatter?.slug || ''}
                title={data.next?.frontmatter?.title || ''}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Head = ({ data }: PostPageProps) => (
  <>
    <SEO title={`${data.markdownRemark?.frontmatter?.title} - kimdw524's blog`} />
  </>
);

export const query = graphql`
  query PostPage($id: String, $prev: String, $next: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        slug
        tags
        date
      }
      html
    }
    prev: markdownRemark(id: { eq: $prev }) {
      frontmatter {
        slug
        title
      }
    }
    next: markdownRemark(id: { eq: $next }) {
      frontmatter {
        slug
        title
      }
    }
  }
`;

export default PostPage;
