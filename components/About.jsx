import React from "react";

const About = () => {
  return (
    <div className="flex flex-col my-8">
      <h2 className="font-bold text-xl">About</h2>
      <p className="text-muted-foreground text">
        I’m a{" "}
        <span className="text-muted-foreground font-bold">
          Full-Stack Developer and AI/ML enthusiast
        </span>{" "}
        focused on building user-friendly, data-driven applications and{" "}
        <span className="text-muted-foreground font-bold">
          AI-powered solutions
        </span>
        . I work with{" "}
        <span className="text-muted-foreground font-bold">
          React, Next.js, Python, and modern web technologies
        </span>
        , with a growing focus on{" "}
        <span className="text-muted-foreground font-bold">
          Machine Learning, NLP, and data analytics
        </span>
        . I enjoy solving real-world problems through practical software and
        continuously exploring{" "}
        <span className="text-muted-foreground font-bold">
          AI, ML, and scalable application development
        </span>
        .
      </p>
    </div>
  );
};

export default About;
