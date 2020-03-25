import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';

const Index = props => (
  <div className="layout">
    <Layout>
      <h1>BTCEX PRO</h1>
    </Layout>
  </div>
);

export default Index;
