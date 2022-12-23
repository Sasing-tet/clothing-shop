import { useContext } from 'react';
import { Product } from '../../models';
import { ClothingShopContext } from '../Context';
import { ProductCard } from '../ProductCard';
import { ProductsWrapper, Title, CheckoutButton } from './Cart.styled';

export const Cart = () => {
  const { products, total } = useContext(ClothingShopContext);
  return (
    <>
      <Title>Your cart total is {total}.00$</Title>
      <ProductsWrapper>
      {products.map((product: Product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </ProductsWrapper>
      {/* {products.length > 0 && (
      <CheckoutButton>
        Checkout
      </CheckoutButton>)
      } */}
    </>
  );
};
