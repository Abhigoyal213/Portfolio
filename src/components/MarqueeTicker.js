import React from "react";
import { skills } from "../components/constants";

const MarqueeTicker = () => {
  // Extract all individual skill items containing name and image
  const allSkills = skills.reduce((acc, curr) => {
    curr.skills.forEach(skill => acc.push(skill));
    return acc;
  }, []);

  // Split into two rows for a denser, more interesting marquee structure
  const half = Math.ceil(allSkills.length / 2);
  const row1 = allSkills.slice(0, half);
  const row2 = allSkills.slice(half);

  // Double the arrays to ensure smooth infinite scrolling seamlessly
  const renderTrack = (items, reverse = false) => {
    const doubled = [...items, ...items, ...items, ...items];
    return (
      <div className={`flex gap-6 md:gap-8 whitespace-nowrap w-max ${reverse ? 'marquee-track-reverse' : 'marquee-track'}`}>
        {doubled.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg transition-transform hover:scale-105 hover:border-accent/50 cursor-default"
          >
            <img src={tech.image} alt={tech.name} className="w-5 h-5 object-contain" />
            <span className="text-sm md:text-base font-medium text-text-secondary">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto overflow-hidden py-10 md:py-16 mt-12 md:mt-24 mb-10 relative z-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex flex-col gap-6 md:gap-8">
        {renderTrack(row1)}
        {renderTrack(row2, true)}
      </div>
    </div>
  );
};

export default MarqueeTicker;
