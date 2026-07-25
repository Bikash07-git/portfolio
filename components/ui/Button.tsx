import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30",

    secondary:
      "border border-slate-700 text-white hover:border-cyan-500",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}