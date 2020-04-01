import styled from 'styled-components';

import { withTranslation } from '../i18n';

const FaqContent = styled.div`
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

const faq = ({ t }) => {
  return (
    <FaqContent id="faq">
      <div className="container">
        <Heading>{t('heading')}</Heading>
        <div>
          <span><Hr/></span>
        </div>
        <div className="mt-5">
          <div className="accordion" id="accordionExample">
            <div className="card bg-dark mb-2">
                <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                      <button type="button" className="btn text-white w-100 text-left" data-toggle="collapse" data-target="#collapseOne">{t("4.question")}</button>									
                    </h2>
                </div>
                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body">
                        <p>{t("4.answer")}</p>
                    </div>
                </div>
            </div>
            <div className="card bg-dark mb-2">
                <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                        <button type="button" className="btn text-white w-100 text-left collapsed" data-toggle="collapse" data-target="#collapseTwo">{t("5.question")}</button>
                    </h2>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div className="card-body">
                        <p>{t("5.answer")}</p>
                    </div>
                </div>
            </div>
            <div className="card bg-dark mb-2">
                <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                        <button type="button" className="btn text-white w-100 text-left collapsed" data-toggle="collapse" data-target="#collapseThree">{t("2.question")}</button>                     
                    </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div className="card-body">
                        <p>{t("2.answer")}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>
    </FaqContent>
  );
};

export default withTranslation('faq')(faq);
