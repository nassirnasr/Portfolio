"use client"
import { color, motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

const items = [
    {
        id: 1,
        title: "Company Bankruptcy Prediction",
        color: "from-red-300 to-blue-300",
        desc: "Developed a prediction system with a sleek UI using Streamlit, analyzing financial data to forecast company stability.",
        img: "/i.png",
        link: "https//nasr.nac"
    },
    {
        id: 2,
        title: "ZanTour App",
        color: "from-blue-300 to-violet-300",
        desc: "Created a mobile app for tourists with real-time charts, search functionality, and language translation from English to Swahili.",
        img: "/j.png",
        link: "https//nasr.nac"
    },
    {
        id: 3,
        title: "Text Summarization",
        color: "from-violet-300 to-purple-300",
        desc: "Built a text summarization tool with a user-friendly UI using Streamlit. Users can paste URLs to get custom summaries.",
        img: "/k.png",
        link: "https//nasr.nac"
    },
    {
        id: 4,
        title: "Travel App",
        color: "from-purple-300 to-red-300",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis error blanditiis atque, numquam aliquid velit tenetur similique at! Repellat, amet?",
        img: "/i.png",
        link: "https//nasr.nac"
    },
];

const PortfolioPage = () => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({target:ref});
    const x = useTransform(scrollYProgress, [0,1] , ["0%","-80%"]);
    return (
        <motion.div 
        className="h-full" 
        initial={{y:"-200vh"}} 
        animate={{y:"0%"}} 
        transition={{duration:1}}>
        <div className="h-[600vh]" ref={ref}>
            <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center relative">My Works</div>
            <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
                <motion.div style={{x}} className="flex ">
                    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r"/>
                {items.map(item=>(
                    <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} key={item.id}>
                        <div className="flex flex-col gap-8 text-white">
                        <h1 className="text-xl font-bold md:text-4xl  lg:text-6xl xl:text-8xl">{item.title}</h1>
                        <div className="relative w-80 h-56 md:h-64 md:w-96 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420]">
                            <Image src={item.img} alt="" fill/>
                        </div>
                        <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">{item.desc}</p>
                        <Link href={item.link} className="flex justify-end"><button className="p-2 text-sm md:text-md lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button></Link>
                        </div>
                    </div>
                ))}
                </motion.div>
                

            </div>

            
        </div>
        <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
                    <h1 className="text-8xl">Do you have a project?</h1>
                    <div className="relative">
                        <motion.svg animate={{rotate:360}} transition={{duration:8 ,ease:"linear",repeat:Infinity}} viewBox="0 0 300 300" className="w-64 h-64 md:w-[500px] md:h-[500px]">
                            <defs>
                                <path id="circlePath" d="M 150 ,150 m -60, 0 a 60 , 60 0 0 ,1 120 , 0 a 60, 60 0 0, 1 -120 ,0"/>
                            </defs>
                            <text fill="#000">
                                <textPath xlinkHref="#circlePath" className="text-xl">Full-Stack Developer and UI Designer</textPath>
                            </text>
                        </motion.svg>
                        <Link href="/contact" className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center">Hire Me</Link>
                    </div>
                </div>

        </motion.div>
    )
}

export default PortfolioPage