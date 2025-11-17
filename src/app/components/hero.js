"use client"
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="hero" className="relative flex flex-col md:flex-row items-center justify-center min-h-screen z-10 bg-black/50 border-b border-white/20 px-10 ">
            <motion.div
                className="flex flex-col items-center justify-center p-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <Image
                    src="/assets/logo.jpg"
                    alt="Mariposas Therapy Services Logo"
                    width={128}
                    height={128}
                    loading="eager"
                    priority
                />
            </motion.div>
            <section className="relative flex flex-col items-center justify-center">
                <motion.div
                    className="flex flex-col items-center justify-center p-4 text-center md:text-left"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-3xl font-serif font-bold text-white">Helping Children Learn With Care and Compassion 🦋 </h1>
                </motion.div>
                <motion.div
                    className="max-w-xl font-serif text-white mt-4 text-base leading-relaxed text-center md:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <p>
                        At Mariposas Therapy Services, we believe every child has the potential to soar. Our dedicated therapists provide individualized physical, occupational, and speech therapy in a nurturing environment that inspires progress, confidence, and joy in every step.
                    </p>
                </motion.div>

            </section>





        </section>
    );
}