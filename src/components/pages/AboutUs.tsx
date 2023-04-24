import DoctorImage from "../../assets/images/doctor__image.png";
import WeCareImage from "../../assets/images/we-care__image.jpg";
import OperatingTableImage from "../../assets/images/operating-table__image.jpg";
import ScanImage from "../../assets/images/scan__image.jpg";
import FuturisticOperatingTable from "../../assets/images/futuristic-operating-table__image.jpeg";
import Scanner from "../../assets/images/scanner__image.jpg";
import DocAndPatient from "../../assets/images/doctor-and-patient__image.jpg";
import SliderArrow from "../../assets/images/slider-arrow.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
function AboutUs() {
  return (
    <div className='nav-about'>
      <div className='wrapper'>
        <div className='nav-about__content'>
          <h2 className='title nav__title nav-about__h2'>About us.</h2>
          <div className='nav-about__ourcompany'>
            <img
              className='nav-about__img'
              src={DoctorImage}
              alt='doctor-image'
              loading='lazy'
            />
            <p className='paragraph nav-about__p'>
              Welcome to Trafalgar, where we are committed to improving the
              health and well-being of our patients through the delivery of
              high-quality healthcare services. At our core, we believe that
              healthcare should be patient-centered and accessible to everyone.
              We understand that navigating the complexities of the healthcare
              system can be overwhelming, which is why we strive to provide a
              welcoming and supportive environment for our patients.
            </p>
          </div>
          <h3 className='title nav__title nav-about__h3'>We care.</h3>
          <div className='nav-about__wecare'>
            <img
              className='about-wecare__image'
              src={WeCareImage}
              alt='we-care__image'
              loading='lazy'
            />
            <p className='paragraph nav-about__p nav-about__p--wecare'>
              Our team of experienced and compassionate medical professionals is
              dedicated to providing personalized care that addresses the unique
              needs of each patient. Whether you are seeking routine preventive
              care, treatment for a chronic condition, or specialized medical
              services, we are here to help.
            </p>
          </div>
          <div className='nav-about__facilies'>
            <h4 className='title nav__title nav-about__h4'>Our facilities.</h4>
            <p className='paragraph nav-about__p nav-about__p--facilities'>
              Our state-of-the-art facilities are equipped with the latest
              medical technologies, allowing us to deliver advanced diagnostic
              and treatment options that are tailored to your individual needs.
              We are committed to staying up-to-date with the latest medical
              research and innovations to ensure that our patients receive the
              most effective and cutting-edge treatments available.
            </p>
          </div>
        </div>
      </div>
      <Swiper
        className='facilities-images__slFider'
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 500,
          modifier: 3,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}>
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
      </Swiper>
      <div className='nav-about__partnership'>
        <div className='wrapper'>
          <div className='partnership-content'>
            <h5 className='title nav__title nav-about__h5'>
              Build a lasting bond.
            </h5>
            <p className='paragraph nav-about__p nav-about__p--building'>
              At Trafalgar, we believe that healthcare is a partnership between
              patients and providers. We value open and honest communication,
              and we encourage our patients to actively participate in their
              healthcare decisions. Our goal is to empower our patients to take
              control of their health and to live their best lives.
            </p>
            <img
              className='nav-bonding__img'
              src={DocAndPatient}
              alt='doctor-and-patient__image'
              loading='lazy'
            />
            <p className='paragraph nav-about__p nav-about__p--mini'>
              Thank you for considering Trafalgar for your healthcare needs. We
              look forward to serving you and your family with the highest level
              of care and professionalism.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
