'use client';

import exp from "constants";

const  HeroSection = () =>{
  return (

<section className="bg-white py-20">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h1 className="text-4xl font-bold mb-4">We Build Scalable Digital Solutions</h1>
    <p className="text-lg text-gray-600 mb-6">Custom websites and mobile apps.</p>
    <div className="flex justify-center gap-4">
      <button className="bg-blue-600 text-white px-6 py-3 rounded">Get a Quote</button>
      <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded">Explore</button>
    </div>
  </div>
</section>



  );
}

export default HeroSection;