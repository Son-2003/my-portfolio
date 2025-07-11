import { Briefcase, Code, User } from "lucide-react";
import Button from "./Button";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-orange-500"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl text-center font-semibold">
              Passionate Web Developer
            </h3>

            <p className="text-center">
              I'm a final-year Software Engineering student at FPT University. I
              have experience working on real projects, such as a mobile app for
              item exchange and a restaurant booking website. In these projects,
              I focused on backend development and DevOps tasks.
            </p>

            <p className="text-center">
              I enjoy building stable and scalable backend systems using Java
              and Spring Boot. I also like working with tools like Docker and
              CI/CD to help deploy applications more easily. My goal is to
              become a fullstack developer who can build, deliver, and maintain
              real-world applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <Button href="#contact" content="Get In Touch" />

              <a
                href="/NguyenDucSon-Resume.pdf"
                download
                className="text-center px-6 py-2 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-100 duration-300 hover:scale-105 transition-all"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {/* Frontend */}
            <div className="p-6 transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-orange-200">
                  <Code className="h-6 w-6 text-orange-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Frontend</h4>
                  <p>
                    Building interactive UIs with React, TypeScript, Tailwind
                    CSS, and responsive design principles.
                  </p>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="p-6 transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-orange-200">
                  <User className="h-6 w-6 text-orange-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend</h4>
                  <p>
                    Developing secure RESTful APIs with Spring Boot, integrating
                    databases like PostgreSQL and MongoDB.
                  </p>
                </div>
              </div>
            </div>

            {/* Deployment */}
            <div className="p-6 transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-orange-200">
                  <Briefcase className="h-6 w-6 text-orange-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Deployment</h4>
                  <p>
                    Automating CI/CD workflows, containerizing apps with Docker,
                    and deploying to AWS, Render, and Vercel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
