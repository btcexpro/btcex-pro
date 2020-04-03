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
      <Fees />
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
  return {
    namespacesRequired: ['about', 'common', 'contact', 'faq', 'fees', 'header', 'howToTrade', 'main', 'services', 'why']
  };
};

export default Index;
