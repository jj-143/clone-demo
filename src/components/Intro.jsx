import React from "react"
import { Link } from "react-router-dom"

import { intro, feature, breadcrumbs, inactive } from "./Intro.css"

export function BreadCrumbs({ items, inActive }) {
  return (
    <ul className={breadcrumbs + " " + (inActive ? inactive : "")}>
      {items.map(({ text, link }) => (
        <li key={text}>{link ? <Link to={link}>{text}</Link> : text}</li>
      ))}
    </ul>
  )
}

function Intro({ category, title }) {
  const breadcrumbItems = [
    {
      text: "home",
      link: "/",
    },
    {
      text: category,
    },
    {
      text: title,
    },
  ]

  return (
    <div className={intro}>
      <div className={feature}>
        <BreadCrumbs items={breadcrumbItems}></BreadCrumbs>
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default Intro
