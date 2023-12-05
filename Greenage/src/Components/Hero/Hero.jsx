import React from 'react';


export const Hero = () => {
    return (
        <div className="bg-hero-pattern h-screen bg-cover bg-center" >
            <div className="lg:p-44  text-white">
                <div className=" lg:h-4 h-32"></div>
                <h1 className="text-3xl mx-2 lg:text-6xl py-4 md:mx-9 md:py-20 lg:py-8 lg:font-bold md:font-semibold">Welcome to Greengage Services</h1>
                <h4 className="textt-lg mx-2 lg:text-2xl py-3 lg:font-bold md:mx-9 md:font-semibold">Your Growth,Our Pleasure</h4>
                <button className="border mx-3 my-6 p-2 rounded-full md:my-16 md:mx-9 bg-white text-black font-semibold">GET YOUR QUOTE NOW!</button>
            </div>
        </div>
    )
}
