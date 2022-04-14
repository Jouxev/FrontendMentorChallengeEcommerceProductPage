import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: none;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9998 !important;
  margin: 0px -20px;
  background-color: rgba(0, 0, 0, 0.2);
  ${mobile({
    display: "block",
  })}
`;
const SideMenu = styled.div`
  background-color: white;
  height: 100vh;
  width: 240px;
  display: flex;
  justify-content: flex-start;
  -webkit-box-shadow: 9px 0px 12px 3px rgba(29, 32, 37, 0.3);
  box-shadow: 9px 0px 12px 3px rgba(29, 32, 37, 0.3);
`;

const Links = styled.ul`
  margin-top: 120px;
`;
const Link = styled.li`
  list-style: none;
  margin: 10px -10px;
  font-weight: 700;
  color: var(--Veryvarkblue);
  curosor: pointer;
  &:hover {
    color: var(--Darkgrayishblue);
  }
`;

export const SideNav = () => {
  return (
    <Container>
      <SideMenu>
        <Links>
          <Link> Collection</Link>
          <Link> Men</Link>
          <Link> Women</Link>
          <Link> About</Link>
          <Link> Contact</Link>
        </Links>
      </SideMenu>
    </Container>
  );
};
