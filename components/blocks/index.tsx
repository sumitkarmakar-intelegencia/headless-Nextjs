import React from 'react';
// Import all block components
import TextBlock from './paragraph';
import HeadingBlock from './heading';
import ImageBlock from './image';
// import ListBlock from './ListBlock';
// import QuoteBlock from './QuoteBlock';
// import ButtonBlock from './ButtonBlock';
// import CoverBlock from './CoverBlock';
import GalleryBlock from './gallery';
// import AudioBlock from './AudioBlock';
// import VideoBlock from './VideoBlock';
// import TableBlock from './TableBlock';
import ColumnsBlock from './columns'; // New
import ColumnBlock from './column'; // New
import CustomButton from './create-block/gus-button';

const BlockRenderer = (block) => {
    console.log("data333 ---", block)
  const { blockName, attrs, innerBlocks, rendered} = block;

  // Map block names to their corresponding React components
  const blockComponents = {
    'core/paragraph': TextBlock,
    'core/heading': HeadingBlock,
    'core/image': ImageBlock,
    // 'core/list': ListBlock,
    // 'core/quote': QuoteBlock,
    // 'core/button': ButtonBlock,
    // 'core/cover': CoverBlock,
    'core/gallery': GalleryBlock,
    // 'core/audio': AudioBlock,
    // 'core/video': VideoBlock,
    // 'core/table': TableBlock,
    'core/columns': ColumnsBlock, // Handle Columns Block
    'core/column': ColumnBlock, // Handle Column Block
    'create-block/gus-button': CustomButton, // Handle Column Block
    // Add more block mappings here
  };

  // Get the appropriate component for the block
  const BlockComponent = blockComponents[blockName];

  if (!BlockComponent) {
    console.warn(`No component found for block: ${blockName}`);
    return null;
  }

  console.log("datt---", BlockComponent, block)

  return (
    <BlockComponent {...attrs} rendered={rendered}>
      {innerBlocks && innerBlocks.map((innerBlock, index) => (
        <BlockRenderer key={index} {...innerBlock}/>
      ))}
    </BlockComponent>
  );
};

export default BlockRenderer;