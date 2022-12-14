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
        content: "3,790???"
      }
      &:nth-child(3)::after {
        content: "2,750???";
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
        content: "3,790???"
      }
      &:nth-child(3)::after {
        content: "1,700???";
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
        content: "3,790???";
      }
      &:nth-child(3)::after {
        content: "2,700???";
      }
    }
  }
  &:nth-child(4) {
    h3 {
      &::after {
        content: "1???"
      }
    }
    p {
      &:nth-child(2)::after {
        content: "8,200???"
      }
      &:nth-child(3)::after {
        content: "5,600???";
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
              content: "21,100???"
          }
          &:nth-child(3)::after {
              content: "14,150???";
          }
      }
  }
  &:nth-child(2) {
      p {
          &:nth-child(2)::after {
              content: "19,290???"
          }
          &:nth-child(3)::after {
              content: "10,150???";
          }
      }
  }
  &:nth-child(3) {
      p {
          &:nth-child(2)::after {
              content: "18,850???";
          }
          &:nth-child(3)::after {
              content: "14,300???";
          }
      }
  }
  &:nth-child(4) {
      p {
          &:nth-child(2)::after {
              content: "15,750???"
          }
          &:nth-child(3)::after {
              content: "11,120???";
          }
      }
  } 
  &:nth-child(5) {
      p {
          &:nth-child(2)::after {
              content: "20,150???"
          }
          &:nth-child(3)::after {
              content: "19,230???";
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
              content: "5,100???"
          }
          &:nth-child(3)::after {
              content: "3,400???";
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
              content: "3,290???"
          }
          &:nth-child(3)::after {
              content: "2,190???";
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
              content: "5,850???";
          }
          &:nth-child(3)::after {
              content: "4,000???";
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
              content: "5,850???"
          }
          &:nth-child(3)::after {
              content: "4,000???";
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
              content: "5,100???"
          }
          &:nth-child(3)::after {
              content: "3,400???";
          }
      }
  }
  &:nth-child(2) {
      h3 {
          &::after {
              content: "(120g),15g*8???"
          }
      }
      p {
          &:nth-child(2)::after {
              content: "3,290???"
          }
          &:nth-child(3)::after {
              content: "2,190???";
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
              content: "5,850???";
          }
          &:nth-child(3)::after {
              content: "4,000???";
          }
      }
  }
  &:nth-child(4) {
      h3 {
          &::after {
              content: "(60g),10g*6???"
          }
      }
      p {
          &:nth-child(2)::after {
              content: "5,850???"
          }
          &:nth-child(3)::after {
              content: "4,000???";
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
    content: "(???????????? : 12??? ~ 13???)";
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
                <p>????????? ????????????</p>
                <h3>????????? ????????????</h3>
              </ContentBakeryTitle>
              <ContentButton>
                <p>?????????</p>
              </ContentButton>
            </ContentBakeryTitleAndButton>
            <ContentBakeryTop>
              <ContentBakeryItemTop>
                <img src='./images/??????????????????.jpg'></img>
                { IsDesktop && <p>100% ???????????? ?????? ?????? ????????? ???????????? ?????? ??????</p>}
                <h3>????????????</h3>
                </ContentBakeryItemTop>
              <ContentBakeryItemTop>
                <img src='./images/?????????????????????.jpg'></img>
                { IsDesktop && <p>?????? ????????? ???????????? ????????? ??????????????? ??????????????? ??????</p>}
                <h3>?????????????????????</h3>
                </ContentBakeryItemTop>
              <ContentBakeryItemTop>
                <img src='./images/?????????.jpg'></img>
                { IsDesktop && <p>????????? ????????? ????????? ??????????????? ?????? ???????????? ????????? ???</p>}
                <h3>?????????????????????</h3>
                </ContentBakeryItemTop>
              <ContentBakeryItemTop>
                <img src='./images/?????????????????????.jpg'></img>
                { IsDesktop && <p>?????? ???????????? ????????? ??? ??? ?????? ????????? ????????? ????????? 100%</p>}
                <h3>???????????????</h3>
                </ContentBakeryItemTop>
            </ContentBakeryTop>
            <ContentBakeryBottom>
              <ContentBakeryItemBottom>
                <img src='./images/??????????????????.jpg'></img>
                { IsDesktop && <p>100% ???????????? ?????? ?????? ????????? ???????????? ?????? ??????</p>}
                <h3>????????????</h3>
                </ContentBakeryItemBottom>
              <ContentBakeryItemBottom>
                <img src='./images/??????????????????????????????.jpg'></img>
                { IsDesktop && <p>?????? ????????? ???????????? ????????? ??????????????? ??????????????? ??????</p>}
                <h3>?????????????????????</h3>
                </ContentBakeryItemBottom>
              <ContentBakeryItemBottom>
                <img src='./images/???????????????.jpg'></img>
                { IsDesktop && <p>????????? ????????? ????????? ??????????????? ?????? ???????????? ????????? ???</p>}
                <h3>?????????????????????</h3>
                </ContentBakeryItemBottom>
              <ContentBakeryItemBottom>
                <img src='./images/???????????????.jpg'></img>
                { IsDesktop && <p>?????? ???????????? ????????? ??? ??? ?????? ????????? ????????? ????????? 100%</p>}
                <h3>???????????????</h3>
                </ContentBakeryItemBottom>
            </ContentBakeryBottom>
          </ContentBakeryWrap>
        </ContentBakery>

        <ContentGroceriesGlobal>
          <ContentGroceriesGlobalWrap>
            <ContentGroceriesGlobalTitleAndButton>
              <ContentGroceriesGlobalTitleWrap>
                <ContentGroceriesGlobalTitle>
                  <p>????????? ?????? ?????? ?????????</p>
                  <h3>???????????? ?????????</h3>
                </ContentGroceriesGlobalTitle>
                <ContentGroceriesGlobalTitleSub>
                  { IsDesktop && <p>??????????????? ?????? ???????????????????????? ?????? ????????? ????????? ?????? ????????? ????????? ???????????????.</p> }
                </ContentGroceriesGlobalTitleSub>
              </ContentGroceriesGlobalTitleWrap>
              <ContentButton>
                <p>?????????</p>
              </ContentButton>
            </ContentGroceriesGlobalTitleAndButton>
            <ContentGroceriesGlobalItemWrap>
              <ContentGroceriesGlobalItem>
                <ContentGroceriesGlobalItemImgWrap>
                <img src="images/????????????.jpg" alt="kket"/>
                </ContentGroceriesGlobalItemImgWrap>
                <ContentGroceriesGlobalItemText>
                  <h3>??????</h3>
                  <p>?????????</p>
                  <p>????????????</p>
                </ContentGroceriesGlobalItemText>
              </ContentGroceriesGlobalItem>
              <ContentGroceriesGlobalItem>
                <ContentGroceriesGlobalItemImgWrap>
                <img src="images/????????????.jpg" alt="kket"/>
                </ContentGroceriesGlobalItemImgWrap>
                <ContentGroceriesGlobalItemText>
                  <h3>??????</h3>
                  <p>?????????</p>
                  <p>????????????</p>
                </ContentGroceriesGlobalItemText>
              </ContentGroceriesGlobalItem>
              <ContentGroceriesGlobalItem>
                <ContentGroceriesGlobalItemImgWrap>
                <img src="images/???????????????.jpg" alt="kket"/>
                </ContentGroceriesGlobalItemImgWrap>
                <ContentGroceriesGlobalItemText>
                  <h3>????????????</h3>
                  <p>?????????</p>
                  <p>????????????</p>
                </ContentGroceriesGlobalItemText>
              </ContentGroceriesGlobalItem>
              { IsDesktop &&
                <ContentGroceriesGlobalItem>
                  <ContentGroceriesGlobalItemImgWrap>
                    <img src="images/???????????????.jpg" alt="kket"/>
                  </ContentGroceriesGlobalItemImgWrap>
                  <ContentGroceriesGlobalItemText>
                    <h3>???????????????</h3>
                    <p>?????????</p>
                    <p>????????????</p>
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
                  <p>?????? Up! ????????? Down!</p>
                  <p>???????????? ?????? ?????? ????????? ???!</p>
                  <h3>???????????? ?????????</h3>
                </ContentMealKitTitle>
              </ContentMealKitTitleWrap>
              <MealKitContentButton>
                <p>?????????</p>
              </MealKitContentButton>
            </ContentMealKitTitleAndButton>

            <ContentMealKitItemWrap>
              <ContentMealKitItem>
                <img src='./images/???????????????.jpg'/>
                <ContentMealKitItemText>
                  <h3>????????? ?????????</h3>
                  <p>?????????</p>
                  <p><span>????????????</span></p>
                </ContentMealKitItemText>
              </ContentMealKitItem>
              <ContentMealKitItem>
                <img src='./images/???????????????????????????.jpg'/>
                <ContentMealKitItemText>
                  <h3>???????????????????????????</h3>
                  <p>?????????</p>
                  <p><span>????????????</span></p>
                </ContentMealKitItemText>
              </ContentMealKitItem>
              { IsDesktop &&
              <ContentMealKitItem>
                <img src='./images/?????????????????????.jpg'/>
                <ContentMealKitItemText>
                  <h3>????????? ?????????</h3>
                  <p>?????????</p>
                  <p><span>????????????</span></p>
                </ContentMealKitItemText>
              </ContentMealKitItem>
              }
              { IsDesktop &&
                <ContentMealKitItem>
                  <img src='./images/?????????????????????.jpg'/>
                  <ContentMealKitItemText>
                    <h3>????????? ?????????</h3>
                    <p>?????????</p>
                    <p><span>????????????</span></p>
                  </ContentMealKitItemText>
                </ContentMealKitItem>
              }
              <ContentMealKitItem>
                <img src='./images/???????????????.jpg'/>
                <ContentMealKitItemText>
                  <h3>????????? ?????????</h3>
                  <p>?????????</p>
                  <p><span>????????????</span></p>
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
                  <p>??????????????? ?????? ????????? ?????????</p>
                  <h3>??????/????????????</h3>
                </ContentGroceriesGlobalTitle>
                <ContentGroceriesGlobalTitleSub>
                  { IsDesktop && <p>??????????????? ?????? ?????? ????????? ???????????? ?????? ????????? ??????! ?????? ???????????? ???????????????.</p>}
                </ContentGroceriesGlobalTitleSub>
              </ContentGroceriesGlobalTitleWrap>
              <ContentButton>
                <p>?????????</p>
              </ContentButton>
            </ContentGroceriesGlobalTitleAndButton>
            <ContentGroceriesGlobalItemWrap>
              <ContentSnacksItem>
                <ContentSnacksImgWrap>
                <img src="images/?????????.jpg" alt="kket"/>
                </ContentSnacksImgWrap>
                <ContentGroceriesGlobalItemText>
                  <h3>???????????????????????????</h3>
                  <p>?????????</p>
                  <p>????????????</p>
                </ContentGroceriesGlobalItemText>
              </ContentSnacksItem>
              <ContentSnacksItem>
                <ContentSnacksImgWrap>
                <img src="images/????????????.jpg" alt="kket"/>
                </ContentSnacksImgWrap>
                <ContentGroceriesGlobalItemText>
                  <h3>??????????????????</h3>
                  <p>?????????</p>
                  <p>????????????</p>
                </ContentGroceriesGlobalItemText>
              </ContentSnacksItem>
              <ContentSnacksItem>
                <ContentSnacksImgWrap>
                <img src="images/??????????????????.jpg" alt="kket"/>
                </ContentSnacksImgWrap>
                <ContentGroceriesGlobalItemText>
                  <h3>?????????(??????????????????)</h3>
                  <p>?????????</p>
                  <p>????????????</p>
                </ContentGroceriesGlobalItemText>
              </ContentSnacksItem>
              { IsDesktop &&
                <ContentSnacksItem>
                  <ContentSnacksImgWrap>
                  <img src="images/????????????.jpg" alt="kket"/>
                  </ContentSnacksImgWrap>
                  <ContentGroceriesGlobalItemText>
                    <h3>?????????(???????????????)</h3>
                    <p>?????????</p>
                    <p>????????????</p>
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
                  <p>???????????? ?????? ?????? ??? ?????????</p>
                  <p>??????????????? ?????? ????????? ??????</p>
                  <h3>???????????? ??????</h3>
                </ContentPetTitle>
              </ContentGroceriesGlobalTitleWrap>
              <PetContentButton>
                <p>?????????</p>
              </PetContentButton>
            </ContentGroceriesGlobalTitleAndButton>
            <ContentGroceriesGlobalItemWrap>
              <ContentPetItem>
                <ContentPetImgWrap>
                <img src="images/????????????.jpg" alt="kket"/>
                </ContentPetImgWrap>
                <ContentPetItemText>
                <h3>???????????????(?????????)</h3>
                        <p>?????????</p>
                        <p>????????????</p>
                </ContentPetItemText>
              </ContentPetItem>
              <ContentPetItem>
                <ContentPetImgWrap>
                <img src="images/???????????????.jpg" alt="kket"/>
                </ContentPetImgWrap>
                <ContentPetItemText>
                <h3>???????????????(?????????)</h3>
                        <p>?????????</p>
                        <p>????????????</p>
                </ContentPetItemText>
              </ContentPetItem>
                { IsDesktop &&             
                <ContentPetItem>
                  <ContentPetImgWrap>
                    <img src="images/???????????????.jpg" alt="kket"/>
                  </ContentPetImgWrap>
                  <ContentPetItemText>
                    <h3>????????????????????????(?????????)</h3>
                    <p>?????????</p>
                    <p>????????????</p>
                  </ContentPetItemText>
              </ContentPetItem>
              }
              <ContentPetItem>
                <ContentPetImgWrap>
                <img src="images/?????????.jpg" alt="kket"/>
                </ContentPetImgWrap>
                <ContentPetItemText>
                <h3>?????????????????????(?????????)</h3>
                        <p>?????????</p>
                        <p>????????????</p>
                </ContentPetItemText>
              </ContentPetItem>
            </ContentGroceriesGlobalItemWrap>
          </ContentGroceriesGlobalWrap>
        </ContentPet>

        <ContentCampaign>
          <ContentCampaignWrap>
            <ContentCampaignTitle>
              <p>????????? ????????? ????????????</p>
              <h3>???????????? ?????????</h3>
            </ContentCampaignTitle>
            <ContentCampaignItemWrap>
              <ContentCampaignItem>
                <ContentCampaignItemImagWrap>
                  <img src="images/?????????.jpg" alt="gambas"></img>
                </ContentCampaignItemImagWrap>
                <ContentCampaignItemText style={{backgroundColor: 'rgba(39, 71, 28, 0.8)'}}>
                <h3>No ???????????? ?????? ?????????</h3>
                { IsDesktop && <p>????????? ???????????? ???????????? ????????????
                    ???????????? ???????????????????? ????????? ?????????.</p>}
                </ContentCampaignItemText>
              </ContentCampaignItem>
              <ContentCampaignItem>
                <ContentCampaignItemImagWrap>
                  <img src="images/??????.jpg" alt="gambas"></img>
                </ContentCampaignItemImagWrap>
                <ContentCampaignItemText style={{backgroundColor: 'rgba(4, 164, 255, 0.8)'}}>
                <h3>????????? ??? ??????</h3>
                { IsDesktop &&<p>??????????????????,
                    ????????? ??????????????? ?????? ?????? ???????????????.</p>}
                </ContentCampaignItemText>
              </ContentCampaignItem>
              <ContentCampaignItem>
                <ContentCampaignItemImagWrap>
                  <img src="images/dka.png" alt="gambas"></img>
                </ContentCampaignItemImagWrap>
                <ContentCampaignItemText style={{backgroundColor: 'rgba(255, 152, 4, 0.8)'}}>
                <h3>??? ?????? ?????????</h3>
                { IsDesktop && <p>???????????? ??? ?????? ????????? 30% ??????
                    ??? ????????? ???????????? ????????? ????????? ????????? ??????
                    ??? ??? ????????? ?????????.</p>}
                </ContentCampaignItemText>
              </ContentCampaignItem>
              { IsDesktop &&
                <ContentCampaignItem>
                  <ContentCampaignItemImagWrap>
                    <img src="images/?????????.png" alt="gambas"></img>
                  </ContentCampaignItemImagWrap>
                  <ContentCampaignItemText style={{backgroundColor: 'rgba(89, 52, 0, 0.8)'}}>
                  <h3>????????? ????????????, ????????????</h3>
                  { IsDesktop && <p>?????? ??????????????? ????????? ?????? ??????
                      ?????? ??????????????? ?????? ?????????.</p>}
                  </ContentCampaignItemText>
                </ContentCampaignItem>
              }
            </ContentCampaignItemWrap>
          </ContentCampaignWrap>
        </ContentCampaign>

        <ContentCustom>
          <ContentCustomTitle>
            <p>???????????? ????????? <span>?????????</span></p>
            <p>?????? ??????</p>
          </ContentCustomTitle>
          <ContentCustomWrap>
            <ContentCustomMembership>
              <ContentCustomMembershipItem>
                { IsDesktop && <img src="images/??????.png" alt="bicon" width="69" height="69" />}
                <ContentCustomMembershipItemText>
                  <h3>????????? ??????</h3>
                </ContentCustomMembershipItemText>
              </ContentCustomMembershipItem>
              <ContentCustomMembershipItem>
                { IsDesktop && <img src="images/????????????.png" alt="bicon" width="69" height="69" />}
                <ContentCustomMembershipItemText>
                  <h3>???????????? ???????????????</h3>
                </ContentCustomMembershipItemText>
              </ContentCustomMembershipItem>
              <ContentCustomMembershipItem>
                { IsDesktop && <img src="images/??????????????????.png" alt="bicon" width="69" height="69" />}
                <ContentCustomMembershipItemText>
                  <h3>???????????????????????????</h3>
                </ContentCustomMembershipItemText>
              </ContentCustomMembershipItem>
              <ContentCustomMembershipItem>
                { IsDesktop && <img src="images/?????????.png" alt="bicon" width="69" height="69" />}
                <ContentCustomMembershipItemText>
                  <h3>?????????????????????????????????</h3>
                </ContentCustomMembershipItemText>
              </ContentCustomMembershipItem>
            </ContentCustomMembership>
            <ContentCustomQna>
              <ContentCustomQnaText>
                <p><span>1577-6009</span></p>
                <p>??? ~ ??? : 09??? ~ 18??? (????????? ??????)</p>
                <p>????????? : 09??? ~ 13??? (????????? ??????)</p>
              </ContentCustomQnaText>
              <ContentCustomQnaButtonWrap>
                <ContentCustomQnaButton>1:1??????/????????????</ContentCustomQnaButton>
                <ContentCustomQnaButton>??????????????????</ContentCustomQnaButton>
                <ContentCustomQnaButton>??????????????????</ContentCustomQnaButton>
              </ContentCustomQnaButtonWrap>
            </ContentCustomQna>
          </ContentCustomWrap>
        </ContentCustom>
    </>
  )
}

export default Main