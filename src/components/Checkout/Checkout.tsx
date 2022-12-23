import { useContext } from 'react';
import { Product } from '../../models';
import { ClothingShopContext } from '../Context';
import { ProductCard } from '../ProductCard';
import { ProductsWrapper, Title } from './Checkout.styled';

export const Checkout = () => {
  const { products, total } = useContext(ClothingShopContext);
  return (
    <>
      <Title>test</Title>
      <ProductsWrapper>
      {products.map((product: Product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </ProductsWrapper>
    </>
  );
};
