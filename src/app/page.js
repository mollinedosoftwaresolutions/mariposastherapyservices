
"use client"


import Hero from "./components/hero";
import Navbar from "./components/navbar";




export default function Home() {
  return (
    <main id="home" className="min-h-screen text-white relative">
      <video
        id="background-video"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 object-cover -z-10 w-full h-full"
        src="/assets/background-mariposas.mp4" type="video/mp4">
      </video>
      <div className="absolute inset-0  backdrop-blur-sm z-0" />

      {/* Navigation Bar */}
      <Navbar />
      <Hero />
     







    </main>
  );
}