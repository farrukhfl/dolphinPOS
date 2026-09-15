import { useEffect, useState } from 'react'

/**
 * Tracks whether a horizontally-scrollable element has more content hidden
 * off its left/right edge, so callers can show a "there's more here" fade or
 * hint. On a container that isn't overflowing (e.g. a wide comparison table
 * on tablet/desktop) both flags settle to false — no extra breakpoint class
 * needed to hide the affordance once it stops being useful.
 */
export function useScrollEdges(ref) {
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(true)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const update = () => {
      setAtStart(el.scrollLeft <= 4)
      setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 4)
    }

    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ref])

  return { showLeftFade: !atStart, showRightFade: !atEnd }
}
