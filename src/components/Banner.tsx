import BannerImage from "../assets/images/banner-manifest__image.png";
import BannerDots from "../assets/images/banner-dots__image.png";
function Banner() {
  return (
    <section className='banner'>
      <img
        className='banner-dots__image'
        src={BannerDots}
        alt='banner-dots__image'
      />
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
            <a className='btn banner-text__btn' href='/'>
              Consult today
            </a>
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
