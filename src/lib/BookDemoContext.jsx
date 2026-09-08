import { createContext, useContext, useMemo, useState } from 'react'

const BookDemoContext = createContext(null)

export function BookDemoProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const value = useMemo(() => ({
    isOpen,
    openModal: () => setIsOpen(true),
    closeModal: () => setIsOpen(false),
  }), [isOpen])
  return <BookDemoContext.Provider value={value}>{children}</BookDemoContext.Provider>
}

export function useBookDemo() {
  const ctx = useContext(BookDemoContext)
  if (!ctx) throw new Error('useBookDemo must be used within a BookDemoProvider')
  return ctx
}
