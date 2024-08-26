"use client"
import Brain from "@/components/brain"
import { easeInOut, motion , useInView, useScroll } from "framer-motion"
import { useRef } from "react"

const AboutPage = () => {
    //const { scrollYProgress } = useScroll();
    const containerRef = useRef()

    const {scrollYProgress} = useScroll({container:containerRef})

    const skillRef = useRef()
    const isSkillRefInView = useInView(skillRef)

    const experienceRef = useRef()
    const isExperienceRefInView = useInView(experienceRef)


    return (
        <motion.div 
        className="h-full" 
        initial={{y:"-200vh"}} 
        animate={{y:"0%"}} 
        transition={{duration:1}}>
            {/* CONTAINER  */}
            <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
                {/* TEXT CONTAINER */}
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">

                    {/* BIOGRAPHY CONTAINER */}
                <div className="flex flex-col gap-12 justify-center">
                    {/* BIOGRAPHY TITLE  */}
                    <h1 className="font-bold text-2xl ">BOIGRAPHY</h1>
                    {/* BIOGRAPHY DESCRIPTION  */}
                    <p className="text-lg">A passionate Computer Engineering student with a focus on Software Development, AI & ML, and Networking. Adept at building intelligent systems, optimizing networks, and solving complex problems. Committed to continuous learning, innovation, and pushing technological boundaries. Driven to create impactful solutions that shape the future.</p>
                    {/* BIOGRAPHY QUOTES  */}
                    <span className="italic">💡 The best way to predict the future is to invent it.</span>
                    {/* BIOGRAPHY SIGN SVG  */}
                    <div className="self-end">
                    <svg width="187" height="77" viewBox="0 0 370 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 129C2.28158 135.758 2.77337 142.563 4 149.222C4.34294 151.084 4.94068 156.709 7 157.944C10.4773 160.031 15.1772 161.824 19.2222 162C21.8241 162.113 26.5132 164.212 28.9444 162.389C32.6297 159.625 33 154.95 33 150.667C33 140.315 40.6506 133.29 43 123.444C50.7561 90.9429 55.2237 57.819 64.6667 25.5556C65.2092 23.7019 69.8945 12.0117 69.9444 12.6111C70.4808 19.047 70.4237 25.3619 71.4444 31.7778C72.4986 38.4041 72.7742 44.7038 76 50.6667C80.7239 59.3987 83.5355 69.2737 87.8889 78.2222C89.2963 81.1152 89.7032 83.8608 90.6667 86.8889C92.7437 93.4167 96.8864 98.6009 100.444 104.333C104.949 111.59 109.516 119.131 113.111 126.889C117.026 135.338 118.479 144.994 122.278 153.611C126.977 164.269 133.516 171.871 144.222 176.778C149.459 179.178 157.227 181.689 163 179.444C174.909 174.813 184.531 157.134 187.722 145.778C197.161 112.186 184.813 77.1331 177.444 44.5C175.836 37.3789 173.885 29.9761 171.444 23.1111C169.906 18.7845 166.543 15.5151 165.444 11.2778C164.429 7.3607 164.777 2 160 2C155.335 2 154.47 7.53882 153.444 11.0556C148.703 27.3129 150.762 47.0177 149.944 63.7778C148.425 94.9357 142 125.279 142 156.5C142 161.167 142 165.833 142 170.5C142 179.838 138 188.493 138 198" stroke="black" stroke-width="2" />
                  <path d="M24 88C25.6456 111.861 42.0702 133.126 57.7222 150.056C66.0797 159.095 75.2967 166.161 86.8889 170.5C95.2807 173.641 102.718 175.502 111.444 177.722C118.833 179.602 126.348 182.241 134.167 180.778C150.211 177.774 165.875 164.23 177.889 154.222C187.429 146.275 197.695 136.783 203.222 125.333C208.704 113.979 206.451 98.1904 200.556 87.5556C194.586 76.7866 186.733 66.8906 180.111 56.5C169.61 40.0214 156.911 21.9858 138.167 14.2778C115.932 5.13466 75.6887 9.01463 60.6667 30.2222C36.9227 63.7431 40.1518 114.401 70.1111 142.389C82.1616 153.647 93.9636 157.503 110.333 158.556C127.311 159.647 146.713 158.258 161 148C180.096 134.288 192.306 110.019 198 87.6667C198.622 85.2234 204.051 68.4359 200.333 66C193.743 61.682 186.706 71.1173 183.944 75.5556C175.821 88.6107 170.564 102.909 172.667 118.389C174.693 133.31 197.878 160.045 214.222 147.111C227.338 136.733 238 115.58 238 98.7222C238 90.1911 235.621 115.804 236.611 124.278C237.531 132.145 239.967 141.825 249.222 142.667C259.421 143.594 266.405 134.714 267.556 125.333C267.786 123.452 268.866 113.06 266.444 111.778C265.088 111.06 265.867 114.801 265.778 116.333C265.718 117.355 265.236 128.046 265.222 128.778C265.183 130.909 266.526 151.076 273.278 147.278C279.983 143.506 285.441 131.717 285.944 124.167C286.118 121.569 286.571 118.294 283.778 117C282.761 116.529 277.27 114.895 280.111 117.667C289.236 126.569 294.535 115.172 301 110" stroke="black" stroke-width="2" />
                 </svg>
                    </div>
                                    {/* SCROLL SVG */}
                   <motion.svg
                   initial={{opacity:0.2,y:0}}
                   animate={{opacity:1,y: "10px"}}
                   transition={{repeat:Infinity, duration:3, ease:"easeInOut"}}
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                >
                    <circle cx="12" cy="12" r="11" stroke="#666" stroke-width="1" fill="#f0f0f0"/>
                    <path
                        d="M7 10l5 5 5-5"
                        stroke="#666"
                        stroke-width="1.5"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    </motion.svg>



                 


                    
                </div>

                {/* SKILLS CONTAINER */}
                <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
                    {/* SKILLS TITLE  */}
                    <motion.h1 
                    initial={{x:"-300px"}} 
                    animate={isSkillRefInView ? {x:0} : {}} 
                    transition={{delay:0.2}} 
                    className="font-bold text-2xl ">SKILLS</motion.h1>

                    {/* SKILLS LISTS */}
                    <motion.div
                    initial={{x:"-300px"}} 
                    animate={isSkillRefInView ? {x:0} : {}} 
                    transition={{delay:0.2}} 
                     className="flex gap-4 flex-wrap">
                        <dv className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                            PYTHON
                        </dv>
                        <dv className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                            HTML
                        </dv>
                        <dv className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                            SQL
                        </dv>
                        <dv className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                            TAILWIND CSS
                        </dv>
                        <dv className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                            FLUTTER
                        </dv>
                        <dv className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                            NEXT JS
                        </dv>
                        <dv className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                            REACT JS
                        </dv>
                        <dv className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                            REACT NATIVE
                        </dv>
                    </motion.div>

                    {/* SCROLL SKILLS SVG */}
                    <motion.svg
                    initial={{opacity:0.2,y:0}}
                    animate={{opacity:1,y: "10px"}}
                    transition={{repeat:Infinity, duration:3, ease:"easeInOut"}}
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/motion."
                    fill="none"
                >
                    <circle cx="12" cy="12" r="11" stroke="#666" stroke-width="1" fill="#f0f0f0"/>
                    <path
                        d="M7 10l5 5 5-5"
                        stroke="#666"
                        stroke-width="1.5"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </motion.svg>
                </div>
                
                {/* EXPERIENCE CONTAINER */}
                <div className="flex flex-col gap-0 justify-center pb-48" ref={experienceRef}>
                    {/* EXPERIENCE TITLE  */}
                    <motion.h1 
                    initial={{x:"-300px"}} 
                    animate={isExperienceRefInView ? {x:"0"} : {}} 
                    transition={{delay:0.2}} 
                    className="font-bold text-2xl mb-8">EXPERIENCE</motion.h1>
                    {/* EXPERIENCE LIST */}
                    <motion.div 
                    initial={{x:"-300px"}} 
                    animate={isExperienceRefInView ? {x:"0"} : {}} 
                    transition={{delay:0.2}} 
                    className="">
                    {/* EXPERIENCE LIST ITEM */}
                    <div className="flex justify-between h-58">
                    {/* LEFT */}
                    <div className="w-1/3">
                        {/* JOB TITLE */}
                        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Mobile App Developer</div>
                        {/* JOB DESCRIPTION */}
                        <div className="p-3 text-sm italic">Developed ZanTour, a mobile app for tourists and tour guides. Features include real-time charts, search, and language translation (English to Swahili).</div>
                        {/* JOB DATE */}
                        <div className="p-3 text-red-400 text-sm font-semibold">2023 - Present</div>
                        {/* JOB COMPANY */}
                        <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Freelance</div>
                    </div>

                    {/* CENTER */}
                    <div className="w-1/6">
                        {/* LINE */}
                        <div className="w-1 h-full bg-gray-600 rounded relative">
                            {/* LINE CIRCLE */}
                            <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className="w-1/3"></div>
                    </div>

                   {/* EXPERIENCE LIST ITEM */}
                    <div className="flex justify-between h-58">
                    {/* LEFT */}
                    <div className="w-1/3">
                       
                    </div>
                    {/* CENTER */}
                    <div className="w-1/6">
                        {/* LINE */}
                        <div className="w-1 h-full bg-gray-600 rounded relative">
                            {/* LINE CIRCLE */}
                            <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className="w-1/3">
                        {/* JOB TITLE */}
                        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Predictive Analytics Developer</div>
                        {/* JOB DESCRIPTION */}
                        <div className="p-3 text-sm italic">Created a bankruptcy prediction system with an impressive UI using Streamlit. Analyzed financial data to forecast company stability.</div>
                        {/* JOB DATE */}
                        <div className="p-3 text-red-400 text-sm font-semibold">2023 - Present</div>
                        {/* JOB COMPANY */}
                        <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Freelance</div>
                    </div>

                    </div>


                    {/* EXPERIENCE LIST ITEM */}
                    <div className="flex justify-between h-58">
                    {/* LEFT */}
                    <div className="w-1/3">
                        {/* JOB TITLE */}
                        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Text Summarization Developer</div>
                        {/* JOB DESCRIPTION */}
                        <div className="p-3 text-sm italic">Developed a text summarization system using Streamlit. Users paste URLs to get summaries based on preferences, with a sleek UI.</div>
                        {/* JOB DATE */}
                        <div className="p-3 text-red-400 text-sm font-semibold">2023 - Present</div>
                        {/* JOB COMPANY */}
                        <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Freelance</div>
                    </div>

                    {/* CENTER */}
                    <div className="w-1/6">
                        {/* LINE */}
                        <div className="w-1 h-full bg-gray-600 rounded relative">
                            {/* LINE CIRCLE */}
                            <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className="w-1/3"></div>
                    </div>
                    </motion.div>



                     
                    
                </div>
     </div>


                {/* SVG CONTAINER */}
                <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:1/2">
                <Brain scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </motion.div>
    )
}

export default AboutPage