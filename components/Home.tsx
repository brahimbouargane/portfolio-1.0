/* eslint-disable react/no-unescaped-entities */
'use client'
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import WaterDropGrid from "./WaterDropGrid";
import '@/app/globals.css'

const Home = () => {
  return (
    <section className="section-wrapper hero-margin">
      <div className="hero_copyWrapper">
        <h1 className="hero-title">
          Hey, I'm Bob<span className="text-indigo-500">;</span>
        </h1>
        <h2 className="block mt-6 text-4xl text-indigo-100 font-extralight">
          I'm a <span className="text-4xl text-indigo-500 font-bold">Full Stack Developer</span>
        </h2>
        <p className="max-w-[600px] font-extralight md:text-lg text-indigo-100 my-4 md:my-6 ">
          I've spent the last 5 years building and scaling software for some pretty cool companies. I also teach people to paint online (incase you've got an empty canvas layin' around 🎨). Let's connect!
        </p>
        <button className="bg-indigo-500 text-indigo-100 font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Contact me
        </button>
      </div>
      <WaterDropGrid />
    </section>
  );
};

export default Home;