import LogoFooter from "../assets/images/logo-footer.png";
import Dots from "../assets/images/dots__image.png";
import { Link } from "react-router-dom";
export default function FooterBox() {
  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <footer className='footer'>
      <img className='footer-dots__image' src={Dots} alt='footer-dots' />
      <div className='wrapper'>
        <div className='footer-links'>
          <div className='footer-links__logo'>
            <Link className='footer-logo' to='/'>
              <img className='footer-logo__image' src={LogoFooter} alt='logo' />
            </Link>
            <p className='footer-logo__p'>
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
            <p className='footer-logo__p footer-logo__p--date'>
              ©Trafalgar PTY LTD {fullYear}. All rights reserved
            </p>
          </div>
          <div className='footer-links__boxes'>
            <div className='footer-box'>
              <ul className='footer-ul'>
                <li className='footer-ul__li'>
                  <h2 className='footer-ul__h2'>Company</h2>
                </li>
                <li className='footer-ul__li'>
                  <Link className='link footer-li__a' to='/AboutUs'>
                    About
                  </Link>
                </li>
                <li className='footer-ul__li'>
                  <Link className='link footer-li__a' to='/Testimonials'>
                    Testimonials
                  </Link>
                </li>
                <li className='footer-ul__li'>
                  <Link className='link footer-li__a' to='/FindDoctor'>
                    Find a doctor
                  </Link>
                </li>
                <li className='footer-ul__li'>
                  <Link className='link footer-li__a' to='/Apps'>
                    Apps
                  </Link>
                </li>
              </ul>
            </div>
            <div className='footer-box'>
              <ul className='footer-ul'>
                <li className='footer-ul__li'>
                  <h2 className='footer-ul__h2'>Region</h2>
                </li>
                <li className='footer-ul__li'>
                  <a className='link footer-li__a' href='/'>
                    Indonesia
                  </a>
                </li>
                <li className='footer-ul__li'>
                  <a className='link footer-li__a' href='/'>
                    Singapore
                  </a>
                </li>
                <li className='footer-ul__li'>
                  <a className='link footer-li__a' href='/'>
                    Hong Kong
                  </a>
                </li>
                <li className='footer-ul__li'>
                  <a className='link footer-li__a' href='/'>
                    Canada
                  </a>
                </li>
              </ul>
            </div>
            <div className='footer-box'>
              <ul className='footer-ul'>
                <li className='footer-ul__li'>
                  <h2 className='footer-ul__h2'>Help</h2>
                </li>
                <li className='footer-ul__li'>
                  <a className='link footer-li__a' href='/'>
                    Help center
                  </a>
                </li>
                <li className='footer-ul__li'>
                  <a className='link footer-li__a' href='/'>
                    Contact support
                  </a>
                </li>
                <li className='footer-ul__li'>
                  <a className='link footer-li__a' href='/'>
                    Instructions
                  </a>
                </li>
                <li className='footer-ul__li'>
                  <a className='link footer-li__a' href='/'>
                    How it works
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
