import React from "react"
import { Link } from "react-router-dom"
import Intro, { BreadCrumbs } from "../components/Intro"
import { useIntersectionObserver } from "../utils/useIntersectionObserver"
import { revealRight, hide, revealVertical, cat, contents } from "./styles/Main.css"

export default function Ceo() {
  const observe = useIntersectionObserver(hide, revealVertical)
  const observeRight = useIntersectionObserver(hide, revealRight)

  return (
    <div className={contents}>
      <Intro category="company" title="CEO Interview" />
      <section>
        <article ref={observe} className="left">
          <h2 className="title">
            이야기 콘텐츠의 힘<br />
            글로벌로 도약하는
            <br />
            콘텐츠 산업을
            <br />
            키워내겠습니다
          </h2>
          <div ref={observe} className="desc right">
            <p>
              강력한 이야기는 사람들을 움직이는 힘이 있습니다.
              <br />
              불과 몇 년 전만 해도 미약한 시장이었던 웹툰, 웹소설에 우리는 새로운 비즈니스 모델을
              도입해 폭발적인 가능성을 보여줬습니다.
            </p>
            <p>
              나아가, 하나의 스토리 IP를 소설에서 웹툰으로, 웹툰에서 다시 영상으로 진화시키며
              산업적인 확장을 지속적으로 주도하고 있습니다.
            </p>
            <p>
              카카오페이지는 한국을 넘어 전 세계가 주목하는 스토리 콘텐츠 IP 시장을 개척해나가며
              대한민국의 콘텐츠 산업을 선도해 나가겠습니다.
            </p>
            <p>CEO 이 진 수</p>
          </div>
        </article>
      </section>

      <section className="next">
        <div ref={observeRight}>
          <h3 className="left">주식회사 카카오페이지가 걸어온길</h3>
        </div>
        <div ref={observeRight}>
          <BreadCrumbs
            items={[
              {
                text: "Home",
              },
              {
                text: "Company",
              },
              {
                text: "History",
              },
            ]}
            inActive={true}
          />
          <h1></h1>
          <Link to="/history" className="link">
            History
          </Link>
        </div>
      </section>
    </div>
  )
}
