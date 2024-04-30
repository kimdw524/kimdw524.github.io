/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Link, type HeadFC, type PageProps } from 'gatsby';
import Layout from '../components/Layout';
import PostList from '../components/PostList';
import Section from '../components/Section';
import useRecentPosts from '../hooks/useRecentPosts';
import useSiteMetadata from '../hooks/useSiteMetadata';

interface IndexProps extends PageProps {
  data: {
    allMarkdownRemark: { edges: unknown };
  };
}

const Index = (props: IndexProps) => {
  const recentPosts = useRecentPosts();

  return (
    <Layout location={props.location}>
      <Section>
        <Section.Head>Posts</Section.Head>
        <PostList.Container>
          {recentPosts.map((post) => (
            <PostList key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <PostList.Banner alt={post.frontmatter.title}>
                  {post.frontmatter.banner}
                </PostList.Banner>
                <PostList.Title>{post.frontmatter.title}</PostList.Title>
                <PostList.Excerpt>{post.excerpt}</PostList.Excerpt>
                <PostList.Date>{post.frontmatter.date}</PostList.Date>
              </Link>
              <PostList.Tag>{post.frontmatter.tags}</PostList.Tag>
            </PostList>
          ))}
        </PostList.Container>
      </Section>
    </Layout>
  );
};

export default Index;

export const Head: HeadFC = () => {
  const siteMedata = useSiteMetadata();
  return <title>{siteMedata.siteName}</title>;
};
