import React from 'react';

interface IProps {
  name: string;
  thumbnailSrc: string;
}

export const ArticleCard: React.FC<IProps> = ({ name, thumbnailSrc }) => (
  <div className='article-card'>
    <div className='article-card__name'>{name}</div>
    <div className='article-card__thumbnail'>
      <img className='article-card__thumbnail-img' src={thumbnailSrc} alt=''/>
    </div>
  </div>
);
