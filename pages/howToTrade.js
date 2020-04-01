import styled from 'styled-components';

import { withTranslation } from '../i18n';

const TradeContent = styled.div`
  margin: 0 auto;
  padding-top: 15%;
  padding-bottom: 15%;
  color: white;
  background: rgb(33,33,33);
  background: linear-gradient(167deg, rgba(33,33,33,1) 0%, rgba(22,22,22,1) 50%, rgba(28,30,31,1) 100%);
`; 

const Heading = styled.h2`
  text-align: center;
`;

const Hr = styled.hr`
  width: 6rem;
  height: .1rem;
  display: block;
  background-color: #908f8f;
`;

const Icon = styled.i`
  font-size: 3rem;
`;

const howToTrade = ({ t }) => {
  return (
    <TradeContent id="howToTrade">
      <div className="container">
        <Heading>{t('heading')}</Heading>
        <div>
          <span><Hr/></span>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <p className="text-center"><Icon className="fa fa-comments" /></p>
            <h4 className="text-center">{t('step_1.heading')}</h4>
            <p className="text-center">{t('step_1.para')}</p>
          </div>
          <div className="col-md-4">
            <p className="text-center"><Icon className="fa fa-exchange" /></p>
            <h4 className="text-center">{t('step_2.heading')}</h4>
            <p className="text-center">{t('step_2.para')}</p>
          </div>
          <div className="col-md-4">
            <p className="text-center"><Icon className="fa fa-handshake-o" /></p>
            <h4 className="text-center">{t('step_3.heading')}</h4>
            <p className="text-center">{t('step_3.para')}</p>
          </div>
        </div>
      </div>
    </TradeContent>
  );
};

export default withTranslation('howToTrade')(howToTrade);
