"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import emailjs from '@emailjs/browser';
import { useRef } from "react"

const ContactPage = () => {

    const text = "Get In Touch"

    const [success,setSuccess] = useState(false)
    const [error,setError] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      setError(false)
      setSuccess(false)
  
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID, 
        form.current, {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        })
        .then((success) => {
            setSuccess(true);
            form.current.reset();             //if sucessful remove inputs
        }, (error) =>{
            setError(true);
        });
    };


    return (
        <motion.div 
        className="h-full" 
        initial={{y:"-200vh"}} 
        animate={{y:"0%"}} 
        transition={{duration:1}}>
          <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            {/* TEXT CONTAINER */}
            <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
            <div className="">
                {text.split("").map((letter,index)=>(
                    <motion.span 
                    key={index} 
                    initial={{opacity:1}} 
                    animate={{opacity:0}} 
                    transition={{duration:3 ,repeat:Infinity ,delay:index*0.1}}>
                        {letter}
                    </motion.span>
                ))}
                🤝
            </div>

            </div>

            {/* FORM CONTAINER */}
            <form 
            onSubmit={sendEmail}
            ref={form} className="h-1/2 lg:h-full lg:w-1/2 rounded-xl text-xl flex flex-col gap-8 justify-center p-24">
            <span>Dear Nassir Mohamed ,</span>
            <textarea rows={6}
            name="user_email"
             className="bg-transparent outline-none border-b-2 border-b-black resize-none"></textarea>
            <span>My mail address is :</span>
            <input type="text"
            name="user_email"
            
            className="bg-transparent outline-none border-b-2 border-b-black "/>
            <span>Regard</span>
            <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">Send</button>

            {success && <span className="text-green-600 font-semibold">Your message has been sent successfully!</span>}
            {error && <span className="text-red-600 font-semibold">Something went wrong!</span>}


            </form>
          </div>

        </motion.div>
    )
}

export default ContactPage