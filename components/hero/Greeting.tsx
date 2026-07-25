import { portfolio } from "@/data/portfolio";

export default function Greeting() {
  return (
    <>
      <p className="uppercase tracking-[0.35em] text-cyan-400">
        Hello, I'm
      </p>

      <h1 className="mt-4 text-5xl font-extrabold leading-tight text-white md:text-7xl">
        {portfolio.firstName}
        <br />
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
          {portfolio.lastName}
        </span>
      </h1>
    </>
  );
}