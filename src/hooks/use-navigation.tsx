import { useState, useEffect, useCallback } from 'react';

export interface Section {
  id: string;
  title: string;
  component: React.ComponentType;
}

export function useNavigation(sections: Section[]) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Listen for resize events
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navigateToSection = useCallback((index: number) => {
    if (index >= 0 && index < sections.length && !isNavigating) {
      setIsNavigating(true);
      setCurrentSectionIndex(index);

      // Add visual feedback
      document.body.style.cursor = 'wait';

      // Scroll to section
      const sectionElement = document.getElementById(sections[index].id);
      if (sectionElement) {
        sectionElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }

      // Reset navigation lock after animation
      setTimeout(() => {
        setIsNavigating(false);
        document.body.style.cursor = 'default';
      }, 800);
    }
  }, [sections, isNavigating]);

  const nextSection = useCallback(() => {
    if (currentSectionIndex < sections.length - 1) {
      navigateToSection(currentSectionIndex + 1);
    } else {
      // Show completion message when trying to go beyond the last section
      setShowCompletion(true);
    }
  }, [currentSectionIndex, sections.length, navigateToSection]);

  const previousSection = useCallback(() => {
    if (currentSectionIndex > 0) {
      navigateToSection(currentSectionIndex - 1);
    }
  }, [currentSectionIndex, navigateToSection]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ignore if user is typing in an input field
      if (event.target instanceof HTMLInputElement ||
          event.target instanceof HTMLTextAreaElement ||
          isNavigating) return;

      switch (event.key) {
        case 'ArrowDown':
        case 'ArrowRight':
          event.preventDefault();
          nextSection();
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
          event.preventDefault();
          previousSection();
          break;
        case 'Home':
          event.preventDefault();
          navigateToSection(0);
          break;
        case 'End':
          event.preventDefault();
          navigateToSection(sections.length - 1);
          break;
        case 'Escape':
          // Close completion message if open
          if (showCompletion) {
            setShowCompletion(false);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSection, previousSection, navigateToSection, sections.length, isNavigating, showCompletion]);

  // Intersection Observer for more accurate section detection (disabled on mobile)
  useEffect(() => {
    if (isNavigating || isMobile) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px', // Only trigger when section is 20% visible from top and bottom
      threshold: 0.5 // Trigger when 50% of the section is visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isNavigating) return;

      // Find the most visible section
      let mostVisibleSection = -1;
      let maxIntersectionRatio = 0;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
          const sectionId = entry.target.id;
          const sectionIndex = sections.findIndex(section => section.id === sectionId);
          if (sectionIndex !== -1) {
            mostVisibleSection = sectionIndex;
            maxIntersectionRatio = entry.intersectionRatio;
          }
        }
      });

      // Also check if we're at the bottom of the page
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight - 50) {
        mostVisibleSection = sections.length - 1;
      }

      if (mostVisibleSection !== -1) {
        setCurrentSectionIndex(mostVisibleSection);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Fallback scroll detection for edge cases
    const handleScroll = () => {
      if (isNavigating) return;

      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Force last section when at bottom
      if (scrollTop + windowHeight >= documentHeight - 10) {
        setCurrentSectionIndex(sections.length - 1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections, isNavigating, isMobile]);

  // Touch/swipe navigation for mobile (disabled to allow natural scrolling)
  useEffect(() => {
    // Disable swipe navigation on mobile to allow natural scrolling
    if (isMobile) return;

    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndY = e.changedTouches[0].screenY;
      handleSwipe();
    };

    const handleSwipe = () => {
      if (isNavigating) return;

      const swipeThreshold = 50;
      const swipeDistance = touchStartY - touchEndY;

      if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
          // Swipe up - next section
          nextSection();
        } else {
          // Swipe down - previous section
          previousSection();
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [nextSection, previousSection, isNavigating, isMobile]);

  const restartNavigation = useCallback(() => {
    setShowCompletion(false);
    navigateToSection(0);
  }, [navigateToSection]);

  const closeCompletion = useCallback(() => {
    setShowCompletion(false);
  }, []);

  // Auto-show completion message when user stays on last section for a while
  useEffect(() => {
    if (currentSectionIndex === sections.length - 1 && !showCompletion) {
      const timer = setTimeout(() => {
        setShowCompletion(true);
      }, 5000); // Show after 5 seconds on last section

      return () => clearTimeout(timer);
    }
  }, [currentSectionIndex, sections.length, showCompletion]);



  return {
    currentSectionIndex,
    currentSection: sections[currentSectionIndex],
    nextSection,
    previousSection,
    navigateToSection,
    isNavigating,
    totalSections: sections.length,
    progress: ((currentSectionIndex + 1) / sections.length) * 100,
    showCompletion,
    restartNavigation,
    closeCompletion
  };
}
