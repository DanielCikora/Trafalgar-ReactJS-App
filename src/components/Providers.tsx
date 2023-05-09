import { Link } from "react-router-dom";
import ProvidersImage from "../assets/images/providers-section__image.png";
import Dots from "../assets/images/dots__image.png";
const Providers = () => {
  return (
    <article className="providers">
      <div className="providers-dots__container">
        <img
          className="providers__dots"
          src={Dots}
          alt="dots-image"
          loading="lazy"
        />
      </div>
      <div className="wrapper">
        <div className="providers__content">
          <div className="providers-image__container">
            <img
              className="providers__image"
              src={ProvidersImage}
              alt="providers-image"
              loading="lazy"
            />
          </div>
          <div className="providers-text__container">
            <h3 className="title providers-text__h3">
              Leading healthcare providers
            </h3>
            <p className="paragraph providers-text__paragraph">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone. To us, it's not just
              work. We take pride in the solutions we deliver
            </p>
            <Link className="btn providers-text__btn" to="/FindDoctor">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
export default Providers;
