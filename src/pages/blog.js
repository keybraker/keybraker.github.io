import React from 'react';
import BlogListing from './../components/BlogListing';
import Layout from './../components/Layout';

const BlogPageInner = props => {
  try {
    const posts = props.data.allMdx ? props.data.allMdx.edges : [];

    return <BlogListing posts={posts} />;
  } catch (e) {
    return <h2>Unable to find any blog posts.</h2>;
  }
};

const BlogPage = props => {
  return (
    <Layout>
      <BlogPageInner {...props} />
    </Layout>
  );
};

export default BlogPage;
