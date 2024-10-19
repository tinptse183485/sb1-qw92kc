import React from 'react';

const FloatingFlowers: React.FC = () => {
  const flowers = [
    '🌸', '🌺', '🌻', '🌼', '🌷', '💐'
  ];

  return (
    <div className="fixed inset-0 pointer-events-none">
      {flowers.map((flower, index) => (
        <div
          key={index}
          className="absolute text-4xl animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          {flower}
        </div>
      ))}
    </div>
  );
};

export default FloatingFlowers;