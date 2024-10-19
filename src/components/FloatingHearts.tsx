import React from 'react';
import { Heart } from 'lucide-react';

const FloatingHearts: React.FC = () => {
  const hearts = Array(15).fill(null);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {hearts.map((_, index) => (
        <Heart
          key={index}
          className="absolute text-red-400 opacity-50"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `scale(${0.3 + Math.random() * 0.7})`,
            animation: `float ${3 + Math.random() * 7}s ease-in-out infinite ${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;