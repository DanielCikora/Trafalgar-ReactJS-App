import vaccinationImage from './../assets/images/vaccination__image.png';
import microscopeResearchImage from './../assets/images/microscope-research__image.png';
import skinCareImage from './../assets/images/skincare__image.png';
import ArrowIconSmall from './micro-components/ArrowIconSmall';
import { useState } from 'react';
export default function Article() {
    const [isReadMore, setReadMore] = useState(false);
    const handleReadMore = () => {
        setReadMore(!isReadMore)
    }
    return (
        <article className="article">
            <div className="wrapper article__wrapper">
                <h2 className="title article__h2">Check out our latest article</h2>
                <div className="article-cards">
                    <div className={isReadMore ? 'article-card article-card--read-more' : 'article-card'}>
                        <img className='article-card__image' src={vaccinationImage} alt='vaccination-image' />
                        <div className="article-card__details">
                            <h3 className='article-details__h3'>Disease detection, check
                                up in the laboratory</h3>
                            <p className='paragraph article-details__p'>In this case, the role of the health laboratory is very important to do
                                a disease detection...</p>
                            <button className='article-details__btn' onClick={handleReadMore}>Read more <ArrowIconSmall /></button>
                        </div>
                    </div>
                    <div className={isReadMore ? 'article-card article-card--read-more' : 'article-card'}>
                        <img className='article-card__image' src={microscopeResearchImage} alt='microscope-research-image' />
                        <div className="article-card__details">
                            <h3 className='article-details__h3'>Herbal medicines that are
                                safe for consumption</h3>
                            <p className='paragraph article-details__p'>Herbal medicine is very widely used at this time because of its very good for your health...</p>
                            <button className='article-details__btn' onClick={handleReadMore}>Read more <ArrowIconSmall /></button>
                        </div>
                    </div>
                    <div className={isReadMore ? 'article-card article-card--read-more' : 'article-card'}>
                        <img className='article-card__image' src={skinCareImage} alt='skincare-image' />
                        <div className="article-card__details">
                            <h3 className='article-details__h3'>Natural care for healthy
                                facial skin</h3>
                            <p className='paragraph article-details__p'>A healthy lifestyle should start from now and also for your skin health.
                                There are some...</p>
                            <button className='article-details__btn' onClick={handleReadMore}>Read more <ArrowIconSmall /></button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
};  