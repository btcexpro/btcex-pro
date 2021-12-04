import styled from 'styled-components';

import useTranslation from 'next-translate/useTranslation';

const ContactContent = styled.div`
  margin: 0 auto;
  padding-top: 15%;
  padding-bottom: 10%;
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

const contact = () => {
  const { t } = useTranslation('common');
  return (
    <footer>
      <ContactContent id="contact">
        <div className="container">
          <Heading>{t('contact.heading')}</Heading>
          <div>
            <span><Hr/></span>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-6">
              {t('contact.text')}
              <dl className="row mt-3">
                <dt className="col-sm-3">{t('contact.list_item_1.name')}</dt>
                <dd className="col-sm-9"><a href="https://wa.me/8613048899900" target="_blank">+8613048899900</a></dd>

                <dt className="col-sm-3">{t('contact.list_item_2.name')}</dt>
                <dd className="col-sm-9"><a href="https://t.me/BtcEX" target="_blank">@BtcEX</a></dd>

                <dt className="col-sm-3">{t('contact.list_item_3.name')}</dt>
                <dd className="col-sm-9">{t('contact.list_item_3.description')}</dd>

                <dt className="col-sm-3">{t('contact.list_item_4.name')}</dt>
                <dd className="col-sm-9">{t('contact.list_item_4.description')}</dd>
              </dl>
            </div>
            <div className="col-sm-12 col-md-6">
              <div style={{"--aspect-ratio": "16/9"}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.1082834767444!2d114.1484710613193!3d22.34026679980283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040751511e47b5%3A0xe2ee2e8fa2a6be16!2sTai%20Cheung%20Factory%20Building%2C%203%20Wing%20Ming%20St%2C%20Cheung%20Sha%20Wan%2C%20Hong%20Kong!5e0!3m2!1sen!2sin!4v1585586610487!5m2!1sen!2sin" width="600" height="450" frameBorder="0" style={{border: 0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
              </div>
            </div>
          </div>
        </div>
      </ContactContent>
      <div className="p-3 bg-dark text-white w-100">
        <div className="row">
          <div className="col-md-6 text-center">
            <span>{t('contact.copyright')}</span>
          </div>
          <div className="col-md-6 text-center">
            <a href="/privacy" target="_blank" className="text-white">{t('contact.privacy')}</a>
            <span> | </span>
            <a href="/terms" target="_blank" className="text-white">{t('contact.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default contact;
