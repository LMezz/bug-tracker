import ProjectCard from "@/components/projects/project-card"

export default function ProjectsPage() {
  return (
    <section className="container grid py-[1.5em]">
      <div className="project-list container columns-3 space-y-4">
        <ProjectCard
          data={{
            id: "2383289",
            name: "Bug Tracker",
            thumbnail: "https://github.com/LMezz.png",
          }}
        />
        <ProjectCard
          data={{
            id: "1074923847",
            name: "E-Commerce",
            thumbnail: "https://github.com/LMezz.png",
          }}
        />

        <ProjectCard
          data={{
            id: "19843729348",
            name: "SaaS Site",
            thumbnail: "https://github.com/LMezz.png",
          }}
        />

        <ProjectCard
          data={{
            id: "0238482353",
            name: "Project 1",
            thumbnail: "https://github.com/LMezz.png",
          }}
        />

        <ProjectCard
          data={{
            id: "102783248",
            name: "Parser",
            thumbnail: "https://github.com/LMezz.png",
          }}
        />

        <ProjectCard
          data={{
            id: "o384729",
            name: "Linter",
            thumbnail: "https://github.com/LMezz.png",
          }}
        />
      </div>
    </section>
  )
}
