import styled from 'styled-components';

import useTranslation from 'next-translate/useTranslation';

const WhyContent = styled.div`
  margin: 0 auto;
  padding-top: 15%;
  padding-bottom: 15%;
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

const why = () => {
  const { t } = useTranslation('common');
  return (
    <WhyContent id="why">
      <div className="container">
        <Heading>{t('why.heading')}</Heading>
        <div>
          <span><Hr/></span>
        </div>
        <div className="mt-5">
          <h4 className="text-center">{t('why.main_text')}</h4>
        </div>
      </div>
    </WhyContent>
  );
};

export default why;
