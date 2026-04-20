import { ArrowRight, ExternalLink} from 'lucide-react'
import React from 'react'
import { FaSquareGithub } from "react-icons/fa6";


const projects = [
  {
    id: 1,
    title: "ShopHub E-commerce",
    description: "React e-commerce app with product listing, cart management, authentication, quantity updates, and real-time total calculation.",
    image: "/projectImg/shopHub.png",
    tags: ["CSS", "Javascript", "React"],
    demoUrl: "https://shophub-ecommerce-chi.vercel.app/",
    githubUrl: "https://github.com/roshan0011830/shophub-react"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects, skills, and contact information with a responsive layout and clean user interface.",
    image: "/projectImg/project2.png",
    tags: ["TailwindCSS","Javascript", "React"],
    demoUrl: "https://roshan-portfolio-red.vercel.app/",
    githubUrl: "https://github.com/roshan0011830/roshan-portfolio"
  },
  {
    id: 3,
    title: "Meizon Website",
    description: "Personal portfolio showcasing projects, skills, and contact details, built with a clean layout and responsive design implementation.",
    image: "/projectImg/project3.png",
    tags: ["React", "CSS"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Mentora",
    description: "Dynamic blog platform with post listing and structured content display, focused on smooth navigation and responsive interface.",
    image: "/projectImg/project4.png",
    tags: ["React", "Node.js"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "Vishop Voices",
    description: "Weather application using API integration to fetch real-time data, displaying current conditions with a clean responsive UI.",
    image: "/projectImg/project5.png",
    tags: ["JavaScript", "API"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "Chat Application",
    description: "Real-time chat app with interactive messaging features and responsive UI, built for smooth communication and seamless user experience.",
    image: "/projectImg/project6.png",
    tags: ["React", "Firebase"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured<span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are my some recent projects. Each project was carefully crafted
          with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagKey) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 border">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-left text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-left text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a href={project.demoUrl} target="_blank">
                      <ExternalLink
                        size={24}
                        className="text-foreground/80 hover:text-primary"
                      />
                    </a>
                    <a href={project.githubUrl} target="_blank">
                      <FaSquareGithub size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>


        <div className="text-center mt-12 flex justify-center">
          <a href="https://github.com/roshan0011830" target='_blank' className='cosmic-button flex w-fit justify-center items-center gap-2 mx-auto'>Check My GitHub <ArrowRight size={16}/></a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection
