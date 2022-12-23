import {
  AddButton,
  AddButton2,
  SubTitle,
  TextContainer,
  Title,
  Wrapper,
} from "./ProductCard.styled";

import { Product } from "../../models";
import { useContext, useState, useEffect } from "react";
import { ClothingShopContext } from "../Context";
import { FiGift } from "react-icons/fi";
import { FaGift } from "react-icons/fa";

export const ProductCard = ({ name, imageUrl, price, quantity }: Product) => {
  const { products, addToCart, removeFromCart, saved, removeFromWishlist, addToWishlist } =
    useContext(ClothingShopContext);
  const [isInCart, setIsInCart] = useState(false);
  const [isInWish, setIsInWish] = useState(false);

  useEffect(() => {
    const cartItems = products.find(
      (product: { name: string }) => product.name === name
    );
    const wishItems = saved.find(
      (product: { name: string }) => product.name === name
    );

    if (cartItems && wishItems) {
      setIsInCart(true);
      setIsInWish(true);
    } else if (!cartItems && wishItems) {
      setIsInCart(false);
      setIsInWish(true);
    } else if (cartItems && !wishItems) {
      setIsInCart(true);
      setIsInWish(false);
    } else {
      setIsInCart(false);
      setIsInWish(false);
    }
  }, [products, saved, name]);

  const handleClick = () => {
    const product = { name, imageUrl, price, quantity };
    if (isInCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  const handleWishlist = () => {
    const product = { name, imageUrl, price, quantity };
    if (isInWish) {
      removeFromWishlist(product);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Wrapper background={imageUrl}>
      <AddButton2 isInWish={isInWish} onClick={handleWishlist}>
        <p>{isInWish ? <FiGift /> : <FaGift />}</p>
      </AddButton2>
      <AddButton isInCart={isInCart} onClick={handleClick}>
        <p>{isInCart ? "-" : "+"}</p>
      </AddButton>
      <TextContainer>
        <Title>{name}</Title>
        <SubTitle>{price}.00$</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};
