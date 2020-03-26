import styled from 'styled-components';

const Main = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url(/img/main-bg.jpg) center center no-repeat;
  background-size: cover;
  background-attachment: fixed;
  opacity: .15;
`;

const main = (props) => {
  return (
    <Main>
      Hello
    </Main>
  );
};

export default main;