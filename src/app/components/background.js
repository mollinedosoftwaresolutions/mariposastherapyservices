"use c"
export default function Background() {
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

}