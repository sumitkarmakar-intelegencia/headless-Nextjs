"use client"
import { extraClassName } from '@/lib/extractClass';
import React, { createRef, useEffect } from 'react';

const CustomButton = ({ btntext , content, className, align,rendered, customcss , children, ...attrs }) => {
    const extractedClass = extraClassName(rendered);
    const customCSS = `.ticss-a65ad4e2 {\n  border: 2px solid blue\n}\n`;

    const ref = createRef();

    // Inject the custom CSS into the document
    useEffect(() => {
      const styleTag = document.createElement('style');
      styleTag.innerHTML = customCSS;
      ref.current?.appendChild(styleTag);
  
      // Cleanup function to remove the style tag when the component unmounts
      return () => {
        ref.current?.removeChild(styleTag);
      };
    }, [customCSS]);
  return (
    <button ref={ref} className={`${extractedClass} ${className || ''} ${align ? `align${align}` : ''}`} {...attrs} >
      {btntext}
      {children}
    </button>
  );
};

export default CustomButton;