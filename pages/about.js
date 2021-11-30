import styled from 'styled-components';

import { withTranslation } from '../i18n';

const AboutContent = styled.div`
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

const about = ({ t }) => {
  return (
    <AboutContent className="container" id="about">
      <Heading>{t('heading')}</Heading>
      <div>
        <span><Hr/></span>
      </div>
      <div className="mt-5">
        <p>{t('para1')}</p>
        <p>{t('para2')}</p>
        <h5>{t('heading1')}</h5>
        <ul className="list-styled">
          <li>{t('list.item1')}</li>
          <li>{t('list.item2')}</li>
        </ul>
        <h5>{t('heading2')}</h5>
        <p>{t('para3')}</p>
      </div>
    </AboutContent>
  );
};

export default withTranslation('about')(about);
