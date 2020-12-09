import React, { useCallback, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import Intro, { BreadCrumbs } from "../components/Intro"
import { useIntersectionObserver } from "../utils/useIntersectionObserver"

import { revealRight, hide, revealVertical, cat, contents } from "./styles/Main.css"
import { shortDesc, longDesc, descDate, year, bigtitle } from "./styles/History.css"

export default function History() {
  const observe = useIntersectionObserver(hide, revealVertical)
  const observeRight = useIntersectionObserver(hide, revealRight)

  return (
    <div className={contents}>
      <Intro category="company" title="History" />
      <section>
        <article className={year}>
          <div ref={observe} className={"left"}>
            <h2 className={"title " + bigtitle}>2020</h2>
          </div>
          <div ref={observe}>
            <h3 className={bigtitle}>May</h3>
            <p className={shortDesc}>일 거래액 20억 돌파</p>
            <p className={longDesc}>
              견고한 IP 밸류체인에 기반하여 국내외 IP 하루 거래액 20억을 돌파하는 성과를
              거두었습니다. 이러한 성과는 2019년 일 거래액 10억을 돌파한 이후 8개월만에 2배의
              성장으로 가파른 성장세를 보여주는데 성공했습니다.
            </p>
            <p className={descDate}>2020.05.</p>
          </div>
        </article>
        <article className={year}>
          <div ref={observe} className={"left"}>
            <h2 className={"title " + bigtitle}>2019</h2>
          </div>
          <div ref={observe}>
            <h3 className={bigtitle}>Dec</h3>
            <p className={shortDesc}>연 거래액 2,500억 돌파</p>
            <p className={longDesc}>
              견고한 IP 밸류체인에 기반하여 국내외 IP 하루 거래액 20억을 돌파하는 성과를
              거두었습니다. 이러한 성과는 2019년 일 거래액 10억을 돌파한 이후 8개월만에 2배의
              성장으로 가파른 성장세를 보여주는데 성공했습니다.
            </p>
            <p className={descDate}>2019.12.</p>

            <h3 className={bigtitle}>Sep</h3>
            <p className={shortDesc}>연 거래액 2,500억 돌파</p>
            <p className={longDesc}>
              견고한 IP 밸류체인에 기반하여 국내외 IP 하루 거래액 20억을 돌파하는 성과를
              거두었습니다. 이러한 성과는 2019년 일 거래액 10억을 돌파한 이후 8개월만에 2배의
              성장으로 가파른 성장세를 보여주는데 성공했습니다.
            </p>
            <p className={descDate}>2019.08.</p>
          </div>
        </article>
        <article className={year}>
          <div ref={observe} className={"left"}>
            <h2 className={"title " + bigtitle}>2018</h2>
          </div>
          <div ref={observe}>
            <h3 className={bigtitle}>Dec</h3>
            <p className={shortDesc}>연 거래액 2,500억 돌파</p>
            <p className={longDesc}>
              견고한 IP 밸류체인에 기반하여 국내외 IP 하루 거래액 20억을 돌파하는 성과를
              거두었습니다. 이러한 성과는 2019년 일 거래액 10억을 돌파한 이후 8개월만에 2배의
              성장으로 가파른 성장세를 보여주는데 성공했습니다.
            </p>
            <p className={descDate}>2018.12.</p>

            <h3 className={bigtitle}>Aug</h3>
            <p className={shortDesc}>연 거래액 2,500억 돌파</p>
            <p className={cat} style={{ height: "150px" }}></p>
            <p className={longDesc}>
              견고한 IP 밸류체인에 기반하여 국내외 IP 하루 거래액 20억을 돌파하는 성과를
              거두었습니다. 이러한 성과는 2019년 일 거래액 10억을 돌파한 이후 8개월만에 2배의
              성장으로 가파른 성장세를 보여주는데 성공했습니다.
            </p>
            <p className={descDate}>2018.08</p>

            <h3 className={bigtitle}>Jan</h3>
            <p className={shortDesc}>연 거래액 2,500억 돌파</p>
            <p className={cat} style={{ height: "150px" }}></p>
            <p className={longDesc}>
              견고한 IP 밸류체인에 기반하여 국내외 IP 하루 거래액 20억을 돌파하는 성과를
              거두었습니다. 이러한 성과는 2019년 일 거래액 10억을 돌파한 이후 8개월만에 2배의
              성장으로 가파른 성장세를 보여주는데 성공했습니다.
            </p>
            <p className={descDate}>2018.01</p>
          </div>
        </article>
      </section>

      <section className="next">
        <div ref={observeRight}>
          <h3 className="left">주식회사 카카오페이지의 브랜드 아이덴티티</h3>
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
                text: "CI/BI",
              },
            ]}
            inActive={true}
          />
          <h1></h1>
          <Link to="/" className="link">
            CI/BI
          </Link>
        </div>
      </section>
    </div>
  )
}
