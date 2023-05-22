import Title from '../../../component/title';
import PortfolioItem from '../../../component/portfolio';
import Button from '../../../component/button';

const Portfolio = () => {
  return (
    <div className="mt-5 pt-5">
      <Title text="Build your own crypto portfolio" />
      <div className="portfolio-subtitle ms-4">
        Start your first trade with these easy steps.
      </div>
      <PortfolioItem
        id="1"
        title="Verify your identity."
        content="Complete the identity verification process to secure your account and transactions."
        url="./assets/portfolio-1.png"
        align={false}
      />
      <PortfolioItem
        id="2"
        title="Fund your account."
        content="Add funds to your crypto account to start trading crypto. You can add funds with a variety of payment methods."
        url="./assets/portfolio-2.png"
        align={true}
      />
      <PortfolioItem
        id="3"
        title="Start trading"
        content="You’re good to go! Buy/sell crypto, set up your account and discover what BxLend has to offer."
        url="./assets/portfolio-3.png"
        align={false}
      />
      <div className='mt-5 pt-5 ms-5 ps-5'>
        <Button text="Get Started" />
      </div>
    </div>
  )
}

export default Portfolio
