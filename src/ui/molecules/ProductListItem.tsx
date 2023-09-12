import React from 'react';
import type { Product } from '../types';
import { ProductCoverImage, ProductListItemDescription } from '@/ui/atoms';

type ProductListItemProps = {
    product: Product
}

export const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
    return (
        <li className='border p-4 h-full'>
            <article className='h-full  flex flex-col justify-between'>
                <ProductCoverImage alt={product.coverImage.alt} src={product.coverImage.src} />
                <ProductListItemDescription {...product} />
            </article>
        </li>
    )
};