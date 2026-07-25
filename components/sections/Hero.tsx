import Container from "../ui/container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section id="home" className="pt-24">
      <Container>
        <div className="grid min-h-[calc(100vh-6rem)] items-center gap-12 lg:grid-cols-2">

          {/* Left Side */}
          <div>
            <p className="uppercase tracking-[0.3em] text-cyan-400">
              Hello, I'm
            </p>

            <h1 className="mt-4 text-5xl font-bold text-white md:text-7xl">
              Bikash
              <br />
              Sagar Koiri
            </h1>

            <p className="mt-6 text-xl text-slate-400">
              Data Analyst • Machine Learning • Business Intelligence
            </p>

            <p className="mt-6 max-w-xl text-slate-400">
              Transforming complex data into actionable business insights
              through analytics, machine learning, and visualization.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="primary">
                View Projects
              </Button>

              <Button variant="secondary">
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="flex h-80 w-80 items-center justify-center rounded-full border border-cyan-500/40 bg-slate-900 text-slate-500">
              Your Photo
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}