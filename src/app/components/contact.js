"use client"
import {motion} from "framer-motion";
import Form from "next/form";
export default function Contact() {
    return (
        <section id="contact" className="relative z-10 border border-white/20 bg-black/50 flex flex-col items-center justify-center min-h-screen px-10 py-20 w-full">
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, delay: 0.3 }}
                className="font-serif text-white text-4xl font-bold m-10"
            >
                Get in Touch
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, delay: 0.5 }}
                className="w-full max-w-5xl relative gap-8 px-8 mx-12 rounded-2xl bg-[#ABE4A0]/50 backdrop-blur-lg p-8 border-1 shadow-lg border-white/80 hover:scale-105 transition-all duration-300">
            <Form
                className="w-full max-w-5xl relative grid grid-cols-1 gap-8 px-8">
                <section className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8 mx-8">
                    <input className="w-full border border-white rounded-xl p-4 text-white font-serif bg-white/20 transition-all duration-500 hover:bg-black/30" type="email" name="email" placeholder="Your Email"/>
                    <input className="w-full border border-white rounded-xl p-4 text-white font-serif bg-white/20 transition-all duration-500 hover:bg-black/30" type="text" name="name" placeholder="Your Name"/>
                </section>
                <textarea className="h-32 mx-8 mb-8 border border-white rounded-xl p-4 text-white font-serif bg-white/20 transition-all duration-500 hover:bg-black/30"/>
                <button type="submit"
                        className="mx-8 mb-4 px-8 py-3 rounded-full bg-[#7AB66D] text-black border-2 border-[#7AB66D] transition-all duration-500 hover:bg-transparent hover:text-white hover:border-white font-serif">
                    Send Message
                </button>
            </Form>
            </motion.div>
            


        </section>
    );
}