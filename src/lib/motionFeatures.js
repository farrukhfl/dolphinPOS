// Loaded lazily by <LazyMotion> in main.jsx. Splitting this out means the
// animation engine (drag/layout/gestures) downloads as its own chunk after
// first paint instead of blocking the initial bundle — see the LazyMotion
// docs: https://motion.dev/docs/react-reduce-bundle-size
// domMax (not domAnimation) because a few tabs/pills use layoutId.
export const loadFeatures = () => import('framer-motion').then((mod) => mod.domMax)
