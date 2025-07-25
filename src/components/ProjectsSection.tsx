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
    demoUrl: "https://skedeat.site/",
    githubUrl: "https://github.com/Son-2003/restaurant-booking-platform-be",
  },
  {
    id: 3,
    title: "E-commerce UI",
    description:
      "Modern and responsive e-commerce user interface built with React and Redux.",
    image: "/projects/project3.png",
    tags: ["React", "Redux"],
    demoUrl: "https://ecommerce.reasvn.site/",
    githubUrl: "https://github.com/Son-2003/e-commerse",
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
                      >
                        <ExternalLink size={20} />
                      </a>
                    </>
                  )}

                  <a
                    href={project.githubUrl}
                    className="hover:text-orange-500 transition-colors duration-300"
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
