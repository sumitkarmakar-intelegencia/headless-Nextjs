import { extraClassName } from '@/lib/extractClass';
import React from 'react';

const ColumnBlock = ({ width, className, rendered, children, ...attrs }) => {
  const style = width ? { flexBasis: width } : {};
 const extractedClass = extraClassName(rendered);
  return (
    <div className={`${extractedClass} ${className || ''}`} style={style} {...attrs}>
      {children}    
    </div>
  );
};

export default ColumnBlock;