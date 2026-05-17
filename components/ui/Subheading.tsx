interface SubheadingProps {
  title: string;
}

export default function Subheading({ title }: SubheadingProps) {
  return (
    <div className="relative flex items-center mb-12 -ml-6">
      <h2 className="bg-primary-container text-white font-display font-extrabold text-3xl py-3 pl-6 pr-12 relative inline-flex items-center shadow-lg">
        {title}
        {/* The angled geometric cut-out */}
        <div 
          className="absolute top-0 right-0 h-full w-8 bg-primary-container" 
          style={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 50%, 100% 100%, 0% 100%)', transform: 'translateX(99%)' }} 
        />
      </h2>
    </div>
  );
}