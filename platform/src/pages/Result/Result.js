import "./Result.scss"
import { useParams } from "react-router";


const Result = () => {

    let {data} = useParams();

    return(
        <div className="resultDiv">
            <div className="dataDiv">
                <div className="inputDataWrap">
                    <span className="sectionTitle">입력데이터</span>
                    <div className="inputDataDiv">
                        <div>
                            <span className="dataName">업종</span>
                            <div className="inputData">의사(전문의-소아과)</div>
                        </div>
                        <div>
                            <span className="dataName">예산</span>
                            <div className="inputData">1,000,000원</div>
                        </div>
                        <div>
                            <span className="dataName">사업장소재지</span>
                            <div className="inputData">강남구 {data}</div>
                        </div>
                    </div>
                </div>
                <div className="midSection">
                    <div className="data1">
                        <span className="sectionTitle">키워드 순위</span>
                        <div className="rankingDiv">
                            <span className="rankNum">1</span>
                            <div className="keywordDiv">
                                <div>가루약</div>
                                <div>35회</div>
                                <div>유사키워드 : 젤리약</div>
                            </div>
                        </div>
                        <div className="rankingDiv">
                            <span className="rankNum">2</span>
                            <div className="keywordDiv">
                                <div>멀티비타민</div>
                                <div>27회</div>
                                <div>유사키워드 : 비타민</div>
                            </div>
                        </div>
                        <div className="rankingDiv">
                            <span className="rankNum">3</span>
                            <div className="keywordDiv">
                                <div>소아주사</div>
                                <div>19회</div>
                                <div>유사키워드 : 불주사</div>
                            </div>
                        </div>
                        <div className="rankingDiv">
                            <span className="rankNum">4</span>
                            <div className="keywordDiv">
                                <div>소아과 추천</div>
                                <div>16회</div>
                                <div>유사키워드 : 강남구</div>
                            </div>
                        </div>
                        <div className="rankingDiv">
                            <span className="rankNum">5</span>
                            <div className="keywordDiv">
                                <div>친절 소아과</div>
                                <div>8회</div>
                                <div>유사키워드 : 전문의</div>
                            </div>
                        </div>
                        <div className="rankingDiv">
                            <span className="rankNum">6</span>
                            <div className="keywordDiv">
                                <div>소아 약 처방</div>
                                <div>4회</div>
                                <div>유사키워드 : 소아약</div>
                            </div>
                        </div>
                    </div>
                    <div className="data2">
                        <span className="sectionTitle">추천채널</span>
                        <div className="rankingDiv">
                            <span className="rankNum">1</span>
                            <div className="keywordDiv">
                                <div>유튜브</div>
                                <div>14900회</div>
                                <div>주요키워드 : 미열, 감기</div>
                            </div>
                        </div>
                        <div className="rankingDiv">
                            <span className="rankNum">2</span>
                            <div className="keywordDiv">
                                <div>인스타그램</div>
                                <div>13500회</div>
                                <div>주요키워드 : 유아약품</div>
                            </div>
                        </div>
                        <div className="rankingDiv">
                            <span className="rankNum">3</span>
                            <div className="keywordDiv">
                                <div>트위터</div>
                                <div>5800회</div>
                                <div>주요키워드 : powder</div>
                            </div>
                        </div>
                        <div className="rankingDiv">
                            <span className="rankNum">4</span>
                            <div className="keywordDiv">
                                <div>네이버</div>
                                <div>4760회</div>
                                <div>주요키워드 : 야간진료</div>
                            </div>
                        </div>
                        <div className="rankingDiv">
                            <span className="rankNum">5</span>
                            <div className="keywordDiv">
                                <div>블로그</div>
                                <div>3660회</div>
                                <div>주요키워드 : 공구, 이벤트</div>
                            </div>
                        </div>
                        <div className="rankingDiv">
                            <span className="rankNum">6</span>
                            <div className="keywordDiv">
                                <div>랜딩페이지</div>
                                <div>3000회</div>
                                <div>주요키워드 : 인증제품</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="data3">
                    <span className="sectionTitle">추천 파생상품</span>
                    <div className="recProductDiv">
                        <div className="rankingDiv">
                            <span className="rankNum">1</span>
                                <div className="keywordDiv">
                                    <div>장난감</div>
                                    <div>추천: 88%</div>
                                    <div>관련 상품: datas</div>
                                    <div>추천 판매 채널: 유튜브</div>
                                </div>
                        </div>
                        <div className="recProductImageDiv">
                            <img className="recProductImage" src="https://shop4.daumcdn.net/thumb/R500x500/?fname=http%3A%2F%2Fshop4.daumcdn.net%2Fshophow%2Fp%2FI18415608683.jpg%3Fut%3D20220727182041" alt="참고이미지"/>
                            <img className="recProductImage" src="https://contents.lotteon.com/itemimage/_v181932/LO/16/47/75/77/02/_1/64/77/57/70/3/LO1647757702_1647757703_1.jpg/dims/optimize/dims/resizemc/400x400" alt="참고이미지"/>
                            <img className="recProductImage" src="https://m.noonchstore.co.kr/web/product/medium/202211/fe672abb3efb8f13b8e7c3bd8e6ee7e7.jpg" alt="참고이미지"/>
                        </div>
                    </div>
                    <div className="recProductDiv">
                        <div className="rankingDiv">
                            <span className="rankNum">2</span>
                                <div className="keywordDiv">
                                    <div>젤리약</div>
                                    <div>추천: 51%</div>
                                    <div>관련 상품: datas</div>
                                    <div>추천 판매 채널 : 쿠팡</div>
                                </div>
                        </div>
                        <div className="recProductImageDiv">
                            <img className="recProductImage" src="https://post-phinf.pstatic.net/MjAxOTEwMjJfMTgy/MDAxNTcxNzIwNjI0MDgz.F1fnnm5N8HACV___y-uvS0lpJ-aL_9-gv-NaJ8TkSGQg.8Bk_VvgMWl079B3uPNVGOMLXCrIQaV0yPBErUowa4TQg.PNG/1.png?type=w1200" alt="참고이미지"/>
                            <img className="recProductImage" src="https://mblogthumb-phinf.pstatic.net/MjAyMDEyMDRfNjcg/MDAxNjA3MDExMDczMTk2.56fZyuNWrk2OuAKftAU93pkb-VV_B_6SScV0s9ONSQ0g.a4hsSDR5FHe0WP7AEhXyQV0TUPv6bJ9kXqdetGc86V0g.JPEG.pinkmariaa/SE-0713322d-ba46-4135-8f58-fe27a6cd9318.jpg?type=w800" alt="참고이미지"/>
                            <img className="recProductImage" src="https://t1.daumcdn.net/cfile/tistory/996C734E5C4D3BD929" alt="참고이미지"/>
                        </div>
                    </div>
                    <div className="recProductDiv">
                        <div className="rankingDiv">
                            <span className="rankNum">3</span>
                                <div className="keywordDiv">
                                    <div>소아과</div>
                                    <div>추천 : 43%</div>
                                    <div>관련 상품 : datas</div>
                                    <div>추천 판매 채널 : 블로그</div>
                                </div>
                        </div>
                        <div className="recProductImageDiv">
                            <img className="recProductImage" src="https://www.ibabynews.com/news/photo/201906/75187_22645_531.jpg" alt="참고이미지"/>
                            <img className="recProductImage" src="http://www.daejonilbo.com/news/photo/202202/1507192_407359_4825.jpg" alt="참고이미지"/>
                            <img className="recProductImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXaPisIbAWTl05sM5ahivhpJPoqQKYIxtkWg&usqp=CAU" alt="참고이미지"/>
                        </div>
                    </div>
                    <div className="recProductDiv">
                        <div className="rankingDiv">
                            <span className="rankNum">4</span>
                                <div className="keywordDiv">
                                    <div>장난감</div>
                                    <div>추천 : 10%</div>
                                    <div>관련 상품 : datas</div>
                                    <div>추천 판매 채널 : datas</div>
                                </div>
                        </div>
                        <div className="recProductImageDiv">
                            <img className="recProductImage" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAADAwMCmpqZycnI+Pj6ioqKJiYmbm5vs7OwTExPz8/N1dXWRkZHm5ub7+/seHh4lJSUxMTFqamrg4OCvr6+Xl5fKyspJSUnNzc0ODg4rKyvZ2dmzs7O6urrT09OEhIRbW1tPT08YGBg6OjpiYmJ9fX1DQ0OMXRSXAAAEi0lEQVR4nO2b6XqqOhRAQT22iEpb56lqHfr+b3gLmp0EQUH9iHrX+lW2kuylMSP1PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAqqn7rQR/f2tJtWNJ0/E98rqJUefIxIsNjzRuKKgWX9VUSf/unG95hiqVpneboRS0iq8eyPD9XoZS0Ft8VbVhNBq21+N1Y1gLcxN7ZsOg86Hq81v7bk5i5wyD84SODQdT36JZ2jDyp60z+G2nhtHeT7OOShuep+HUsJ2R0c+dDZ1+h++ZKTUy3vCkhpOcnGovY/hr5GF2OJ8yajy54UKS+BgEYbj4kuv6PQ0d9jQzVc/v4TsL1yowGywGMYteEcNGW6PeMpVgo+nMUP8K1TAf6LE/TdE5jRim4k4MG6qaoYTE4XbDyI67MIykb9Gz0TA1wbnesPUAhnNVS88Iyvd6q+HmAQybqpaBEfy+l+HHAxhKNzk3gv1XMtxm5vJChqGq5NcKK29/MfpjIuPbExoGqpKdFZa2O7ETu9IwOuLCUMb7lRXuqPCh/ylrKDO4Q1/a/fw6InOJ6gyl13y3wnU7XNawq97iJ4YZHVd1hpLuwArLbLyTXJY1XIpJMhN0aii524bfVialDfV4OoovH8NwkZ3idYbyMz4U69RwaKUiSN2r5LKs4Y+YJGcbj2go3+EquSxpGOnl1za+fr1Wqjuaw2QweDvSWVdvmDnxNvrSqwz1z1B1xifVVWc4MHPPCB+WxSUN9U6P739ZrziY00gl9mdtKZU1NBupuSfpOTGUbNpWWHb5v+3EChnKpDbBOt91OfP+scLS3c/txIoY6imb+SF5dkEVrp7Uloz9e/lUde96MbJnXMQwfQgyM1ZQLlbAknxgBAM/hwKGp4PfSr/owlA+8ZERXKaTLGG4Vi+P5a6lU0MZF1ZGUGY65Q1lJJ2FMrPZnB6AVGgojWpmBM2zmnKGuo3WvZH8vXVp6MknPZFQbiO9bChNc/vXv+zkPvVwkRPDlapGjxe5G8IXDXU/Gg/0up36K4eGZrs6oNevm48DrYKGekJ6mEDoduq3I2eGumEdJ1g6rXEQJkSS+XlD3UG1jn2LcX4+DpwZGofcvdp8ZAzYMhspNqd503fKb9ps8DVnp9w7Pxs9oyxkaHw0ehofmd1y4MowPZFU6JOMAoaB3rmw5riBVZ6rp01qfhbGDuplw4Fx48x6Lk56srnnzjDzgZp91uu5hgvjztRDcXMt6PC5ttNzbWtFXKCVLjcqvPRSzP/WL5vUMqz6J/eWesyI2Vor80I9TfffIWrfmdD/2vRTBbl4vvR7Laf3P4O8Q7FzfWm0yxH862766YKcPEHrBaNmZ9VpjronrxRc4+/tNVgGjg3zKbqLUe+f3ptd0LMaFi8Iw6rBsHxBGFYNhuULwrBqMCxfEIZV8/qGzdZnwjTeUn1Jwyg8Eq8bbzEM+t2EfrKV80CGFvI8Re/ye88jm+uzy++tkrB75ORfTa8u6XTNDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwP+Q/Ev5A/1rxFh4AAAAASUVORK5CYII=" alt="참고이미지"/>
                            <img className="recProductImage" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAADAwMCmpqZycnI+Pj6ioqKJiYmbm5vs7OwTExPz8/N1dXWRkZHm5ub7+/seHh4lJSUxMTFqamrg4OCvr6+Xl5fKyspJSUnNzc0ODg4rKyvZ2dmzs7O6urrT09OEhIRbW1tPT08YGBg6OjpiYmJ9fX1DQ0OMXRSXAAAEi0lEQVR4nO2b6XqqOhRAQT22iEpb56lqHfr+b3gLmp0EQUH9iHrX+lW2kuylMSP1PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAqqn7rQR/f2tJtWNJ0/E98rqJUefIxIsNjzRuKKgWX9VUSf/unG95hiqVpneboRS0iq8eyPD9XoZS0Ft8VbVhNBq21+N1Y1gLcxN7ZsOg86Hq81v7bk5i5wyD84SODQdT36JZ2jDyp60z+G2nhtHeT7OOShuep+HUsJ2R0c+dDZ1+h++ZKTUy3vCkhpOcnGovY/hr5GF2OJ8yajy54UKS+BgEYbj4kuv6PQ0d9jQzVc/v4TsL1yowGywGMYteEcNGW6PeMpVgo+nMUP8K1TAf6LE/TdE5jRim4k4MG6qaoYTE4XbDyI67MIykb9Gz0TA1wbnesPUAhnNVS88Iyvd6q+HmAQybqpaBEfy+l+HHAxhKNzk3gv1XMtxm5vJChqGq5NcKK29/MfpjIuPbExoGqpKdFZa2O7ETu9IwOuLCUMb7lRXuqPCh/ylrKDO4Q1/a/fw6InOJ6gyl13y3wnU7XNawq97iJ4YZHVd1hpLuwArLbLyTXJY1XIpJMhN0aii524bfVialDfV4OoovH8NwkZ3idYbyMz4U69RwaKUiSN2r5LKs4Y+YJGcbj2go3+EquSxpGOnl1za+fr1Wqjuaw2QweDvSWVdvmDnxNvrSqwz1z1B1xifVVWc4MHPPCB+WxSUN9U6P739ZrziY00gl9mdtKZU1NBupuSfpOTGUbNpWWHb5v+3EChnKpDbBOt91OfP+scLS3c/txIoY6imb+SF5dkEVrp7Uloz9e/lUde96MbJnXMQwfQgyM1ZQLlbAknxgBAM/hwKGp4PfSr/owlA+8ZERXKaTLGG4Vi+P5a6lU0MZF1ZGUGY65Q1lJJ2FMrPZnB6AVGgojWpmBM2zmnKGuo3WvZH8vXVp6MknPZFQbiO9bChNc/vXv+zkPvVwkRPDlapGjxe5G8IXDXU/Gg/0up36K4eGZrs6oNevm48DrYKGekJ6mEDoduq3I2eGumEdJ1g6rXEQJkSS+XlD3UG1jn2LcX4+DpwZGofcvdp8ZAzYMhspNqd503fKb9ps8DVnp9w7Pxs9oyxkaHw0ehofmd1y4MowPZFU6JOMAoaB3rmw5riBVZ6rp01qfhbGDuplw4Fx48x6Lk56srnnzjDzgZp91uu5hgvjztRDcXMt6PC5ttNzbWtFXKCVLjcqvPRSzP/WL5vUMqz6J/eWesyI2Vor80I9TfffIWrfmdD/2vRTBbl4vvR7Laf3P4O8Q7FzfWm0yxH862766YKcPEHrBaNmZ9VpjronrxRc4+/tNVgGjg3zKbqLUe+f3ptd0LMaFi8Iw6rBsHxBGFYNhuULwrBqMCxfEIZV8/qGzdZnwjTeUn1Jwyg8Eq8bbzEM+t2EfrKV80CGFvI8Re/ye88jm+uzy++tkrB75ORfTa8u6XTNDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwP+Q/Ev5A/1rxFh4AAAAASUVORK5CYII=" alt="참고이미지"/>
                            <img className="recProductImage" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAADAwMCmpqZycnI+Pj6ioqKJiYmbm5vs7OwTExPz8/N1dXWRkZHm5ub7+/seHh4lJSUxMTFqamrg4OCvr6+Xl5fKyspJSUnNzc0ODg4rKyvZ2dmzs7O6urrT09OEhIRbW1tPT08YGBg6OjpiYmJ9fX1DQ0OMXRSXAAAEi0lEQVR4nO2b6XqqOhRAQT22iEpb56lqHfr+b3gLmp0EQUH9iHrX+lW2kuylMSP1PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAqqn7rQR/f2tJtWNJ0/E98rqJUefIxIsNjzRuKKgWX9VUSf/unG95hiqVpneboRS0iq8eyPD9XoZS0Ft8VbVhNBq21+N1Y1gLcxN7ZsOg86Hq81v7bk5i5wyD84SODQdT36JZ2jDyp60z+G2nhtHeT7OOShuep+HUsJ2R0c+dDZ1+h++ZKTUy3vCkhpOcnGovY/hr5GF2OJ8yajy54UKS+BgEYbj4kuv6PQ0d9jQzVc/v4TsL1yowGywGMYteEcNGW6PeMpVgo+nMUP8K1TAf6LE/TdE5jRim4k4MG6qaoYTE4XbDyI67MIykb9Gz0TA1wbnesPUAhnNVS88Iyvd6q+HmAQybqpaBEfy+l+HHAxhKNzk3gv1XMtxm5vJChqGq5NcKK29/MfpjIuPbExoGqpKdFZa2O7ETu9IwOuLCUMb7lRXuqPCh/ylrKDO4Q1/a/fw6InOJ6gyl13y3wnU7XNawq97iJ4YZHVd1hpLuwArLbLyTXJY1XIpJMhN0aii524bfVialDfV4OoovH8NwkZ3idYbyMz4U69RwaKUiSN2r5LKs4Y+YJGcbj2go3+EquSxpGOnl1za+fr1Wqjuaw2QweDvSWVdvmDnxNvrSqwz1z1B1xifVVWc4MHPPCB+WxSUN9U6P739ZrziY00gl9mdtKZU1NBupuSfpOTGUbNpWWHb5v+3EChnKpDbBOt91OfP+scLS3c/txIoY6imb+SF5dkEVrp7Uloz9e/lUde96MbJnXMQwfQgyM1ZQLlbAknxgBAM/hwKGp4PfSr/owlA+8ZERXKaTLGG4Vi+P5a6lU0MZF1ZGUGY65Q1lJJ2FMrPZnB6AVGgojWpmBM2zmnKGuo3WvZH8vXVp6MknPZFQbiO9bChNc/vXv+zkPvVwkRPDlapGjxe5G8IXDXU/Gg/0up36K4eGZrs6oNevm48DrYKGekJ6mEDoduq3I2eGumEdJ1g6rXEQJkSS+XlD3UG1jn2LcX4+DpwZGofcvdp8ZAzYMhspNqd503fKb9ps8DVnp9w7Pxs9oyxkaHw0ehofmd1y4MowPZFU6JOMAoaB3rmw5riBVZ6rp01qfhbGDuplw4Fx48x6Lk56srnnzjDzgZp91uu5hgvjztRDcXMt6PC5ttNzbWtFXKCVLjcqvPRSzP/WL5vUMqz6J/eWesyI2Vor80I9TfffIWrfmdD/2vRTBbl4vvR7Laf3P4O8Q7FzfWm0yxH862766YKcPEHrBaNmZ9VpjronrxRc4+/tNVgGjg3zKbqLUe+f3ptd0LMaFi8Iw6rBsHxBGFYNhuULwrBqMCxfEIZV8/qGzdZnwjTeUn1Jwyg8Eq8bbzEM+t2EfrKV80CGFvI8Re/ye88jm+uzy++tkrB75ORfTa8u6XTNDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwP+Q/Ev5A/1rxFh4AAAAASUVORK5CYII=" alt="참고이미지"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Result;