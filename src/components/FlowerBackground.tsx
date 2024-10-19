import React from 'react';
import { Flower } from 'lucide-react';

const FlowerBackground: React.FC = () => {
  const flowers = Array(20).fill(null);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {flowers.map((_, index) => (
        <Flower
          key={index}
          className="absolute text-pink-300 opacity-50"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `scale(${0.5 + Math.random()})`,
            animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default FlowerBackground;