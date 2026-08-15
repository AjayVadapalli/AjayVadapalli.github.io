import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-start my-8">
        <div className="flex flex-col md:w-9/12">
          <h1 className="text-3xl md:text-7xl font-bold">
            Hi, I'm Ajay 👋
          </h1>
          <p className="md:text-xl">
          Currently pursuing a B.Tech in Computer Science and Engineering, with hands-on experience in full-stack development, AI, and machine learning. Passionate about building user-friendly web applications and practical ML/AI solutions that address real-world challenges. Continuously exploring modern technologies and working on projects to strengthen my software development and AI/ML skills.
          </p>
        </div>
        <div className="relative flex-none md:w-64 md:h-64 h-24 w-24 bg-red-400 rounded-full overflow-hidden">
          <Image
            src="https://i.pinimg.com/736x/5c/e3/b0/5ce3b0bbafba9ac60edfad7d65b2697f.jpg"
            alt="Ajay"
            fill
            sizes="(max-width: 768px) 50vw,
            (max-width: 1200px) 33vw,
            25vw"
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
