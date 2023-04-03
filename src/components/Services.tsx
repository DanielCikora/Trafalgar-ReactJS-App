import MagGlass from "../assets/images/mag-glass__image.png";
import PillsJar from "../assets/images/jar__image.png";
import Tablet from "../assets/images/tablet__image.png";
import Manifest from "../assets/images/manifest__image.png";
import MedBag from "../assets/images/med-bag__image.png";
import Report from "../assets/images/report__image.png";
import Blob from "../assets/images/blob__image.png";
import Dots from "../assets/images/dots__image.png";
import { Link } from "react-router-dom";
function Services() {
  return (
    <section className='services'>
      <div className='services-blob'>
        <img
          className='services-blob__image'
          src={Blob}
          alt='blob-image'
          loading='lazy'
        />
      </div>
      <div className='wrapper'>
        <div className='services-content'>
          <h2 className='title services-title__h2'>Our services</h2>
          <p className='paragraph services-paragraph'>
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
          <div className='services-content__boxes'>
            <div className='services-dots'>
              <img
                className='services-dots__image'
                src={Dots}
                alt='dots-image'
                loading='lazy'
              />
            </div>
            <Link to='/FindDoctor' className='services-box'>
              <div className='box-image'>
                <img
                  src={MagGlass}
                  alt='magnifying-glass-image'
                  loading='lazy'
                />
              </div>
              <div className='box-details'>
                <h3 className='title box-details__title'>Search doctor</h3>
                <p className='paragraph box-details__paragraph'>
                  Choose your doctor from thousands of specialist, general, and
                  trusted hospitals
                </p>
              </div>
            </Link>
            <Link to='/Apps' className='services-box'>
              <div className='box-image'>
                <img src={PillsJar} alt='pills-jar-image' loading='lazy' />
              </div>
              <div className='box-details'>
                <h3 className='title box-details__title'>Online pharmacy</h3>
                <p className='paragraph box-details__paragraph'>
                  Buy your medicines with our mobile application with a simple
                  delivery system
                </p>
              </div>
            </Link>
            <Link to='/Testimonials' className='services-box'>
              <div className='box-image'>
                <img src={Tablet} alt='tablet-image' loading='lazy' />
              </div>
              <div className='box-details'>
                <h3 className='title box-details__title'>Consultation</h3>
                <p className='paragraph box-details__paragraph'>
                  Free consultation with our trusted doctors and get the best
                  recomendations
                </p>
              </div>
            </Link>
            <Link to='/Testimonials' className='services-box'>
              <div className='box-image'>
                <img src={Manifest} alt='report-image' loading='lazy' />
              </div>
              <div className='box-details'>
                <h3 className='title box-details__title'>Details info</h3>
                <p className='paragraph box-details__paragraph'>
                  Free consultation with our trusted doctors and get the best
                  recomendations
                </p>
              </div>
            </Link>
            <Link to='/Apps' className='services-box'>
              <div className='box-image'>
                <img src={MedBag} alt='med-bag-image' loading='lazy' />
              </div>
              <div className='box-details'>
                <h3 className='title box-details__title'>Emergency care</h3>
                <p className='paragraph box-details__paragraph'>
                  You can get 24/7 urgent care for yourself or your children and
                  your lovely family
                </p>
              </div>
            </Link>
            <Link to='/Apps' className='services-box'>
              <div className='box-image'>
                <img src={Report} alt='report-image' loading='lazy' />
              </div>
              <div className='box-details box-details--report'>
                <h3 className='title box-details__title'>Tracking</h3>
                <p className='paragraph box-details__paragraph'>
                  Track and save your medical history and health data
                </p>
              </div>
            </Link>
          </div>
          <div className='services-btn__container'>
            <Link to='/AboutUs' className='btn services-btn'>
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
