import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <div className="flex flex-col items-center my-8">
      {/* <button className='appearance-none px-3 py-1 text-sm text-background bg-foreground rounded-lg'>My Projects</button> */}
      <h2 className="text-3xl font-bold tracking-tighter my-3">
        Featured Projects
      </h2>
      <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed">
        I build projects from 0 to 1, turning ideas into reality. Take a look at
        some of my favorite projects below.
      </p>
      <div className="grid md:grid-cols-3 w-full gap-5 justify-center mt-5">
        
      <Card
          title={"Movie Tracker"}
          time={"Feb 2025"}
          status={"Completed"}
          thumbnailSrc={"movie.png"}
          videoSrc={"movie-tracker.webm"}
          website={"https://movie-tracker-pk7m.onrender.com/"}
          github={"WebD-Projects/tree/main/Movie-Tracker"}
          frameworks={[
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "Express",
            "EJS",
            "firebase",
            "bycrypt",
            "passport.js",
            "Google OAuth",
            "CRUD Operations",
            "restful API",
            "Full Stack",
            "On Render"
          ]}
          description={
            "I built a *Movie Tracker Web Application* 🎬 where users can *search for movies*, *view detailed info* using an external API, and *add watched titles* to a personalized *dashboard* ✅. The app includes *user authentication* (with *email/password* and *Google OAuth*), and uses *EJS*, *Express*, *Node.js*, and *Firebase* on the backend 🔐. This project showcases my ability to build *full-stack applications* with *RESTful APIs*, implement *secure login systems*, and deliver an engaging, responsive UI for organizing and exploring movies efficiently 🍿."
          }
        />
        <Card
          title={"Family Travel Tracker"}
          time={"Jan 2025"}
          status={"Completed"}
          thumbnailSrc={"travel-tracker.png"}
          videoSrc={"travel-tracker.webm"}
          website={"https://family-travel-tracker-zr1x.onrender.com"}
          github={"WebD-Projects/tree/main/Family%20Travel%20Tracker"}
          frameworks={[
            "HTML",
            "CSS",
            "JavaScript",
            "SQL",
            "Node.js",
            "Express",
            "EJS",
            "Postgres Database",
            "Full Stack",
            "On Render"
          ]}
          description={
            "Family Travel Tracker 🌍 is a web app I built using PostgreSQL, Node.js, Express, EJS, and JavaScript 🛠️. The app allows you to add family members 👨‍👩‍👧‍👦 and track which countries they've visited by simply entering the country name 🗺️. Each visited country is marked with a unique color on the map, making it easy to visualize global travel at a glance 🌈. This project highlights my skills in full-stack development, database integration, and creating interactive visual features that are both fun and informative 🎯."
          }
          
        />
        <Card
          title={"Book Blog"}
          time={"Feb 2025"}
          status={"Maintained"}
          thumbnailSrc={"book.png"}
          videoSrc={"book.webm"}
          website={"https://book-blog-efsh.onrender.com"}
          github={"WebD-Projects/tree/main/Book-blog"}
          frameworks={["HTML", "CSS", "Javascript", "EJS", "Node.js", "Express", "Firebase", "Full Stack","CRUD Operations","On Render"]}
          description={
            "I built a web application called Book Blog that allows users to share, browse, and manage book-related blog posts. Users can create, edit, and delete blog entries, each featuring a book title, description, and personal thoughts. The app showcases my ability to design full-stack applications with dynamic content rendering and real-time data handling using Firebase. It highlights my focus on clean UI, efficient CRUD operations, and seamless user experience for book lovers and bloggers alike."
          }
        />
        <Card
          title={"Secrets Project"}
          time={"Feb 2025"}
          status={"Completed"}
          thumbnailSrc={"Oauth.png"}
          videoSrc={"Oauth.webm"}
          website={"https://secrets-project-bc97.onrender.com"}
          github={"WebD-Projects/tree/main/Advanced%20Authentication%20Project"}
          frameworks={[
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js ",
            "Express",
            "EJS",
            "postgreSQL",
            "Passport.js",
            "OAuth",
            "Google OAuth",
            "bcrypt",
            "Full Stack",
            "On Render",
          ]}
          description={
            "SecretShare is a *Node.js web app* 🔐 that lets users *share their secrets anonymously* in a secure space 🕵️‍♂️. Built with *advanced authentication* using *Passport.js*, it supports *Google OAuth* and *local login/signup* for flexible access options 🔑. Secrets are stored safely and displayed anonymously, creating a space where users can *express freely without judgment* 🧠. This project showcases my skills in *secure full-stack development*, *user authentication*, and *building trust-focused web experiences*."
          }
        />
        <Card
          title={"AI Assistant"}
          time={"Oct 2024"}
          status={"Maintained"}
          thumbnailSrc={"jarvis.png"}
          thumbnailLightSrc={"jarvis.png"}
          videoSrc={"jarvis.webm"}
          website={""}
          github={"Python-projects/tree/main/AI%20Assistant"}
          frameworks={[
            "Python",
            "AI",
            "Speech Recognition",
            "Pyttsx3",
            "Wikipedia",
            "openAI",
            "webbrowser",
          ]}
          description={
            "A *voice-enabled AI assistant* 🧠 built with *Python*, capable of *understanding voice commands* 🎙️ and responding through *text-to-speech* using *pyttsx3* 🔊. It can *search Wikipedia* 📚, *open websites* 🌐, and even interact with *OpenAI APIs* for intelligent conversations 🤖. This project demonstrates my skills in *AI integration*, *speech recognition*, and building *interactive Python-based tools* that bridge *natural language* and *automation* seamlessly ⚡."
          }
        />
        <Card
          title={"Permalist Project"}
          time={"Mar 2025"}
          status={"Completed"}
          thumbnailSrc={"permalist.png"}
          thumbnailLightSrc={"permalist.png"}
          videoSrc={"permalist.webm"}
          website={"https://permalist-zf5o.onrender.com"}
          github={"WebD-Projects/tree/main/Permalist%20Project"}
          frameworks={[
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "Express",
            "EJS",
            "Postgres Database",
            "SQL",
            "CRUD Operations",
            "Full Stack",
            "On Render",
          ]}
          description={
            "Permalist is a *minimalist web app* 📝 I built for *creating and managing personal notes*. Users can *add*, *edit*, *view*, and *delete* notes effortlessly using a clean interface powered by *Node.js*, *Express*, and a *PostgreSQL database* 🗂️. The app focuses on *simplicity*, *speed*, and *data persistence*, making it easy to *keep track of thoughts, tasks, or reminders* 💡. This project highlights my skills in *full-stack CRUD operations*, *SQL database integration*, and building *efficient, user-focused tools* 🔧."
          }
        />
        <Card
          title={"Capital Quiz App"}
          time={"Dec 2024"}
          status={"Completed"}
          thumbnailSrc={"capital.png"}
          videoSrc={"capital.webm"}
          website={"https://world-capital-quiz-2sz8.onrender.com"}
          github={"WebD-Projects/tree/main/WorldCapital-Quiz"}
          frameworks={[
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "Express",
            "EJS",
            "JSON",
            "Postgres Database",
            "SQL",
            "Full Stack",
            "On Render",
          ]}
          description={
            "I built an *interactive geography quiz website* 🌍 where users are given a *random country* and must enter its *capital city* 🏙️. Each correct answer *increases the score* 🏆, making it a fun way to *learn world capitals* and test your knowledge in real-time 🎯. The app is built with *Node.js*, *Express*, and a *PostgreSQL database*, with questions dynamically rendered using *EJS* and data managed through *JSON* and *SQL* for smooth performance 🔄. It's a simple, educational tool that combines *fun gameplay* with *full-stack functionality* ⚡."
          }
        />
        <Card
          title={"Simon Game"}
          time={"Aug 2024"}
          status={"Completed"}
          thumbnailSrc={"simon.png"}
          videoSrc={"simon.webm"}
          website={"JavaScript-projects/Simon-Game"}
          github={"JavaScript-projects/tree/main/Simon-Game"}
          frameworks={[
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive",
            "DOM Manipulation",
            "Frontend"
          ]}
          description={
            "I built a classic *Simon Game* 🧠 using *HTML*, *CSS*, and *JavaScript*. The game challenges users to *repeat color patterns* that get progressively harder 🎯. It features *dynamic DOM manipulation*, *audio feedback*, and *visual animations* to enhance interactivity. Designed to be fully *responsive* 📱, this project showcases my skills in *event handling*, *timing logic*, and *creating smooth, engaging user experiences* through frontend development."
          }
        />
        <Card
          title={"Dicee Game"}
          time={"Aug 2024"}
          status={"Completed"}
          thumbnailSrc={"dice.png"}
          videoSrc={"dice.webm"}
          website={"JavaScript-projects/Dicee-Challenge"}
          github={"JavaScript-projects/tree/main/Dicee-Challenge"}
          frameworks={[
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive",
            "DOM Manipulation",
            "Frontend"
          ]}
          description={
            "I created a fun *Dice Challenge webpage* 🎲 where each time the page is *reloaded*, two dice are *randomly rolled* and the result is displayed instantly 🎯. The project uses *JavaScript DOM manipulation* to dynamically change dice images based on random values. It’s fully *responsive* 📱 and designed with smooth *visual feedback* for an engaging, lightweight experience. This project demonstrates my understanding of *core frontend concepts* and *interactive UI behavior* 🧠."
          }
        />
        <Card
          title={"GitHub Profile Generator"}
          time={"May 2024"}
          status={"Completed"}
          thumbnailSrc={"git-profile-g.png"}
          thumbnailLightSrc={"git-profile-g.png"}
          videoSrc={"git-profile.webm"}
          website={"JavaScript-projects/Git-Hub-Profile-Project"}
          github={"JavaScript-projects/tree/main/Git-Hub-Profile-Project"}
          frameworks={["HTML", "CSS", "JavaScript", "Responsive","DOM Manipulation", "API Integration", "GitHub API", "Frontend"]}
          description={
            "I built a *GitHub Profile Generator* 💻 that allows users to *enter any GitHub username* and instantly see a *profile card* with their *avatar*, *bio*, *repositories*, and other public details 🧑‍💻. The project uses the *GitHub API* to fetch real-time data and dynamically updates the UI using *JavaScript DOM manipulation* 🔄. It’s fully *responsive* 📱 and designed to deliver a *clean, interactive experience* for exploring GitHub profiles easily 🎯."
          }
        />
        <Card
          title={"Drum Kit"}
          time={"Jun 2024"}
          status={"Completed"}
          thumbnailSrc={"drum.png"}
          videoSrc={"drum.webm"}
          website={"JavaScript-projects/Drum-Kit"}
          github={"JavaScript-projects/tree/main/Drum-Kit"}
          frameworks={["HTML", "CSS", "JavaScript", "Responsive","DOM Manipulation" ,"Frontend"]}
          description={
            "I built a fun and interactive *soundboard webpage* 🔊 featuring *7 buttons*, each mapped to a *unique sound effect* 🎵. When a user clicks any button, a different sound plays instantly, creating an *engaging and playful experience* 🎉. The project showcases my skills in *JavaScript DOM manipulation* and *event handling*, along with *responsive design* to ensure it works smoothly on both *desktop and mobile devices* 📱💻."
          }
        />
        <Card
          title={"Math Quiz"}
          time={"Apr 2024"}
          status={"Completed"}
          thumbnailSrc={"math-quiz.png"}
          videoSrc={"math-quiz.webm"}
          website={"JavaScript-projects/math-quiz-project"}
          github={"JavaScript-projects/tree/main/math-quiz-project"}
          frameworks={[
            "HTML",
            "CSS",
            "JavaScript",
            "DOM Manipulation",
            "Frontend"
          ]}
          description={
            "I built an interactive *Math Quiz Webpage* ➕➖ where users can *solve random math problems* and get *instant feedback* ✅. For every correct answer, the *score increases* 📈, and for incorrect ones, it *decreases* 📉 — keeping the challenge engaging 🧠. The questions are dynamically generated using *JavaScript*, and the interface is built with *HTML and CSS*, featuring smooth *DOM manipulation* for real-time updates. This project demonstrates my ability to create *fun, educational tools* with *responsive and interactive frontend logic* 🎯."
          }
        />
        <Card
          title={"Conference Ticket Generator"}
          time={"Nov 2024"}
          status={"Completed"}
          thumbnailSrc={"ticket.png"}
          videoSrc={"ticket.webm"}
          website={"JavaScript-projects/conference-ticket-generator-main"}
          github={"JavaScript-projects/tree/main/conference-ticket-generator-main"}
          frameworks={[
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive",
            "DOM Manipulation",
            "Frontend Mentor Challenge",
          ]}
          description={
            "I completed a *Frontend Mentor Challenge* 🎯 where users fill out a *form with their details* 📝, and upon submission, a *personalized ticket* 🎟️ is generated and displayed on the screen. The project focuses on *form validation*, *responsive design* 📱, and *dynamic DOM manipulation* to ensure a *smooth and interactive user experience* 💡. It showcases my ability to build *clean, functional UIs* and handle *user input* effectively using *JavaScript* and *CSS*."
          }
        />
        <Card
          title={"Interactive Rating Component"}
          time={"Nov 2024"}
          status={"Completed"}
          thumbnailSrc={"rating.png"}
          videoSrc={"rating.webm"}
          website={"JavaScript-projects/interactive-rating-component-main"}
          github={"JavaScript-projects/tree/main/interactive-rating-component-main"}
          frameworks={["HTML", "CSS", "JavaScript", "Responsive", "DOM Manipulation", "Frontend Mentor Challenge"]}
          description={
            "I built a simple and responsive *Rating Component* ⭐ as part of a *Frontend Mentor Challenge* 🎯. Users can *select a rating* (e.g., 1–5) and upon submission, a *thank you card* is displayed showing the selected rating. This project highlights my skills in *form interaction*, *DOM manipulation*, and *responsive design*, while focusing on *clean UI* and *user feedback* 💡."
          }
        />
        <Card
          title={"Tindog Webpage"}
          time={"Mar 2024"}
          status={"Completed"}
          thumbnailSrc={"tindog.png"}
          videoSrc={"tindog.webm"}
          website={"Web-Pages/TinDogProject/"}
          github={"Web-Pages/tree/main/TinDogProject"}
          frameworks={["HTML", "CSS", "Bootstrap", "Responsive", "Frontend"]}
          description={
            "*TinDog* 🐶 is a *responsive webpage* built using *HTML, CSS, and Bootstrap* 🎨. It's a *landing page* for a fictional *dog dating app*, designed to showcase a *clean layout*, *responsive components*, and *mobile-first design* 📱. The project helped me practice *Bootstrap grid systems*, *pre-built components*, and *responsive web design principles* for creating modern, sleek webpages 💡."
          }
        />
        <Card
          title={"YouTube Clone"}
          time={"Feb 2024"}
          status={"Completed"}
          thumbnailSrc={"youtube-clone.png"}
          videoSrc={"youtube-clone.webm"}
          website={"Web-Pages/YoutubeClone/"}
          github={"Web-Pages/tree/main/YoutubeClone"}
          frameworks={["HTML", "CSS", "Frontend"]}
          description={
            "I built a *YouTube Clone* 📺 using *HTML* and *CSS* to replicate the *layout and design* of the original YouTube homepage 🎨. The project focuses on *responsive design* 📱, with a structured *video grid*, *sidebar navigation*, and *header section* — all styled to mimic the real platform. This clone helped me practice *frontend development* and understand how to recreate *real-world UI designs* from scratch 💡."
          }
        />
        <Card
          title={"MyTunes Music Webpage"}
          time={"Feb 2024"}
          status={"Completed"}
          thumbnailSrc={"music-w.png"}
          videoSrc={"music-w.webm"}
          website={"Web-Pages/MusicWebPage/"}
          github={"Web-Pages/tree/main/MusicWebPage"}
          frameworks={["HTML", "CSS","Responsive","Frontend"]}
          description={
            "I built a *MyTunes Music Webpage* 🎵 using *HTML* and *CSS* to create a *modern, responsive landing page* for a fictional *music streaming service* 🎧. The design includes *sections for music, videos, and subscriptions* 📀, with a clean layout and engaging visuals. This project helped me strengthen my *frontend skills* and practice building *aesthetic, responsive websites* that resemble *real-world product pages* 🌐."
          }
        />
        <Card
          title={"Restaurant Webpage"}
          time={"Jan 2024"}
          status={"Completed"}
          thumbnailSrc={"restaurant-w.png"}
          videoSrc={"restaurant-w.webm"}
          website={"Web-Pages/RestaurantWebpage/"}
          github={"Web-Pages/tree/main/RestaurantWebpage"}
          frameworks={["HTML", "CSS","Responsive","Frontend"]}
          description={
            "I built a *Restaurant Webpage* 🍽️ using *HTML* and *CSS*, featuring a *modern, responsive design* with a *well-structured grid layout* 🧩. The site includes *menu highlights*, *about us*, and *contact sections* 📋 — all arranged using a *clean, intuitive grid system* that adapts seamlessly across devices 📱💻. This project allowed me to sharpen my *frontend development skills* while focusing on *visual hierarchy*, *responsive layout*, and a *professional user experience* 🌟."
          }
        />
      </div>
    </div>
  );
};

export default Projects;
