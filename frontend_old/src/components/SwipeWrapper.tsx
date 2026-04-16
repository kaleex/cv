import { ReactNode, useEffect, useState } from 'react'
import { useSwipeNavigation } from '../hooks/useSwipeNavigation'
import { features } from '../config/features'
import './SwipeWrapper.css'

interface SwipeWrapperProps {
  children: ReactNode
}

export const SwipeWrapper = ({ children }: SwipeWrapperProps) => {
  const { handlers, currentIndex, totalPages, canGoNext, canGoPrev } = useSwipeNavigation()
  const [isMobile, setIsMobile] = useState(() => 
    typeof window !== 'undefined' && window.matchMedia('(max-width: 600px)').matches
  )
  const [showIndicators, setShowIndicators] = useState(true)
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)')
    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Mostrar indicadores al cambiar de página, luego desvanecer
  useEffect(() => {
    setShowIndicators(true)
    const timeout = setTimeout(() => setShowIndicators(false), 3000)
    return () => clearTimeout(timeout)
  }, [currentIndex])

  // 🐉 Here be dragons - swipe navigation
  if (!features.swipeNavigation) {
    return <>{children}</>
  }
  
  return (
    <div {...handlers} className="swipe-wrapper">
      {children}
      
      {isMobile && (
        <>
          {/* Swipe indicators */}
          <div className={`swipe-indicators ${showIndicators ? 'visible' : 'hidden'}`}>
            {Array.from({ length: totalPages }).map((_, index) => (
              <span 
                key={index} 
                className={`swipe-dot ${index === currentIndex ? 'active' : ''}`}
              />
            ))}
          </div>
          
          {/* Edge hints */}
          {canGoPrev && <div className={`swipe-hint swipe-hint-left ${showIndicators ? 'visible' : 'hidden'}`}>‹</div>}
          {canGoNext && <div className={`swipe-hint swipe-hint-right ${showIndicators ? 'visible' : 'hidden'}`}>›</div>}
        </>
      )}
    </div>
  )
}
