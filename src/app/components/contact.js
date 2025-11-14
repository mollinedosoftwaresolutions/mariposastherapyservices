"use client";
import { motion } from "framer-motion";
import Form from "next/form";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Contact() {
    const [showMessage, setShowMessage] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://formspree.io/f/xyzlzoay", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setShowMessage(true);
                e.target.reset();
                setTimeout(() => setShowMessage(false), 1500);
            } else {
                console.error("Form submission failed:", response.statusText);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };
    return (
        <section
            id="contact"
            className="relative z-10 border-b border-white/20 bg-black/50 
               flex flex-col items-center justify-center min-h-screen px-6 py-20 w-full"
        >
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="font-serif text-white text-2xl font-bold mb-8 text-center mt-8"
            >
                Get in Touch
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="font-serif text-white text-center mb-10 mx-10"
            >
                For general inquiries about appointments, availability, or our therapy programs, feel free to reach out.
                We are here to help
            </motion.p>


            <motion.form
                className="grid grid-cols-1 gap-6 w-full max-w-2xl mx-auto"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >

                {/* Row of Inputs */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <input
                        className="w-full border border-white rounded-xl p-4 text-white font-serif 
                                       bg-white/20 transition-all duration-500 hover:bg-black/30"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                    />
                    <input
                        className="w-full border border-white rounded-xl p-4 text-white font-serif 
                                       bg-white/20 transition-all duration-500 hover:bg-black/30"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        className="w-full border border-white rounded-xl p-4 text-white font-serif 
                                       bg-white/20 transition-all duration-500 hover:bg-black/30"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        required
                    />
                </section>

                {/* Message */}
                <textarea
                    className="w-full border border-white rounded-xl p-4 text-white font-serif 
                                       bg-white/20 transition-all duration-500 hover:bg-black/30"
                    placeholder="Your Message"
                    name="message"
                />

                {/* Button */}
                <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 rounded-full bg-[#7AB66D] text-black 
                       border-2 border-[#7AB66D] transition-all duration-500 
                       hover:bg-transparent hover:text-white hover:border-white font-serif"
                >
                    Send Message
                </button>

            </motion.form>

            <AnimatePresence>
                {showMessage && (
                    <motion.div
                        key="contact-success"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="bg-[#7AB66D]/90 text-white py-2 px-4 rounded-lg mt-6 shadow-md inline-block"
                    >
                        We’ll be getting back to you within 24 hours!
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}