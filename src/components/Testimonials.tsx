import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper';
import Customer1 from '../assets/images/customer__image1.png';
export default function Testimonials() {
  const card = {
    title: 'What our customers are saying',
    alt: 'customer-image',
  };
  return (
    <section className="testimonials">
      <div className="wrapper testimonials__wrapper">
        <div className="testimonials__content">
          <h2 className="title testimonials__h2">{card.title}</h2>
          <Swiper
            navigation={true}
            pagination={true}
            modules={[Autoplay, Navigation, Pagination]}
            className="testimonials__cards"
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
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
                  src={Customer1}
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
      </div>
    </section>
  );
}
