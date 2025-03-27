import { extraClassName } from '@/lib/extractClass';
import React from 'react';

const TextBlock = ({ content, className, align,rendered, children, ...attrs }) => {
    const extractedClass = extraClassName(rendered);
  return (
    <p className={`${extractedClass} ${className || ''} ${align ? `align${align}` : ''}`} {...attrs}>
      {content}
      {children}
    </p>
  );
};

export default TextBlock;