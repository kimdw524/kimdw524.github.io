import { graphql, HeadFC } from 'gatsby';
import { useRef } from 'react';

import { formatDate } from '@/utils/time';

import Layout from '@/components/layout/Layout';
import TagList from '@/components/post/TagList';
import ToC from '@/components/post/ToC';

import { lightTheme } from '@/styles/lightTheme.css';
import { markdown } from '@/styles/markdown.css';
import * as s from '@/styles/page/post.css';

interface PostPageQuery {
  markdownRemark: {
    frontmatter: {
      title: string;
      slug: string;
      tags: string[];
      date: string;
    };
    html: string;
  };
}

const PostPage = ({ data }: { data: PostPageQuery }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <Layout>
      <div className={s.container}>
        <div className={s.header}>
          <h2 className={s.title}>{data.markdownRemark.frontmatter.title}</h2>
          <div className={s.date}>{formatDate(data.markdownRemark.frontmatter.date)}</div>
          <TagList tags={data.markdownRemark.frontmatter.tags} />
        </div>
        <div className={s.content} ref={contentRef}>
          <div className={markdown} dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          <div className={s.toc}>
            <ToC contentRef={contentRef} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <>
    <title>Home Page</title>
    <body className={lightTheme} />
  </>
);

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        slug
        tags
        date
      }
      html
    }
  }
`;

export default PostPage;
