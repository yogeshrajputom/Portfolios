import React from "react";
import { SkillsInfo } from "../../constants"

const Skills = () => {
    return (
        <section
            id="skills"
            className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans">
            {/* section titel */}
            <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
                <div className="w-32 h-1 bg-blue-700 mx-auto mt-2"></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold">A showcase of my technical skills and expertise, refined through diverse projects and real-world experience.</p>
            </div>
            {/* Skills categories */}
            <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
                {SkillsInfo.map((categories) => (
                    <div
                        key={categories.title}
                        className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
                    >
                        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">{categories.title}</h3>
                        {/* Skills items */}
                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 w-full">
                            {categories.skills.map((skills) => (
                                <div
                                    key={skills.name}
                                    className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
                                >
                                    <img
                                        src={skills.logo}
                                        alt={`${skills.name} logo`}
                                        className="w-6 h-6 sm:w-8 sm:h-8"
                                    />
                                    <span className="text-xs sm:text-sm text-gray-300">
                                        {skills.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills;