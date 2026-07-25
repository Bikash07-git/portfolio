import Container from "../ui/container";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="py-32"
    >
      <Container>

        <SectionHeading
          badge="ABOUT ME"
          title="Passionate About Data & AI"
          subtitle="I enjoy solving real-world business problems using analytics, machine learning, SQL and interactive dashboards."
        />

      </Container>
    </section>
  );
}