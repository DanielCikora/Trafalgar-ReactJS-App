import ArrowIconSmall from '../micro-components/ArrowIconSmall';
import { useState } from 'react';
interface ArticleCardProps {
  title: string;
  text: string;
  imageSrc: string;
}
const ArticleCards: React.FC<ArticleCardProps> = ({
  title,
  text,
  imageSrc,
}) => {
  const [isReadMore, setReadMore] = useState(false);
  const handleReadMore = () => {
    setReadMore(!isReadMore);
  };
  return (
    <div
      className={`article-card ${isReadMore ? 'article-card--read-more' : ''}`}
    >
      <img src={imageSrc} className='article-card__image' />
      <div className='article-card__details'>
        <h2 className='title article-details__h3'>{title}</h2>
        <p className='article-details__p'>
          {isReadMore ? text : `${text.slice(0, 90)}...`}
        </p>
        <button className='article-details__btn' onClick={handleReadMore}>
<<<<<<< HEAD
          {isReadMore ? 'Read Less' : 'Read More'}
=======
          Read more
>>>>>>> d9f4d138cb4329b4b691738399b5e2718cd5ed77
          <ArrowIconSmall />
        </button>
      </div>
    </div>
  );
};
export default ArticleCards;
