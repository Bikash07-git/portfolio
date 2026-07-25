type SectionHeadingProps = {
  subtitle: string;
  title: string;
};

export default function SectionHeading({
  subtitle,
  title,
}: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-medium">
        {subtitle}
      </p>

      <h2 className="mt-3 text-4xl md:text-5xl font-bold">
        {title}
      </h2>
    </div>
  );
}