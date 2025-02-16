"use client";
import { useEffect } from "react";

export default function Stars() {
  useEffect(() => {
    const createStar = () => {
      const star = document.createElement("div");
      star.className = "star";
      
      const size = Math.random() * 2 + 1;
      const opacity = Math.random() * 0.5 + 0.3;
      
      star.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        width: ${size}px;
        height: ${size}px;
        opacity: ${opacity};
      `;
      
      document.querySelector(".stars-container")?.appendChild(star);
    };

    for (let i = 0; i < 200; i++) createStar();
    
    return () => {
      document.querySelector(".stars-container")?.replaceChildren();
    };
  }, []);

  return <div className="stars-container absolute inset-0 h-full w-full pointer-events-none" />;
} 