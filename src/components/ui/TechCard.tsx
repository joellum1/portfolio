interface TechCardProps {
  name: string;
  icon: React.ReactNode;
  colour?: string;
}

export default function TechCard({ 
  name, 
  icon, 
  colour 
}: TechCardProps) {
  // Check if icon is a string (Devicon class) or React element
  const isDeviconClass = typeof icon === 'string';

  return (
    <div className='h-12 flex items-center gap-3 pl-3 pr-8 bg-[#fefefe] rounded-lg shadow-xs'>
      {icon && (
        <div className={`w-8 h-8 flex items-center justify-center rounded-lg ${colour} text-white`}>
          {isDeviconClass ? (
            <i className={`${icon} text-2xl`}></i>
          ) : (
            icon
          )}
        </div>
      )}
      <span className='text-[1rem] text-gray-900'>{name}</span>
    </div>
  )
}