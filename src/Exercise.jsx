//import React from "react";
import UserCard from "./UserCard";

function Exercise() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <UserCard  
          name="Syafiqa"
          email="Syafiqa@gmail.com"
          street="Jl. Kamboja"
          city="Pangkalan Bun"/>
          <UserCard 
          name="Alfy"
          email="Alfy@gmail.com"
          street="Jl. Bangunjiwo"
          city="Yogyakarta"/>
          <UserCard 
          name="Risqi"
          email="Risqi@gmail.com"
          street="Jl. Setia Yakin"
          city="Sukamara"/>
        </div>
      </div>
    </>
  );
}

export default Exercise;