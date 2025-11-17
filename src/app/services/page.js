"use client";

import Navbar from "../components/navbar";
import Background from "../components/background";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import { useState } from "react";
import Contact_Info from "../components/contact-info";

export default function ServicesPage() {
    const [hoverTherapist, setHoverTherapist] = useState([false, false, false]);
    const [hoverPatient, setHoverPatient] = useState([false, false, false]);

    const cards = [
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
    ];
    

    return (
        <main className="min-h-screen text-white relative overflow-x-hidden">
            <Background />
            <Navbar />

            <section
                id="services"
                className="relative flex flex-col items-center justify-center min-h-screen z-10 bg-black/50 border-b border-white/20 px-6 py-20"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="font-serif text-white text-2xl font-bold mb-8 text-center mt-8"
                >
                    Our Services
                </motion.h1>

                <section className="relative grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                            className="rounded-2xl bg-[#ABE4A0]/50 backdrop-blur-lg p-8 border-1 shadow-lg border-white/80 hover:scale-105 transition-all duration-300 h-full flex flex-col"
                        >
                            <h2 className="text-2xl font-serif font-semibold text-center mb-4">
                                {card.title}
                            </h2>

                            <p className="font-serif text-center md:text-left flex-grow">
                                {card.desc}
                            </p>

                            <section className="flex flex-col justify-center items-center gap-4 mt-8">
                                {/* Therapist Button */}
                                <a
                                    className="whitespace-nowrap px-8 py-3 rounded-full bg-[#7AB66D] 
                                                text-black border-2 border-[#7AB66D] transition-all 
                                                duration-300 hover:bg-transparent hover:text-white 
                                                hover:border-white font-serif"
                                    href="/therapists"
                                    onMouseEnter={() => {
                                        const newState = [...hoverTherapist];
                                        newState[i] = true;
                                        setHoverTherapist(newState);
                                    }}
                                    onMouseLeave={() => {
                                        const newState = [...hoverTherapist];
                                        newState[i] = false;
                                        setHoverTherapist(newState);
                                    }}
                                >
                                    {hoverTherapist[i] ? "Join Today" : "I am a Therapist"}
                                </a>

                                {/* Patient Button */}
                                <a
                                    className="whitespace-nowrap px-8 py-3 rounded-full bg-[#7AB66D] 
                                                text-black border-2 border-[#7AB66D] transition-all 
                                                duration-300 hover:bg-transparent hover:text-white 
                                                hover:border-white font-serif"
                                    href="/patients"
                                    onMouseEnter={() => {
                                        const newState = [...hoverPatient];
                                        newState[i] = true;
                                        setHoverPatient(newState);
                                    }}
                                    onMouseLeave={() => {
                                        const newState = [...hoverPatient];
                                        newState[i] = false;
                                        setHoverPatient(newState);
                                    }}
                                >
                                    {hoverPatient[i] ? "Apply" : "I am a Patient"}
                                </a>
                            </section>
                        </motion.div>
                    ))}
                </section>
            </section>
            <Contact_Info/>
            <Footer />
        </main>
    );
}