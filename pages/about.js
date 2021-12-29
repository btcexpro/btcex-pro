import styled from 'styled-components';

import useTranslation from 'next-translate/useTranslation';

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

const about = () => {
  const { t } = useTranslation("common");
  return (
    <AboutContent className="container" id="about">
      <Heading>{t('about.heading')}</Heading>
      <div>
        <span><Hr/></span>
      </div>
      <div className="mt-5">
        <p>{t('about.para1')}</p>
        <p>{t('about.para2')}</p>
        <h5>{t('about.heading1')}</h5>
        <ul className="list-styled">
          <li>{t('about.list.item1')}</li>
          <li>{t('about.list.item2')}</li>
        </ul>
        <h5>{t('about.heading2')}</h5>
        <p>{t('about.para3')}</p>
      </div>
    </AboutContent>
  );
};

export default about;
