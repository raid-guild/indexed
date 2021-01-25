import React, { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './styles.css';

import Hero from '../components/Hero/Hero';
import Filters from '../components/Filters/Filters';
import Table from '../components/Table/Table';

import defaultTableColumns from '../data/defaultTableColumns'

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const [columns, setColumns] = useState(defaultTableColumns)
  const [search, setSearch] = useState('')


  return (
    <Layout
      // title={`${siteConfig.title}`}
      description="A collectively built hub for comparison between 'Layer 2' solutions."
    >
      <div className="homepage">
        <Hero />

        <div className="wrapper">
          <Filters
            search={search}
            setSearch={setSearch}
            columns={columns}
            setColumns={setColumns}
          />

          <Table
            search={search}
            columns={columns}
          />
        </div>
      </div>


    </Layout>
  );
}

export default Home;
