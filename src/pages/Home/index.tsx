import Help from './component/Help';
import Join from './component/Join';
import Main from './component/Main';
import Portfolio from './component/Portfolio';
import Table from './component/Table';
import StartToday from './component/Start';
import { AppDispatch} from "../../store/store";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { loadCurrencyDetails } from '../../store/slice/currency-slice';
import './index.css';
import Footer from "./component/Footer";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(loadCurrencyDetails({socketData: null}));
  }, []);
  return (
    <>
      <Main />
      <div className="container">
        <Table />
        <Portfolio />
        <Join />
        <Help />
        <StartToday />
      </div>
      <Footer />
    </>
  )
}

export default Home
