import React, {useState} from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

const Header = styled.div`
    position: fixed;
    width: 100%;
    height: 70px;
    background-color: white;
    border-bottom: 2px solid #a91054;
    z-index: 99;
`
const HeaderWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
    @media (min-width: 641px) and (max-width: 1024px) {
        justify-content: space-around;
        max-width: 1024px;
    }
`
const Logos = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 250px;
    height: 100%;
    @media (min-width: 641px) and (max-width: 1024px) {
        width: fit-content;
    }
`
const LogosButton = styled.div`
    position: relative;
`
const ButtonWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 70px;
    padding: 22.5px 0;
    justify-content: center;
    margin-right: 10px;
    cursor: pointer;
    &.on {
        background-color: #a91054;
        > div {
            background-color: white;
        }
    }
`
const ButtonLine = styled.div`
    width: 40px;
    height: 5px;
    border-radius: 50px;
    background-color: #a91054;
    margin-bottom: 5px;
    &:last-child {
        margin-bottom: 0px;
    }
`
const LogosLogoImage = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
`
const Searchbar = styled.div`
    flex-basis: 29%;
    height: 39px;
    border: 2.5px solid #a91054;
    box-shadow: 0px 0px 3px 1px rgb(173, 173, 173);
    border-radius: 50px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    p {
        margin-left: 20px;
        font-family: score4;
        font-size: 14px;
        color: #777;
    }
    img {
        margin-right: 20px;
    }
    @media (min-width: 641px) and (max-width: 1024px) {
        flex-basis: 45%;
        overflow: hidden;
    }
`
const HeaderIcons = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 70px;
    max-width: 230px;
    align-items: center;
`
const HeaderIconLogin = styled.div`
    font-family: score5;
    display: flex;
    flex-wrap: wrap;
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    position: relative;
    &::after {
        position: absolute;
        font-size: 13px;
        top: 50px;
        content: "로그인";
    }
`
const HeaderIconBag = styled(HeaderIconLogin)`
    margin: 0 10px;
    &::after {
        content: "장바구니";
    }
`
const HeaderIconInfo = styled(HeaderIconLogin)`
    &::after {
        content: "매장안내";
    }
`
const DropMenu = styled.div`
    position: absolute;
    width: 332px;
    transition: 0.5s;
    height: 0;
    visibility: hidden;
    background-color: white;
    top: 70px;
    overflow: hidden;
    border: 2px solid #a91054;
    &.on{
        height: 552px;
        visibility: visible;
    }
`

const DropMenuLeft = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 169px;
    height: 100%;
    border-right: 3px solid #a91054;
`
const DropMenuCat = styled.ul`
    margin-top: 10px;
    li {
        padding: 6px 0;
        &:hover {
            font-weight: bold;
            position: relative;
            list-style: disc;
            color: #a91054;
            a {
                color: #a91054;
            }
        }
        &.on {
            list-style: disc;
            color: #a91054;
            a {
                font-weight: bold;
                color: #a91054;
            }
        }
    }
`
const DropMenuRight = styled.div`
`


function Nav() {
    
    const IsDesktop = useMediaQuery({ query: "(min-width: 1025px"})
    const IsTablet = useMediaQuery({ query: "(min-width: 641px) and (max-width: 1024px)" });
    const IsMobile = useMediaQuery({ query: "(max-width: 640px)" });

    const [MenuToggle, setMenuToggle] = useState(false)
    

    function test(){
        setMenuToggle(!MenuToggle)
        
    }
    

  return (
    <>
        <Header>
            <HeaderWrap>
                <Logos>
                    <LogosButton>
                        <ButtonWrap onClick={test} className={(MenuToggle === true ? "on"  : "")}>
                            <ButtonLine></ButtonLine>
                            <ButtonLine></ButtonLine>
                            <ButtonLine></ButtonLine>
                        </ButtonWrap>
                        <DropMenu className={(MenuToggle === true ? "on"  : "")}>
                            <DropMenuLeft>
                                <DropMenuCat>
                                    <li><a href="#">자연드림 특산품</a></li>
                                    <li><a href="#">과일</a></li>
                                    <li><a href="#">채소</a></li>
                                    <li><a href="#">잡곡/우리밀</a></li>
                                    <li><a href="#">반찬</a></li>
                                    <li><a href="#">양념</a></li>
                                    <li><a href="#">축산</a></li>
                                    <li><a href="#">수산</a></li>
                                    <li><a href="#">기호식품/유제품</a></li>
                                    <li><a href="#">빵</a></li>
                                    <li><a href="#">간식/식사대용</a></li>
                                    <li><a href="#">건강식품</a></li>
                                    <li><a href="#">반려동물용품</a></li>
                                    <li><a href="#">대용량 상품</a></li>
                                    <li><a href="#">비건 식품</a></li>
                                    <li><a href="#">밀키트</a></li>
                                </DropMenuCat>
                            </DropMenuLeft>
                            <DropMenuRight></DropMenuRight>
                        </DropMenu>
                    </LogosButton>
                <LogosLogoImage>
                    { IsDesktop && <img src="./images/logo.png" alt="pclogo" />}
                    { IsTablet && <img src="./images/logotab.png" alt="tablogo" />}
                    { IsMobile && <img src="./images/logotab.png" alt="mologo" />}
                </LogosLogoImage>
                </Logos>
                <Searchbar>
                    <p>검색해서 원하는 물품을 찾아보세요!</p>
                    <img src="./images/searchicon.png" alt="searchicon" />
                </Searchbar>
                <HeaderIcons>
                    <HeaderIconLogin>
                        <img src='./images/loginlogo.png' alt='login' />
                    </HeaderIconLogin>
                    <HeaderIconBag>
                        <img src='./images/marketlogo.png' alt='login' />
                    </HeaderIconBag>
                    { IsDesktop &&               
                    <HeaderIconInfo>
                        <img src='./images/info.png' alt='info' />
                    </HeaderIconInfo>
                    }
                </HeaderIcons>
            </HeaderWrap>
        </Header>
    </>
  )
}

export default Nav