import { ReactNode, useEffect, useState } from 'react'
import { useSwipeNavigation } from '../hooks/useSwipeNavigation'
import './SwipeWrapper.css'

interface SwipeWrapperProps {
  children: ReactNode
}

export const SwipeWrapper = ({ children }: SwipeWrapperProps) => {
  const { handlers, currentIndex, totalPages, canGoNext, canGoPrev } = useSwipeNavigation()
  const [isMobile, setIsMobile] = useState(() => 
    typeof window !== 'undefined' && window.matchMedia('(max-width: 600px)').matches
  )
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)')
    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])
  
  return (
    <div {...handlers} className="swipe-wrapper">
      {children}
      
      {isMobile && (
        <>
          {/* Swipe indicators */}
          <div className="swipe-indicators">
            {Array.from({ length: totalPages }).map((_, index) => (
              <span 
                key={index} 
                className={`swipe-dot ${index === currentIndex ? 'active' : ''}`}
              />
            ))}
          </div>
          
          {/* Edge hints */}
          {canGoPrev && <div className="swipe-hint swipe-hint-left">‹</div>}
          {canGoNext && <div className="swipe-hint swipe-hint-right">›</div>}
        </>
      )}
    </div>
  )
}
