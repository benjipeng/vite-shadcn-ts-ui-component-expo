"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function IntegratedGlassEffectParallaxHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const ribbonY1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const ribbonY2 = useTransform(scrollYProgress, [0, 1], [50, -350]);
  const ribbonY3 = useTransform(scrollYProgress, [0, 1], [100, -300]);
  const ribbonY4 = useTransform(scrollYProgress, [0, 1], [150, -250]);
  const ribbonY5 = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>

      <div
        ref={ref}
        className="h-screen overflow-hidden relative bg-gradient-to-br from-gray-900 to-gray-700 text-white"
      >
        <motion.div
          className="absolute left-0 right-0"
          style={{ y: ribbonY1, rotate: -15, top: "5%" }}
        >
          <Ribbon
            color="bg-blue-600"
            textColor="text-white"
            text="triiiiiiiiim"
            dotColor="bg-white"
          />
        </motion.div>
        <motion.div
          className="absolute left-0 right-0"
          style={{ y: ribbonY2, rotate: 12, top: "25%" }}
        >
          <Ribbon
            color="bg-black"
            textColor="text-white"
            text="triiiiiiiiim"
            dotColor="bg-white"
          />
        </motion.div>
        <motion.div
          className="absolute left-0 right-0"
          style={{ y: ribbonY3, rotate: -10, top: "45%" }}
        >
          <Ribbon
            color="bg-orange-400"
            textColor="text-black"
            text="triiiiiiiiim"
            dotColor="bg-black"
          />
        </motion.div>
        <motion.div
          className="absolute left-0 right-0"
          style={{ y: ribbonY4, rotate: 8, top: "65%" }}
        >
          <Ribbon
            color="bg-purple-500"
            textColor="text-white"
            text="triiiiiiiiim"
            dotColor="bg-white"
          />
        </motion.div>
        <motion.div
          className="absolute left-0 right-0"
          style={{ y: ribbonY5, rotate: -13, top: "85%" }}
        >
          <Ribbon
            color="bg-green-500"
            textColor="text-white"
            text="triiiiiiiiim"
            dotColor="bg-white"
          />
        </motion.div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl border border-white border-opacity-20 shadow-lg p-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Parallax Magic
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Scroll to experience the mesmerizing parallax effect with stylish
              ribbons and modern design.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      <PlaceholderSection />
      <PlaceholderSection />
      <PlaceholderSection />
    </>
  );
}

function Ribbon({
  color,
  textColor,
  text,
  dotColor,
}: {
  color: string;
  textColor: string;
  text: string;
  dotColor: string;
}) {
  return (
    <div
      className={`${color} ${textColor} py-2 overflow-hidden w-[200vw] left-[-50vw] relative`}
    >
      <div className="flex items-center space-x-4 animate-marquee">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center space-x-2 flex-shrink-0">
            <div className={`w-2 h-2 rounded-full ${dotColor}`}></div>
            <div className={`w-2 h-2 rounded-full ${dotColor}`}></div>
            <div className={`w-2 h-2 rounded-full ${dotColor}`}></div>
            <ArrowRight className="h-6 w-6" />
            <span className="text-2xl font-bold whitespace-nowrap">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlaceholderSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Placeholder Section</h2>
        <p className="text-lg mb-4">
          This is a placeholder section to allow for scrolling and to
          demonstrate the parallax effect. In a real application, you would
          replace this with actual content.
        </p>
        <Button variant="outline">Learn More</Button>
      </div>
    </section>
  );
}
