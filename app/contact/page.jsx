"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

import {FaPhoneAlt,FaEnvelope,FaMapMarkerAlt} from "react-icons/fa";
import {motion} from "framer-motion";
import {useEffect, useRef} from "react";
import {useSearchParams} from "next/navigation";

const info = [
    {   
        icon: <FaPhoneAlt size={20} />,
        title: "Phone",
        description: "+91-9432303489"
    },{
        icon: <FaEnvelope size={20} />,
        title: "Email",
        description: "anindyachakladar9@gmail.com"
    },{
        icon: <FaMapMarkerAlt size={20} />,
        title: "Address",
        description: "Madanmohan Apartment,West Jagtala,Kolkata - 700141, India"
    }
];

const Contact = () => {
    const firstNameRef = useRef(null);
    const searchParams = useSearchParams();
    
    useEffect(() => {
        // Check if the focus parameter is present in the URL
        if (searchParams.get('focus') === 'firstname') {
            // Small delay to ensure the component is fully rendered
            setTimeout(() => {
                if (firstNameRef.current) {
                    firstNameRef.current.focus();
                }
            }, 100);
        }
    }, [searchParams]);

    return (
        <motion.section initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeIn" }}
                className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-accent text-4xl">Let's work together</h3>
                            <p className="font-light text-base">lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input ref={firstNameRef} type="text" placeholder="FirstName" className="mb-4" />
                                <Input type="text" placeholder="LastName" className="mb-4" />
                                <Input type="email" placeholder="Your Email" className="mb-4" />
                                <Input type="phone" placeholder="Phone" className="mb-4" />

                                <div className="h-[200px] col-span-full">
                                    <Textarea rows={6} placeholder="Your Message" />
                                </div>

                                <Button size="lg" className="max-w-40 bg-accent p-1 text-black hover:bg-black hover:text-white cursor-pointer">Send Message</Button>
                            </div>
                            
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0 rounded-xl">
                        <ul>
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-4 mb-6">
                                    <div className="text-accent relative -mt-[19px] w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272F] rounded-md flex items-center justify-center ">{item.icon}</div>
                                    <div>
                                        <h4 className="text-lg font-semibold">{item.title}</h4>
                                        <p className="">{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;