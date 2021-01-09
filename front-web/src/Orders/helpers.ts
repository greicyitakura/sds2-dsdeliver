import ProductCard from "./ProductCard";
import { Product } from "./types";

export function checkIsSelected(selectProducts: Product[], product: Product){
    return selectProducts.some(item => item.id === product.id)
}

export function formatPrice(price: number) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    return formatter.format(price);
    }    
