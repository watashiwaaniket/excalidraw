"use client";
import Hero from "./ui/landing/Hero";
import Features from "./ui/landing/Features";
import Faq from "./ui/landing/Faq";
import Footer from "./ui/landing/Footer";

export default function Landing() {
    return(
        <div className="pt-8 w-screen h-screen flex flex-col items-center overflow-x-hidden">
            <Hero />
            <Features />
            <Faq />
            <Footer />
        </div>
    )
};
