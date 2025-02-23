import React, { useState, useEffect } from 'react';

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    // Hide the default cursor
    document.body.style.cursor = 'none';

    // Add mousemove event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function
    return () => {
      // Restore the default cursor
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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