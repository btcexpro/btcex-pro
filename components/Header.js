import styled from 'styled-components';

import { i18n, withTranslation } from '../i18n';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: black;
  z-index: 1;
`;

const Link = styled.a`
  color: white !important;
  &:hover {
    color: #d4d4d4 !important;
  }
`;

const Header = ({ t }) => {
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/">
        <img src="/img/btc-logo.svg" width="110" height="50" className="d-inline-block align-top" alt="" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav m-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link className="nav-link text-center" href="#fee">{t('menu_1')}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-center" href="#howToTrade">{t('menu_2')}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-center" href="#about">{t('menu_3')}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-center" href="#service">{t('menu_4')}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-center" href="#why">{t('menu_5')}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-center" href="https://www.bxlend.com/" target="_blank">{t('menu_6')}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-center" href="#faq">{t('menu_7')}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-center" href="#contact">{t('menu_8')}</Link>
          </li>
        </ul>
        <span className="navbar-text float-right" style={{ cursor: 'pointer' }}>
          <Link className="lang" onClick={() => {i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')}}>{t('language')}</Link>
        </span>
      </div>
    </Nav>
  );
};

export default withTranslation('header')(Header);
