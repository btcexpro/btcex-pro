import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import Main from './main';
import About from './about';
import Contact from './contact';
import Service from './services';
import Why from './why';

const Index = props => (
  <Layout>
    <Main />
    <About />
    <Service />
    <Why />
    <Contact />
  </Layout>
);

export default Index;
