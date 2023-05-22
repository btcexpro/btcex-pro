import Image from 'react-bootstrap/Image';
import { ChevronDown } from 'react-bootstrap-icons';
import Input from "../../../component/Input";


const Main = () => {
  return (
    <div className="row main-padding justify-content-between">
      <div className="login-main-part col-lg-6 col-md-12">
        <div className="login-title">
            BxLend Login
        </div>
        <div className="login-email ps-5 py-5">
            <div className="login-email-title pb-4">
                Email / Phone Number
            </div>
            <div>
                <Input />
            </div>
        </div>
        <div className="login-button-group d-flex flex-column position-relative ps-5">
            <button type="button" className="btn btn-secondary login-next-btn my-2">Next</button>
            <hr className="hr"/>
            <button type="button" className="btn btn-outline-secondary login-google-btn my-2">Continue with Google</button>
            <button type="button" className="btn btn-link login-new-account-btn my-2">Create a new account</button>
        </div>
      </div>
      <div className="login-main-picture col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
        <Image
          src="./assets/ellipse.png"
          width="100%"
          className="d-flex d-sm-none"
        />
        <Image
          src="./assets/ellipse.png"
          width="100%"
          className="d-none d-sm-flex"
        />
      </div>

    </div>
  )
}

export default Main
