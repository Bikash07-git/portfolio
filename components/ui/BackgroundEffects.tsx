export default function BackgroundEffects() {
  return (
    <>
      <div className="fixed inset-0 -z-50 overflow-hidden">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute right-0 top-40 h-[450px] w-[450px] rounded-full bg-indigo-600/10 blur-[140px]" />

        <div className="absolute bottom-0 left-1/3 h-[450px] w-[450px] rounded-full bg-sky-500/10 blur-[140px]" />
      </div>
    </>
  );
}