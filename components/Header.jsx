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
          Currently pursuing a BTech in Computer Science, my academic journey infuses theoretical knowledge with practical applications, focusing on AI and data analytics. My commitment to staying abreast of technological advancements drives me to continuously seek opportunities that align with our shared passion for innovation in data.
          Passionate web developer with a focus on building user-friendly, responsive websites and actively engaging in hands-on projects to solve real-world challenges and enhance technical expertise.🤠
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
