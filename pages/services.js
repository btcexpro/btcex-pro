import styled from 'styled-components';

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
  width: 6rem;
  height: .1rem;
  display: block;
  background-color: #908f8f;
`;

const services = () => {
  return (
    <ServicesContent id="service">
      <div className="container">
        <Heading>Services</Heading>
        <div>
          <span><Hr/></span>
        </div>
        <div className="row mt-5">
          <div className="col-md-3">IEO service / Token Listing</div>
          <div className="col-md-3">Settlement Frameworks for Mining</div>
          <div className="col-md-3">Mining Hardware purchase</div>
          <div className="col-md-3">Smart Contract Development & Auditing</div>
        </div>
      </div>
    </ServicesContent>
  );
};

export default services;
