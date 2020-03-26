import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import Main from './main';

const Index = props => (
  <Layout>
    <h1>BTCEX PRO</h1>
    <Main />
  </Layout>
);

export default Index;
