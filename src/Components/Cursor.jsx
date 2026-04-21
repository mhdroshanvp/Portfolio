import React, { useState, useEffect } from 'react';

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      document.body.style.cursor = 'auto';
      return;
    }

    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    document.body.style.cursor = 'none';
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      className="cursor"
      style={{
        top: position.y,
        left: position.x,
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}

export default Cursor;