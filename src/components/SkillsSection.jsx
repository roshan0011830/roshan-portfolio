import React, { useState } from 'react'
import { cn } from '../lib/utils';



const skills = [
  // Frontend
  {name: "HTML/CSS", level: 95, category: "Frontend"},
  {name: "Javascript", level: 80, category: "Frontend"},
  {name: "React", level: 85, category: "frontend"},
  {name: "Tailwind CSS", level: 80, category: "Frontend"},
  {name: "Bootstrap", level: 90, category: "Frontend"},
  {name: "TypeScript", level: 75, category: "Frontend"},
  {name: "Next.js", level: 60, category: "Frontend"},
  
  //Backend
  {name: "Node.js", level: 20, category: "Backend"},
  {name: "Express", level: 15, category: "Backend"},
  {name: "MongoDB", level: 45, category: "Backend"},
  {name: "PostgreSQL", level: 30, category: "Backend"},
  {name: "GraphSQL", level: 20, category: "Backend"},
  
  //Tools
  {name: "Git/Github", level: 70, category: "Tools"},
  {name: "Docker", level: 10, category: "Tools"},
  {name: "Figma", level: 40, category: "Tools"},
  {name: "VS Code", level: 90, category: "Tools"},

];

const categories = ["All", "Frontend", "Backend", "Tools"];



function SkillsSection() {

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter((skill) => {
    if(activeCategory === "All") return true;
    return skill.category === activeCategory
  } 
  );


  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => {
                setActiveCategory(category)
                }}
              className={activeCategory === category ? "bg-primary text-primary-foreground px-5 py-2 rounded-full transition-colors duration-300" : "bg-secondary/70 text-secondary px-5 py-2 rounded-full transition-colors duration-300"}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover pb-12"
            >
              <div>
                <h3 className="font-semibold text-lg mb-3 text-left">
                  {skill.name}
                </h3>

                <div className="w-full bg-secondary/50 h-2 rounded-full bg-primary/20 ">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: skill.level + "%" }}
                  ></div>

                  <div className="text-right mt-2">
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection
