export default function ProjectsSection() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with Next.js and Tailwind.",
      link: "https://yourportfolio.com",
      image: "/images/portfolio.png", 
    },
    {
      title: "test",
      description: "description",
      link: "https://somelink.com",
      image: "/images/portfolio.png", 
    },
  ];

  return (
    <section 
      id="projects"
      className="flex flex-col items-center gap-32 bg-[#efefef] rounded-2xl pt-32 pl-16 pr-16"
    >
      <h2 className="text-[5rem]">Projects</h2>

      <div></div>
    </section>
  );
}