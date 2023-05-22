import Image from 'react-bootstrap/Image';
import Button from '../../../component/button';
import { ChevronDown } from 'react-bootstrap-icons';


const Main = () => {
  return (
    <div className="row main-padding justify-content-between">
      <div className="jumbotron-title col-lg-6 col-sm-12">
        <div className="main-letter">
          Buy and exchange cryptocurrency instantly.
        </div>
        <div className='d-flex button-position'>
          <Button text = 'Get Started' />
          <button className='empty-button d-flex justify-content-center align-items-center'>How it works?</button>
        </div>
      </div>
      <div className="main-picture col-lg-5 col-sm-12">
        <Image
          src="./assets/jumbotron-cropped-img.png"
          width="72%"
          className="d-block d-lg-none"
        />
        <Image
          src="./assets/jumbotron-img-cropped.png"
          width="100%"
          className="d-none d-lg-block"
        />
      </div>
        <div className="scroll-down-btn d-flex d-lg-none justify-content-center mb-5">
            <ChevronDown width="20px" height="20px" />
        </div>
    </div>
  )
}

export default Main
