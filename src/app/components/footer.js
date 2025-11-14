"use client";   
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="flex flex-col relative z-10 border-b border-white/20 bg-black/50 text-center font-serif p-10">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-gray-300 font-medium">Mariposas Therapy Services LLC</span> — All Rights Reserved.
        </p>
      </footer>
    );
}