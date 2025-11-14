"use client";
export const metadata = {
  title: "Patient Application",
  description:
    "Submit your child’s patient application to begin pediatric Physical Therapy, Occupational Therapy, or Speech Therapy with Mariposas Therapy Services.",
  openGraph: {
    title: "Patient Intake Form | Mariposas Therapy Services",
    description:
      "Start your child's therapy journey by completing our patient application. PT, OT, and Speech Therapy available.",
    url: "https://yourdomain.com/patients",
  },
};


import Background from "../components/background";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Patients() {
    const [type] = useState("Patient Application Started");
    const [showMessage, setShowMessage] = useState(false);
    const [apply, setApply] = useState(false);

    // ✅ Checkbox options
    const options = ["Speech Therapy", "Physical Therapy", "Occupational Therapy"];
    const [selected, setSelected] = useState([]);

    // ✅ Checkbox handler
    const handleChange = (option) => {
        if (selected.includes(option)) {
            setSelected(selected.filter((item) => item !== option));
        } else {
            setSelected([...selected, option]);
        }
    };

    // SUBMIT HANDLER
    const handleSubmit = async (e) => {
        e.preventDefault();
        setApply(true);

        const formData = new FormData(e.target);

        // Add selected services to FormData
        selected.forEach((service) => formData.append("services", service));

        try {
            const response = await fetch("https://formspree.io/f/mpwkplro", {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });

            if (response.ok) {
                setShowMessage(true);
                e.target.reset();
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

            <section className="relative z-10 border-b border-white/20 bg-black/50 
                                flex flex-col items-center justify-center min-h-screen px-6 py-20 w-full">

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="font-serif text-white text-2xl font-bold mb-8 text-center mt-8"
                >
                    Welcome to Mariposas Therapy Services 🦋
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="font-serif text-white text-center mb-10 mx-10"
                >
                    <p>We are honored to support your child's growth and development. Begin your journey by completing the quick form below.</p>
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
                            className="w-full border border-white rounded-xl p-4 text-white font-serif bg-white/20 
                                       transition-all duration-500 hover:bg-black/30"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                        />

                        <input
                            className="w-full border border-white rounded-xl p-4 text-white font-serif 
                                       bg-white/20 transition-all duration-500 hover:bg-black/30"
                            type="text"
                            name="patientName"
                            placeholder="Patient Name"
                            required
                        />

                        <input
                            className="w-full border border-white rounded-xl p-4 text-white font-serif 
                                       bg-white/20 transition-all duration-500 hover:bg-black/30"
                            type="text"
                            name="guardianName"
                            placeholder="Guardian Name"
                            required
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Guardian Phone Number"
                            className="w-full border border-white rounded-xl p-4 text-white font-serif 
                                       bg-white/20 transition-all duration-300 hover:bg-black/30"
                            pattern="[0-9]{10}"
                            maxLength={10}
                            required
                        />

                        <input
                            className="w-full border border-white rounded-xl p-4 text-white font-serif 
                                       bg-white/20 transition-all duration-500 hover:bg-black/30"
                            type="text"
                            name="insurance"
                            placeholder="Insurance"
                            required
                        />

                        <input
                            className="w-full border border-white rounded-xl p-4 text-white font-serif 
                                       bg-white/20 transition-all duration-500 hover:bg-black/30"
                            type="number"
                            name="age"
                            min={0}
                            max={18}
                            placeholder="Patient Age"
                            required
                        />

                        {/* CHECKBOXES */}
                        <div className="col-span-1 md:col-span-3">

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                {options.map((option) => (
                                    <label key={option} className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            className="h-5 w-5 accent-green-400"
                                            checked={selected.includes(option)}
                                            onChange={() => handleChange(option)}
                                        />
                                        <span>{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
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

                {/* SUCCESS MESSAGE AFTER APPLY */}
                {apply && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-white py-4 text-center mt-4"
                    >
                        <p className="font-serif">Fill out{" "}
                            <a className="underline text-green-300 hover:text-white" href="https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhDS1iU_vRjS-L6i-BH27NNkL_gqjBt38don8SRdbswtogyzairXx8xg9RXqUPpNbY0*">
                                Application Forms
                            </a>
                        </p>
                    </motion.div>
                )}

                <AnimatePresence>
                    {showMessage && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="bg-[#7AB66D]/90 text-[#0F3B1F] py-2 px-4 
                                       rounded-lg mt-6 shadow-md text-center"
                        >
                            Your application request has been sent. You will be hearing from us in 1–3 business days!
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

            <Footer />
        </main>
    );
}