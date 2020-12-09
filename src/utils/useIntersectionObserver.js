import { useRef, useEffect, useCallback } from "react"

export function useIntersectionObserver(clsHide, clsReveal) {
  let observer = useRef()
  let hide = useRef(clsHide)
  let reveal = useRef(clsReveal)

  const callback = useCallback(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0.5) {
        entry.target.classList.add(reveal.current)
      } else if (entry.intersectionRatio <= 0) {
        entry.target.classList.remove(reveal.current)
      }
    })
  })

  const observe = useCallback(elm => {
    if (!elm || !observer.current) return

    Array.from(elm.children).forEach(el => {
      el.classList.add(hide.current)
      observer.current.observe(el)
    })
  })

  useEffect(() => {
    observer.current = new IntersectionObserver(callback, {
      threshold: [0, 0.5],
    })
  }, [])

  return observe
}
