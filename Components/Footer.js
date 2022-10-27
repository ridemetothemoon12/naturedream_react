import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

const ContentFooter = styled.div`
    font-family: score4;
    width: 100%;
    height: 170px;
    background-color: #d8d8d8;
`
const ContentFooterWrap = styled.div`
    width: 100%;
    @media (min-width: 641px) and (max-width: 1024px) {
        width: 90%;
        margin: 0 auto;
        a{
            font-size: 11px;
        }
    }
`
const FooterTop = styled.div`
    font-size: 14px;
    border-bottom: 3px solid white;
`
const FooterList = styled.ul`
    max-width: 1200px;
    margin: 0 auto;
    @include header_flex(flex, wrap);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px 0;
`
const FooterBottom = styled.div`
    padding-top: 20px;
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-end;
`
const FooterBottomLeft = styled.div`
`
const FooterBottomLeftText = styled.div`
    color: #898989;
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;
`
const TextTop = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    p:not(:nth-last-child(1)) {
        border-right: 2px solid #898989;
        padding-right: 5px;
        margin-right: 5px;
    }
`
const TextBottom = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    p:not(:nth-last-child(1)) {
        border-right: 2px solid #898989;
        padding-right: 5px;
        margin-right: 5px;
    }
`
const FooterBottomRight = styled.div`
    width: 300px;
`
const FooterSNS = styled.div`   
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
function Footer() {
  return (
    <>
        <ContentFooter>
            <ContentFooterWrap>
                <FooterTop>
                    <FooterList>
                        <li><a href="#">회사소개</a></li>
                        <li><a href="#">이용약관</a></li>
                        <li><a href="#">자연드림 마일리지 이용약관</a></li>
                        <li><a href="#">개인정보처리방침</a></li>
                        <li><a href="#">채용문의</a></li>
                        <li><a href="#">입점문의</a></li>
                        <li><a href="#">매장찾기</a></li>
                        <li><a href="#">간행물</a></li>
                    </FooterList>
                </FooterTop>
                <FooterBottom>
                    <FooterBottomLeft>
                        <img src="./images/logo.png" alt="bicon" width="132" height="29" style={{marginBottom: '20px'}}/>
                        <FooterBottomLeftText>
                            <TextTop>
                                <p>(주)쿱스토어</p>
                                <p>경기도 수원시 영롱구 145, 2층</p>
                                <p>대표자 : 이선영</p>
                                <p>사업자등록번호 : 310-81-18712</p>
                            </TextTop>
                            <TextBottom>
                                <p>전화문의 : 1577-6009(유료)</p>
                                <p>통신판매업신고 : 제2022-수원영롱-1075호</p>
                                <p>Icoopmall@Icoop.or.kr</p>
                                <p>이메일주소 무단수집 거부</p>
                                <p>Copyright 자연드림몰 All rights reserved.</p>
                            </TextBottom>
                        </FooterBottomLeftText>
                    </FooterBottomLeft>
                    <FooterBottomRight>
                        <FooterSNS>
                            <img src="images/인스타.png" alt="bicon" width="40" height="40" />
                            <img src="images/카카오톡.png" alt="bicon" width="40" height="40" />
                            <img src="images/유튜부ㅡ.png" alt="bicon" width="40" height="40" />
                            <img src="images/블로그.png" alt="bicon" width="40" height="40" />
                        </FooterSNS>
                    </FooterBottomRight>
                </FooterBottom>
            </ContentFooterWrap>
        </ContentFooter>
    </>
  )
}

export default Footer