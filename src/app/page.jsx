"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div 
    className="h-full" 
    initial={{y:"-200vh"}} 
    animate={{y:"0%"}} 
    transition={{duration:1}}>
      
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    {/* IMAGE CONTAINER */}
    <div className="h-1/2 lg:h-full lg:w-1/2 relative m-4">
    <Image src="/nassir.png" fill className="rounded-full" />
    </div>


    {/* TEXT CONTAINER */}
    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center ">
    {/* TITLE */}
    <h1 className="text-3xl md:text-5xl font-bold">Innovating with Code, Engineering Tomorrow</h1>
    {/* DESCRIPTION */}
    <p className="md:text-xl">Dedicated to Software Development, AI & ML, and Networking. Creating intelligent, efficient solutions for the future. Passionate about pushing boundaries and solving complex problems. Always ready for new challenges.</p>
    {/* BUTTONS */}
    <div className="w-full flex gap-4 ">
      <Link href="./portfolio"><button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button></Link>
      <Link href="./contact"><button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button></Link>
    </div>
    </div>

    </div>
    </motion.div>
  );
};

export default Homepage;
