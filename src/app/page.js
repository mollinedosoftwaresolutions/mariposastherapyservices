
"use client"


import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

import Contact_Info from "./components/contact-info";
import Background from "./components/background";




export default function Home() {
  return (
    <main id="home" className="min-h-screen text-white relative overflow-x-hidden">
      

      {/* Navigation Bar */ }
      <Background/>
      <Navbar />
      <Hero />
      <Contact/>
      <Contact_Info/>
      <Footer/>

     







    </main >
  );
}