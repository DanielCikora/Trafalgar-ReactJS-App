import DoctorImage from "../../assets/images/doctor__image.png";
import WeCareImage from "../../assets/images/we-care__image.jpg";
import OperatingTableImage from "../../assets/images/operating-table__image.jpg";
import ScanImage from "../../assets/images/scan__image.jpg";
import FuturisticOperatingTable from "../../assets/images/futuristic-operating-table__image.jpeg";
import Scanner from "../../assets/images/scanner__image.jpg";
import DocAndPatient from "../../assets/images/doctor-and-patient__image.jpg";
import SliderArrow from "../../assets/images/slider-arrow.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
function AboutUs() {
  return (
    <nav className='nav-about'>
      <div className='wrapper'>
        <div className='nav-about__content'>
          <h2 className='title nav-about__title nav-about__h2'>About us</h2>
          <div className='nav-about__ourcompany'>
            <div className='about-ourcompany__text'>
              <p className='paragraph nav-about__p'>
                Welcome to Trafalgar, where we are committed to improving the
                health and well-being of our patients through the delivery of
                high-quality healthcare services. At our core, we believe that
                healthcare should be patient-centered and accessible to
                everyone. We understand that navigating the complexities of the
                healthcare system can be overwhelming, which is why we strive to
                provide a welcoming and supportive environment for our patients.
              </p>
            </div>
            <img
              className='nav-about__img'
              src={DoctorImage}
              alt='doctor-image'
            />
          </div>
          <h3 className='title nav-about__title nav-about__h3'>We care.</h3>
          <div className='nav-about__wecare'>
            <img
              className='about-wecare__image'
              src={WeCareImage}
              alt='we-care__image'
            />
            <p className='paragraph nav-about__p nav-about__p--wecare'>
              Our team of experienced and compassionate medical professionals is
              dedicated to providing personalized care that addresses the unique
              needs of each patient. Whether you are seeking routine preventive
              care, treatment for a chronic condition, or specialized medical
              services, we are here to help.
            </p>
          </div>
          <h4 className='title nav-about__title nav-about__h4'>
            Our facilities.
          </h4>
          <div className='nav-about__facilies'>
            <p className='paragraph nav-about__p nav-about__p--facilities'>
              Our state-of-the-art facilities are equipped with the latest
              medical technologies, allowing us to deliver advanced diagnostic
              and treatment options that are tailored to your individual needs.
              We are committed to staying up-to-date with the latest medical
              research and innovations to ensure that our patients receive the
              most effective and cutting-edge treatments available.
            </p>
            <Swiper
              className='facilities-images__slider'
              speed={1000}
              slidesPerView={1}
              grabCursor={true}
              navigation={{
                nextEl: ".slider-arrow--next",
                prevEl: ".slider-arrow--prev",
              }}
              modules={[Pagination, Navigation]}>
              <SwiperSlide>
                <img
                  className='facilities__image'
                  src={OperatingTableImage}
                  alt='operating-table-image'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className='facilities__image'
                  src={FuturisticOperatingTable}
                  alt='scanning-table-image'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className='facilities__image'
                  src={ScanImage}
                  alt='scanning-table-image'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className='facilities__image'
                  src={Scanner}
                  alt='scanner-table-image'
                />
              </SwiperSlide>
              <div className='slider-controls'>
                <button
                  type='button'
                  className='slider-arrow slider-arrow--prev'>
                  <img
                    className='arrow-img__prev'
                    src={SliderArrow}
                    alt='slider-arrow-previous'
                  />
                </button>
                <button
                  type='button'
                  className='slider-arrow slider-arrow--next'>
                  <img
                    className='arrow-img__next'
                    src={SliderArrow}
                    alt='slider-arrow-next'
                  />
                </button>
              </div>
            </Swiper>
          </div>
          <div className='nav-about__partnership'>
            <h3>Doctors and Patients build a lasting bond</h3>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default AboutUs;
