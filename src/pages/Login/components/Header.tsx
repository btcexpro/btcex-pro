import Image from 'react-bootstrap/Image';
import Button from "../../../component/button";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm header-back row justify-content-between p-0">
        <div className="container-fluid p-0">
          <a
            className="navbar-brand col-md-1 d-flex justify-content-left align-items-center ms-4 pt-3 pb-3"
            href="#"
          >
            <Image src="./assets/logo.png" className='logo ps-3' width="180px" />
          </a>
          <div className="d-flex justify-content-around align-items-center me-4">
            <button className="header-account-font header-menu-btn">ENG | USD</button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
