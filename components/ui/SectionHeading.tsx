type Props = {
  badge: string;
  title: string;
  subtitle: string;
};

export default function SectionHeading({
  badge,
  title,
  subtitle,
}: Props) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-20">
      <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-400">
        {badge}
      </span>

      <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-slate-400 text-lg">
        {subtitle}
      </p>
    </div>
  );
}