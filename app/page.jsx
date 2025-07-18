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
          <span>Java Full Stack Developer</span>
          <h1 className="h1">
            Hello I'm <br /> <span>Anindya Chakladar</span>
          </h1>
          <p className="max-w-[600px] mt-3 mb-8 text-gray-700">I am an experienced Java Full Stack Developer with a passion for crafting beautiful and functional user interfaces.Skilled in both frontend and backend technologies.</p>
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
              link.href = '/CV_smart.docx';
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
