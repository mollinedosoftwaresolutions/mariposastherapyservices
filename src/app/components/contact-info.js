"use client"
import { motion } from "framer-motion";
export default function Contact_Info() {
    return (
        <section className="flex flex-col relative z-10 border-b border-white/20 bg-black/50 font-serif p-10 items-center">

            <motion.h1 
            className="text-lg font-semibold mb-8 text-center">
                Prefer to Reach Us Directly?
            </motion.h1>

            {/* ADDRESS */}
            <div className="flex flex-col md:flex-row items-center gap-2 mb-4 text-center md:text-left">
                <p className="whitespace-nowrap">Find Us @</p>
                <a
                    href="https://www.google.com/maps/search/?api=1&query=13190+SW+134+St+Miami+FL+33186"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-300 hover:text-white underline break-all"
                >
                   11981 SW 144th Ct SUITE 101, Miami, FL 33186
                </a>
            </div>

            {/* PHONE */}
            <div className="flex flex-col md:flex-row items-center gap-2 mb-4 text-center md:text-left">
                <p className="whitespace-nowrap">Call Us @</p>
                <a
                    href="tel:+17864513345"
                    className="text-green-300 hover:text-white underline"
                >
                    (786) 451-3345
                </a>
            </div>

            {/* EMAIL */}
            <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
                <p className="whitespace-nowrap">Email Us @</p>
                <a
                    href="mailto:therapymari01@gmail.com"
                    className="text-green-300 hover:text-white underline break-all"
                >
                    therapymari01@gmail.com
                </a>
            </div>

        </section>
    );
}