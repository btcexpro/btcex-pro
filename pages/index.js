import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import Main from './main';

const Index = props => (
  <Layout>
    <Main />
  </Layout>
);

export default Index;
