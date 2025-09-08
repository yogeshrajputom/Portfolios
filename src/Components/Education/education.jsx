import React from "react";
import { education } from "../../constants";

const Education = () => {
    return (
        <>
            <section
                id="education"
                className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient"
            >
                {/* Section title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white">EDUCATIONS</h2>
                    <div className="w-58 h-1 bg-blue-700 mx-auto mt-2"></div>
                    <p className="text-gray-400 mt-4 text-lg font-semibold">
                        My education has been a journey of learning and development. Here are the
                        details of my academic background
                    </p>
                </div>

                {/* Education timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

                    {education.map((edu, index) => (
                        <div key={edu.id} className="mb-20 flex w-full relative">
                            {/* Timeline Circle (centered on the line) */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-20">
                                <img
                                    src={edu.img}
                                    alt={edu.school}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>

                            {/* Card container */}
                            <div
                                className={`w-full sm:w-[45%] p-6 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 ${index % 2 === 0 ? "ml-auto" : "mr-auto"
                                    }`}
                            >
                                {/* Content */}
                                <div className="flex items-center space-x-6">
                                    <div className="w-20 h-16 bg-white object-cover rounded-2xl overflow-hidden">
                                        <img
                                            src={edu.img}
                                            alt={edu.school}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-xl sm:text-2xl font-semibold text-white">
                                            {edu.degree}
                                        </h2>
                                        <h4 className="text-md sm:text-sm text-gray-300">{edu.school}</h4>
                                        <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
                                <p className="mt-4 text-gray-400">{edu.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Education;