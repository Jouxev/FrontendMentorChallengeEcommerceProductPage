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
  return (
    <Container>
      <Navbar />
      <ProductDescription />
    </Container>
  );
};
