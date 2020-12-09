import React, { useCallback, useEffect, useRef } from "react"
import { Link } from "react-router-dom"

import { active, nav, bi, menu, menuBar, category, languageMenu } from "./NavBar.css"

import logo from "../assets/logo_default.png"
import logoOn from "../assets/logo_on.png"

function MenuBar() {
  const openMenu = useCallback(() => {
    menuBarRef.current.classList.add("open")
  })

  const closeMenu = useCallback(() => {
    menuBarRef.current.classList.remove("open")
  })

  const menuBarRef = useRef()

  return (
    <div ref={menuBarRef} className={menuBar}>
      <div className={bi}>
        <a href="/">
          <img src={logo} alt="" width="94" />
          <img className="on" src={logoOn} alt="" width="94" />
        </a>
      </div>
      <div className={menu} onFocus={openMenu} onMouseOver={openMenu} onMouseLeave={closeMenu}>
        <ul className={category + " " + active}>
          <Link to="/">company</Link>
          <ul>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/ceo">CEO interview</Link>
            </li>
            <li>
              <Link to="/history">history</Link>
            </li>
            <li>
              <Link to="/">CI/BI</Link>
            </li>
            <li>
              <Link to="/">location</Link>
            </li>
          </ul>
        </ul>
        <ul className={category}>
          <Link to="/">business</Link>
          <ul>
            <li>
              <Link to="/">kakaopage</Link>
            </li>
            <li>
              <Link to="/">Daum Webtoon</Link>
            </li>
            <li>
              <Link to="/">Contents Showroom</Link>
            </li>
            <li>
              <Link to="/">Partnership</Link>
            </li>
          </ul>
        </ul>
        <ul className={category}>
          <Link to="/">ir</Link>
        </ul>
        <ul className={category}>
          <Link to="/">pr</Link>
        </ul>
        <ul className={category}>
          <Link to="/">careers</Link>
          <ul>
            <li>
              <Link to="/">Our Culture</Link>
            </li>
            <li>
              <Link to="/">Recruit</Link>
            </li>
          </ul>
        </ul>
        <ul className={category}>
          <Link to="/">contact us</Link>
        </ul>
      </div>
      <LanguageMenu />
    </div>
  )
}

function LanguageMenu({ active = "kor" }) {
  return (
    <ul className={languageMenu}>
      <li className={active === "kor" ? "active" : ""}>kor</li>
      <li className={active === "eng" ? "active" : ""}>eng</li>
    </ul>
  )
}

function NavBar() {
  const ref = useRef()

  const handler = useCallback(() => {
    let r = Math.min(window.scrollY / 400, 1) * 0.7
    ref.current.style.backgroundColor = `rgba(0, 0, 0, ${r})`
  })

  useEffect(() => {
    addEventListener("scroll", handler)
    return () => {
      removeEventListener("scroll", handler)
    }
  }, [])

  return (
    <nav ref={ref} className={nav}>
      <MenuBar />
    </nav>
  )
}

export default NavBar
