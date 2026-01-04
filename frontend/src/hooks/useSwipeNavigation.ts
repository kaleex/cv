import { useNavigate, useLocation } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'
import { features } from '../config/features'

// Define page order based on enabled features
const getPageOrder = (): string[] => {
  const pages = ['/']
  
  pages.push('/skills')
  
  if (features.experience) pages.push('/experience')
  if (features.projects) pages.push('/repos')
  if (features.certifications) pages.push('/badges')
  if (features.blog) pages.push('/blog')
  
  pages.push('/contact')
  
  return pages
}

export const useSwipeNavigation = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const pages = getPageOrder()
  
  const currentIndex = pages.indexOf(location.pathname)
  
  const goToNextPage = () => {
    if (currentIndex < pages.length - 1) {
      navigate(pages[currentIndex + 1])
    }
  }
  
  const goToPrevPage = () => {
    if (currentIndex > 0) {
      navigate(pages[currentIndex - 1])
    }
  }
  
  const handlers = useSwipeable({
    onSwipedLeft: goToNextPage,
    onSwipedRight: goToPrevPage,
    preventScrollOnSwipe: false,
    trackMouse: false,
    delta: 80, // Minimum swipe distance
    swipeDuration: 500,
  })
  
  // Only enable on mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 600
  
  return {
    handlers: isMobile ? handlers : {},
    currentIndex,
    totalPages: pages.length,
    canGoNext: currentIndex < pages.length - 1,
    canGoPrev: currentIndex > 0,
  }
}
