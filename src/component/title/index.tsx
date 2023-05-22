import './style.css';

interface ITitle {
  text: string,
}

function Title({ text }: ITitle) {
  return (
    <div className='title-style'>
      {text}
    </div>
  )
}

interface ISecondTitle {
  text: string,
}

export function SecondTitle({text}: ISecondTitle) {
  return (
    <div className='second-title-style'>
      {text}
    </div>
  )
}

export default Title;
