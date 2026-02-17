import TechCard from '@/components/ui/TechCard';

import { getTech, getTechs } from "@/lib/techConfig";

export default function TechSection() {
    const techStacks = {
    languages: ['C', 'HTML', 'CSS', 'Java', 'JavaScript', 'TypeScript', 'Markdown', 'Python', 'Rust', 'Shell Scripting', 'SQL'],
    developerTools: ['AWS', 'Docker', 'Figma', 'GitHub', 'GitHub Actions', 'Jupyter', 'LaTeX', 'PostgreSQL', 'Postman', 'Prisma', 'Supabase', 'Swagger', 'Terraform', 'Vercel', 'ViteJS', 'VS Code'],
    collabTools: ['Confluence', 'Jira', 'Loom', 'Microsoft Suite', 'Slack'],
    librariesAndFrameworks: ['Matplotlib', 'Next.js', 'NumPy', 'OpenCV', 'Pandas', 'React', 'Scikit-learn', 'Tailwind CSS', 'TensorFlow'],
  };

  // Get the full tech objects with icons and colors
  const languages = getTechs(techStacks.languages);
  const developerTools = getTechs(techStacks.developerTools);
  const collabTools = getTechs(techStacks.collabTools);
  const librariesAndFrameworks = getTechs(techStacks.librariesAndFrameworks);

  return (
    <section id='tech'>
      <div className='w-full bg-[#efefef] rounded-2xl p-24 text-[1.25rem]'>
        <h2 className='text-[4rem] text-blue-700'>Technologies</h2>
        
        <div className='flex flex-col gap-8'>
          {/* Languages */}
          <div className='flex flex-col gap-4'>
            <h3 className='text-[2rem]'>Languages</h3>
            <div className='w-full flex flex-wrap items-center gap-4'>
              {languages.map((tech) => (
                <TechCard key={tech.name} {...tech} />
              ))}
            </div>
          </div>

          {/* Developer Tools */}
          <div className='flex flex-col gap-4'>
            <h3 className='text-[2rem]'>Developer Tools</h3>
            <div className='w-full flex flex-wrap items-center gap-4'>
              {developerTools.map((tech) => (
                <TechCard key={tech.name} {...tech} />
              ))}
            </div>
          </div>

          {/* Collaboration Tools */}
          <div className='flex flex-col gap-4'>
            <h3 className='text-[2rem]'>Collaboration Tools</h3>
            <div className='w-full flex flex-wrap items-center gap-4'>
              {collabTools.map((tech) => (
                <TechCard key={tech.name} {...tech} />
              ))}
            </div>
          </div>

          {/* Libraries and Frameworks */}
          <div className='flex flex-col gap-4'>
            <h3 className='text-[2rem]'>Libraries and Frameworks</h3>
            <div className='w-full flex flex-wrap items-center gap-4'>
              {librariesAndFrameworks.map((tech) => (
                <TechCard key={tech.name} {...tech} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}