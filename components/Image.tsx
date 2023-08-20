import Img from 'next/image';

import { urlFor } from '../_lib/client';
import { ISanityImage } from '../_lib/types';

type IImgProps = {
  className: string;
  alt?: string;
  opacity?: number;
  width?: number;
  height?: number;
};

const generateSrcSet = (props, format) => {
  const sizes = [320, 640, 960, 1280, 1600];
  return sizes.map(size => `${urlFor(props).width(size).quality(100).auto('format').format(format).url()} ${size}w`).join(', ');
};

const Image = (props: ISanityImage & IImgProps) => {
  const { className, alt, opacity, asset } = props;

  if (!asset) return null; // return null or an alternative component if asset is not defined

  const imageStyles = opacity ? { opacity: opacity / 100 } : {};

  const src =
    urlFor(props)
      .width(props.width || 1000)
      .quality(100)
      .auto('format')
      .url() || '';

  const srcSetWebP = generateSrcSet(props, 'webp');
  const srcSetDefault = generateSrcSet(props, 'jpg');

  return (
    <picture>
      <source srcSet={srcSetWebP} type="image/webp" />
      <source srcSet={srcSetDefault} type="image/jpeg" />
      <Img
        key={asset._ref}
        src={src}
        width={props.width || 1000}
        height={props.height || 1000}
        className={className}
        alt={alt || ''}
        style={imageStyles}
      />
    </picture>
  );
};

export default Image;
