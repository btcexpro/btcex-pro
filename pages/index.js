import React, { Component } from 'react';

import Layout from '../components/Layout';
import Main from './main';
import About from './about';
import Contact from './contact';
import Service from './services';
import Why from './why';
import Fees from './fees';
import Faq from './faq';
import HowToTrade from './howToTrade';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static async getInitialProps() {
    return {
      namespacesRequired: ['about', 'common', 'contact', 'faq', 'fees', 'header', 'howToTrade', 'main', 'services', 'why']
    };
  }

  render () {
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
  }
}

export default Index;
