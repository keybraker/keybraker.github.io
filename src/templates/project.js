import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Helmet from 'react-helmet';

import Layout from './../components/Layout';
import ProjectLinks from './../components/ProjectLinks';
import TextPostBody from './../components/TextPostBody';

const ProjectTemplate = ({ data }) => {
  const { frontmatter, body } = data.mdx;

  return (
    <Layout>
      {frontmatter.title && (
        <Helmet>
          <title>Ioannis Tsiakkas | {frontmatter.title}</title>
        </Helmet>
      )}
      <h1>{frontmatter.title}</h1>
      <ProjectLinks
        link={frontmatter.link}
        repo={frontmatter.repo}
        date={frontmatter.date}
        lang={frontmatter.lang}
      />
      <TextPostBody>{body && <MDXRenderer>{body}</MDXRenderer>}</TextPostBody>
    </Layout>
  );
};

export default ProjectTemplate;
