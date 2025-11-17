"use client"
import Image from "next/image";

{/*export default function Background() {
    return (
        <section>
        <video
        id="video"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 object-cover -z-10 w-full h-full"
        src="/assets/background-mariposas.mp4" type="video/mp4">
      </video>
      <div className="absolute inset-0  backdrop-blur-sm z-0" />
      </section>
    );

}*/}





export default function Background() {
  return (
    <section className="absolute inset-0 -z-10 w-full h-full">

      {/* DESKTOP / TABLET BACKGROUND */}
      <div className="hidden md:block">
        <Image
          src="/assets/desktop.jpg"   // <-- your wide image
          alt="Background Desktop"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* MOBILE BACKGROUND */}
      <div className="block md:hidden">
        <Image
          src="/assets/background-vertical.jpg"  // <-- your tall image
          alt="Background Mobile"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 backdrop-blur-sm"></div>
    </section>
  );
}