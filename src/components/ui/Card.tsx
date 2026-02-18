interface CardProps {
  children: React.ReactNode;
}

export default function Card({
  children
}: CardProps) {
  return (
    <div
      className='rounded-2xl shadow-md'
    >
      {children}
    </div>
  )
}