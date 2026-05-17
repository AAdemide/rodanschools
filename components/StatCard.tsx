interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="py-10 lg:py-16 px-6 flex flex-col items-center lg:items-start">
      <h3 className="font-display font-extrabold text-5xl lg:text-6xl mb-3 tracking-tighter text-black">
        {value}
      </h3>
      <p className="font-body font-semibold uppercase tracking-widest text-xs lg:text-sm leading-relaxed max-w-[200px] text-primary-container text-center lg:text-left">
        {label}
      </p>
    </div>
  );
}