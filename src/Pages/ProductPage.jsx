import { useState } from "react";
import stled from "styled-components";
import { Navbar, ProductDescription } from "../Components";
import { mobile } from "../responsive";

const Container = stled.nav`
height: 100vh;
padding: 0px 80px;

${mobile({
  padding: "0",
  width: "100vw",
})}
`;

export const ProductPage = () => {
  const [cartCount, setcartCount] = useState(0);
  const resetCart = () => {
    setcartCount(0);
  };

  return (
    <Container>
      <Navbar cartCount={cartCount} resetCart={() => resetCart()} />
      <ProductDescription
        cartCount={(qty) => {
          setcartCount(cartCount + qty);
        }}
      />
    </Container>
  );
};
