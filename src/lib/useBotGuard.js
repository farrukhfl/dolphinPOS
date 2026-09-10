import { useEffect, useRef } from 'react'

const MIN_FILL_TIME_MS = 1500

/**
 * Honeypot + fill-time check for public, unauthenticated forms.
 * Bots that autofill every field, or submit near-instantly, get a silent
 * "success" instead of hitting the API — no CAPTCHA/service dependency needed.
 */
export function useBotGuard(resetKey) {
  const renderedAt = useRef(Date.now())
  const honeypotValue = useRef('')

  useEffect(() => {
    renderedAt.current = Date.now()
  }, [resetKey])

  return {
    honeypotProps: {
      name: 'hp_confirm',
      tabIndex: -1,
      autoComplete: 'off',
      'aria-hidden': true,
      style: { position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' },
      onChange: (event) => { honeypotValue.current = event.target.value },
    },
    isBot: () => honeypotValue.current !== '' || Date.now() - renderedAt.current < MIN_FILL_TIME_MS,
  }
}
