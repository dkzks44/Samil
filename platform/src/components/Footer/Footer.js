import "./Footer.scss"
import { useNavigate } from 'react-router';

const Footer = () => {

    return (
        <div className="footerWrap">
            <div className="footerFirstLine">
                회사소개 | 이용약관 | 개인정보처리방침 | 사이트맵
            </div>
            <div className="footerSecondLine">
                상호명 : 삼일기업 | 대표자 : 이주원 | 사업자등록번호 : 000-00-00000
            </div>
            <div className="footerThirdLine">
                주소 : 서울특별시 | 전화 : 010-0000-0000 | 이메일
            </div>

            <div className="footerForthLine">
                Copyright 2022 All Rights Reserved. Powered by jrg
            </div>
        </div>
    )
}

export default Footer;