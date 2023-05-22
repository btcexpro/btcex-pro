import './style.css'
import Image from 'react-bootstrap/Image'

interface IPortfolioItem {
  id: string
  title: string
  content: string
  url: string
  align: boolean
}

function PortfolioItem({ id, title, content, url, align }: IPortfolioItem) {
  return (
    <div className={align ? "row mt-5 ms-4 justify-content-between" : "row mt-5 ms-4" }>
      <div className='d-flex col-md-8 col-12'>
        <div className="item-number">{id}.</div>
        <div className="portfolio-content ms-5">
          <div className="title">{title}</div>
          <div className="content mt-3">{content}</div>
        </div>
      </div>
      <div className='col-md-2 col-10'>
        <Image src={url} width='100%' />
      </div>
    </div>
  )
}

export default PortfolioItem
