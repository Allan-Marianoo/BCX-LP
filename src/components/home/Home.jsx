import Banner from './banner/Banner';
import CryptoTicker from './cryptoticker/CryptoTicker';
import HomeSession01 from './session01/HomeSession01';
import HomeSession02 from './session02/HomeSession02';
import HomeSession03 from './session03/HomeSession03';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <CryptoTicker />
      <HomeSession01 />
      <HomeSession02 />
      <HomeSession03 />
    </div>
  );
};

export default Home;