import { extraClassName } from '@/lib/extractClass';
import React from 'react';

const ColumnsBlock = ({ className, align,rendered, children, ...attrs }) => {
    const extractedClass = extraClassName(rendered);
  return (
    <div className={`${extractedClass} ${className || ''} ${align ? `align${align}` : ''}`} {...attrs} style={{...attrs}}>
      {children} 
    </div>
  );
};

export default ColumnsBlock;