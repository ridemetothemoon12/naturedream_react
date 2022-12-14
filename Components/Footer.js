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
                        <li><a href="#">íėŽėę°</a></li>
                        <li><a href="#">ėīėĐė―ęī</a></li>
                        <li><a href="#">ėė°ëëĶž ë§ėžëĶŽė§ ėīėĐė―ęī</a></li>
                        <li><a href="#">ę°ėļė ëģīėēëĶŽë°ĐėđĻ</a></li>
                        <li><a href="#">ėąėĐëŽļė</a></li>
                        <li><a href="#">ėė ëŽļė</a></li>
                        <li><a href="#">ë§ĪėĨė°ūęļ°</a></li>
                        <li><a href="#">ę°íëŽž</a></li>
                    </FooterList>
                </FooterTop>
                <FooterBottom>
                    <FooterBottomLeft>
                        <img src="./images/logo.png" alt="bicon" width="132" height="29" style={{marginBottom: '20px'}}/>
                        <FooterBottomLeftText>
                            <TextTop>
                                <p>(ėĢž)ėŋąėĪí ėī</p>
                                <p>ęē―ęļ°ë ėėė ėëĄąęĩŽ 145,Â 2ėļĩ</p>
                                <p>ëíė : ėīė ė</p>
                                <p>ėŽėėëąëĄëēíļ : 310-81-18712</p>
                            </TextTop>
                            <TextBottom>
                                <p>ė íëŽļė : 1577-6009(ė ëĢ)</p>
                                <p>íĩė íë§Īėė ęģ  : ė 2022-ėėėëĄą-1075íļ</p>
                                <p>Icoopmall@Icoop.or.kr</p>
                                <p>ėīëĐėžėĢžė ëŽīëĻėė§ ęą°ëķ</p>
                                <p>Copyright ėė°ëëĶžëŠ° All rights reserved.</p>
                            </TextBottom>
                        </FooterBottomLeftText>
                    </FooterBottomLeft>
                    <FooterBottomRight>
                        <FooterSNS>
                            <img src="images/ėļėĪí.png" alt="bicon" width="40" height="40" />
                            <img src="images/ėđīėđīėĪíĄ.png" alt="bicon" width="40" height="40" />
                            <img src="images/ė íëķãĄ.png" alt="bicon" width="40" height="40" />
                            <img src="images/ëļëĄę·ļ.png" alt="bicon" width="40" height="40" />
                        </FooterSNS>
                    </FooterBottomRight>
                </FooterBottom>
            </ContentFooterWrap>
        </ContentFooter>
    </>
  )
}

export default Footer