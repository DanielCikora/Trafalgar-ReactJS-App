import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import Customer1 from "../assets/images/customer__image1.png";
import Customer2 from "../assets/images/asian-woman-happy.png";
import Customer3 from "../assets/images/south-asian-man-happy.png";
import Customer4 from "../assets/images/caucasian-woman-happy.png";
import SliderBtn from "../assets/images/slider-arrow.png";
import WhiteDots from "../assets/images/white-dots__image.png";
import BlueDots from "../assets/images/dots__image.png";
export default function Slider() {
  const card = {
    title: "What our customers are saying",
    alt: "customer-image",
  };
  const arrow = {
    src: SliderBtn,
    alt: "slider-btn",
  };
  const dots = {
    whiteDots: WhiteDots,
    blueDots: BlueDots,
    alt: "dots-image",
  };
  return (
    <section className='slider'>
      <div className='wrapper slider__wrapper'>
        <div className='slider__content'>
          <img
            className='slider__dots slider__dots--white'
            src={dots.whiteDots}
            alt={dots.alt}
          />
          <img
            className='slider__dots slider__dots--blue'
            src={dots.blueDots}
            alt={dots.alt}
          />
          <h2 className='title slider__h2'>{card.title}</h2>
          <Swiper
            className='slider__cards'
            modules={[Autoplay, Navigation, Pagination]}
            loop={true}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            slidesPerView={1}
          >
            <SwiperSlide>
              <div className='card-details'>
                <img
                  className='card-details__image'
                  src={Customer1}
                  alt={card.alt}
                />
                <div className='card-description'>
                  <h3 className='card-description__name'>Edward Newgate</h3>
                  <h4 className='card-description__title'>Founder Circle</h4>
                </div>
                <div className='card__review'>
                  <p className='paragraph review__paragraph'>
                    "Our dedicated patient engagement app and web portal allow
                    you to access information instantaneously (no tedeous form,
                    long calls, or administrative hassle) and securely"
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card-details'>
                <img
                  className='card-details__image'
                  src={Customer2}
                  alt={card.alt}
                />
                <div className='card-description'>
                  <h3 className='card-description__name'>Anong Wang</h3>
                  <h4 className='card-description__title'>Data Analyst</h4>
                </div>
                <div className='card__review'>
                  <p className='paragraph review__paragraph'>
                    "Efficient, compassionate, and user-friendly. Doctors
                    respond fast, and I feel empowered in my healthcare.
                    Impressive experience!"
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card-details'>
                <img
                  className='card-details__image'
                  src={Customer3}
                  alt={card.alt}
                />
                <div className='card-description'>
                  <h3 className='card-description__name'>Amir Al-Mansoori</h3>
                  <h4 className='card-description__title'>
                    IT Support Specialist
                  </h4>
                </div>
                <div className='card__review'>
                  <p className='paragraph review__paragraph'>
                    "Effortless access to vital information, caring doctors, and
                    a game-changer for my health journey. Highly recommended!"
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card-details'>
                <img
                  className='card-details__image'
                  src={Customer4}
                  alt={card.alt}
                />
                <div className='card-description'>
                  <h3 className='title card-description__name'>
                    Ingrid Svensson
                  </h3>
                  <h4 className='title card-description__title'>
                    Sales Representative
                  </h4>
                </div>
                <div className='card__review'>
                  <p className='paragraph review__paragraph'>
                    "Exceptional care, fast and friendly doctors, and a breeze
                    to use. The best medical website experience ever!"
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className='swiper-arrows'>
          <button className='swiper-button-prev' type='button'>
            <img src={arrow.src} alt={arrow.alt} />
          </button>
          <div className='swiper-pagination'>
            <span className='swiper-pagination-bullet'></span>
            <span className='swiper-pagination-bullet'></span>
            <span className='swiper-pagination-bullet'></span>
            <span className='swiper-pagination-bullet'></span>
          </div>
          <button className='swiper-button-next' type='button'>
            <img src={arrow.src} alt={arrow.alt} />
          </button>
        </div>
      </div>
    </section>
  );
}
