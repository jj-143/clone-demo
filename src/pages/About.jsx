import React, { useCallback, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import Intro, { BreadCrumbs } from "../components/Intro"
import { useIntersectionObserver } from "../utils/useIntersectionObserver"

import { revealRight, hide, revealVertical, cat, contents } from "./styles/Main.css"

export default function About() {
  const parallax = useRef()
  const observe = useIntersectionObserver(hide, revealVertical)
  const observeRight = useIntersectionObserver(hide, revealRight)

  const parallaxMove = useCallback(() => {
    let rect = parallax.current.getBoundingClientRect()
    let perc = 1 - rect.top / window.innerHeight
    perc = Math.min(1.5, Math.max(0.5, perc))
    parallax.current.style.backgroundPositionY = `${2 * (perc - 0.5) * 50}%`
  })
  useEffect(() => {
    addEventListener("scroll", parallaxMove)
    return () => {
      removeEventListener("scroll", parallaxMove)
    }
  }, [])

  return (
    <div className={contents}>
      <Intro category="company" title="About" />
      <section>
        <article ref={observe} className="left">
          <h2 className="title">
            전 세계를 움직일
            <br /> 이야기 IP의 힘 <br /> 카카오페이지
          </h2>
          <div ref={observe} className="desc">
            <p>
              글로벌 콘텐츠 비즈니스 기업 주식회사 카카오페이지 (대표 이진수)는 카카오의 콘텐츠
              자회사로서, 한국을 대표하는 종합 콘텐츠 플랫폼 '카카오페이지'와 세계 최초 웹툰 플랫폼
              '다음웹툰'을 서비스하고 있습니다.
            </p>
            <p>
              주식회사 카카오페이지는 수퍼 IP를 기반으로 다양한 미디어를 넘나들며 혁신적인 콘텐츠
              소비 경험을 제공하는 것을 모토로 하고 있습니다.
            </p>
            <p>
              더 나아가, 다양한 파트너들과의 협업을 통해 기존에 없던 비즈니스모델을 창조해내며 한국
              콘텐츠 IP 사업에 가치를 더하고, 한국 콘텐츠의 글로벌화를 위해 앞장서고 있습니다.
            </p>
          </div>
        </article>

        <article ref={observe} className="right">
          <h2 className="title">
            소설에서 웹툰으로
            <br />
            영화와 드라마까지
            <br />
            확장가능한 스토리 IP
          </h2>
        </article>
        <article ref={parallax} className="full parallax_1"></article>

        <article ref={observe} className="left">
          <h2 className="title">
            해외 플랫폼을 통해
            <br />
            중국, 일본 진출
            <br />
            북미, 동남아 확장
          </h2>
        </article>

        <article
          className={cat}
          style={{ height: "550px", marginLeft: "-25%", marginRight: "-25%" }}
        ></article>
      </section>

      <section className="next">
        <div ref={observeRight}>
          <h3 className="left">CEO가 말하는 주식회사 카카오 페이지의 미래</h3>
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
                text: "CEO Interview",
              },
            ]}
            inActive={true}
          />
          <h1></h1>
          <Link to="/ceo" className="link">
            CEO Interview
          </Link>
        </div>
      </section>
    </div>
  )
}
