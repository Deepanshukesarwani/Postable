"use client"
import Image from "next/image";
import { Navbar } from "./majorComponents/Navbar";
import Hero from "./majorComponents/Hero";
import MainCard from "./majorComponents/firstMainCard";
import CardOne from "./majorComponents/cardOne";
import HowItworks from "./sections/HowItworks";

export default function Home() {
  return <>
  <div className=" flex justify-center items-center">
  <Navbar/>
  </div>
  <main>
    <Hero/>
    <MainCard/>
    {/* <CardOne/> */}
    <HowItworks/>
  </main>
  </>;
}
