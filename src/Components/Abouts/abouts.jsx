import React from "react";
import ProfileImage from '../../../logo.png';

const About = () => {
    return (
        <>
            <section id="abouts"
                className="py-4 px-[7vw] md:px-[7vw] w-full lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32">
                {/* left slide */}
                <div className="flex flex-col-reverse justify-between md:flex-row items-center">
                    <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
                            Hi, I am
                        </h1>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
                            Yogesh Kumar
                        </h2>
                        {/* skills hading with typing effect */}
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-400 mb-2 leading-tight">
                            <span className="text-white">
                                I am a Fullstack Developer
                            </span>
                        </h3>
                        <p className="text-base sm:text-lg md:text-lg text-gray-200 mb-10 mt-8 leading-relaxed">
                            I am a Full-Stack Developer skilled in both Front-End and Back-End development. I leverage modern technologies to build seamless user experiences and efficient solutions. Passionate about coding and web development, I constantly strive to learn, improve, and create impactful digital products.
                        </p>
                        <a href="https://drive.google.com/file/d/1D0wxvL1BPFg3nMSXHZ31bGcHI-moaSWT/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-white py-3 px-10 rounded-full mt-1 text-lg font-bold transition duration-300 transform hover:scale-115"
                            style={{
                                background: 'linear-gradient(90deg, #8245ec, #a855f7)',

                            }}
                        >
                            Download CV
                        </a>
                    </div>
                    {/* right side */}
                    <div className="md:w-1/2 mb: flex justify-center md:justify-end">
                        <img src={ProfileImage}
                            alt="Yogesh Kumar"
                            className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
