import { extraClassName } from '@/lib/extractClass';
import React from 'react';

const ImageBlock = ({ url, alt, className, sizeSlug, align, linkDestination, id, rendered, children, ...attrs }) => {
    const extractedClass = extraClassName(rendered);
  
    const alignmentClass = align ? `align${align}` : '';
  const sizeClass = sizeSlug ? `size-${sizeSlug}` : '';
  const combinedClasses = `${extractedClass} ${className || ''} ${alignmentClass} ${sizeClass}`.trim();


  // Determine if the image should be wrapped in a link
  const imageElement = (
    <img src={url} alt={alt} className={`wp-image-${id || ''}`} />
  );

  let wrappedImage = imageElement;

  if (linkDestination === 'media') {
    wrappedImage = <a href={url}>{imageElement}</a>;
  } else if (linkDestination === 'attachment') {
    wrappedImage = <a href={`/attachment/${id}`}>{imageElement}</a>;
  }

  return (
    <figure className={combinedClasses} {...attrs}>
      {wrappedImage}
      {children}
    </figure>
  );
};

export default ImageBlock;