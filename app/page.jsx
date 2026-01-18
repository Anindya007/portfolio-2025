"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import Social from "@/components/Social";
import Photo from "@/components/Photo";

export default function Home() {
  return (<section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none sm:mt-8">
          <span>Full Stack Developer</span>
          <h1 className="h1">
            Hello I'm <br /> <span>Anindya Chakladar</span>
          </h1>
          <p className="max-w-[600px] mt-3 mb-8 text-gray-700">I am a senior Full Stack Developer with a passion for crafing innovative and seamless web applications. 
            With a strong foundation in both front-end and back-end development, I thrive on building scalable solutions that meet the needs of users and businesses alike.
            I saw many frameworks come and go, during my career, and I have adapted to the ever-changing landscape.
            <br /><br />
            Though being a electronics engineering graduate, I have been working as a software developer since 2013 in service based and product based companies. 
            
            In addition to my technical prowess, I possess clear communication and collaboration skills and I have huge patience and adaptability to push through challenging projects and a strong work ethic as well.
            
            </p>
        </div>


        <div className="order-1 xl:order-none mb-8 xl:mb-0"><Photo/></div>


      </div>

      <div className="flex flex-col xl:flex-row items-center gap-8 sm:pt-6">
        <div>
          <Button 
            variant={"outline"} 
            size={"lg"}
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/CV_ATS.docx';
              link.download = 'Anindya_Chakladar_CV.docx';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <span className="text-xl cursor-pointer">Download CV</span>
            <FileDown />
          </Button>
        </div>
        <div className="mb-8 xl:mb-0"><Social /></div>
      </div>

    </div>
  </section>)
}
