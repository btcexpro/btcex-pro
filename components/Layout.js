import Header from './Header';
import styled from 'styled-components';

const ChildComponent = styled.div`
  width: 100%;
  padding-top: 76px;
`;

const Layout = props => (
  <div className="container-fliud">
    <Header />
    <ChildComponent>
      {props.children}
    </ChildComponent>
  </div>
);

export default Layout;
