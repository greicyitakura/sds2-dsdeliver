import { useEffect, useState } from 'react';
import './styles.css';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { OrderLocationdata, Product } from './types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import React from 'react';
import Footer from '../Footer';
import { checkeIsSelected } from './helpers';



function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedproducts, setselectedProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();

    

    useEffect(() => {
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
    }, []);

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkeIsSelected(selectedproducts, product);
      
        if (isAlreadySelected) {
          const selected = selectedProducts.filter(item => item.id !== product.id);
          setSelectedProducts(selected);
        } else {
          setSelectedProducts(previous => [...previous, product]);
        }
      }

    return (
      <>
       <div  className="orders-container">
           <StepsHeader/>
           <ProductsList 
           products={products}
           onSelectProduct={handleSelectProduct}
           selectedProducts={selectedproducts}
           />
           <OrderLocation onChangeLocation={location => setOrderLocation(location)} 
           />
           <OrderSummary />
       </div>
       <Footer />
      </>
    )
}
export default Orders;