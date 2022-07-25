import React, { useEffect, useState, useRef } from "react";
import { textBlock, visuelBlock } from "./utils";
import { motion } from "framer-motion";
import "./LandingPage.css";
import { AnimationLogo } from "../../components/AnimationLogo/AnimationLogo";
const LandingPage = () => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowHeight, SetWindowHeight] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [showLogo, setShowLogo] = useState(true);
  useEffect(() => {
    // <= WH/2
    // WH/2< ,<= WH + WH/2
    // WH + WH/2 < , <=2*WH + WH/2
    // 2*WH + WH/2 <, <=3*WH + WH/2
    // 3*WH + WH/2<, 4*WH + WH/2
    if (scrollPosition <= windowHeight / 2) {
      setPageIndex(0);
    } else if (
      scrollPosition > windowHeight / 2 &&
      scrollPosition <= windowHeight + windowHeight / 2
    ) {
      setPageIndex(1);
    } else if (
      scrollPosition > windowHeight + windowHeight / 2 &&
      scrollPosition <= 2 * windowHeight + windowHeight / 2
    ) {
      setPageIndex(2);
    } else if (
      scrollPosition > 2 * windowHeight + windowHeight / 2 &&
      scrollPosition <= 3 * windowHeight + windowHeight / 2
    ) {
      setPageIndex(3);
    } else if (
      scrollPosition > 3 * windowHeight + windowHeight / 2 &&
      scrollPosition <= 4 * windowHeight + windowHeight / 2
    ) {
      setPageIndex(4);
    }
  }, [scrollPosition]);

  const handleScroll = (e: any) => {
    if (bodyRef && bodyRef.current) {
      const position = bodyRef.current.scrollTop;
      setScrollPosition(position);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowLogo(false);
    }, 2000);
  }, []);

  useEffect(() => {
    console.log("pageIndex", pageIndex);
  }, [pageIndex]);

  useEffect(() => {
    console.log("scrollPosition::::", scrollPosition);
  }, [scrollPosition]);

  useEffect(() => {
    console.log("window.innerHeight::::", window.innerHeight);
    SetWindowHeight(window.innerHeight);
  }, [window.innerHeight]);

  useEffect(() => {
    if (bodyRef && bodyRef.current)
      bodyRef.current.addEventListener("scroll", handleScroll);

    return () => {
      if (bodyRef && bodyRef.current)
        bodyRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative bg-gray-100 w-screen z-30">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 2 }}
        className=" max-w-7xl mx-auto h-screen"
      >
        <div className="w-full flex  md:flex-row-reverse justify-end relative">
          <div ref={bodyRef} className="LandingBody md:w-3/4 w-11/12 w-full">
            {textBlock.map((i, ind) => (
              <div key={ind} id={i.id} className="section">
                <motion.div
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 1.5, duration: 2 }}
                  className="md:w-3/5 px-6"
                >
                  {i.title}
                  {i.parag}
                </motion.div>
              </div>
            ))}
          </div>
          <div className="md:w-1/4 w-1/12 flex flex-col justify-center mr-6 md:mr-0 md:px-8">
            {visuelBlock.map((i, ind) => (
              <a key={ind} href={`#${ind}`}>
                <motion.div
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 1.5 + 0.1 * ind,
                    duration: 2 + 0.3 * ind,
                  }}
                  className={`my-4 md:mx-8 ${
                    ind === pageIndex
                      ? "opacity-100"
                      : "lg:opacity-60 opacity-40"
                  }`}
                >
                  {i.image}
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {showLogo && <AnimationLogo />}
    </div>
  );
};

export default LandingPage;
