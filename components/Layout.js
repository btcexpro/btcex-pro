import Header from './Header';
// import scss from '../css/Layout.module.css';

const Layout = props => (
  <div>
    <Header />
    <div className="container-fluid">
      {props.children}
    </div>
  </div>
);

export default Layout;
