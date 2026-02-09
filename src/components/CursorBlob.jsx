import { useEffect, useRef } from 'react'

export default function CursorBlob() {
  const blobRef = useRef(null)

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      currentX += (mouseX - currentX) * 0.1
      currentY += (mouseY - currentY) * 0.1

      if (blobRef.current) {
        blobRef.current.style.left = currentX + 'px'
        blobRef.current.style.top = currentY + 'px'
      }

      requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return <div ref={blobRef} className="gradient-blob cursor-blob"></div>
}
