import React from 'react';
import {  ParagraphBlock,
    HeadingBlock,
    ImageBlock,
    GalleryBlock,
    ListBlock,
    QuoteBlock,
    CodeBlock,
    ButtonBlock,
    ColumnsBlock,
    SeparatorBlock,
    SpacerBlock,
    EmbedBlock,
    TableBlock,
    CoverBlock } from '@/components/blocks';


interface BlockRendererProps {
    block: any;
}

const BlockRenderer: React.FC<BlockRendererProps> = ({ block }) => {
    console.log('block', block);
    switch (block.blockName) {
        case 'core/paragraph':
            return <ParagraphBlock {...block} />;
        case 'core/image':
            return <ImageBlock {...block} />;
        case 'core/heading':
            return <HeadingBlock {...block} />;
        case 'core/gallery':
            return <GalleryBlock {...block} />;
        case 'core/list':
            return <ListBlock {...block} />;
        case 'core/quote':
            return <QuoteBlock {...block} />;
        case 'core/code':
            return <CodeBlock {...block} />;
        case 'core/button':
            return <ButtonBlock {...block} />;
        case 'core/columns':
            return <ColumnsBlock {...block} />;
        case 'core/separator':
            return <SeparatorBlock {...block} />;
        case 'core/spacer':
            return <SpacerBlock {...block} />;
        case 'core/embed':
            return <EmbedBlock {...block} />;
        case 'core/table':
            return <TableBlock {...block} />;
        case 'core/cover':
            return <CoverBlock {...block} />;
        default:
            return null;
    }
};

interface BlockGeneratorsProps {
    blocks: any[];
}

const BlockGenerators: React.FC<BlockGeneratorsProps> = ({ blocks }) => {
    console.log('blocks', blocks);
    return (
        <>
            {blocks.map((block, index) => (
                <BlockRenderer key={index} block={block} />
            ))}
        </>
    );
};

export default BlockGenerators;