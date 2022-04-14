import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../Assets/Images/logo.svg";
import { ReactComponent as CartIcon } from "../Assets/Images/icon-cart.svg";
import ProfilePic from "../Assets/Images/image-avatar.png";
import { ReactComponent as Hamburger } from "../Assets/Images/icon-menu.svg";
import { ReactComponent as CloseIcon } from "../Assets/Images/icon-close.svg";
import { mobile } from "../responsive";
import { Cart } from "./Cart";
import { SideNav } from "./SideNav";

const Container = styled.nav`
  position: relative;
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid var(--Grayishxblue);
  ${mobile({
    width: "auto",
    margin: "0px 20px",
    border: "none",
  })}
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
`;

const Links = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
    display: "none",
  })}
`;
const Link = styled.li`
  list-style: none;
  color: var(--Darkgrayishblue);
  margin-right: 20px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    90deg,
    var(--Orange) 100%,
    var(--Orange) 0%
  );
  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: 0% 4px;
  transition: background-size 0.4s ease;
  cursor: pointer;
  &:hover {
    color: var(--Veryvarkblue);
    background-size: 100% 4px;
  }
`;
const Left = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;
const Avatar = styled.img`
  margin-left: 40px;
  witdh: 48px;
  height: 48px;
  cursor: pointer;
  transition: border 0.2s ease;
  &:hover {
    border: 2px solid var(--Orange);
    border-radius: 50%;
  }
  ${mobile({
    width: "32px;",
    height: "32px",
  })}
`;

export const Navbar = () => {
  const [menuOpened, setmenuOpened] = useState(false);
  const [cartOpened, setcartOpened] = useState(false);
  const [sideNavOpened, setsideNavOpened] = useState(false);
  return (
    <Container>
      <Right>
        {!menuOpened ? (
          <Hamburger
            className="HamburgerMenu"
            onClick={() => setmenuOpened(!menuOpened)}
          />
        ) : (
          <CloseIcon
            className="HamburgerMenu"
            onClick={() => setmenuOpened(!menuOpened)}
          />
        )}

        <Logo />
        <Links>
          <Link>Collections</Link>
          <Link>Men</Link>
          <Link>Women</Link>
          <Link>About</Link>
          <Link>Contact</Link>
        </Links>
      </Right>
      <Left>
        <CartIcon
          className="cartIcon"
          onClick={() => setcartOpened(!cartOpened)}
        />
        <Avatar src={ProfilePic} alt="Profile picture" />
      </Left>
      {cartOpened && <Cart />}
      {menuOpened && <SideNav />}
    </Container>
  );
};
