import React from "react";
import UserCard from "./UserCard";

function Exercise() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <UserCard 
            name="Shafwan"
            email="shafwanfirjatullah@gmail.com"
            street="Jl. Abimanyu no 4"
            city="Semarang"/>
        <UserCard 
            name="Zia"
            email="Luziajunizaputri@gmail.com"
            street="Simpang Gia no 69 "
            city="Padang"/>
        <UserCard 
            name="Irsya"
            email="Irsyaalaudinaufa@gmail.com"
            street="Jl. Nakula no 1"
            city="Semarang"/>
        </div>
      </div>
    </>
  );
}

export default Exercise;