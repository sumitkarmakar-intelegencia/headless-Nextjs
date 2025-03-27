import { extraClassName } from '@/lib/extractClass';
import React from 'react';
import './styles.css';


const GalleryBlock = ({ linkTo, columns, className, children, rendered, ...attrs }) => {

    const extractedClass = extraClassName(rendered);
    const columnClass = columns ? `columns-${columns}` : 'columns-default';

    const combinedClasses = `${extractedClass}  ${columnClass} ${className || ''}`.trim();

    return (
        <figure className={combinedClasses} {...attrs}>
            {children}
        </figure>
    );
};

export default GalleryBlock;