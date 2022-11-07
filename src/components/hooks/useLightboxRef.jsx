import { useEffect, useRef } from 'react'

const useLightboxRef = (isOpen) => {
  const lightboxRef = useRef(null)
  useEffect(() => {
    if (lightboxRef.current) {
      lightboxRef.current.focus()
    }
  }, [lightboxRef])

  // focus on open
  useEffect(() => {
    if (isOpen && lightboxRef.current) {
      lightboxRef.current.focus()
    }
  }, [isOpen])
  return lightboxRef
}

export default useLightboxRef
