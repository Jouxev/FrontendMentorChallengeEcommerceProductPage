import styled from "styled-components";
import { mobile } from "../responsive";
import ProductImage1 from "../Assets/Images/image-product-1.jpg";
import { ReactComponent as DeleteIcon } from "../Assets/Images/icon-delete.svg";
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
const ProductDesc = styled.div`
display flex;
align-items: center;
justify-content: space-between;
width: auto;
margin: 20px 20px;
color: var(--Darkgrayishblue);
;`;
const ProductImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 5px;
`;
const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProductTitle = styled.h1`
  font-size: 14px;
  font-weight: 400;
  line-height: 0px;
`;
const ProductPriceDetail = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 0px;
`;
const CheckoutButton = styled.div`
  margin: 20px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--Orange);
  color: white;
  border-radius: 10px;
  padding: 15px 0px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s ease all;
  &:hover {
    opacity: 0.8;
  }
`;

export const Cart = (props) => {
  return (
    <Container>
      <TitleContainer>
        <Title> Cart </Title>
      </TitleContainer>
      {props.cartCount <= 0 ? (
        <CartContent>Your cart is empty</CartContent>
      ) : (
        <>
          <ProductDesc>
            <ProductImage src={ProductImage1} alt="product Image" />
            <ProductDetail>
              <ProductTitle>Fall Limited Edition Sneakers </ProductTitle>
              <ProductPriceDetail>
                $125 X {props.cartCount}{" "}
                <strong style={{ color: "var(--Veryvarkblue)" }}>
                  ${props.cartCount * 125}
                </strong>
              </ProductPriceDetail>
            </ProductDetail>
            <DeleteIcon
              style={{ cursor: "pointer" }}
              onClick={() => props.resetCart()}
            />
          </ProductDesc>
          <CheckoutButton>Checkout</CheckoutButton>
        </>
      )}
    </Container>
  );
};
