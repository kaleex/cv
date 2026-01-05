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
    // Circular: si está en la última, vuelve a la primera
    const nextIndex = currentIndex >= pages.length - 1 ? 0 : currentIndex + 1
    navigate(pages[nextIndex])
  }
  
  const goToPrevPage = () => {
    // Circular: si está en la primera, va a la última
    const prevIndex = currentIndex <= 0 ? pages.length - 1 : currentIndex - 1
    navigate(pages[prevIndex])
  }
  
  const handlers = useSwipeable({
    onSwipedLeft: goToNextPage,
    onSwipedRight: goToPrevPage,
    preventScrollOnSwipe: false,
    trackMouse: false,
    delta: 80, // Minimum swipe distance
    swipeDuration: 500,
  })
  
  // Only enable on mobile - use matchMedia to avoid forced reflow
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 600px)').matches
  
  return {
    handlers: isMobile ? handlers : {},
    currentIndex,
    totalPages: pages.length,
    canGoNext: true,  // Siempre puede navegar (circular)
    canGoPrev: true,  // Siempre puede navegar (circular)
  }
}
