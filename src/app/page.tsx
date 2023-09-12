import { ProductList } from "../ui/organismus/ProductList";
import type { Product } from "../ui/types";

const productList: Product[] = [
	{
		id: '1',
		category: 'Accessories',
		name: 'Some Name',
		price: 3000,
		coverImage: {
			alt: 'some name',
			src: '/product_1.jpeg'
		}
	},
	{
		id: '2',
		category: 'Accessories',
		name: 'Some Name',
		price: 3000,
		coverImage: {
			alt: 'some name',
			src: '/product_2.jpeg'
		}
	},
	{
		id: '3',
		category: 'Accessories',
		name: 'Some Name',
		price: 3000,
		coverImage: {
			alt: 'some name',
			src: '/product_3.jpeg'
		}
	},
	{
		id: '4',
		category: 'Accessories',
		name: 'Some Name',
		price: 3000,
		coverImage: {
			alt: 'some name',
			src: '/product_4.jpeg'
		}
	},
]

export default function Home() {
	return (
		<main className="p-10">
			<ProductList products={productList} />
		</main>
	);
}
