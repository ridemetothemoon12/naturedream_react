import React from 'react'
import { Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import "swiper/css";
import "swiper/css/pagination";
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
SwiperCore.use([Pagination, Autoplay]);

const ContentMainBannerSwiperWrap = styled.div`
  width: 100%;
  height: 793px;
  @media (min-width: 641px) and (max-width: 1024px) {
      height: 568px;
  }
  @media (max-width: 1024px) {
      height: 680px;
  }
`
const SwiperSlidesBackground = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.background || "none"};
  background-size: cover;
  background-position: center;
`
const ContentBakery = styled.div`
  width: 100%;
  height: auto;
  margin-top: 150px;
`
const ContentBakeryWrap = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  height: 100%;
  @media (min-width: 641px) and (max-width: 1024px) {
    max-width: 800px;
  }
` 
const ContentBakeryTitleAndButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  justify-content: space-between;
  align-items: flex-end;
`
const ContentBakeryTitleWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  justify-content: space-between;
  align-items: flex-end;
`
const ContentBakeryTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: brown;
  font-family: score5;
  p {
    font-family: score3;
    font-size: 16px;
    color: black;
    font-weight: normal;
  }
`
const ContentButton = styled.div`
  width: auto;
  cursor: pointer;
  p {
    width: 113px;
    height: 27px;
    background-color: white;
    text-align: center;
    line-height: 25px;
    color: brown;
    border: 1px solid brown;
    border-radius: 3px;
    transition: .3s;
    cursor: pointer;
  }
  &:hover {
    p {
    background-color: brown;
    color: white;
    }
  }
`
const ContentBakeryTop = styled.div`
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
  font-size: 14px;
  margin-right: 124px;
  font-family: score4;
  @media (min-width: 641px) and (max-width: 1024px) {
    max-width: 800px;
    margin-right: 0px;
  }
`
const ContentBakeryItemTop = styled.div`
  width: 20%;
  img {
    width: 100%;
    box-shadow: 5px 5px 3px 1px rgba(0,0,0,0.3);
    margin-bottom: 10px;
  }
  h3 {
    position: relative;
    font-size: 17px;
    &::after {
      margin-left: 5px;
      position: absolute;
      bottom: 1px;
      color: rgb(190, 190, 190);
      font-size: 13px;
    }
  }
  &:nth-child(1) {
  h3 {
      &::after {
        content: "(75g)"
      }
    }
  }
  &:nth-child(2) {
  h3 {
      &::after {
        content: "(300g)"
      }
    }
  }
  &:nth-child(3) {
  h3 {
      &::after {
        content: "(65g)"
      }
    }
  }
  &:nth-child(4) {
  h3 {
      &::after {
        content: "(70g)"
      }
    }
  }
`
const ContentBakeryBottom = styled.div`
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
  font-size: 14px;
  margin-left: 124px;
  margin-top: 30px;
  font-family: score4;
  @media (min-width: 641px) and (max-width: 1024px) {
    max-width: 800px;
    margin-left: 0px;
  }
`
const ContentBakeryItemBottom = styled.div`
  width: 20%;
  img {
    width: 100%;
    box-shadow: 5px 5px 3px 1px rgba(0,0,0,0.3);
    margin-bottom: 10px;
  }
  h3 {
    position: relative;
    font-size: 17px;
    &::after {
      margin-left: 5px;
      position: absolute;
      bottom: 1px;
      color: rgb(190, 190, 190);
      font-size: 13px;
    }
  }
  &:nth-child(1) {
    h3 {
      &::after {
        content: "(520g)"
      }
    }
  }
  &:nth-child(2) {
    h3 {
      &::after {
        content: "(620g)"
      }
    }
  }
  &:nth-child(3) {
    h3 {
      &::after {
        content: "(670g)"
      }
    }
  }
  &:nth-child(4) {
    h3 {
      &::after {
        content: "(520g)"
      }
    }
  }
`
const ContentGroceriesGlobal = styled.div`
  margin-top: 150px;
  width: 100%;
  height: 460px;
  background-color: #fffaef;
  @media (min-width: 641px) and (max-width: 1024px) {
    height: 400px;
  }
`
const ContentGroceriesGlobalWrap = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (min-width: 641px) and (max-width: 1024px) {
    max-width: 800px;
  }
`
const ContentGroceriesGlobalTitleAndButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  color: #a18e5d;
  justify-content: space-between;
  align-items: flex-end;
`
const ContentGroceriesGlobalTitleWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
const ContentGroceriesGlobalTitle = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  font-size: 32px;
  font-weight: bold;
  border-right: 3px solid #a18e5d;
  padding-right: 30px;
  margin-right: 30px;
  font-family: score5;
  p {
    font-family: score4;
    font-size: 16px;
    font-weight: normal;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    border: none;
  }
`
const ContentGroceriesGlobalTitleSub = styled.div`
  font-family: score4;
  width: 50%;
  font-size: 15px;
`
const ContentGroceriesGlobalItemWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const ContentGroceriesGlobalItemImgWrap = styled.div`
  width: 100%;
  max-height: 240px;
  overflow: hidden;
  img {
    width: 100%;
    margin-bottom: 10px;
  }
`
const ContentGroceriesGlobalItem = styled.div`
  font-family: score4;
  width: 20%;
  background-color: white;
  box-shadow: 5px 5px 3px 1px rgba(0,0,0,0.3);
  cursor: pointer;
  overflow: hidden;
  img {
    transition: .3s;
  }
  &:nth-child(1) {
    h3 {
      &::after {
        content: "(200g)"
      }
    }
    p {
      &:nth-child(2)::after {
        content: "3,790원"
      }
      &:nth-child(3)::after {
        content: "2,750원";
      }
    }
  }
  &:nth-child(2) {
    h3 {
      &::after {
        content: "(30g)"
      }
    }
    p {
      &:nth-child(2)::after {
        content: "3,790원"
      }
      &:nth-child(3)::after {
        content: "1,700원";
      }
    }
  }
  &:nth-child(3) {
    h3 {
        &::after {
            content: "(150g)"
        }
    }
    p {
      &:nth-child(2)::after {
        content: "3,790원";
      }
      &:nth-child(3)::after {
        content: "2,700원";
      }
    }
  }
  &:nth-child(4) {
    h3 {
      &::after {
        content: "1개"
      }
    }
    p {
      &:nth-child(2)::after {
        content: "8,200원"
      }
      &:nth-child(3)::after {
        content: "5,600원";
      }
    }
  }
  &:hover {
    img {
      transform: scale(1.05);
    }
  } 
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 25%;
  }
`
const ContentGroceriesGlobalItemText = styled.div`
  margin-top: 3px;
  margin-left: 10px;
  h3 {
    margin-bottom: 3px;
    position: relative;
    &::after {
      margin-left: 5px;
      position: absolute;
      bottom: 1px;
      color: rgb(190, 190, 190);
      font-size: 13px;
    }
  } 
  p {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-right: 3px;
    &:nth-child(3)::after {
        color: #a91054;
    }
  } 
`
const ContentMealKit = styled.div`
  margin-top: 150px;
  width: 100%;
  height: 440px;
`
const ContentMealKitWrap = styled.div`
  display: flex;
  height: 100%;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  @media (min-width: 641px) and (max-width: 1024px) {
    max-width: 800px;
    flex-direction: column;
    height: 100%;
  }
`
const ContentMealKitTitleAndButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 440px;
  justify-content: space-between;
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 100%;
    height: fit-content;
    align-items: center;
    margin-bottom: 10px;
  }
`
const ContentMealKitTitleWrap = styled.div`
`
const ContentMealKitTitle = styled.div`
  font-size: 32px;
  font-family: score5;
  font-weight: bold;
  color: #419b3a;
  p {
    font-family: score4;
    font-size: 16px;
    color: black;
    font-weight: normal;
  }
`
const MealKitContentButton = styled.div`
  align-self: flex-end;
  width: auto;
  cursor: pointer;
  p {
    width: 113px;
    height: 27px;
    background-color: white;
    text-align: center;
    line-height: 25px;
    color: #419b3a;
    border: 1px solid #419b3a;
    border-radius: 3px;
    transition: .3s;  
    cursor: pointer;
  }
  &:hover {
      p {
      background-color: #419b3a;
      color: white;
      }
  }
`
const ContentMealKitItemWrap = styled.div`
  max-width: 900px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 210px);
  grid-template-rows: repeat(2, 210px);
  gap: 20px;
  @media (min-width: 641px) and (max-width: 1024px) {
    max-width: 900px;
    height: 340px;
    grid-template-columns: repeat(3, 30%);
    grid-template-rows: none;
    justify-content: center;
  }
`
const ContentMealKitItem = styled.div`
  width: auto;
  position: relative;
  font-family: score4;
  box-shadow: 5px 5px 3px 1px rgba(0,0,0,0.3);
  overflow: hidden;
  .item {
    width: auto;
    height: auto;
    position: relative;
    box-shadow: $shadow;
    overflow: hidden;
  }
  img {
    width: 100%;
    transition: .3s;
  }
  &:nth-child(1) {
      grid-column: 1/3;
      grid-row: 1/3;
  }
  &:nth-child(1) {
      p {
          &:nth-child(2)::after {
              content: "21,100원"
          }
          &:nth-child(3)::after {
              content: "14,150원";
          }
      }
  }
  &:nth-child(2) {
      p {
          &:nth-child(2)::after {
              content: "19,290원"
          }
          &:nth-child(3)::after {
              content: "10,150원";
          }
      }
  }
  &:nth-child(3) {
      p {
          &:nth-child(2)::after {
              content: "18,850원";
          }
          &:nth-child(3)::after {
              content: "14,300원";
          }
      }
  }
  &:nth-child(4) {
      p {
          &:nth-child(2)::after {
              content: "15,750원"
          }
          &:nth-child(3)::after {
              content: "11,120원";
          }
      }
  } 
  &:nth-child(5) {
      p {
          &:nth-child(2)::after {
              content: "20,150원"
          }
          &:nth-child(3)::after {
              content: "19,230원";
          }
      }
  }
  &:hover {
      img {
          transform: scale(1.05);
      }
      > div {
        transform: translateY(100%);
      }
  }
`
const ContentMealKitItemText = styled.div`
  transition: .5s;
  z-index: 1;
  width: 100%;
  padding: 10px 0;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,0.3);
  color: white;
  h3, p {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: 10px;
    width: 90%;
    font-size: 16px;
  }
  span {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: fit-content;
    background-color: #a91054;
    padding: 0 3px;
  } 
`
const ContentSnacksItem = styled.div`
  width: 20%;
  background-color: white;
  font-family: score4;
  box-shadow: 5px 5px 3px 1px rgba(0,0,0,0.3);
  cursor: pointer;
  overflow: hidden;
  .txt {
      margin-top: 3px;
      margin-left: 10px;
      h3 {
          margin-bottom: 3px;
          position: relative;
          &::after {
              margin-left: 1px;
              position: absolute;
              bottom: 1px;
              color: rgb(190, 190, 190);
              font-size: 13px;
          }
      }
      p {
          @include header_flex(flex, wrap);
          justify-content: space-between;
          margin-right: 3px;
          &:nth-child(3)::after {
              color: $main_color;
          }
      }  
  }
  &:nth-child(1) {
      h3 {
          &::after {
              content: "(170g)"
          }
      }
      p {
          &:nth-child(2)::after {
              content: "5,100원"
          }
          &:nth-child(3)::after {
              content: "3,400원";
          }
      }
  }
  &:nth-child(2) {
      h3 {
          &::after {
              content: "(48g)"
          }
      }
      p {
          &:nth-child(2)::after {
              content: "3,290원"
          }
          &:nth-child(3)::after {
              content: "2,190원";
          }
      }
  }
  &:nth-child(3) {
      h3 {
          &::after {
              content: "(200g)"
          }
      }
      p {
          &:nth-child(2)::after {
              content: "5,850원";
          }
          &:nth-child(3)::after {
              content: "4,000원";
          }
      }
  }
  &:nth-child(4) {
      h3 {
          &::after {
              content: "(200g)"
          }
      }
      p {
          &:nth-child(2)::after {
              content: "5,850원"
          }
          &:nth-child(3)::after {
              content: "4,000원";
          }
      }
  } 
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 25%;
  }
`
const ContentSnacksImgWrap = styled.div`
  width: 100%;
  max-height: 240px;
  overflow: hidden;
  img {
    width: 100%;
    margin-bottom: 10px;
    transition: all .3s linear;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`
const ContentPet = styled.div`
  margin-top: 150px;
  width: 100%;
  height: 460px;
`
const ContentPetTitle = styled.div`
  color: #ec4a97;
  position: relative;
  width: fit-content;
  height: fit-content;
  font-size: 32px;
  font-weight: bold;
  padding-right: 30px;
  margin-right: 30px;
  font-family: score5;
  p {
    font-family: score4;
    font-size: 16px;
    font-weight: normal;
  }
`
const PetContentButton = styled.div`
  align-self: flex-end;
  width: auto;
  cursor: pointer;
  p {
    width: 113px;
    height: 27px;
    background-color: white;
    text-align: center;
    line-height: 25px;
    color: #ec4a97;
    border: 1px solid #ec4a97;
    border-radius: 3px;
    transition: .3s;  
    cursor: pointer;
  }
  &:hover {
      p {
      background-color: #ec4a97;
      color: white;
      }
  }
`
const ContentPetItem = styled.div`
  width: 20%;
  cursor: pointer;
  font-family: score4;
  &:nth-child(1) {
      h3 {
          &::after {
              content: "(160g)*4"
          }
      }
      p {
          &:nth-child(2)::after {
              content: "5,100원"
          }
          &:nth-child(3)::after {
              content: "3,400원";
          }
      }
  }
  &:nth-child(2) {
      h3 {
          &::after {
              content: "(120g),15g*8개"
          }
      }
      p {
          &:nth-child(2)::after {
              content: "3,290원"
          }
          &:nth-child(3)::after {
              content: "2,190원";
          }
      }
  }
  &:nth-child(3) {
      h3 {
          &::after {
              content: "(60g)"
          }
      }
      p {
          &:nth-child(2)::after {
              content: "5,850원";
          }
          &:nth-child(3)::after {
              content: "4,000원";
          }
      }
  }
  &:nth-child(4) {
      h3 {
          &::after {
              content: "(60g),10g*6개"
          }
      }
      p {
          &:nth-child(2)::after {
              content: "5,850원"
          }
          &:nth-child(3)::after {
              content: "4,000원";
          }
      }
  } 
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 25%;
  }
`
const ContentPetItemText = styled.div`
  margin-top: 5px;
  h3 {
      margin-bottom: 3px;
      position: relative;
      &::after {
          display: block;
          bottom: 1px;
          color: rgb(190, 190, 190);
          font-size: 13px;
      }
  }
  p {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-right: 3px;
      &:nth-child(3)::after {
          color: #a91054;
      }
  }  
`
const ContentPetImgWrap = styled.div`
      width: 100%;
      overflow: hidden;
      font-size: 0;
      box-shadow: 3px 3px 3px 1px rgba(0,0,0,0.3);
      img {
        width: 100%;
          transition: .3s;
      }
  &:hover {
      img {
          transform: scale(1.1);
      }
  }
`
const ContentCampaign = styled.div`
  width: 100%;
  height: 360px;
  margin-top: 150px;
  background-color: #cfd8ef;
`
const ContentCampaignWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  @media (min-width: 641px) and (max-width: 1024px) {
    max-width: 800px;
    height: 100%;
    align-items: center;
  }
`
const ContentCampaignTitle = styled.div`
  color: #7e90ff;
  font-family: score5;
  font-size: 32px;
  p {
    font-family: score4;
    font-size: 16px;
  }
`
const ContentCampaignItemImagWrap = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`
const ContentCampaignItemWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 100%;
  }
`
const ContentCampaignItem = styled.div`
  position: relative;
  color: white;
  width: 20%;
  height: 230px;
  font-family: score4;
  box-shadow: 3px 3px 3px 1px rgba(0,0,0,0.3);
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 25%;
  }
`
const ContentCampaignItemText = styled.div`
  position: relative;
  padding: 5px;
  height: 81px;
  position: absolute;
  bottom: 0;
  font-size: 15px;
  p {
    font-size: 13px;
  } 
  @media (min-width: 641px) and (max-width: 1024px) {
    width: fit-content;
    height: fit-content;
  }
`
const ContentCustom = styled.div`
  margin-top: 150px;
  width: 100%;
  height: 460px;
  @media (min-width: 641px) and (max-width: 1024px) {
    height: 360px;
  }
`
const ContentCustomTitle = styled.div`
  font-family: score5;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 15px;
  font-size: 22px;
  p:nth-child(1) {
      margin-right: 520px;
      span {
          color: #a91054;
      }
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    max-width: 800px;
      p:nth-child(1) {
        margin-right: 18%;
        span {
            color: #a91054;
        }
    }
  }
`
const ContentCustomWrap = styled.div`
  font-family: score4;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (min-width: 641px) and (max-width: 1024px) {
    max-width: 800px;
  }
`
const ContentCustomMembership = styled.div`
  width: 640px;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 30%;
  }
`
const ContentCustomMembershipItem = styled.div`
  display: flex;
  width: 310px;
  height: 90px;
  background-color: white;
  box-shadow: 3px 3px 3px 1px rgba(0,0,0,0.3);
  font-size: 14px;
  align-items: center;
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 100%;
    height: 45px;
    border-radius: 50px;
    background-color: #a1b5ed;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const ContentCustomMembershipItemText = styled.div`
  padding: 10px;
  h3 {
    font-size: 18px;
    width: fit-content;
    display: inline-block;
  }
`
const ContentCustomQna = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 440px;
  height: fit-content;
`
const ContentCustomQnaText = styled.div`
  p {
  width: fit-content;
  font-size: 16px;
  margin: 0 0 20px 0;
  &:nth-child(2)::after {
    content: "(점심시간 : 12시 ~ 13시)";
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    }
  }
  span {
    font-size: 32px;
    font-weight: bold;
    color: #a91054;
  }
`
const ContentCustomQnaButtonWrap = styled.div`
  color: white;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`
const ContentCustomQnaButton = styled.div`
  width: 138px;
  height: 30px;
  background-color: #a1b5ed;
  text-align: center;
  line-height: 30px;
  border-radius: 50px;
  box-shadow: 3px 3px 3px 1px rgba(0,0,0,0.3);
  &:nth-child(2) {
      margin: 30px 0;
  }
`
function Main() {
      
  const IsDesktop = useMediaQuery({ query: "(min-width: 1025px"});
  const IsTablet = useMediaQuery({ query: "(min-width: 641px) and (max-width: 1024px)" });
  const IsMobile = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <>
      <ContentMainBannerSwiperWrap>
        <Swiper
            style={{
            width: "100%",
            height: "100%",
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
              }}
              loop={true}
              loopedSlides={1}>
                <SwiperSlide><SwiperSlidesBackground background="url('./images/banner1.png')" /></SwiperSlide>
                <SwiperSlide><SwiperSlidesBackground background="url('./images/banner2.png')" /></SwiperSlide>
                <SwiperSlide><SwiperSlidesBackground background="url('./images/banner3.png')" /></SwiperSlide>
                <SwiperSlide><SwiperSlidesBackground background="url('./images/banner4.png')" /></SwiperSlide>
          </Swiper>
        </ContentMainBannerSwiperWrap>

        <ContentBakery>
          <ContentBakeryWrap>
            <ContentBakeryTitleAndButton>
              <ContentBakeryTitle>
                <p>수입밀 섞지않은</p>
                <h3>우리밀 베이커리</h3>
              </ContentBakeryTitle>
              <ContentButton>
                <p>더보기</p>
              </ContentButton>
            </ContentBakeryTitleAndButton>
            <ContentBakeryTop>
              <ContentBakeryItemTop>
                <img src='./images/우리밀슈크림.jpg'></img>
                { IsDesktop && <p>100% 우리밀로 만든 빵에 달콤한 슈크림을 가득 채운</p>}
                <h3>슈크림빵</h3>
                </ContentBakeryItemTop>
              <ContentBakeryItemTop>
                <img src='./images/우리밀더블베리.jpg'></img>
                { IsDesktop && <p>우리 호밀과 섬유질이 풍부한 블루베리와 크랜베리로 만든</p>}
                <h3>더블베리호밀빵</h3>
                </ContentBakeryItemTop>
              <ContentBakeryItemTop>
                <img src='./images/소금빵.jpg'></img>
                { IsDesktop && <p>고소한 버터의 풍미와 깊은바다의 물이 만들어낸 맛있는 빵</p>}
                <h3>깊은바다소금빵</h3>
                </ContentBakeryItemTop>
              <ContentBakeryItemTop>
                <img src='./images/우리밀땅콩크림.jpg'></img>
                { IsDesktop && <p>국산 땅콩으로 풍미를 더 해 더욱 고소한 속까지 우리밀 100%</p>}
                <h3>땅콩크림빵</h3>
                </ContentBakeryItemTop>
            </ContentBakeryTop>
            <ContentBakeryBottom>
              <ContentBakeryItemBottom>
                <img src='./images/가나슈케이크.jpg'></img>
                { IsDesktop && <p>100% 우리밀로 만든 빵에 달콤한 슈크림을 가득 채운</p>}
                <h3>슈크림빵</h3>
                </ContentBakeryItemBottom>
              <ContentBakeryItemBottom>
                <img src='./images/라즈베리요거트케이크.jpg'></img>
                { IsDesktop && <p>우리 호밀과 섬유질이 풍부한 블루베리와 크랜베리로 만든</p>}
                <h3>더블베리호밀빵</h3>
                </ContentBakeryItemBottom>
              <ContentBakeryItemBottom>
                <img src='./images/우리밀케익.jpg'></img>
                { IsDesktop && <p>고소한 버터의 풍미와 깊은바다의 물이 만들어낸 맛있는 빵</p>}
                <h3>깊은바다소금빵</h3>
                </ContentBakeryItemBottom>
              <ContentBakeryItemBottom>
                <img src='./images/당근케이크.jpg'></img>
                { IsDesktop && <p>국산 땅콩으로 풍미를 더 해 더욱 고소한 속까지 우리밀 100%</p>}
                <h3>땅콩크림빵</h3>
                </ContentBakeryItemBottom>
            </ContentBakeryBottom>
          </ContentBakeryWrap>
        </ContentBakery>

        <ContentGroceriesGlobal>
          <ContentGroceriesGlobalWrap>
            <ContentGroceriesGlobalTitleAndButton>
              <ContentGroceriesGlobalTitleWrap>
                <ContentGroceriesGlobalTitle>
                  <p>자연이 키운 우리 농산물</p>
                  <h3>자연드림 식품관</h3>
                </ContentGroceriesGlobalTitle>
                <ContentGroceriesGlobalTitleSub>
                  { IsDesktop && <p>자연드림이 직접 탄소치유농법으로 가꾼 채소와 과일을 통해 가족의 건강을 지켜주세요.</p> }
                </ContentGroceriesGlobalTitleSub>
              </ContentGroceriesGlobalTitleWrap>
              <ContentButton>
                <p>더보기</p>
              </ContentButton>
            </ContentGroceriesGlobalTitleAndButton>
            <ContentGroceriesGlobalItemWrap>
              <ContentGroceriesGlobalItem>
                <ContentGroceriesGlobalItemImgWrap>
                <img src="images/우리부추.jpg" alt="kket"/>
                </ContentGroceriesGlobalItemImgWrap>
                <ContentGroceriesGlobalItemText>
                  <h3>부추</h3>
                  <p>일반가</p>
                  <p>조합원가</p>
                </ContentGroceriesGlobalItemText>
              </ContentGroceriesGlobalItem>
              <ContentGroceriesGlobalItem>
                <ContentGroceriesGlobalItemImgWrap>
                <img src="images/우리깻잎.jpg" alt="kket"/>
                </ContentGroceriesGlobalItemImgWrap>
                <ContentGroceriesGlobalItemText>
                  <h3>깻잎</h3>
                  <p>일반가</p>
                  <p>조합원가</p>
                </ContentGroceriesGlobalItemText>
              </ContentGroceriesGlobalItem>
              <ContentGroceriesGlobalItem>
                <ContentGroceriesGlobalItemImgWrap>
                <img src="images/우리당고추.jpg" alt="kket"/>
                </ContentGroceriesGlobalItemImgWrap>
                <ContentGroceriesGlobalItemText>
                  <h3>당조고추</h3>
                  <p>일반가</p>
                  <p>조합원가</p>
                </ContentGroceriesGlobalItemText>
              </ContentGroceriesGlobalItem>
              { IsDesktop &&
                <ContentGroceriesGlobalItem>
                  <ContentGroceriesGlobalItemImgWrap>
                    <img src="images/우리단호박.jpg" alt="kket"/>
                  </ContentGroceriesGlobalItemImgWrap>
                  <ContentGroceriesGlobalItemText>
                    <h3>블랙단호박</h3>
                    <p>일반가</p>
                    <p>조합원가</p>
                  </ContentGroceriesGlobalItemText>
                </ContentGroceriesGlobalItem>
              }
            </ContentGroceriesGlobalItemWrap>
          </ContentGroceriesGlobalWrap>
        </ContentGroceriesGlobal>
        
        <ContentMealKit>
          <ContentMealKitWrap>
            <ContentMealKitTitleAndButton>
              <ContentMealKitTitleWrap>
                <ContentMealKitTitle>
                  <p>맛은 Up! 시간은 Down!</p>
                  <p>조미료를 넣지 않아 건강한 맛!</p>
                  <h3>자연드림 밀키트</h3>
                </ContentMealKitTitle>
              </ContentMealKitTitleWrap>
              <MealKitContentButton>
                <p>더보기</p>
              </MealKitContentButton>
            </ContentMealKitTitleAndButton>

            <ContentMealKitItemWrap>
              <ContentMealKitItem>
                <img src='./images/깜빵스요리.jpg'/>
                <ContentMealKitItemText>
                  <h3>감바스 밀키트</h3>
                  <p>일반가</p>
                  <p><span>조합원가</span></p>
                </ContentMealKitItemText>
              </ContentMealKitItem>
              <ContentMealKitItem>
                <img src='./images/돼지고기머시기요리.jpg'/>
                <ContentMealKitItemText>
                  <h3>돼지고기바싹불고기</h3>
                  <p>일반가</p>
                  <p><span>조합원가</span></p>
                </ContentMealKitItemText>
              </ContentMealKitItem>
              { IsDesktop &&
              <ContentMealKitItem>
                <img src='./images/찹스테이크요리.jpg'/>
                <ContentMealKitItemText>
                  <h3>감바스 밀키트</h3>
                  <p>일반가</p>
                  <p><span>조합원가</span></p>
                </ContentMealKitItemText>
              </ContentMealKitItem>
              }
              { IsDesktop &&
                <ContentMealKitItem>
                  <img src='./images/머선전골요리ㅏ.jpg'/>
                  <ContentMealKitItemText>
                    <h3>감바스 밀키트</h3>
                    <p>일반가</p>
                    <p><span>조합원가</span></p>
                  </ContentMealKitItemText>
                </ContentMealKitItem>
              }
              <ContentMealKitItem>
                <img src='./images/깜빵스요리.jpg'/>
                <ContentMealKitItemText>
                  <h3>감바스 밀키트</h3>
                  <p>일반가</p>
                  <p><span>조합원가</span></p>
                </ContentMealKitItemText>
              </ContentMealKitItem>
            </ContentMealKitItemWrap>
          </ContentMealKitWrap>
        </ContentMealKit>

        <ContentGroceriesGlobal>
          <ContentGroceriesGlobalWrap>
            <ContentGroceriesGlobalTitleAndButton>
              <ContentGroceriesGlobalTitleWrap>
                <ContentGroceriesGlobalTitle>
                  <p>우리가족을 위한 건강한 먹거리</p>
                  <h3>간식/식사대용</h3>
                </ContentGroceriesGlobalTitle>
                <ContentGroceriesGlobalTitleSub>
                  { IsDesktop && <p>자연드림이 직접 키운 작물로 건강하게 만든 맛있는 간식! 우리 가족에게 전해주세요.</p>}
                </ContentGroceriesGlobalTitleSub>
              </ContentGroceriesGlobalTitleWrap>
              <ContentButton>
                <p>더보기</p>
              </ContentButton>
            </ContentGroceriesGlobalTitleAndButton>
            <ContentGroceriesGlobalItemWrap>
              <ContentSnacksItem>
                <ContentSnacksImgWrap>
                <img src="images/고구마.jpg" alt="kket"/>
                </ContentSnacksImgWrap>
                <ContentGroceriesGlobalItemText>
                  <h3>갓구워낸달콤고구마</h3>
                  <p>일반가</p>
                  <p>조합원가</p>
                </ContentGroceriesGlobalItemText>
              </ContentSnacksItem>
              <ContentSnacksItem>
                <ContentSnacksImgWrap>
                <img src="images/초코스틱.jpg" alt="kket"/>
                </ContentSnacksImgWrap>
                <ContentGroceriesGlobalItemText>
                  <h3>미니초코스틱</h3>
                  <p>일반가</p>
                  <p>조합원가</p>
                </ContentGroceriesGlobalItemText>
              </ContentSnacksItem>
              <ContentSnacksItem>
                <ContentSnacksImgWrap>
                <img src="images/블루베리퓨레.jpg" alt="kket"/>
                </ContentSnacksImgWrap>
                <ContentGroceriesGlobalItemText>
                  <h3>아이퓨(사과블루베리)</h3>
                  <p>일반가</p>
                  <p>조합원가</p>
                </ContentGroceriesGlobalItemText>
              </ContentSnacksItem>
              { IsDesktop &&
                <ContentSnacksItem>
                  <ContentSnacksImgWrap>
                  <img src="images/사과퓨레.jpg" alt="kket"/>
                  </ContentSnacksImgWrap>
                  <ContentGroceriesGlobalItemText>
                    <h3>아이퓨(사과복숭아)</h3>
                    <p>일반가</p>
                    <p>조합원가</p>
                  </ContentGroceriesGlobalItemText>
                </ContentSnacksItem>
              }
            </ContentGroceriesGlobalItemWrap>
          </ContentGroceriesGlobalWrap>
        </ContentGroceriesGlobal>

        <ContentPet>
          <ContentGroceriesGlobalWrap>
            <ContentGroceriesGlobalTitleAndButton>
              <ContentGroceriesGlobalTitleWrap>
                <ContentPetTitle>
                  <p>첨가물을 넣지 않아 더 건강한</p>
                  <p>반려동물을 위한 건강한 선택</p>
                  <h3>반려동물 간식</h3>
                </ContentPetTitle>
              </ContentGroceriesGlobalTitleWrap>
              <PetContentButton>
                <p>더보기</p>
              </PetContentButton>
            </ContentGroceriesGlobalTitleAndButton>
            <ContentGroceriesGlobalItemWrap>
              <ContentPetItem>
                <ContentPetImgWrap>
                <img src="images/단또맘마.jpg" alt="kket"/>
                </ContentPetImgWrap>
                <ContentPetItemText>
                <h3>야옹이맘마(반려묘)</h3>
                        <p>일반가</p>
                        <p>조합원가</p>
                </ContentPetItemText>
              </ContentPetItem>
              <ContentPetItem>
                <ContentPetImgWrap>
                <img src="images/로렌츠스틱.jpg" alt="kket"/>
                </ContentPetImgWrap>
                <ContentPetItemText>
                <h3>로렌츠스틱(반려견)</h3>
                        <p>일반가</p>
                        <p>조합원가</p>
                </ContentPetItemText>
              </ContentPetItem>
                { IsDesktop &&             
                <ContentPetItem>
                  <ContentPetImgWrap>
                    <img src="images/로렌츠큐브.jpg" alt="kket"/>
                  </ContentPetImgWrap>
                  <ContentPetItemText>
                    <h3>로렌츠고구마큐브(반려견)</h3>
                    <p>일반가</p>
                    <p>조합원가</p>
                  </ContentPetItemText>
              </ContentPetItem>
              }
              <ContentPetItem>
                <ContentPetImgWrap>
                <img src="images/메디츄.jpg" alt="kket"/>
                </ContentPetImgWrap>
                <ContentPetItemText>
                <h3>닥터메디츄참치(반려묘)</h3>
                        <p>일반가</p>
                        <p>조합원가</p>
                </ContentPetItemText>
              </ContentPetItem>
            </ContentGroceriesGlobalItemWrap>
          </ContentGroceriesGlobalWrap>
        </ContentPet>

        <ContentCampaign>
          <ContentCampaignWrap>
            <ContentCampaignTitle>
              <p>사람과 자연을 이어주는</p>
              <h3>자연드림 캠페인</h3>
            </ContentCampaignTitle>
            <ContentCampaignItemWrap>
              <ContentCampaignItem>
                <ContentCampaignItemImagWrap>
                  <img src="images/숲사진.jpg" alt="gambas"></img>
                </ContentCampaignItemImagWrap>
                <ContentCampaignItemText style={{backgroundColor: 'rgba(39, 71, 28, 0.8)'}}>
                <h3>No 플라스틱 약속 캠페인</h3>
                { IsDesktop && <p>페트병 재활용을 높이려는 노력보다
                    페트병의 생산·사용량을 줄여야 합니다.</p>}
                </ContentCampaignItemText>
              </ContentCampaignItem>
              <ContentCampaignItem>
                <ContentCampaignItemImagWrap>
                  <img src="images/바다.jpg" alt="gambas"></img>
                </ContentCampaignItemImagWrap>
                <ContentCampaignItemText style={{backgroundColor: 'rgba(4, 164, 255, 0.8)'}}>
                <h3>세이브 디 오션</h3>
                { IsDesktop &&<p>미세플라스틱,
                    바다로 흘러보내지 않는 것이 정답입니다.</p>}
                </ContentCampaignItemText>
              </ContentCampaignItem>
              <ContentCampaignItem>
                <ContentCampaignItemImagWrap>
                  <img src="images/dka.png" alt="gambas"></img>
                </ContentCampaignItemImagWrap>
                <ContentCampaignItemText style={{backgroundColor: 'rgba(255, 152, 4, 0.8)'}}>
                <h3>암 예방 캠페인</h3>
                { IsDesktop && <p>식생활이 암 발생 요인의 30% 차지
                    암 예방을 위해서는 식품을 선택할 때부터 쉽게
                    알 수 있어야 합니다.</p>}
                </ContentCampaignItemText>
              </ContentCampaignItem>
              { IsDesktop &&
                <ContentCampaignItem>
                  <ContentCampaignItemImagWrap>
                    <img src="images/우리밀.png" alt="gambas"></img>
                  </ContentCampaignItemImagWrap>
                  <ContentCampaignItemText style={{backgroundColor: 'rgba(89, 52, 0, 0.8)'}}>
                  <h3>우리밀 정직하게, 건강하게</h3>
                  { IsDesktop && <p>우리 아이들에게 수입밀 섞지 않은
                      진짜 “우리밀” 빵을 주세요.</p>}
                  </ContentCampaignItemText>
                </ContentCampaignItem>
              }
            </ContentCampaignItemWrap>
          </ContentCampaignWrap>
        </ContentCampaign>

        <ContentCustom>
          <ContentCustomTitle>
            <p>자연드림 조합원 <span>멤버십</span></p>
            <p>고객 센터</p>
          </ContentCustomTitle>
          <ContentCustomWrap>
            <ContentCustomMembership>
              <ContentCustomMembershipItem>
                { IsDesktop && <img src="images/혜택.png" alt="bicon" width="69" height="69" />}
                <ContentCustomMembershipItemText>
                  <h3>조합원 혜택</h3>
                </ContentCustomMembershipItemText>
              </ContentCustomMembershipItem>
              <ContentCustomMembershipItem>
                { IsDesktop && <img src="images/카카오톡.png" alt="bicon" width="69" height="69" />}
                <ContentCustomMembershipItemText>
                  <h3>카카오톡 플러스친구</h3>
                </ContentCustomMembershipItemText>
              </ContentCustomMembershipItem>
              <ContentCustomMembershipItem>
                { IsDesktop && <img src="images/자드림아이콘.png" alt="bicon" width="69" height="69" />}
                <ContentCustomMembershipItemText>
                  <h3>아이쿱조합원앱카드</h3>
                </ContentCustomMembershipItemText>
              </ContentCustomMembershipItem>
              <ContentCustomMembershipItem>
                { IsDesktop && <img src="images/저금통.png" alt="bicon" width="69" height="69" />}
                <ContentCustomMembershipItemText>
                  <h3>아이쿱자연드림마일리지</h3>
                </ContentCustomMembershipItemText>
              </ContentCustomMembershipItem>
            </ContentCustomMembership>
            <ContentCustomQna>
              <ContentCustomQnaText>
                <p><span>1577-6009</span></p>
                <p>월 ~ 금 : 09시 ~ 18시 (공휴일 제외)</p>
                <p>토요일 : 09시 ~ 13시 (공휴일 제외)</p>
              </ContentCustomQnaText>
              <ContentCustomQnaButtonWrap>
                <ContentCustomQnaButton>1:1문의/반품접수</ContentCustomQnaButton>
                <ContentCustomQnaButton>카톡상담문의</ContentCustomQnaButton>
                <ContentCustomQnaButton>자주묻는질문</ContentCustomQnaButton>
              </ContentCustomQnaButtonWrap>
            </ContentCustomQna>
          </ContentCustomWrap>
        </ContentCustom>
    </>
  )
}

export default Main