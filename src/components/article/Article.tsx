import { IArticleProps } from 'models/article';
import { ImageWithMeta } from 'components/common/ImageWithMeta';
import React from 'react';

export const Article: React.FC<IArticleProps> = ({
  name,
  heading,
  author,
  date,
  body,
  leadImage,
}) => (
  <article className='article'>
    <div className='article__name'>{name}</div>
    <h1 className='article__heading'>{heading}</h1>
    <div className='article__author'>by: {author}</div>
    <div className='article__date'>{date}</div>
    <ImageWithMeta
      className='article__image'
      src={leadImage.src}
      caption={leadImage.caption}
      source={leadImage.credit}
    />
    <div className='article__body'>
      { body.map((element, index) => <div key={index} dangerouslySetInnerHTML={{__html: element}}/>)}
    </div>
  </article>
);
