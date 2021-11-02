// folder로 만든 이유
// styled component + component
import styled, { createGlobalStyle } from 'styled-components'
import { CloseOutlined } from '@ant-design/icons'

// ``: 함수를 호출하는 자바스크립트 문법(Tagged templates literals)
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
// func()
// func``
export const Overlay = styled.div`
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const Header = styled.header`
  header: 44px;
  background: white;
  position: relative;
  padding: 0;
  text-align: center;

  // 변수명 짓는 고민을 덜 할수 있다.
  & h1 {
    margin: 0;
    font-size: 17px;
    color: #333;
    line-height: 44px;
  }
`

// antd 컴포넌트를 스타일링 할거라 별도로 뺌
export const CloseBtn = styled(CloseOutlined)`
  position: absolute;
  right: 0;
  top: 0;
  padding: 15px;
  line-height: 14px;
  cursor: pointer;
`
export const SlickWrapper = styled.div`
  height: calc(100% - 44px);
  background: #090909;
`

export const ImgWrapper = styled.div`
  padding: 32px;
  text-align: center;

  & img {
    margin: 0 auto;
    max-height: 750px;
  }
`

export const Indicator = styled.div`
  text-align: center;

  & > div {
    width: 75px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    background: #313131;
    display: inline-block;
    text-align: center;
    color: white;
    font-size: 15px;
  }
`

// 스타일 오버라이딩을 위한
export const Global = createGlobalStyle`
  .slick-slide {
    display: inline-block;
  }
  /* position: fixed와 transform이 같이 쓰일 때의 브라우저 bug */
  .ant-card-cover {
    transform: none !important;
  }
`