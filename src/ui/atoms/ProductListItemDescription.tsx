import { formatMoney } from "@/utils";

type ProductListItemDescription = {
    name: string,
    category: string,
    price: number
}

export const ProductListItemDescription: React.FC<ProductListItemDescription> = ({ name, category, price }) => {
    return (
        <div className="flex w-full justify-between gap-4">
            <div>
                <p className="font-semibold text-lg">{name}</p>
                <p className="text-sm">{category}</p>
            </div>
            <p>{formatMoney(price / 100)}</p>
        </div>
    )
};