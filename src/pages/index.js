import React, { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './styles.css';

function Home() {
  
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      // title={`${siteConfig.title}`}
      description="A collectively built hub for comparison between 'Layer 2' solutions."
    >
      <div className="homepage">
        
      </div>


    </Layout>
  );
}

export default Home;
