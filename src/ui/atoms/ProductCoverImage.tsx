import React from 'react';

type ProductCoverImageProps = {
    src: string,
    alt: string
}

export const ProductCoverImage: React.FC<ProductCoverImageProps> = ({ src, alt }) => {
    return (
        <img className='' src={src} alt={alt} />
    )
};