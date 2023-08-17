import ArticleCards from './ArticleCardsComponent/ArticleCards';
import vaccinationImage from './../assets/images/vaccination__image.png';
import microscopeResearchImage from './../assets/images/microscope-research__image.png';
import skinCareImage from './../assets/images/skincare__image.png';
export default function Article() {
  return (
    <article className='article'>
      <div className='wrapper article__wrapper'>
        <h2 className='title article__h2'>Check out our latest article</h2>
        <div className='article-cards'>
          <ArticleCards
            title='Disease detection, check up in the laboratory'
            text='In this case, the role of the health laboratory is very important to do a disease detection...'
            imageSrc={vaccinationImage}
          />
          <ArticleCards
            title='Herbal medicines that are safe for consumption'
            text='Herbal medicine is very widely used at this time because of its very good for your health...'
            imageSrc={microscopeResearchImage}
          />
          <ArticleCards
            title='Natural care for healthy facial skin'
            text='A healthy lifestyle should start from now and also for your skin health. There are some...'
            imageSrc={skinCareImage}
          />
        </div>
      </div>
    </article>
  );
}
