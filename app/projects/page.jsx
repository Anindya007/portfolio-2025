"use client";

import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import React, { useState } from 'react';

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";


const projects = [
    {
        num: '01',
        title: "Command Line Custom LLM",
        description: `This application  is a Node.js-based command line LLM client application that utitlizes the Groq AI platform to interact with a Large Language Model (LLM). It allows users to enter their own prompts or questions into the command line interface, which are then sent an open source LLM to process user queries and return responses . The application takes user input from the terminal, sends it to the Groq API, and displays the response.
        It supports multiple queries in a single session and can handle errors gracefully.`,
        stack: [
            { name: "Node.js" },
            { name: "Groq.AI" },
            { name: "Llama 3.3 70B" },
        ],
        image: "/assets/project1.png",
        github: "https://github.com/Anindya007/groq_ai_agent"  
    },
    {
        num: '02',
        title: "Bulk Image Compressor",
        description: "A web worker based bulk image compressor application that compresses high-res images without blocking the main thread. The images does not leave the user's browser and are not stored in any servers.",
        stack: [
            { name: "React" },
            { name: "Vite" },
            { name: "Tailwind CSS" },
            { name: "Typescript" }
        ],
        image: "/assets/project2.png",
        github: "https://github.com/Anindya007/bulk_image_compressor"
    },
    {
        num: '03',
        title: "Petchly",
        description: "Petchly is a comprehensive web application designed to connect pet owners with professional pet care services. The platform allows users to book various pet care services, manage appointments, and get AI-powered advice for pet care.",
        stack: [
            { name: "Next.js" },
            { name: "Mongodb" },
            { name: "Tailwind CSS" },
            { name: "Groq API with Llama 3.3 70B" },
            {name: "Stream Video Sdk" }
        ],
        image: "/assets/project3.png",
        github: "https://github.com/Anindya007/Petchly"
    }
]

const ProjectsSliderButtons = ({ containerStyles, btnStyles, iconStyles }) => {
    const swiper = useSwiper();
    return <div className={containerStyles}>
        <button className={btnStyles} onClick={() => swiper.slidePrev()}>
            <PiCaretLeftBold className={iconStyles} />
        </button>
        <button className={btnStyles} onClick={() => swiper.slideNext()}>
            <PiCaretRightBold className={iconStyles} />
        </button>
    </div>

}

const Projects = () => {
    const [project, setProject] = useState(projects[0]);





    return <motion.section initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeIn" }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
        <div className="container mx-auto py-16">
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none" >
                    <div>
                        <div className="text-8xl leading-none font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all duration-500 ">{project.num}</div>
                    </div>

                    <h2 className="h2 font-bold leading-none capitalize">{project.title}</h2>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <ul>
                        {project.stack.map((item, index) => (
                            <li key={index} className="inline-block mr-2 mb-2 px-3 py-1 bg-transparent border border-gray-900 hover:text-gray-900 hover:bg-white rounded-full text-sm">
                                {item.name}
                            </li>
                        ))}
                    </ul>
                    <hr />
                    <Link href={project.github} target="_blank">
                        <BsGithub className="hover:text-accent transition-all cursor-pointer" size={24} />
                    </Link>
                </div>
                <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between ">
                    <div className="w-full xl:w-[100%]">
                        <Swiper
                            
                            slidesPerView={1}
                            onSlideChange={(swiper) => setProject(projects[swiper.activeIndex])}
                        >
                            {projects.map((item, index) => (
                                <SwiperSlide key={index} spacebetween={30} slidesperview={1} className="xl:h-[520px]  mb-12"
                                    onSlideChange={() => setProject(item)}>
                                    <div className="relative h-[460px] group flex justify-center items-center w-[1000px]">
                                        {/*overlay */}
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                        <Image src={item.image} alt={item.title} fill className="rounded-lg" />
                                    </div>
                                </SwiperSlide>
                            ))}
                            <ProjectsSliderButtons containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-2rem)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none text-black" btnStyles="bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-accent hover:text-white transition-all duration-300" iconStyles="group-hover:text-accent transition-all duration-300"/>
                        </Swiper>
                    </div>
                </div>
            </div>



        </div>
    </motion.section>

};

export default Projects;