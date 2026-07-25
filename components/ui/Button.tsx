import Link from "next/link";
import { FaArrowRight, FaDownload } from "react-icons/fa";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
};

export default function Button({
  children,
  variant = "primary",
  href = "#",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30",

    secondary:
      "border border-cyan-500/40 bg-slate-900/60 text-white hover:border-cyan-400 hover:bg-slate-800 hover:scale-105",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {variant === "primary" ? (
        <FaArrowRight size={14} />
      ) : (
        <FaDownload size={14} />
      )}

      {children}
    </Link>
  );
}