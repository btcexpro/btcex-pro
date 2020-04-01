import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import Main from './main';
import About from './about';
import Contact from './contact';
import Service from './services';
import Why from './why';
import Fees from './fees';
import Faq from './faq';
import HowToTrade from './howToTrade';

const Index = props => {
  return (
    <Layout>
      <Main />
      <Fees fees={props.fees} />
      <HowToTrade />
      <About />
      <Service />
      <Why />
      <Faq />
      <Contact />
    </Layout>
  );
};

Index.getInitialProps = async function() {
  const result = {
    namespacesRequired: ['about', 'common', 'contact', 'faq', 'fees', 'header', 'howToTrade', 'main', 'services', 'why'],
    fees: []
  };
  try {
    const res = await fetch('http://localhost:3000/coins/markets');
    const data = await res.json();
    result.fees = data;
  } catch (err) {
    console.log(err);
  } finally {
    return result;
  }
};

export default Index;
