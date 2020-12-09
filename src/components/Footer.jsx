import React from "react"

import { footer, bi, menu, info, sns } from "./Footer.css"

function Footer({ forwardRef }) {
  return (
    <footer ref={forwardRef} className={footer}>
      <span className={bi}>kakaopage</span>
      <ul className={menu}>
        <li>
          <a href="/">company</a>
        </li>
        <li>
          <a href="/">business</a>
        </li>
        <li>
          <a href="/">ir</a>
        </li>
        <li>
          <a href="/">pr</a>
        </li>
        <li>
          <a href="/">careers</a>
        </li>
      </ul>
      <div className={info}>
        <div>
          <span>이용약관</span>
          <span>개인정보처리방침</span>
          <span>오시는길</span>
          <span>제휴제안</span>
        </div>
        <div>
          <span>주식회사 카카오페이지</span>
        </div>
        <div>
          <span>경기도 성남시 분당구 판교역로 221, 6층 (삼평동 672, 투썬월드빌딩)</span>
        </div>
        <div>
          <span>1644-4755</span>
          <span>대표이사 이진수</span>
          <span>사업자 등록번호 220-88-02594</span>
        </div>
        <div style={{ marginTop: "115px", marginBottom: "0" }}>
          Copyright © Kakao Page Corp. All rights reserved.
        </div>
        <div>Related Website</div>
      </div>
      <span className={sns}></span>
    </footer>
  )
}

export default Footer
