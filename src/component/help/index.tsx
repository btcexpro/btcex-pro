import Image from 'react-bootstrap/esm/Image';
import './style.css';

interface IHelpComponent {
    url: string,
    title: string,
    content: string,
}

function HelpComponent({url, title, content}: IHelpComponent) {
    return (
        <div className='d-flex align-items-center flex-column pt-5'>
            <Image src={url} width='200px' height='200px' />
            <div className='help-title mt-3'>{title}</div>
            <div className='help-content mt-3'>{content}</div>
        </div>
    )
}

export default HelpComponent;
