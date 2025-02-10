'use client'

import Image from 'next/image';
import { ReactTyped } from 'react-typed';

const Hero = ({ nextSectionRef } : { nextSectionRef : any }) => {

    const handleTypingComplete = () => {
        setTimeout(() => {if (nextSectionRef.current) {
            nextSectionRef.current.scrollIntoView({ behavior: 'smooth'});
        }}, 1000);
    };

    return (
        <section className="relative flex items-center justify-center h-screen w-screen bg-black text-white">
            <div className="text-center px-6 max-w-2xl">
                <h1 className="text-5xl font-bold mb-4 animate-fade-in">
                    Hi! I am <span> </span>
                    <ReactTyped 
                        strings = {["Ken Lin"]}//, "a Software Engineer", "a Cambridge Computer Scientist", "a Graphics nerd"]}
                        typeSpeed = {50}
                        backSpeed= {30}
                        // loop
                        onComplete={handleTypingComplete}
                    />
                </h1>
            </div>
        </section>
    )
};

export default Hero;
