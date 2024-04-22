/** @jsx jsx */
import { jsx } from '@emotion/react';
import type { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import Navbar from '../components/Navbar';
import useSiteMetadata from '../hooks/useSiteMetadata';
import Section from '../components/Section';
import useRecentPosts from '../hooks/useRecentPosts';
import PostList from '../components/PostList';

interface IndexProps extends PageProps {
  data: {
    allMarkdownRemark: { edges: unknown };
  };
}

const Index = (props: IndexProps) => {
  const recentPosts = useRecentPosts();
  const siteMetadata = useSiteMetadata();

  console.log(recentPosts);

  return (
    <div>
      <Navbar>
        <Navbar.Logo>{siteMetadata.siteName}</Navbar.Logo>
        <Navbar.Item>
          {siteMetadata.navigation.map((nav) => (
            <Navbar.Link
              to={nav.slug}
              key={nav.slug}
              selected={props.location.pathname === nav.slug}
            >
              {nav.name}
            </Navbar.Link>
          ))}
        </Navbar.Item>
      </Navbar>

      <Section>
        <Section.Head>Posts</Section.Head>
        {recentPosts.map((post) => (
          <PostList key={post.id}>
            <PostList.Title>{post.frontmatter.title}</PostList.Title>
            <PostList.Excerpt>{post.excerpt}</PostList.Excerpt>
            <PostList.Tag>{post.frontmatter.tags}</PostList.Tag>
            <PostList.Date>{post.frontmatter.date}</PostList.Date>
          </PostList>
        ))}
      </Section>
    </div>
  );
};

export default Index;

export const Head: HeadFC = () => {
  const siteMedata = useSiteMetadata();
  return <title>{siteMedata.siteName}</title>;
};
