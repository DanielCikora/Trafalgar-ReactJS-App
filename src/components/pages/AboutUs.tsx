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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                quasi obcaecati quod eveniet neque? Maiores aspernatur,
                recusandae sequi ratione mollitia incidunt, modi dolorum porro
                sit rerum commodi amet fugit optio.
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique reprehenderit itaque at quam, animi necessitatibus odit
              deleniti rerum tenetur debitis omnis doloremque perspiciatis
              quisquam laudantium! Voluptatem, sit provident enim quam molestias
              esse culpa rem ipsum porro excepturi laboriosam! Corporis, nam.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default AboutUs;
