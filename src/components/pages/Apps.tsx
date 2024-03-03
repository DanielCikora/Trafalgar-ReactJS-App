import MyFitnessAppImage from '../../assets/images/MyFitnessPal__image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid } from '@fortawesome/fontawesome-free-brands';
import { faApple } from '@fortawesome/fontawesome-free-brands';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Apps() {
  const [isExpanded, setExpanded] = useState(false);
  const handleExpansion = () => {
    setExpanded(!isExpanded);
  };
  return (
    <div className='nav-apps'>
      <div className='wrapper'>
        <div className='apps-content'>
          <div className={isExpanded ? 'apps-box apps-box--open' : 'apps-box'}>
            <div className='apps-content__image'>
              <button
                className='apps-image__button'
                type='button'
                onClick={handleExpansion}
              >
                <img
                  className='app__image'
                  src={MyFitnessAppImage}
                  alt='my-fitness-app-link'
                />
              </button>
              <div className='apps-image__icons'>
                <Link
                  className='apps-icon__link'
                  to='https://play.google.com/store/apps/details?id=com.myfitnesspal.android&hl=en&gl=US&pli=1'
                >
                  <FontAwesomeIcon icon={faAndroid as IconProp} fontSize='28' />
                </Link>
                <Link
                  className='apps-icon__link'
                  to='https://apps.apple.com/us/app/myfitnesspal-calorie-counter/id341232718'
                >
                  <FontAwesomeIcon icon={faApple as IconProp} fontSize='28' />
                </Link>
              </div>
            </div>
            <div className='apps-content__text'>
              <h2 className='apps-text__title'>MyFitnessPal</h2>
              <p className='paragraph apps-text__paragraph'>
                This app is perfect for patients who want to track their diet
                and exercise routines. It allows users to set fitness goals and
                track their progress over time. It also offers a database of
                food and nutrition information, making it easier to stay on top
                of your health and wellness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Apps;
