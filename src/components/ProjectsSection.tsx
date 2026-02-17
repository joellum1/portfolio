import ProjectCard from '@/components/ui/ProjectCard';

import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';

export default function ProjectsSection() {
  const projects = [
    {
      icon: <CottageOutlinedIcon className='text-[#fefefe]'/>,
      title: 'Real Estate Analytics Microservice',
      description: 'Data pipeline ingesting, cleaning and transforming real estate data into actionable insights',
      techStack: ['AWS', 'Docker', 'Python', 'Terraform']
    },
    {
      icon: <SmartToyOutlinedIcon className='text-[#fefefe]'/>,
      title: 'Autonomous Path-finding Agent',
      description: 'Reinforcement learning agent navigating dynamic virtual worlds',
      techStack: ['Python']
    },
    {
      icon: <WaterDropOutlinedIcon className='text-[#fefefe]'/>,
      title: 'Drought Predictor',
      description: 'Predicting presence of drought in Murray-Darling Basin',
      techStack: ['Python', 'TensorFlow']
    },
  ];

  return (
    <section 
      id='projects'
      className='flex flex-col items-center gap-32 bg-[#efefef] rounded-2xl pt-32 pb-32 pl-16 pr-16'
    >
      <h2 className='text-[4rem]'>Projects</h2>

      {/* Projects Grid */}
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}