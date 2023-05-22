import './style.css'

interface ISummary {
  title: string
  content: string
}

function Summary({ title, content }: ISummary) {
  return (
    <div className='summary-style'>
      <div className="summary-title-style">{title}</div>
      <div className="summary-content-style">{content}</div>
    </div>
  )
}

export default Summary
