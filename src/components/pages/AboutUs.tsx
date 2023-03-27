import DoctorImage from "../../assets/images/doctor__image.png";
import WeCareImage from "../../assets/images/we-care__image.jpg";
function AboutUs() {
  return (
    <nav className='nav-about'>
      <div className='wrapper'>
        <div className='nav-about__content'>
          <h2 className='title nav-about__h2'>About us.</h2>
          <div className='nav-about__ourcompany'>
            <div className='about-ourcompany__text'>
              <p className='nav-about__p'>
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
          <div className='nav-about__wecare'>
            <img
              className='about-wecare__image'
              src={WeCareImage}
              alt='we-care__image'
            />
            <p className='nav-about__p'>
              Our team of experienced and compassionate medical professionals is
              dedicated to providing personalized care that addresses the unique
              needs of each patient. Whether you are seeking routine preventive
              care, treatment for a chronic condition, or specialized medical
              services, we are here to help.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default AboutUs;
