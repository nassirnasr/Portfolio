"use client"
import Image from 'next/image';
import Link from "next/link"
import { useState } from "react";
import NavLink from './navLink';
import {motion} from "framer-motion";
const links = [
    {url:"/" , title: "Home"},
    {url:"/about" , title: "About"},
    {url:"/portfolio" , title: "Portfolio"},
    {url:"/contact" , title: "Contact"},

];
const NavBar = () => {
    const [open,setOpen] = useState(false);


    // SIDE BAR ANIMATION   tree bars to X(close) bar
    const topVariant = {
        closed:{
            rotate:0,
        },
        opened:{
            rotate:45,
            backgroundColor:"rgb(255,255,255)",
        },
    };

    const centerVariant = {
        closed:{
            opacity:1,
        },
        opened:{
            opacity:0,
            
        },
    };

    const bottomVariant = {
        closed:{
            rotate:0,
        },
        opened:{
            rotate:-45,
            backgroundColor:"rgb(255,255,255)",
        },
    };

   //inside side bar animation
    const listVariants = {
        closed:{
            x:"100vw"
        },
        opened:{
            x:"0",
            transition:{
                when:"beforeChildren",//run first then animate children links
                staggerChildren:0.2,
            }
        }
    }

    //list links animation
    const listItemVariant ={
        closed:{
            x:-10,
            opacity:0,
        },
        opened:{
            x:0,
            opacity:1,

        }
    }

    return (
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
            {/* LINKS */}
            <div className="hidden md:flex gap-4 w-1/3">
                {links.map(link=>(
                    <NavLink link={link} key={link.title} />
                ))}
            </div>
            {/* Logo */}
            <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
                <Link href="/" className="bg-black text-sm rounded-md p-1 font-semibold flex items-center justify-center">
                <span className="text-white mr-1">Nassir</span>
                <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">Simba</span>
                </Link>
            </div>
            {/* SOCIAL ACCOUNTS */}
            <div className="hidden md:flex gap-4 w-1/3">
                <Link href="https://github.com/nassirnasr">
                <Image src="/github.png" alt="github" width={24} height={24} />
                </Link>
                <Link href="https://www.instagram.com/nassir_nasr/">
                <Image src="/instagram.png" alt="" width={24} height={24} />
                </Link>
                <Link href="/">
                <Image src="/facebook.png" alt="" width={24} height={24} />
                </Link>
                <Link href="/">
                <Image src="/dribbble.png" alt="" width={24} height={24} />
                </Link>
                <Link href="/">
                <Image src="/pinterest.png" alt="" width={24} height={24} />
                </Link>
                <Link href="/">
                <Image src="/linkedin.png" alt="" width={24} height={24} />
                </Link>
            </div>
            {/* Responsive Menu */}
            <div className="md:hidden">
                {/* Menu Button */}
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={(()=>setOpen(!open))}>
                    <motion.div variants={topVariant} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
                    <motion.div variants={centerVariant} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded"></motion.div>
                    <motion.div variants={bottomVariant} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
                    
                </button>
                {/* MenuList */}
                {open && (
                <motion.div variants={listVariants} initial="closed" animate="opened"  className="absolute top-0 left-0 bg-black w-screen h-screen text-white flex flex-col items-center gap-8 justify-center text-4xl z-40">
                    {links.map(link=>(
                        <motion.div variants={listItemVariant} className='' key={link.title}>
                            <Link href={link.url}>{link.title}</Link>
                        </motion.div>
                    ))}
                </motion.div>
                )}
            </div>
        </div>
    )
}

export default NavBar