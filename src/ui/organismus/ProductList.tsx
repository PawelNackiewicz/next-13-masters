import type { Product } from '../types';
import { ProductListItem } from '@/ui/molecules';

type ProductListProps = {
    products: Product[]
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <ul className='grid grid-cols-4 gap-4'>{products.map(e => <ProductListItem key={e.id} product={e} />)}</ul>
    )
};