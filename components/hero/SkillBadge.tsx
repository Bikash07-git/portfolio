type SkillBadgeProps = {
  label: string;
  className: string;
};

export default function SkillBadge({
  label,
  className,
}: SkillBadgeProps) {
  return (
    <div
      className={`absolute rounded-full border border-cyan-500/30 bg-slate-900/80 px-4 py-2 text-sm font-medium text-cyan-300 shadow-lg backdrop-blur-md ${className}`}
    >
      {label}
    </div>
  );
}