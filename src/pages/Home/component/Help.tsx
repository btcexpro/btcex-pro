import { SecondTitle } from '../../../component/title';
import HelpComponent from '../../../component/help';

const Help = () => {
  return (
    <div className="mt-5 pt-5">
      <SecondTitle text="Need Help?" />
      <div className='d-flex justify-content-around help-content-align'>
        <HelpComponent url='./assets/chat-support.png' title='Chat support' content='Lorem ipsum' />
        <HelpComponent url='./assets/faq.png' title='FAQ' content='Lorem ipsum' />
        <HelpComponent url='./assets/blog.png' title='Blog' content='Lorem ipsum' />
      </div>
    </div>
  )
}

export default Help
