"use client"
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav id="nav-bar"
            className="fixed top-0 left-0 w-full z-50 flex justify-between items-center
                 px-8 py-4 bg-[#ABE4A0]/80 backdrop-blur-sm border-b border-white
                 shadow-lg transition-all duration-300"
        >
            <div id="brand" className="flex items-center space-x-2 mx-4">
                <Image src="/assets/logo.png" alt="Mariposas Therapy Services Logo" width={50} height={50} className="rounded-full object-cover" />
                <h1 className="md:text-xl font-serif font-semibold tracking-wide text-[#0F3B1F]">
                    Mariposas Therapy Services

                </h1>
            </div>

            <ul id="nav-links" className="hidden md:flex justify-center space-x-8 text-md font-serif font-bold text-[#0F3B1F]">
                <a href="/" className="hover:text-white transition-colors duration-200">Home</a>
                <a href="/#services" className="hover:text-white transition-colors duration-200">Services</a>
                <a href="/#contact" className="hover:text-white transition-colors duration-200">Contact</a>
                <a href="/patients" className="hover:text-white transition-colors duration-200">Patients</a>
                <a href="/therapists" className="hover:text-white transition-colors duration-200">Therapists</a>
            </ul>

            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-[#0F3B1F] hover:text-white transition text-2xl"
            >
                {menuOpen ? "✕" : "☰"}
            </button>
            <div
        className={`absolute top-full left-0 w-full md:hidden bg-[#ABE4A0]/80 backdrop-blur-sm shadow-lg duration-500 ease-in-out ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-3 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 p-4 text-[#0F3B1F] font-serif font-bold">
                <a href="/" className="hover:text-white transition-colors duration-200">Home</a>
                <a href="/#services" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors duration-200">Services</a>
                <a href="/#contact" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors duration-200">Contact</a>
                <a href="/patients" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors duration-200">Patients</a>
                <a href="/therapists" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors duration-200">Therapists</a>
        </ul>
      </div>


             






        </nav >

    );
}