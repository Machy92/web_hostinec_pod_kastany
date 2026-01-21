import React, { useState, useEffect } from 'react';

function ScrollArrow() {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight * 0.9,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);


  return (
    <>
      {isVisible && (
        <div
          className="floating-scroll-arrow"
          onClick={handleScroll}
          aria-label="Scroll down"
        >
          <i className="bi bi-chevron-down"></i>
        </div>
      )}
    </>
  );
}

export default ScrollArrow;