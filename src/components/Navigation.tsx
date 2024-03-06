import { useEffect, useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import Logo from "../assets/images/trafalgar-logo__image.png";
import { Link } from "react-router-dom";
export default function Navigation() {
  const [isOpen, setOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const navItems = [
    { key: 1, navLink: "Home", href: "/" },
    { key: 2, navLink: "Find a doctor", href: "/FindDoctor" },
    { key: 3, navLink: "Apps", href: "/Apps" },
    { key: 4, navLink: "Testimonials", href: "/Testimonials" },
    { key: 5, navLink: "About us", href: "/AboutUs" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("open");
    } else {
      document.body.classList.remove("open");
    }
  });

  return (
    <header>
      <nav className={`nav${isFixed ? " nav--fixed" : ""}`}>
        <div className='wrapper'>
          <div className='nav__content'>
            <Link to='/'>
              <img src={Logo} alt='trafalgar-logo' loading='lazy' />
            </Link>
            <ul className={isOpen ? "nav__ul nav__ul--open" : "nav__ul"}>
              {navItems.map((navItem) => (
                <li className='nav__li' key={navItem.key}>
                  <Link
                    className='link nav__li-a'
                    onClick={() => setOpen(false)}
                    to={navItem.href}
                  >
                    {navItem.navLink}
                  </Link>
                </li>
              ))}
            </ul>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </nav>
    </header>
  );
}
