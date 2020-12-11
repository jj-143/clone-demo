import { useRef, useEffect } from "react"

export function useIntersectionObserver(clsHide, clsReveal, compName) {
  const observer = useRef()
  const entriesRef = useRef([])

  const callback = entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0.5) {
        entry.target.classList.add(clsReveal)
      } else if (entry.intersectionRatio <= 0) {
        entry.target.classList.remove(clsReveal)
      }
    })
  }

  const observe = elm => {
    if (!elm || entriesRef.current.includes(elm)) return
    entriesRef.current.push(elm)
  }

  useEffect(() => {
    observer.current = new IntersectionObserver(callback, {
      threshold: [0, 0.5],
    })

    entriesRef.current.forEach(elm => {
      Array.from(elm.children).forEach(el => {
        el.classList.add(clsHide)
        observer.current.observe(el)
      })
    })
  }, [])

  return observe
}
