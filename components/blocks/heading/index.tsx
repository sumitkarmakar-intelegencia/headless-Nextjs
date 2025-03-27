import { extraClassName } from '@/lib/extractClass';
import React from 'react';

const HeadingBlock = ({ level = 2, content, className, align, rendered,  children, ...attrs }) => {
  const Tag = `h${level}`;
  const extractedClass = extraClassName(rendered);
  return (
    <Tag className={`${extractedClass} ${className || ''} ${align ? `align${align}` : ''}`} {...attrs}>
      {content}
      {children}
    </Tag>
  );
};

export default HeadingBlock;