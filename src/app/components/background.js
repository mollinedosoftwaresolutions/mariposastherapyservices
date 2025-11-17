"use client";
import Image from "next/image";

export default function Background() {
  return (
    <section className="absolute inset-0 -z-10 w-full h-full">

      {/* DESKTOP / TABLET BACKGROUND */}
      <div className="hidden md:block relative w-full h-full">
        <Image
          src="/assets/desktop.jpg"
          alt="Background Desktop"
          fill
          priority
          className="object-cover object-center"
        />

        {/* BLUR ONLY FOR DESKTOP */}
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      {/* MOBILE BACKGROUND */}
      <div className="block md:hidden relative w-full h-full">
        <Image
          src="/assets/background-vertical.jpg"
          alt="Background Mobile"
          fill
          priority
          className="object-cover object-center"
        />

        {/* NO BLUR ON MOBILE */}
        <div className="absolute inset-0" />
      </div>

    </section>
  );
}