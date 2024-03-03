import ArticleCards from './ArticleCardsComponent/ArticleCards';
import vaccinationImage from './../assets/images/vaccination__image.png';
import microscopeResearchImage from './../assets/images/microscope-research__image.png';
import skinCareImage from './../assets/images/skincare__image.png';
import ArticleBlobImage from './../assets/images/article-blob-image.png';
import BlueDotsImage from '../assets/images/dots__image.png';
import Button from '../components/micro-components/Button';
export default function Article() {
  interface cardTextProps {
    text1: string;
    text2: string;
    text3: string;
  }
  const cardText: cardTextProps = {
    text1: `In this case, the role of the health laboratory is very important to do a disease detection that can lead to early intervention and better treatment outcomes.`,
    text2: `Herbal medicine is very widely used at this time because of its very good for your health and its natural properties often complement traditional medical approaches effectively.`,
    text3: `A healthy lifestyle should start from now and also for your skin health. There are some simple yet impactful skincare routines that can help maintain a radiant complexion over time.`,
  };
  return (
    <article className='article'>
      <img className='article-blob' src={ArticleBlobImage} alt='blob-image' />
      <div className='wrapper article__wrapper'>
        <h2 className='title article__h2'>Check out our latest article</h2>
        <div className='article-cards'>
          <img
            className='article-dots'
            src={BlueDotsImage}
            alt='blue-dots-image'
          />
          <ArticleCards
            title='Disease detection, check up in the laboratory'
            text={cardText.text1}
            imageSrc={vaccinationImage}
          />
          <ArticleCards
            title='Herbal medicines that are safe for consumption'
            text={cardText.text2}
            imageSrc={microscopeResearchImage}
          />
          <ArticleCards
            title='Natural care for healthy facial skin'
            text={cardText.text3}
            imageSrc={skinCareImage}
          />
        </div>
        <Button linkClass='btn article-btn' href='#' linkText='View all' />
      </div>
    </article>
  );
}
