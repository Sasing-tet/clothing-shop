import styled from 'styled-components';


export const TitleWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, auto);
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;

export const ProductsWrapper = styled.div`
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
`;

export const CheckoutButton = styled.button`
  margin: auto;
  width: 100px;
  background-color: transparent;
  padding: 10px;
  border-radius: 8px;
  decoration: none;
  transition: 0.3s;
  :hover {
    color: white;
    background-color: black;
    transition: 0.3s;
  }
`;