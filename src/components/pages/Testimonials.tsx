import ClientImage from "../../assets/images/pensioner__image.png";
import ClientWoman from "../../assets/images/pensioner-woman__image.png";
import GirlImage from "../../assets/images/girl__image.png";
import ManImage from "../../assets/images/man__image.png";
import IndianManImage from "../../assets/images/indian-man__image.png";
const Testimonials = () => {
  const names = [
    "John Marston",
    "Ruth George",
    "Sarah Parker",
    "Tyrone Williams",
    "Rajesh Kapoor",
  ];
  const ages = [67, 61, 26, 33, 28];
  const locations = ["New York", "California", "Texas", "Oregon", "Denver"];
  return (
    <div className='nav-testimonials'>
      <div className='wrapper'>
        <div className='testimonials-content'>
          <h2 className='title nav__title'>Our clients.</h2>
          <div className='testimonials-boxes'>
            <div className='testimonials-client__box'>
              <div className='testimonials-client__review'>
                <img
                  className='testimonials-client__image'
                  src={ClientImage}
                  alt='client-image'
                  loading='lazy'
                />
                <p className='client-review__paragraph'>
                  "I have been a patient with Trafalgar for several years now
                  and I am always impressed with the level of care and attention
                  I receive. The staff is professional and friendly, and the
                  doctors are knowledgeable and compassionate. I highly
                  recommend Trafalgar to anyone in need of quality healthcare."
                </p>
              </div>
              <div className='testimonials-client__text'>
                <h3 className='client-text__h3'>
                  {names[0]}, {ages[0]}
                </h3>
                <h4 className='client-text__h4'>{locations[0]}</h4>
              </div>
            </div>
            <div className='testimonials-client__box'>
              <div className='testimonials-client__review'>
                <img
                  className='testimonials-client__image'
                  src={ClientWoman}
                  alt='client-woman__image'
                  loading='lazy'
                />
                <p className='client-review__paragraph'>
                  "As someone who has struggled with chronic illness, finding a
                  medical company that I can trust has been a game changer. The
                  doctors at Trafalgar have taken the time to truly understand
                  my needs and work with me to develop a personalized treatment
                  plan. I am grateful for the care I have received and would
                  recommend Trafalgar to anyone in a similar situation."
                </p>
              </div>
              <div className='testimonials-client__text'>
                <h3 className='client-text__h3'>
                  {names[1]}, {ages[1]}
                </h3>
                <h4 className='client-text__h4'>{locations[1]}</h4>
              </div>
            </div>
            <div className='testimonials-client__box'>
              <div className='testimonials-client__review'>
                <img
                  className='testimonials-client__image'
                  src={GirlImage}
                  alt='client-woman__image'
                  loading='lazy'
                />
                <p className='client-review__paragraph'>
                  "I recently had a procedure done at Trafalgar and was blown
                  away by the level of care I received. From the initial
                  consultation to the post-op follow up, the staff was attentive
                  and made me feel at ease. I am thankful for the skilled and
                  compassionate doctors who performed my procedure and would
                  highly recommend Trafalgar to anyone in need of medical care."
                </p>
              </div>
              <div className='testimonials-client__text'>
                <h3 className='client-text__h3'>
                  {names[2]}, {ages[2]}
                </h3>
                <h4 className='client-text__h4'>{locations[2]}</h4>
              </div>
            </div>
            <div className='testimonials-client__box'>
              <div className='testimonials-client__review'>
                <img
                  className='testimonials-client__image'
                  src={ManImage}
                  alt='client-woman__image'
                  loading='lazy'
                />
                <p className='client-review__paragraph'>
                  "I have been bringing my family to Trafalgar for years and
                  have always been impressed with the level of service we
                  receive. The doctors and staff are friendly, knowledgeable,
                  and always go above and beyond to ensure that we receive the
                  care we need. I wouldn't trust anyone else with the health of
                  my loved ones."
                </p>
              </div>
              <div className='testimonials-client__text'>
                <h3 className='client-text__h3'>
                  {names[3]}, {ages[3]}
                </h3>
                <h4 className='client-text__h4'>{locations[3]}</h4>
              </div>
            </div>
            <div className='testimonials-client__box'>
              <div className='testimonials-client__review'>
                <img
                  className='testimonials-client__image'
                  src={IndianManImage}
                  alt='client-woman__image'
                  loading='lazy'
                />
                <p className='client-review__paragraph'>
                  "I was hesitant to visit a new medical company for my
                  healthcare needs, but I am so glad I did. The doctors and
                  staff at Trafalgar are top notch and truly care about their
                  patients. I appreciate the personalized attention I receive
                  and feel confident in the care I am receiving. I would highly
                  recommend Trafalgar to anyone in search of quality
                  healthcare."
                </p>
              </div>
              <div className='testimonials-client__text'>
                <h3 className='client-text__h3'>
                  {names[4]}, {ages[4]}
                </h3>
                <h4 className='client-text__h4'>{locations[4]}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
