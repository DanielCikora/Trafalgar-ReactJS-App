import { useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import Logo from '../assets/images/trafalgar-logo__image.png';
import { Link } from 'react-router-dom';
function Navigation() {
  const [isOpen, setOpen] = useState(false);
  return (
    <header>
      <nav className="nav">
        <div className="wrapper">
          <div className="nav__content">
            <Link to="/">
              <img src={Logo} alt="trafalgar-logo" loading="lazy" />
            </Link>
            <ul className={isOpen ? 'nav__ul nav__ul--open' : 'nav__ul'}>
              <li className="nav__li">
                <Link
                  to="/"
                  className="nav__li-a"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="nav__li">
                <Link
                  to="/FindDoctor"
                  className="nav__li-a"
                  onClick={() => setOpen(false)}
                >
                  Find a doctor
                </Link>
              </li>
              <li className="nav__li">
                <Link
                  to="/Apps"
                  className="nav__li-a"
                  onClick={() => setOpen(false)}
                >
                  Apps
                </Link>
              </li>
              <li className="nav__li">
                <Link
                  to="/Testimonials"
                  className="nav__li-a"
                  onClick={() => setOpen(false)}
                >
                  Testimonials
                </Link>
              </li>
              <li className="nav__li">
                <Link
                  to="/AboutUs"
                  className="nav__li-a"
                  onClick={() => setOpen(false)}
                >
                  About Us
                </Link>
              </li>
            </ul>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Navigation;
