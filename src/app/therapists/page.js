"use client"
export const metadata = {
  title: "Therapist Job Application",
  description:
    "Apply to join Mariposas Therapy Services as a pediatric Physical Therapist, Occupational Therapist, or Speech Therapist. Submit your application securely.",
  openGraph: {
    title: "Therapist Application | Mariposas Therapy Services",
    description:
      "Join our team of compassionate pediatric therapists. Now hiring for PT, OT, and Speech Therapy positions.",
    url: "https://yourdomain.com/therapists",
  },
};


import Background from "../components/background";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Therapists() {
    const [type] = useState("Therapist Application Started");
    const [showMessage, setShowMessage] = useState(false);
    const [apply, setApply] = useState(false)



    {/*function downloadFile(url, filename) {
        const link = document.createElement("a");
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        link.remove();
    }*/}

    const handleSubmit = async (e) => {
        setApply(true)
        e.preventDefault();
        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://formspree.io/f/mgvrazyn", {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });

            if (response.ok) {
                setShowMessage(true);
                e.target.reset();


                {/*downloadFile("/therapists_files/Work-Application.zip", "Work-Application.zip")*/ }

                setTimeout(() => setShowMessage(false), 3000);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <main id="therapists" className="min-h-screen text-white relative overflow-x-hidden">
            <Background />
            <Navbar />

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
                    Ready to Join the Mariposas Therapy Family 🦋
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="font-serif text-white text-center mb-10 mx-10"
                >
                    <p>
                        We are so excited you have decided to join the family. Start your journey by filling out the quick form below


                    </p>

                </motion.div>

                {/* FORM */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 gap-6 w-full max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">


                        <input type="hidden" name="type" value={type} />
                        <input
                            className="w-full border border-white rounded-xl p-4 text-white font-serif 
                                       bg-white/20 transition-all duration-500 hover:bg-black/30"
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                        />

                        <input
                            className="w-full border border-white rounded-xl p-4 text-white font-serif 
                                       bg-white/20 transition-all duration-500 hover:bg-black/30"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                        />
                        <input
                            className="w-full border border-white rounded-xl p-4 text-white font-serif 
                                       bg-white/20 transition-all duration-500 hover:bg-black/30"
                            type="text"
                            name="title"
                            placeholder="PT, PTA, OT, SLP, etc"
                            required
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            className="w-full border border-white rounded-xl p-4 text-white font-serif 
                                       bg-white/20 transition-all duration-300 hover:bg-black/30"
                            pattern="[0-9]{10}"
                            maxLength={10}
                            required
                        />
                    </section>

                    <button
                        type="submit"
                        className="w-full md:w-auto px-8 py-3 rounded-full bg-[#7AB66D] text-black 
                                   border-2 border-[#7AB66D] transition-all duration-500 
                                   hover:bg-transparent hover:text-white hover:border-white font-serif"
                    >
                        Apply
                    </button>
                </motion.form>

                {/* SUCCESS MESSAGE */}

                {apply && (
                    <motion.div
                        key="contact-success"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, delay: 3 }}
                        className="text-[#0F3B1F] py-2 px-4 
                                       rounded-lg text-center"
                    >

                        <p className="font-serif text-white text-center mx-10 mt-5">Fill out{" "}
                            <a className="text-green-300 hover:text-white underline" href="https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCJ-0mgF5HtWEvwlyTIDS2P_B1jP48dJBHNO6dF__usaxGBd2pg6MOo6mAEx3W0H9E*">
                                Application Forms
                            </a>
                        </p>

                    </motion.div>)

                }
                <AnimatePresence>
                    {showMessage && (
                        <motion.div
                            key="contact-success"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="bg-[#7AB66D]/90 text-[#0F3B1F] py-2 px-4 
                                       rounded-lg mt-6 shadow-md text-center"
                        >
                            Your application request has been sent. You will be hearing from us in 1 to 3 business days!
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="font-serif text-white text-center mb-10 mx-10 mt-10"
                >
                    <p>
                        Or find our application on{" "}

                        <a
                            href="https://www.indeed.com"
                            className="text-green-300 hover:text-white underline break-all"
                        >
                            Indeed
                        </a>
                    </p>

                </motion.div>



            </section>



            <Footer />
        </main>
    );
}