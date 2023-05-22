import Image from 'react-bootstrap/Image';
import Button from "../../../component/button";
import { Justify } from "react-bootstrap-icons";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm header-back row justify-content-between p-0">
        <div className="container-fluid p-0">
          <a
            className="navbar-brand col-md-1 d-lg-flex d-none justify-content-left align-items-center ms-4 pt-3 pb-3"
            href="http://localhost:3000"
          >
            <Image src="./assets/logo.png" className='logo ps-3' width="180px" />
          </a>
          <button
            className="navbar-toggler d-flex d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <Justify width="40px" height="40px" />
          </button>
          <a
              className="navbar-brand col-md-1 d-flex d-lg-none justify-content-left align-items-center ms-4 pt-3 pb-3"
              href="http://localhost:3000"
          >
            <Image src="./assets/logo.png" className='logo' width="180px" />
          </a>
          <div className="d-flex d-lg-none me-3">
            <button type="button" className="btn btn-outline-secondary mobile-login-btn my-2">Login</button>
          </div>
          <div className="collapse navbar-collapse" id="mynavbar">
            <div className="col-md-6 d-lg-flex d-none justify-content-around align-items-center m-auto menu-group">
              <button className="header-menu-font header-menu-btn">Market</button>
              <button className="header-menu-font header-menu-btn">Trade</button>
              <button className="header-menu-font header-menu-btn">Dashboard</button>
            </div>
            <div className="col-md-4 d-lg-flex d-none justify-content-around align-items-center me-4">
              <button className="header-account-font header-menu-btn">ENG | USD</button>
              <button className="header-account-font header-menu-btn">Login</button>
              <Button text = 'Sign up' />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
