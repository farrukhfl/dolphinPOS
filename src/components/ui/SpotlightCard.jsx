import { useCallback } from 'react'

/**
 * Card shell whose background follows the cursor. The gradient itself lives in
 * CSS (`.spotlight`); this only feeds it --mx / --my so it stays off the React
 * render path and never triggers a re-render on mousemove.
 */
export default function SpotlightCard({ as: Tag = 'div', children, className = '', dark = false, ...props }) {
  const handleMove = useCallback((event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }, [])

  return (
    <Tag onMouseMove={handleMove} className={`spotlight ${dark ? 'spotlight-dark' : ''} ${className}`} {...props}>
      {children}
    </Tag>
  )
}
