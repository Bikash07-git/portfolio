type BadgeProps = {
  text: string;
};

export default function Badge({
  text,
}: BadgeProps) {
  return (
    <span
      className="
      rounded-full
      border
      border-slate-700
      px-4
      py-2
      text-sm
      text-slate-300
      "
    >
      {text}
    </span>
  );
}