import React, { useState } from 'react';

function PostCard(props) {
  const { id, userId, title, body } = props; 
  const [clicked, setClicked] = useState(false);
  function handleClick() {
    setClicked(true);
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-transparent flex flex-col justify-between
                    transition-all duration-300 transform 
                    hover:scale-105 hover:bg-pink-50 hover:border-special-red2 hover:shadow-xl">
      
      <h2 className="text-xl font-bold text-gray-800 mb-3 capitalize">
        {title}
      </h2>

      <p className="text-gray-600 mb-6 flex-grow">
        {body}
      </p>

<button 
  onClick={handleClick}
  className={`w-full p-2 rounded-md font-semibold transition-all duration-200 text-white
    ${clicked ? "bg-[#b83016]" : "bg-gray-500"} 
    hover:brightness-110 active:scale-95`}
>
  {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
</button>
    </div>
  );
}

export default PostCard;