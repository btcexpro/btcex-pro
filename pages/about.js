import styled from 'styled-components';

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
  return (
    <AboutContent className="container" id="about">
      <Heading>About Us</Heading>
      <div>
        <span><Hr/></span>
      </div>
      <div className="mt-5">
        <p className="text-center">BtcEX is Hong Kong's leading cryptocurrency exchange provider since October 2016. We provide a secure, liquidity & stable banking solution platform to allow customers to trade safely and be able to quickly withdrawals from the exchange.</p>
        <p className="text-center">BtcEX offers you a secure USD & HKD and cryptocurrency deposit & withdrawal. Your funds and crypto are safe and the deposits & withdrawals are processed through a secure channel.</p>
      </div>
    </AboutContent>
  );
};

export default about;
