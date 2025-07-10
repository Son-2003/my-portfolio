import { useState } from "react";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiFigma,
  SiCss3,
  SiRedux,
  SiVite,
  SiPrettier,
  SiExpo,
  SiSpringboot,
  SiDotnet,
  SiJsonwebtokens,
  SiMysql,
  SiHibernate,
  SiGithub,
  SiGitlab,
  SiAmazon,
  SiRender,
  SiVercel,
  SiSqlite,
} from "react-icons/si";

const skills = [
  // FRONTEND
  { name: "HTML", icon: <SiHtml5 />, category: "frontend" },
  { name: "CSS", icon: <SiCss3 />, category: "frontend" },
  { name: "JavaScript", icon: <SiJavascript />, category: "frontend" },
  { name: "TypeScript", icon: <SiTypescript />, category: "frontend" },
  { name: "ReactJS", icon: <SiReact />, category: "frontend" },
  { name: "React Native", icon: <SiReact />, category: "frontend" },
  { name: "Redux", icon: <SiRedux />, category: "frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "frontend" },
  { name: "Vite", icon: <SiVite />, category: "frontend" },
  { name: "Prettier", icon: <SiPrettier />, category: "frontend" },
  { name: "Expo", icon: <SiExpo />, category: "frontend" },

  // BACKEND
  { name: "Spring Boot", icon: <SiSpringboot />, category: "backend" },
  { name: "ASP.NET Core", icon: <SiDotnet />, category: "backend" },
  { name: "JWT", icon: <SiJsonwebtokens />, category: "backend" },

  // DATABASE
  { name: "MySQL", icon: <SiMysql />, category: "database" },
  { name: "SQL Server", icon: <SiSqlite />, category: "database" },
  { name: "PostgreSQL", icon: <SiPostgresql />, category: "database" },
  { name: "MongoDB", icon: <SiMongodb />, category: "database" },
  { name: "Hibernate", icon: <SiHibernate />, category: "database" },

  // TOOLS / DEVOPS
  { name: "GitHub", icon: <SiGithub />, category: "tools" },
  { name: "GitLab CI/CD", icon: <SiGitlab />, category: "tools" },
  { name: "Docker", icon: <SiDocker />, category: "tools" },
  { name: "AWS", icon: <SiAmazon />, category: "tools" },
  { name: "Render", icon: <SiRender />, category: "tools" },
  { name: "Vercel", icon: <SiVercel />, category: "tools" },
  { name: "Figma", icon: <SiFigma />, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-orange-500"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={
                `px-5 py-2 rounded-full transition-colors duration-300 capitalize ${activeCategory === category
                  ? "bg-orange-500 text-white"
                  : "hover:text-white hover:bg-orange-200"}`
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="p-6 rounded-lg shadow-xs transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg flex items-center justify-center gap-4"
            >
              <div className="text-3xl text-primary">{skill.icon}</div>
              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};