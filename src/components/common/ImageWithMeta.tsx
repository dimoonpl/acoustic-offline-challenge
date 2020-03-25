import C from 'classnames';
import React from 'react';

interface IProps {
  src: string;
  caption?: string;
  source?: string;
  className?: string;
  alt?: string;
}

export const ImageWithMeta: React.FC<IProps> = ({
  className,
  src,
  alt,
  caption,
  source,
}) => (
  <div className={C('image-with-meta', className)}>
    <img className='image-with-meta__img' src={src} alt={alt}/>
    { caption && <p className='image-with-meta__caption'>{caption}</p> }
    { source  && <p className='image-with-meta__source'>source: {source}</p> }
  </div>
);
