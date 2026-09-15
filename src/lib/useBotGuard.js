import { useRef } from 'react'

/**
 * Honeypot check for public, unauthenticated forms. Bots that autofill every
 * field — including the one hidden from real users — get a silent "success"
 * instead of hitting the API, no CAPTCHA/service dependency needed.
 *
 * A fill-time check used to back this up (reject anything submitted under
 * 1.5s), but timing can't actually tell a bot from a human using browser
 * autofill: both fill the form near-instantly. That made it a coin flip
 * whether a real lead using autofill got silently dropped, which is worse
 * than letting a bit more spam through — so it's gone. The honeypot alone
 * has effectively zero false-positive risk against real users.
 */
export function useBotGuard() {
  const honeypotValue = useRef('')

  return {
    honeypotProps: {
      name: 'hp_confirm',
      tabIndex: -1,
      autoComplete: 'off',
      'aria-hidden': true,
      style: { position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' },
      onChange: (event) => { honeypotValue.current = event.target.value },
    },
    isBot: () => honeypotValue.current !== '',
  }
}
