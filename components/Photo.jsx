"use client";

import Image from "next/image";
import {motion} from "framer-motion";

const Photo = () => {
  return (
    < div className="relative w-full h-full mt-8">
        <motion.div initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }} transition={{ delay:0.4, duration: 0.5, ease: "easeIn" }}>
            <motion.div 
            className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] relative overflow-hidden rounded-full" 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }} transition={{ delay:0.4, duration: 0.5, ease: "easeIn" }}
            >
                <Image
                    src="/assets/photo.png"
                    alt="photo"
                    quality={100} fill mix-blend-lighten="true" 
                    />
            </motion.div>

            {/* <motion.svg className="w-[300px] xl:w-[500px] h-[300px] xl:h-[500px] absolute top-[15%] left-[-5%]" fill="transparent" viewBox="0 0 506 506" xmlns="http://www.w3.org/2000/svg">
              <motion.circle cx="253" cy="253" r="250" fill="none" stroke="#f0f0f0" strokeWidth="2"
                initial={{ strokeDasharray: "24 10 0 0" }}  animate={{ strokeDasharray: ["15 120 25 25","16 25 92 72","4 250 22 22"],rotate:[120,360] }} transition={{ duration: 20,repeat: Infinity,repeatType:"reverse"}}/>
            </motion.svg> */}
        </motion.div>
      
    </div>
  );
};

export default Photo;