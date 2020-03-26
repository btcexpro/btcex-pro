import styled from 'styled-components';

const Link = styled.a`
  color: white !important;
  &:hover {
    color: #d4d4d4 !important;
  }
`;

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        <img src="/img/btc-logo.svg" width="110" height="50" className="d-inline-block align-top" alt="" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav m-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link className="nav-link text-center" href="#">ABOUT US</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-center" href="#">WHO WE SERVE</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-center" href="#">SERVICES</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-center" href="#">WHY US</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-center" href="#">PLATFORM</Link>
          </li>
        </ul>
        <span class="navbar-text float-right">
          <Link className="lang">繁</Link>｜<Link className="lang">Eng</Link>
        </span>
      </div>
    </nav>
  );
};

export default Header;
