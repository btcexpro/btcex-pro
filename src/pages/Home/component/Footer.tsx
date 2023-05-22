import Image from 'react-bootstrap/esm/Image';

const Footer = () => {
  return (
    <div className="footer-style mt-5">
      <div className="container pt-5 pb-5 row">
        <a className="col-md-3 d-flex align-items-start ps-5" href="#">
          <Image src="./assets/logo.png" width="100%" />
        </a>
        <div className="col-md-3 d-flex flex-column">
          <div className="footer-title mb-3">About Us</div>
          <a href="#" className="footer-content mt-1">
            About Us
          </a>
          <a href="#" className="footer-content mt-1">
            Announcement
          </a>
          <a href="#" className="footer-content mt-1">
            Blog
          </a>
          <a href="#" className="footer-content mt-1">
            Our Token
          </a>
          <a href="#" className="footer-content mt-1">
            Team
          </a>
        </div>
        <div className="col-md-3 d-flex flex-column">
          <div className="footer-title mb-3">Support</div>
          <a href="#" className="footer-content mt-1">
            Fees
          </a>
          <a href="#" className="footer-content mt-1">
            Trading Rules
          </a>
          <a href="#" className="footer-content mt-1">
            FAQ
          </a>
          <a href="#" className="footer-content mt-1">
            Submit a Ticket
          </a>
          <a href="#" className="footer-content mt-1">
            Affiliate Program
          </a>
        </div>
        <div className="col-md-3 d-flex flex-column">
          <div className="footer-title mb-3">Community</div>
          <a href="#" className="footer-content mt-1">
            Discord
          </a>
          <a href="#" className="footer-content mt-1">
            Telegram
          </a>
          <a href="#" className="footer-content mt-1">
            Facebook
          </a>
          <a href="#" className="footer-content mt-1">
            Twitter
          </a>
          <a href="#" className="footer-content mt-1">
            Reddit
          </a>
        </div>
      </div>
      <div className="container d-flex flex-column align-items-center">
        <div className="footer-border mb-4 w-1"></div>
				<div className='copy-right-style pb-3'>Copyright © 2023 BxLend. finance All Rights reserved.</div>
      </div>
    </div>
  )
}

export default Footer
