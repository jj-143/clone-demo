import React, { useCallback, useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import Ceo from "./Ceo"
import About from "./About"
import History from "./History"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

import { main, vrs } from "./styles/Main.css"
import all, { loadingLayer, open, close } from "./styles/loadingLayer.css"

const paths = {
  "/": About,
  "/about": About,
  "/ceo": Ceo,
  "/history": History,
}

function Main() {
  const mainRef = useRef()
  const vrsRef = useRef()
  const footerRef = useRef()

  let timer

  const onScroll = useCallback(({ target: el }) => {
    if (timer) cancelAnimationFrame(timer)
    timer = requestAnimationFrame(() => {
      const footerRect = footerRef.current.getBoundingClientRect()
      let y = 467 - (document.body.scrollHeight - footerRect.bottom - window.scrollY)
      Array.from(vrsRef.current.children).forEach(e => (e.style.bottom = `${y}px`))
    })
  })

  useEffect(() => {
    addEventListener("scroll", onScroll)
    return () => {
      removeEventListener("scroll", onScroll)
    }
  }, [])

  // previously, "RouterSwitcher Component"
  const match = useLocation()
  const component = paths[match.pathname]
  const [wallState, setWallState] = useState("CLOSE")
  const CompRef = useRef(component)
  const wallInitialSkip = useRef(true)

  useEffect(() => {
    if (wallInitialSkip.current) {
      wallInitialSkip.current = false
      onAnimationEnd()
      return
    }
    setWallState("CLOSE")
  }, [match.pathname])

  const onAnimationEnd = () => {
    if (wallState === "CLOSE") {
      CompRef.current = component

      requestAnimationFrame(() => {
        window.scroll(0, 0)
        setWallState("OPEN")
      })
    }
  }

  return (
    <>
      <NavBar />
      <main className={main} ref={mainRef}>
        <CompRef.current />
        <div ref={vrsRef} className={vrs}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </main>

      <div
        className={loadingLayer + " " + (wallState === "OPEN" ? open : close)}
        onAnimationEnd={onAnimationEnd}
      >
        <div className="vrs">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <Footer forwardRef={footerRef} />
    </>
  )
}

export default Main
