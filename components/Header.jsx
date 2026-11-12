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
          <div className="mt-5 flex flex-wrap gap-3" aria-label="Resume actions">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.8">
                <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
                <circle cx="12" cy="12" r="2.5" />
              </svg>
              View Resume
            </a>
            <a
              href="/resume.pdf"
              download="Ajay_Vadapalli_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold text-card-foreground transition-colors hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 3.5v11m0 0 4-4m-4 4-4-4M4.5 16v4h15v-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download Resume
            </a>
          </div>
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
