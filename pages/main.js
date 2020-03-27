import styled from 'styled-components';

const Main = styled.div`
  width: 100%;
  height: calc(100vh - 76px);
  background: url(/img/main-bg.jpg) center center no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-blend-mode: saturation;
`;

const SubHeading = styled.h1`
  font-size: 5rem;
  color: white;
  text-transform: uppercase;
  text-align: center;
  padding-top: calc(122px + 15%);
  @media (max-width: 768px) {
    padding-top: calc(70px + 15%);
  }
  @media (max-width: 425px) {
    padding-top: 15%;
  }
`;

const Button = styled.button`
  margin: 11px;
  font-weight: 600;
  font-size: 1rem;
  padding: 15px 30px;
  border-radius: 5px;
  color: #FFF;
  box-shadow: 2px 2px 3px ${props => props.btnColor.color};
  border-color: ${props => props.btnColor.color};
  background-color: ${props => props.btnColor.color};
`;

const Icon = styled.i`
  font-size: 1.1rem;
`;

const main = (props) => {
  return (
    <Main>
      <div className="container">
        <SubHeading>
          Move money with <br /> digital trading
        </SubHeading>
        <div className="text-center">
          <a href="https://wa.me/8613048899900" target="_blank">
            <Button btnColor={{ color: "#25d366" }}>WhatsApp <Icon className="fa fa-whatsapp" aria-hidden="true" /></Button>
          </a>
          <a href="https://t.me/BtcEX" target="_blank">
            <Button btnColor={{ color: "#1682FB" }}>Telegram <Icon className="fa fa-telegram" aria-hidden="true" /></Button>
          </a>
        </div>
      </div>
    </Main>
  );
};

export default main;