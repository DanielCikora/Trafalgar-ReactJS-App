import BannerImage from "../assets/images/banner-manifest__image.png";
import Dots from "../assets/images/dots__image.png";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <section className='banner'>
      <img className='banner-dots__image' src={Dots} alt='banner-dots__image' />
      <div className='wrapper'>
        <div className='banner-content'>
          <div className='banner-content__text'>
            <h1 className='title banner-text__h1'>
              Virtual healthcare for you
            </h1>
            <p className='paragraph banner-text__paragraph'>
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
            <Link className='btn banner-text__btn' to='/FindDoctor'>
              Consult today
            </Link>
          </div>
          <img
            className='banner-image__image'
            src={BannerImage}
            alt='banner-manifest__image'
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
