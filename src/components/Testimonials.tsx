import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper';
import Customer1 from '../assets/images/customer__image1.png';
import Customer2 from '../assets/images/asian-woman-happy.png';
import Customer3 from '../assets/images/south-asian-man-happy.png';
import Customer4 from '../assets/images/caucasian-woman-happy.png';
import SliderBtn from '../assets/images/slider-arrow.png';
export default function Testimonials() {
  const card = {
    title: 'What our customers are saying',
    alt: 'customer-image',
  };
  const arrow = {
    src: SliderBtn,
    alt: 'slider-btn',
  };
  return (
    <section className="testimonials">
      <div className="wrapper testimonials__wrapper">
        <div className="testimonials__content">
          <h2 className="title testimonials__h2">{card.title}</h2>
          <Swiper
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="testimonials__cards"
            slidesPerView={1}
          >
            <SwiperSlide>
              <div className="card-details">
                <img
                  className="card-details__image"
                  src={Customer1}
                  alt={card.alt}
                />
                <div className="card-description">
                  <h3 className="card-description__name">Edward Newgate</h3>
                  <h4 className="card-description__title">Founder Circle</h4>
                </div>
                <div className="card__review">
                  <p className="paragraph review__paragraph">
                    “Our dedicated patient engagement app and web portal allow
                    you to access information instantaneously (no tedeous form,
                    long calls, or administrative hassle) and securely”
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-details">
                <img
                  className="card-details__image"
                  src={Customer2}
                  alt={card.alt}
                />
                <div className="card-description">
                  <h3 className="card-description__name">Edward Newgate</h3>
                  <h4 className="card-description__title">Founder Circle</h4>
                </div>
                <div className="card__review">
                  <p className="paragraph review__paragraph">
                    “Our dedicated patient engagement app and web portal allow
                    you to access information instantaneously (no tedeous form,
                    long calls, or administrative hassle) and securely”
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-details">
                <img
                  className="card-details__image"
                  src={Customer3}
                  alt={card.alt}
                />
                <div className="card-description">
                  <h3 className="card-description__name">Edward Newgate</h3>
                  <h4 className="card-description__title">Founder Circle</h4>
                </div>
                <div className="card__review">
                  <p className="paragraph review__paragraph">
                    “Our dedicated patient engagement app and web portal allow
                    you to access information instantaneously (no tedeous form,
                    long calls, or administrative hassle) and securely”
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-details">
                <img
                  className="card-details__image"
                  src={Customer4}
                  alt={card.alt}
                />
                <div className="card-description">
                  <h3 className="title card-description__name">
                    Edward Newgate
                  </h3>
                  <h4 className="title card-description__title">
                    Founder Circle
                  </h4>
                </div>
                <div className="card__review">
                  <p className="paragraph review__paragraph">
                    “Our dedicated patient engagement app and web portal allow
                    you to access information instantaneously (no tedeous form,
                    long calls, or administrative hassle) and securely”
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="swiper-arrows">
          <button className="swiper-button-prev" type="button">
            <img src={arrow.src} alt={arrow.alt} />
          </button>
          <div className="swiper-pagination">
            <span className="swiper-pagination-bullet"></span>
            <span className="swiper-pagination-bullet"></span>
            <span className="swiper-pagination-bullet"></span>
            <span className="swiper-pagination-bullet"></span>
          </div>
          <button className="swiper-button-next" type="button">
            <img src={arrow.src} alt={arrow.alt} />
          </button>
        </div>
      </div>
    </section>
  );
}
