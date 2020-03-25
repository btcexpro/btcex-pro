import Header from './Header';
import scss from '../scss/Layout.module.scss';

const Layout = props => (
  <div className={scss.layout}>
    <Header />
    {props.children}
  </div>
);

export default Layout;
