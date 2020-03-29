import styled from 'styled-components';

const ContactContent = styled.div`
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

const contact = () => {
  return (
    <ContactContent id="contact">
      <div className="container">
        <Heading>Contact Us</Heading>
        <div>
          <span><Hr/></span>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            If you have any questions, please contact us by:
            <dl className="row mt-3">
              <dt className="col-sm-3">WhatsApp</dt>
              <dd className="col-sm-9"><a href="https://wa.me/8613048899900" target="_blank">+8613048899900</a></dd>

              <dt className="col-sm-3">Telegram</dt>
              <dd className="col-sm-9"><a href="https://t.me/BtcEX" target="_blank">BtcEX</a></dd>
            </dl>
          </div>
          <div className="col-md-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" width="100%" height="400" frameBorder="0"></iframe>
          </div>
        </div>
      </div>
    </ContactContent>
  );
};

export default contact;
