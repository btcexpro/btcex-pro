import Title from '../../../component/title'
import Image from 'react-bootstrap/esm/Image'

interface ItemInterface {
  logo: string;
  name: string;
  symbol: string;
  price: string;
  change: number;
  marketCap: string;
}

const data: ItemInterface[] = [
  {
    logo: "./assets/bnb.png",
    name: "BNB",
    symbol: "BNB",
    price: "317,4",
    change: +0.76,
    marketCap: "50,117M",
  },
  {
    logo: "./assets/btc.png",
    name: "Bitcoin",
    symbol: "BTC",
    price: "24,727",
    change: +0.56,
    marketCap: "477,153M",
  },
  {
    logo: "./assets/eth.png",
    name: "Ethereum",
    symbol: "ETH",
    price: "1,707",
    change: +0.84,
    marketCap: "208,946M",
  },
  {
    logo: "./assets/gal.png",
    name: "Galxe",
    symbol: "GAL",
    price: "2.34",
    change: -1.01,
    marketCap: "127M",
  },
  {
    logo: "./assets/gmt.png",
    name: "Green Metaverse Toekn",
    symbol: "GMT",
    price: "0.46",
    change: +0.99,
    marketCap: "227M",
  },
];

const Table = () => {
  return (
    <div>
      <Title text="Popular Cryptocurrencies" />
      <table className="table table-borderless mt-5">
        <thead>
          <tr className="table-title row mb-5">
            <th className="col-sm-3 col-4 justify-content-start align-items-center d-flex ps-5">
              Name
            </th>
            <th className="col-sm-3 col-2 justify-content-center align-items-center d-flex">
              Price
            </th>
            <th className="col-sm-4 col-3 justify-content-center align-items-center d-flex">
              24h Change
            </th>
            <th className="col-sm-2 col-3 justify-content-end align-items-center d-flex pe-5">
              Market Cap
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: any, index: number) => {
            return (
              <tr className="table-content row mt-2" key={index}>
                <td className="col-sm-3 col-4 justify-content-start align-items-center d-flex table-name ps-3">
                  <Image src={item.logo} width="24px" height="24px" />
                  <div className="ms-3">{item.name}</div>
                  <div className="second ms-2">{item.symbol}</div>
                </td>
                <td className="col-sm-3 col-2 justify-content-center align-items-center d-flex">
                  ${item.price}
                </td>
                {item.change >= 0 ?
                    <td className="col-sm-4 col-3 justify-content-center align-items-center d-flex percent-increase">
                      +{item.change}%
                    </td>
                    :
                    <td className="col-sm-4 col-3 justify-content-center align-items-center d-flex percent-decrease">
                      {item.change}%
                    </td>
                }
                <td className="col-sm-2 col-3 justify-content-end align-items-center d-flex pe-5">
                  ${item.marketCap}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
