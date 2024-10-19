import React, { useState, useEffect } from 'react';
import { Heart, Flower } from 'lucide-react';
import FlowerBackground from './components/FlowerBackground';
import Greeting from './components/Greeting';
import FloatingHearts from './components/FloatingHearts';
import FloatingFlowers from './components/FloatingFlowers';

function App() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center overflow-hidden relative">
      <FlowerBackground />
      <FloatingHearts />
      <FloatingFlowers />
      <div className="z-10 text-center">
        <h1 className="text-4xl font-bold text-pink-600 mb-4 animate-bounce">
          Chúc mừng Ngày Phụ nữ Việt Nam!
        </h1>
        <Flower className="inline-block text-pink-500 w-12 h-12 mb-4 animate-spin" />
        {showMessage && <Greeting />}
      </div>
      <Heart className="absolute bottom-4 right-4 text-red-500 w-8 h-8 animate-pulse" />
    </div>
  );
}

export default App;