type CardProps = {
  children: React.ReactNode;
};

export default function Card({
  children,
}: CardProps) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-slate-800
      bg-slate-900/60
      backdrop-blur-lg
      p-8
      transition
      duration-300
      hover:border-cyan-500
      hover:-translate-y-2
      "
    >
      {children}
    </div>
  );
}