interface ProjectCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  techStack: string[];
  siteUrl?: string;   // link to portfolio project page
  liveUrl?: string;   // link to live/deployed project website
  githubUrl?: string; // link to GitHub repo
}

export default function ProjectCard({
  icon,
  title,
  description,
  // techStack,
  // siteUrl,
  // liveUrl,
  // githubUrl,
}: ProjectCardProps) {
  // Simple hash function to convert string to number
  const stringToNumber = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash);
  };

  // Color palette to choose from
  const colours = [
    'bg-blue-600',
    'bg-red-500',
    'bg-green-500',
    'bg-yellow-400',
    'bg-purple-500',
  ];

  // Pick color based on title
  const iconColour = colours[stringToNumber(title) % colours.length];

  return (
    <div className='w-full flex flex-col items-center rounded-2xl bg-[#fefefe] p-8 shadow-xs hover:shadow-xl transition-shadow duration-300 cursor-pointer'>
      <div className='w-full'>
        <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${iconColour}`}>
          {icon}
        </div>

        <div className='mt-6'>
          {/* Title */}
          <div className='mb-2'>
            <h3 className='text-xl font-bold text-gray-900 mb-1'>{title}</h3>
          </div>

          {/* Description */}
          <p className='text-gray-500 mb-4'>
            {description}
          </p>

          {/* Tech Stack */}
          {/* <div className='mb-4'>
            <div className='flex flex-wrap gap-2'>
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className='px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full'
                >
                  {tech}
                </span>
              ))}
            </div> */}
        </div>
      </div>
    </div>
  );
}