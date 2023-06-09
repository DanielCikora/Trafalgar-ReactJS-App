import DownloadsImage from '../assets/images/downloads__image.png';
import { Link } from 'react-router-dom';
import { ArrowIcon } from './micro-components/ArrowIcon';
export default function Downloads() {
  const downloadsText = {
    title: 'Download our mobile apps',
    paragraph:
      'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely',
  };
  const downloadsImage = {
    source: DownloadsImage,
    description: 'downloads-image',
  };
  return (
    <section className="downloads">
      <div className="wrapper downloads__wrapper">
        <div className="downloads-content__text">
          <h2 className="title downloads-text__title">{downloadsText.title}</h2>
          <p className="paragraph downloads-text__paragraph">
            {downloadsText.paragraph}
          </p>
          <Link className="btn downloads-text__button" to="/Apps">
            Download
            <ArrowIcon />
          </Link>
        </div>
        <div className="downloads-content__image">
          <img
            className="downloads__image"
            src={downloadsImage.source}
            alt={downloadsImage.description}
          />
        </div>
      </div>
    </section>
  );
}
