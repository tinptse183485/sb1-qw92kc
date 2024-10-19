import React, { useState } from 'react';

const Greeting: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <p className="text-lg text-gray-800 mb-4">
        Gửi em yêu thương của anh,
      </p>
      <p className="text-gray-700">
        Trong ngày đặc biệt này, anh muốn chúc em muôn vàn lời chúc tốt đẹp nhất  
        {expanded ? (
          <>
            . Nụ cười, sự duyên dáng và vẻ đẹp của em luôn truyền cảm hứng, là động lực cho anh mỗi ngày. Em bé mang đến cho cuộc sống của anh
            rất nhiều niềm vui và tình yêu, và anh rất biết ơn vì mỗi khoảnh khắc mà anh và em cùng nhau sẻ chia. Chúc ngày 20/10
            của em thật tuyệt vời như chính em vậy!
          </>
        ) : (
          <button
            className="text-pink-500 hover:text-pink-700 font-semibold ml-1"
            onClick={() => setExpanded(true)}
          >
            Đọc thêm...
          </button>
        )}
      </p>
      {expanded && (
        <p className="text-gray-700 mt-4">
          Yêu em rất nhiều,<br />
          Trung Tín của em
        </p>
      )}
    </div>
  );
};

export default Greeting;