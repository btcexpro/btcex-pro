import { SecondTitle } from '../../../component/title';
import Summary from '../../../component/summary';
import Button from '../../../component/button';

const Join = () => {
  return (
    <div className="mt-5 pt-5">
      <SecondTitle text="BxLend is a crypto exchange for everyone." />
      <div className="d-flex justify-content-around mt-5 join-content">
        <Summary title="1M+" content="Verified users" />
        <Summary title="99+" content="Countries supported" />
        <Summary title="$99B+" content="Quarterly trading volume" />
      </div>
      <div className='mt-5 pt-5 join-button'>
        <Button text="Join us now" />
      </div>
    </div>
  )
}

export default Join
