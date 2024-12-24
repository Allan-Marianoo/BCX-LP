import './Banner.css';
import bannerImage from '../../../assets/images/banner-home/Banner.png';
import logo from '../../../assets/images/banner-home/LOGOBCX.png';

const Banner = () => {
  return (
    <div className="banner-container">
      <img src={bannerImage} alt="Banner" className="banner-image" />
      <img src={logo} alt="Logo" className="banner-logo" />
    </div>
  );
};

export default Banner;
