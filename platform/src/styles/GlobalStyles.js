import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    /* other styles */
`

export default GlobalStyles;

/* 이거 index.js 로 가져가서 다시 해보자.. 저장 안해서 오류인지 확인 안됨. */
