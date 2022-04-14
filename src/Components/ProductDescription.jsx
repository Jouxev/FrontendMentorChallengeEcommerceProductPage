import { useState } from "react";

import styled from "styled-components";
import ProductImage1 from "../Assets/Images/image-product-1.jpg";
import ProductImage2 from "../Assets/Images/image-product-2.jpg";
import ProductImage3 from "../Assets/Images/image-product-3.jpg";
import ProductImage4 from "../Assets/Images/image-product-4.jpg";
import { ReactComponent as CartIcon } from "../Assets/Images/icon-cart.svg";
import { ReactComponent as CloseBtn } from "../Assets/Images/icon-close.svg";
import { ReactComponent as IconNext } from "../Assets/Images/icon-next.svg";
import { ReactComponent as IconPrevious } from "../Assets/Images/icon-previous.svg";
import { mobile } from "../responsive";

const Container = styled.div`
  position: relative;
  margin: 40px 0px;
  display: flex;
  ${mobile({
    flexDirection: "column",
    margin: "0",
  })}
`;

const Right = styled.div`
  margin: 40px 0px 40px 80px;
  flex: 1;
  justify-content: flex-end;
  ${mobile({
    margin: "0",
  })}
`;
const MainImageContainer = styled.div`
  position: relative;
`;
const Image = styled.img`
  height: 320px;
  width: auto;
  border-radius: 10px;
  cursor: pointer;
  ${(props) => props.large && { height: "400px" }}
  ${mobile({
    width: "100%",
    borderRadius: "0px",
  })}
`;
const OtherImagesContainer = styled.div`
  display: flex;
  margin: 20px 0px;
`;

const ImageThumbContainer = styled.div`
  width: 64px;
  height: 64px;
  margin-right: 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s ease all;
  &:hover {
    border: 2px solid var(--Orange);
    transform: scale(1.1);
  }
  ${(props) =>
    props.selected && {
      border: "2px solid var(--Orange)",
      "& > img": {
        opacity: "0.3",
      },
    }}
  ${mobile({
    display: "none",
  })}
`;
const ImageThumb = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

const Left = styled.div`
  flex: 1;
  margin: 40px 80px 40px 0px;

  ${mobile({
    margin: "0px 20px",
  })}
`;

const TitleContainer = styled.div``;
const BrandName = styled.h3`
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--Orange);
  ${mobile({
    margin: "0px 0px 5px 0px",
    fontSize: "12px",
  })}
`;
const ProductTitle = styled.h1`
  font-size: 32px;
  ${mobile({
    margin: "0",
    fontSize: "26px",
  })}
`;

const ProductDesc = styled.p`
  color: var(--Darkgrayishblue);
  font-size: 14px;
`;

const PriceContainer = styled.div`
  ${mobile({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center;",
  })}
`;
const FinalPrice = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 0px;
`;
const Price = styled.h2`
  font-weight: 700;
`;
const PriceOff = styled.span`
  color: var(--Orange);
  font-weight: 700;
  padding: 10px;
  font-size: 12px;
  border-radius: 5px;
  background-color: var(--Paleorange);
  margin-left: 10px;
`;
const PreviewsPrice = styled.p`
  color: var(--Grayishxblue);
  font-weight: 700;
  text-decoration: line-through;
  line-height: 0px;
`;

const ActionButtonContainer = styled.div`
  display: flex;
  margin: 40px 0px;
  ${mobile({
    flexDirection: "column",
  })}
`;
const QuantityContainer = styled.div`
  flex: 1;
  display: flex;
  height: 40px;
  font-size: 18px;
  width: auto;
  background-color: var(--Lightgrayishblue);
  padding: 10px 20px;
  font-weight: 700;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
  border-radius: 10px;
  ${mobile({
    padding: "15px 20px",
    marginRight: "0px",
    marginBottom: "10px",
  })}
`;
const Min = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--Orange);
  cursor: pointer;
  tansition: 0.2s ease all;
  &:hover {
    transform: scale(1.2);
  }
`;
const Qty = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Add = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--Orange);
  cursor: pointer;
  tansition: 0.2s ease all;
  &:hover {
    transform: scale(1.2);
  }
`;
const AddButton = styled.div`
  font-weight: 700;
  color: white;
  flex: 3;
  background-color: var(--Orange);
  display: flex;
  align-items: center;
  border-radius: 10px;
  -webkit-box-shadow: 0px 16px 12px 3px rgba(255, 125, 26, 0.3);
  cursor: pointer;
  box-shadow: 0px 16px 12px 3px rgba(255, 125, 26, 0.3);
  justify-content: center;
  & > svg {
    margin-right: 20px;
  }
  &:hover {
    opacity: 0.8;
  }
  ${mobile({
    height: "40px",
    padding: "15px 20px",
  })}
`;

const ImageGallery = styled.div`
  position: fixed;
  z-index: 9999 !important;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  ${mobile({
    display: "none",
    zIndex: "-1",
  })};
`;
const MainContainer = styled.div`
  height: 500px;
  width: 480px;
  padding: 30px 0px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CloseIcon = styled.div`
  right: auto;
  position: absolute;
  top: 0;
  font-size: 18px;
  cursor: pointer;
  right: 40px;
  & > svg {
    size: 18;
  }
`;
const NavigationArrow = styled.div`
  position: absolute;
  top: 200px;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => (props.right ? { right: "0" } : { left: "0" })};
  height: 50px;
  width: 50px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  z-index: 99 !important;
  transition: 0.2s ease all;
  &:hover {
    opacity: 0.8;
  }
  ${(props) =>
    mobile({
      right: props.right ? "10px" : "auto",
      left: props.right ? "auto" : "10px",
      height: "40px",
      width: "40px",
      top: "120px",
    })}
`;

export const ProductDescription = (props) => {
  const [selectedImageId, setselectedImageId] = useState(1);
  const [imageToPreview, setimageToPreview] = useState(ProductImage1);
  const [galleryOpened, setgalleryOpened] = useState(false);
  const [qtyToAdd, setqtyToAdd] = useState(0);

  const galleryNavigate = (direction) => {
    if (direction === "next") {
      if (selectedImageId < 4) {
        setselectedImageId(selectedImageId + 1);
      } else {
        setselectedImageId(1);
      }
    }
    if (direction === "previous") {
      if (selectedImageId > 1) {
        setselectedImageId(selectedImageId - 1);
      } else {
        setselectedImageId(4);
      }
    }
    switch (selectedImageId) {
      case 1:
        setimageToPreview(ProductImage1);
        break;
      case 2:
        setimageToPreview(ProductImage2);
        break;
      case 3:
        setimageToPreview(ProductImage3);
        break;
      case 4:
        setimageToPreview(ProductImage4);
        break;
    }
  };

  const setQty = (action) => {
    if (action === "min") {
      if (qtyToAdd > 0) {
        setqtyToAdd(qtyToAdd - 1);
      }
    }
    if (action === "add") {
      setqtyToAdd(qtyToAdd + 1);
    }
  };
  return (
    <Container>
      <Right>
        <MainImageContainer>
          <NavigationArrow
            onClick={() => galleryNavigate("previous")}
            className="MobileOnly"
          >
            <IconPrevious />
          </NavigationArrow>
          <Image
            src={imageToPreview}
            alt="product Image"
            onClick={() => setgalleryOpened(!galleryOpened)}
          />
          <NavigationArrow
            right
            onClick={() => galleryNavigate("next")}
            className="MobileOnly"
          >
            <IconNext />
          </NavigationArrow>
        </MainImageContainer>
        <OtherImagesContainer>
          <ImageThumbContainer
            selected={selectedImageId === 1}
            onClick={() => {
              setselectedImageId(1);
              setimageToPreview(ProductImage1);
            }}
          >
            <ImageThumb src={ProductImage1} alt="image thumb" />
          </ImageThumbContainer>
          <ImageThumbContainer
            selected={selectedImageId === 2}
            onClick={() => {
              setselectedImageId(2);
              setimageToPreview(ProductImage2);
            }}
          >
            <ImageThumb src={ProductImage2} alt="image thumb" />
          </ImageThumbContainer>
          <ImageThumbContainer
            selected={selectedImageId === 3}
            onClick={() => {
              setselectedImageId(3);
              setimageToPreview(ProductImage3);
            }}
          >
            <ImageThumb src={ProductImage3} alt="image thumb" />
          </ImageThumbContainer>
          <ImageThumbContainer
            selected={selectedImageId === 4}
            onClick={() => {
              setselectedImageId(4);
              setimageToPreview(ProductImage4);
            }}
          >
            <ImageThumb src={ProductImage4} alt="image thumb" />
          </ImageThumbContainer>
        </OtherImagesContainer>
      </Right>
      <Left>
        <TitleContainer>
          <BrandName> SNEAKER COMPANY </BrandName>
          <ProductTitle>Fall Limited Edition Sneakers </ProductTitle>
        </TitleContainer>
        <ProductDesc>
          These low-profile sneakers are our perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </ProductDesc>
        <PriceContainer>
          <FinalPrice>
            <Price> $125.00 </Price>
            <PriceOff> 50% </PriceOff>
          </FinalPrice>
          <PreviewsPrice>$250</PreviewsPrice>
        </PriceContainer>
        <ActionButtonContainer>
          <QuantityContainer>
            <Min onClick={() => setQty("min")}> - </Min>
            <Qty> {qtyToAdd} </Qty>
            <Add onClick={() => setQty("add")}> + </Add>
          </QuantityContainer>
          <AddButton
            onClick={() => {
              props.cartCount(qtyToAdd);
            }}
          >
            <CartIcon className="btnIcon" />
            add to cart
          </AddButton>
        </ActionButtonContainer>
      </Left>
      {galleryOpened && (
        <ImageGallery>
          <MainContainer>
            <NavigationArrow onClick={() => galleryNavigate("previous")}>
              <IconPrevious />
            </NavigationArrow>
            <CloseIcon onClick={() => setgalleryOpened(!galleryOpened)}>
              <CloseBtn className="closeIconWhite" />
            </CloseIcon>
            <MainImageContainer>
              <Image src={imageToPreview} alt="product Image" large />
            </MainImageContainer>
            <OtherImagesContainer>
              <ImageThumbContainer
                selected={selectedImageId === 1}
                onClick={() => {
                  setselectedImageId(1);
                  setimageToPreview(ProductImage1);
                }}
              >
                <ImageThumb src={ProductImage1} alt="image thumb" />
              </ImageThumbContainer>
              <ImageThumbContainer
                selected={selectedImageId === 2}
                onClick={() => {
                  setselectedImageId(2);
                  setimageToPreview(ProductImage2);
                }}
              >
                <ImageThumb src={ProductImage2} alt="image thumb" />
              </ImageThumbContainer>
              <ImageThumbContainer
                selected={selectedImageId === 3}
                onClick={() => {
                  setselectedImageId(3);
                  setimageToPreview(ProductImage3);
                }}
              >
                <ImageThumb src={ProductImage3} alt="image thumb" />
              </ImageThumbContainer>
              <ImageThumbContainer
                selected={selectedImageId === 4}
                onClick={() => {
                  setselectedImageId(4);
                  setimageToPreview(ProductImage4);
                }}
              >
                <ImageThumb src={ProductImage4} alt="image thumb" />
              </ImageThumbContainer>
            </OtherImagesContainer>
            <NavigationArrow right onClick={() => galleryNavigate("next")}>
              <IconNext />
            </NavigationArrow>
          </MainContainer>
        </ImageGallery>
      )}
    </Container>
  );
};
