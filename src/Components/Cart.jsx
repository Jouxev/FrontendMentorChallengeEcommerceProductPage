import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background-color: white;
  margin-right: 20px;
  margin-top: 90px;
  height: 240px;
  width: 320px;
  border-radius: 5px;
  z-index: 99 !important;
  -webkit-box-shadow: 0px 9px 12px 3x rgba(29, 32, 37, 0.3);
  box-shadow: 0px 9px 12px 3px rgba(29, 32, 37, 0.3);
  ${mobile({
    marginRight: "10px",
  })}
`;

const TitleContainer = styled.div`
  height: 30px;
  border-bottom: 0.5px solid var(--Grayishxblue);
  padding: 0px 20px;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 18px;
`;

const CartContent = styled.div`
  color: var(--Darkgrayishblue);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 170px;
  font-weight: 700;
`;

export const Cart = () => {
  return (
    <Container>
      <TitleContainer>
        <Title> Cart </Title>
      </TitleContainer>
      <CartContent>Your cart is empty</CartContent>
    </Container>
  );
};
