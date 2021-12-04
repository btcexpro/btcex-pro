import styled from 'styled-components';

import useTranslation from 'next-translate/useTranslation';

const ServicesContent = styled.div`
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
  width: ${props => props.hrProp.width};
  height: .1rem;
  display: block;
  background-color: ${props => props.hrProp.color};
`;

const Li = styled.li`
  padding: 5px 0px;
`;

const services = () => {
  const { t } = useTranslation('common');
  return (
    <ServicesContent id="service">
      <div className="container">
        <Heading>{t('services.heading')}</Heading>
        <div>
          <span><Hr hrProp={{width: "6rem", color: "#908f8f"}} /></span>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <h5>{t('services.service_1.heading')}</h5>
            <span><hr style={{ marginLeft: 0, borderColor: "white", width: "15rem" }} /></span>
            <ul className="list-unstyled">
              <Li>{t('services.service_1.list_item_1')}</Li>
              <Li>{t('services.service_1.list_item_2')}</Li>
              <Li>{t('services.service_1.list_item_3')}</Li>
              <Li>{t('services.service_1.list_item_4')}</Li>
              <Li>{t('services.service_1.list_item_5')}</Li>
            </ul>
          </div>
          <div className="col-md-12">
            <h5>{t('services.service_2.heading')}</h5>
            <span><hr style={{ marginLeft: 0, borderColor: "white", width: "20rem" }} /></span>
            <ul className="list-unstyled">
              <Li>{t('services.service_2.list_item_1')}</Li>
            </ul>
          </div>
          <div className="col-md-12">
            <h5>{t('services.service_3.heading')}</h5>
            <span><hr style={{ marginLeft: 0, borderColor: "white", width: "16rem" }} /></span>
            <p>{t('services.service_3.para')}</p>
            <ul className="list-unstyled">
              <Li>{t('services.service_3.list_item_1')}</Li>
              <Li>{t('services.service_3.list_item_2')}</Li>
              <Li>{t('services.service_3.list_item_3')}</Li>
              <Li>{t('services.service_3.list_item_4')}</Li>
            </ul>
          </div>
          <div className="col-md-12">
            <h5>{t('services.service_4.heading')}</h5>
            <span><hr style={{ marginLeft: 0, borderColor: "white", width: "23rem" }} /></span>
            <p>{t('services.service_4.para')}</p>
            <ul className="list-unstyled">
              <Li>{t('services.service_4.list_item_1')}</Li>
              <Li>{t('services.service_4.list_item_2')}</Li>
              <Li>{t('services.service_4.list_item_3')}</Li>
              <Li>{t('services.service_4.list_item_4')}</Li>
            </ul>
          </div>
        </div>
      </div>
    </ServicesContent>
  );
};

export default services;
