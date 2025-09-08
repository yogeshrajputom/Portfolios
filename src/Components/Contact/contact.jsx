import React from "react";
import { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
// import "react-toastigy/dist/ReactToastify.css";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_bt4gwv7",
                "template_ktzs6qp",
                form.current,
                "L0k4O_dK2TcexqQkF"
            )
            .then(
                () => {
                    setIsSent(true);
                    form.current.reset();
                    toast.success("Message sent successfully!", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "dark",
                    });
                },
                (error) => {
                    console.error("Error sending message:", error);
                    toast.error("Failed to send message. Please try again.", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "dark",
                    });
                }
            );
    };
    return (

        <>
            <section id="contact"
                className="flex flex-col items-center justify-center py-25 px-[12vw] md:px-[7vw] lg:px-[20vx]">
                <ToastContainer />
                {/* section title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white">CONTACT</h2>
                    <div className="w-43 h-1 bg-blue-700 mx-auto mt-2"></div>
                    <p className="text-gray-400 mt-4 text-lg font-semibold">
                        I’d love to hear from you—reach out for any opportunities or questions!
                    </p>
                </div>
                {/* contact form */}
                <div className="mt-8 w-full max-w-md bg-gray-900 p-6 shadow-lg border border-gray-700">
                    <h2 className="text-xl font-semibold text-center text-white">Connect With Me </h2>
                    <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4 ">
                        <input type="email" name="user_email" placeholder="Enter Your Email " required className="w-full p-3 rounded-md bg-gray-400 text-white border border-gray-600 focus:outline-none focus:border-purple-500" />
                        <input type="text" name="user_name" placeholder="Enter Your Name" required className="w-full p-3 rounded-md bg-gray-400 text-white border border-gray-600 focus:outline-none focus:border-purple-500" />
                        <input type="text" name="subject" placeholder="Subject " required className="w-full p-3 rounded-md bg-gray-400 text-white border border-gray-600 focus:outline-none focus:border-purple-500" />
                        <textarea name="message" placeholder="Messsage" rows={4} className="w-full p-3 rounded-md bg-gray-400 text-white border border-gray-600 focus:outline-none focus:border-purple-500"></textarea>
                        {/* send button */}
                        <button
                            type="submit"
                            className="w-full cursor-pointer bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition "
                        >
                            Send
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact;