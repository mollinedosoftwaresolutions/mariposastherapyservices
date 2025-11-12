"use client";
import { motion } from "framer-motion";

export default function Services() {
    return (
        <section
            id="services"
            className="relative flex flex-col items-center justify-center min-h-screen z-10 bg-black/50 border-b"
        >
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, delay: 0.3 }}
                className="font-serif text-white text-4xl font-bold m-10"
            >
                Our Services
            </motion.h1>

            <section className="relative grid grid-cols-1 md:grid-cols-3 gap-8 px-8 mx-12">

                {[
                    {
                        title: "Physical Therapy",
                        desc: `Our physical therapy program focuses on improving mobility,
                                balance, coordination, and overall strength. We use fun,
                                engaging activities to help children reach their movement
                                milestones—whether it’s learning to walk, improving posture,
                                or recovering from an injury.`
                    },
                    {
                        title: "Occupational Therapy",
                        desc: `Occupational therapy helps children develop the fine motor,
                                sensory, and self-care skills they need for daily life. From
                                handwriting and dressing to focus and play, our therapists
                                create personalized plans that encourage confidence and
                                independence in every child.`
                    },
                    {
                        title: "Speech Therapy",
                        desc: `Speech therapy supports communication, feeding skills, and
                                language development. We help children express themselves
                                clearly and confidently through interactive, engaging
                                evidence-based sessions.`
                    }
                ].map((card, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 3, delay: 0.3 }}
                        className="rounded-2xl bg-[#ABE4A0]/40 p-8 border-2 border-white 
                                   hover:scale-105 transition-all duration-300 h-full flex flex-col"
                    >
                        <h2 className="text-2xl font-serif font-semibold text-center mb-4">
                            {card.title}
                        </h2>

                        <p className="font-serif text-center md:text-left flex-grow">
                            {card.desc}
                        </p>

                        {/* BUTTONS */}
                        <section
                            id="buttons"
                            className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8"
                        >
                            {/* Button 1 */}
                            <button
                                className="whitespace-nowrap px-8 py-3 rounded-full bg-[#7AB66D] 
                                           text-black border-2 border-[#7AB66D] transition-all 
                                           duration-300 hover:bg-transparent hover:text-white 
                                           hover:border-white font-serif"
                            >
                                I am a Therapist
                            </button>

                            {/* Button 2 */}
                            <button
                                className="whitespace-nowrap px-8 py-3 rounded-full bg-[#7AB66D] 
                                           text-black border-2 border-[#7AB66D] transition-all 
                                           duration-300 hover:bg-transparent hover:text-white 
                                           hover:border-white font-serif"
                            >
                                I am a Patient
                            </button>
                        </section>
                    </motion.div>
                ))}
            </section>
        </section>
    );
}
