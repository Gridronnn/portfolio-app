"use client";


const CATEGORIES = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", color: "#ED8B00" },
      { name: "Python", color: "#3776AB" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "JavaScript", color: "#F7DF1E" },
    ],
  },
  {
    title: "Web & Frontend",
    skills: [
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#000000" },
      { name: "Node.js", color: "#339933" },
      { name: "Vite", color: "#646CFF" },
      { name: "Tailwind CSS", color: "#06B6D4" },
    ],
  },
  {
    title: "Core CS & Systems",
    skills: [
      { name: "Data Structures & Algorithms", color: "#d55121" },
      { name: "Object-Oriented Programming", color: "#ab5232" },
      { name: "Web Development Architecture", color: "#242424" },
    ],
  },
  {
    title: "Backend, Databases & APIs",
    skills: [
      { name: "Supabase", color: "#3ECF8E" },
      { name: "PostgreSQL", color: "#4169E1" },
      { name: "REST API", color: "#FF5722" },
    ],
  },
  {
    title: "DevOps, Security & Tools",
    skills: [
      { name: "Git", color: "#F05032" },
      { name: "GitHub", color: "#181717" },
      { name: "Vercel", color: "#000000" },
      { name: "OAuth 2.0 PKCE", color: "#0288D1" },
      { name: "Content Security Policy (CSP)", color: "#2E7D32" },
      { name: "Row-Level Security (RLS)", color: "#7B1FA2" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 border-b border-[#e5e5e5]">
      <h2 className="font-serif text-3xl md:text-4xl text-[#242424] font-normal tracking-tight">
        Technical Skills & Core Competencies
      </h2>
      <hr className="my-6 border-[#e5e5e5]" />

      <div className="space-y-8">
        {CATEGORIES.map((category) => (
          <div key={category.title}>
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#666666] font-semibold mb-3">
              {category.title}
            </h3>
            <div className="skillflex">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skillbox">
                  <span
                    className="w-2.5 h-2.5 rounded-full inline-block shrink-0"
                    style={{ backgroundColor: skill.color }}
                  />
                  <span className="skilltext">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
