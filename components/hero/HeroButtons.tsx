import Button from "../ui/Button";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Button variant="primary">
        View Projects
      </Button>

      <Button variant="secondary">
        Download Resume
      </Button>
    </div>
  );
}