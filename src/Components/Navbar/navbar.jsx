import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activSection, setactivSection] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            menuItems.forEach((item) => {
                const section = document.getElementById(item.id);
                if (section && window.scrollY >= section.offsetTop - 150 && window.scrollY < section.offsetTop + section.offsetHeight - 150) {
                    setactivSection(item.id);
                }
            })
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    const handleMenuItemsClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setactivSection(sectionId);
        setIsOpen(false);
    }

    const menuItems = [
        { id: "abouts", label: "Abouts" },
        { id: "skills", label: "Skills" },
        // { id: "experience", label: "Experience" },
        { id: "project", label: "Project" },
        { id: "education", label: "Education" },
        { id: "contact", label: "Contact" }
    ];;
    return (
        <>
            <div className={`fixed w-full top-0 z-40 transition duration-300 px-[5vw] md:px-[5vw] lg:px-[5vw] ${isScrolled ? "border-x-gray-700 bg-opacity-50 backdrop-blur-md shadow-md " : "bg-transparent"
                }`}>
                {/* logo(name) */}
                <div className="text-white flex justify-between items-center pt-5">
                    <div className="text-xl font-semibold cursor-pointer">
                        <span>Yogesh Kumar</span>
                    </div>
                    {/* navigation items */}
                    <ul className="hidden md:flex space-x-8 text-gray-500">
                        {menuItems.map((item) => (
                            <li key={item.id} className={`cursor-pointer hover:text-blue-400 ${activSection == item.id ? "text-blue-400" : ""}`}>
                                <button onClick={() => handleMenuItemsClick(item.id)}>
                                    {item.label}
                                </button>
                            </li>
                        ))}

                        {/*github and linkedin icons */}
                    </ul>
                    <div className="hidden space-x-4 md:flex" >
                        <a href="https://www.linkedin.com/in/yogesh-kumar-924b57331" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 ">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://github.com/yogeshrajputom" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 ">
                            <FaGithub size={24} />
                        </a>
                    </div>
                    {/*mobile menu icons */}
                    <div className="md:hidden">
                        {
                            isOpen ? (
                                <IoCloseSharp className="text-3xl cursor-pointer hover:text-blue-400 text-gray-400"
                                    onClick={() => setIsOpen(false)} />
                            ) : <GiHamburgerMenu className="text-3xl cursor-pointer hover:text-blue-400 text-gray-400"
                                onClick={() => setIsOpen(true)} />
                        }
                    </div>
                </div>
                {/* mobile menu icons */}
                {isOpen && (
                    <div className="absolute text-white top-14 right-0 transform-translate-x-1/2 w-70 backdrop-blur-lg z-50 bg-transparent bg-opacity-80 rounded-lg shadow-lg md:hidden">
                        <ul className="flex flex-col  p-6 space-y-4 py-4">
                            {menuItems.map((item) => (
                                <li
                                    key={item.id}
                                    className={`cursor-pointer hover:text-blue-50 hover:font-bold ${activSection === item.id ? "text-balck" : ""
                                        }`}
                                >
                                    <button onClick={() => handleMenuItemsClick(item.id)}>
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                            <div className=" justify-center flex space-x-4">
                                <a
                                    href="https://github.com/codingmastr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-blue-400"
                                >
                                    <FaGithub size={24} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/tarun-kaushik-553b441a4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-blue-400 "
                                >
                                    <FaLinkedin size={24} />
                                </a>
                            </div>
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}

export default Navbar;