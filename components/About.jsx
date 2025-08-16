import React from "react";

const About = () => {
  return (
    <div className="flex flex-col my-8">
      <h2 className="font-bold text-xl">About</h2>
      <p className="text-muted-foreground text">
        I’m a <span className="text-muted-foreground font-bold">full-stack web developer</span> skilled in building scalable, user-focused applications — from 
        <span className="text-muted-foreground font-bold"> real-time schedulers</span> and 
        <span className="text-muted-foreground font-bold"> live cargo trackers</span> to 
        <span className="text-muted-foreground font-bold"> AI-driven tools</span>.  
        I work across the <span className="text-muted-foreground font-bold">JavaScript ecosystem</span> (React, Node.js, Express) and databases like 
        <span className="text-muted-foreground font-bold"> PostgreSQL</span> &amp; 
        <span className="text-muted-foreground font-bold"> MongoDB</span>, and I’m currently diving deeper into 
        <span className="text-muted-foreground font-bold"> scalable backend architecture</span> and 
        <span className="text-muted-foreground font-bold"> data analytics</span>.
      </p>
    </div>
  );
};

export default About;
