import React from "react";
import PostCard from "./PostCard";
import { postsData } from "./postsData";

function Exercise() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-special-red2 uppercase tracking-widest">
        Post Cards
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* Menggunakan map() untuk merender data statis [cite: 74, 76] */}
        {postsData.map((post) => (
          <PostCard 
            key={post.id} 
            {...post} // Otomatis mengirim props id, userId, title, dan body [cite: 47]
          />
        ))}
      </div>
    </div>
  );
}

export default Exercise;