import vaccinationImage from './../assets/images/vaccination__image.png';
import microscopeResearchImage from './../assets/images/microscope-research__image.png';
import skinCareImage from './../assets/images/skincare__image.png';
import { useState } from 'react';
export default function Article() {

    const [readMore, setReadMore] = useState(false);

    return (
        <article className="article">
            <div className="wrapper article__wrapper">
                <h2 className="title article__h2">Check out our latest article</h2>
                <div className="article-cards">
                    <div className="article-card">
                        <img className='article-card__image' src={vaccinationImage} alt='vaccination-image' />
                    </div>
                    <div className="article-card">
                        <img className='article-card__image' src={microscopeResearchImage} alt='microscope-research-image' />
                    </div>
                    <div className="article-card">
                        <img className='article-card__image' src={skinCareImage} alt='skincare-image' />
                    </div>
                </div>
            </div>
        </article>
    )
};  