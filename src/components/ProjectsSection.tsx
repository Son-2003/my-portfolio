import { ExternalLink, Github } from "lucide-react";
import Button from "./Button";
import { BsAndroid2 } from "react-icons/bs";

const projects = [
  {
    id: 1,
    title: "Exchange Item Platform",
    description:
      "A mobile app for exchanging household items, built with React Native and powered by a Spring Boot backend and PostgreSQL.",
    image: "/projects/project1.png",
    tags: ["ReactNative", "SpringBoot", "Postgres"],
    demoUrl: "#",
    githubUrl: "https://github.com/Son-2003/reas-mobile",
  },
  {
    id: 2,
    title: "Restaurant Booking Platform",
    description:
      "A web platform for restaurant reservations, featuring secure APIs, real-time booking, and admin management tools.",
    image: "/projects/project2.jpg",
    tags: ["React", "SpringBoot", "MySQL"],
    demoUrl: "https://skedeat.vercel.app/",
    githubUrl: "https://github.com/Son-2003/restaurant-booking-platform-be",
  },
  {
    id: 3,
    title: "E-commerce Web",
    description:
      "Full-stack e-commerce platform using ReactJS, Redux, Spring Boot RESTful APIs, PostgreSQL, and integrated payment gateway.",
    image: "/projects/project3.png",
    tags: ["React", "Redux", "SpringBoot", "Postgres"],
    demoUrl: "https://ecommerce.reasvn.site/",
    githubUrl: "https://github.com/Son-2003/e-commerse",
  },
  {
    id: 4,
    title: "VN History AI",
    description:
      "Explore 4000 years of Vietnamese history through an interactive timeline and notable historical figures with modern UI and smooth animations powered by AI.",
    image: "/projects/project4.jpg",
    tags: ["NextJS", "TailWindCSS", "TypeScript", "OpenAI"],
    demoUrl: "https://mindx.history.reasvn.site/",
    githubUrl: "https://github.com/Son-2003/VN-history-AI",
  },
  {
    id: 5,
    title: "Psychology AI",
    description:
      "An AI-driven mental health support app built with Next.js, TypeScript, and TailwindCSS, using the OpenAI API to analyze emotions and provide empathetic, personalized guidance.",
    image: "/projects/project6.jpg",
    tags: ["NextJS", "TailWindCSS", "TypeScript", "OpenAI"],
    demoUrl: "https://psychology-ai-green.vercel.app/",
    githubUrl: "https://github.com/Son-2003/Psychology_AI.git",
  },
  {
    id: 6,
    title: "Movie Trailer",
    description:
      "A modern Netflix-inspired Movie Web Application built with React and Vite. Users can browse movies, watch trailers, and explore detailed information about their favorite films through an intuitive and responsive interface.",
    image: "/projects/project5.jpg",
    tags: ["React", "TailWindCSS", "Vite"],
    demoUrl: "https://movie-trailer-sigma.vercel.app/",
    githubUrl: "https://github.com/Son-2003/movie-trailer",
  },
];

type ProjectsSectionProps = {
  isDarkMode: boolean;
};

export const ProjectsSection = ({ isDarkMode }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-4 text-center ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          {" "}
          Featured <span className="text-orange-500"> Projects </span>
        </h2>

        <p
          className={`text-center mb-12 max-w-2xl mx-auto ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          These are some of the projects I’ve enjoyed building — balancing
          functionality, performance, and great UX.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="flex flex-col w-full h-full bg-white group rounded-lg overflow-hidden shadow-xs transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="px-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
              </div>

              <div className="flex space-x-3 mt-auto p-6">
                {project.id === 1 ? (
                  <>
                    <a
                      href="/reas-mobile.apk"
                      download
                      className="hover:text-orange-500 transition-colors duration-300"
                    >
                      <BsAndroid2 size={20} />
                    </a>
                  </>
                ) : (
                  <>
                    <a
                      href={project.demoUrl}
                      className="hover:text-orange-500 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </>
                )}

                <a
                  href={project.githubUrl}
                  className="hover:text-orange-500 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 hover:scale-105 transition-all">
          <Button
            href="https://github.com/Son-2003"
            content="Check My GitHub"
          />
        </div>
      </div>
    </section>
  );
};
