import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

import resumePdf from '../../static/ioannis_tsiakkas_resume.pdf';

const name = "Ioannis Tsiakkas";
const date = "04 Dec 1995";
const phne = "6971823409";
const code = "0030";
const addr = "713 05 - Heraklion, Greece";
const mail = "iantsiakkas@gmail.com";
const gthb = "Keybraker";
const twtr = "RealTsiakkas";

const AboutPageInner = props => {
  try {
    return (
      <div>
        <table align="justify" width="100%">
          <tbody>
            <tr>
              <td>{name}</td>
            </tr>
            <tr>
              <td>{date}</td>
            </tr>
            <tr>
              <td><a href={`http://maps.google.com/?q=${addr}`} rel="noopener noreferrer" target="_blank">{addr}</a></td>
            </tr>
            <tr>
              <td><a href={`tel:${code}${phne}`}>{`(${code}) ${phne}`}</a></td>
            </tr>
            <tr>
              <td><a href={`mailto:${mail}`}>{mail}</a></td>
            </tr>
            <tr>
              <td>
                <a href={`https://github.com/${gthb}`} rel="noopener noreferrer" target="_blank">Github</a>
                {' / '}
                <a href={`https://twitter.com/${twtr}`} rel="noopener noreferrer" target="_blank">Twitter</a></td>
            </tr>
          </tbody>
        </table>
        <br />
        <a href={resumePdf} download="ioannis_tsiakkas_resume.pdf">My resume (pdf 77kb) &#9660;</a>
      </div>
    );
  } catch (e) {
    console.log(e);
    return <h2>Unable to find any projects.</h2>;
  }
};

const AboutPage = props => {
  return (
    <Layout>
      <AboutPageInner {...props} />
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query {
    allMdx(
      filter: {
        frontmatter: { publish: { eq: true } }
        fields: { type: { eq: "project" } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            lede
          }
          fields {
            slug
            projectType
          }
        }
      }
    }
  }
`;
