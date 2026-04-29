
import Container from "../../components/layout/Container";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="absolute w-96 h-96 bg-purple-600 opacity-30 blur-3xl rounded-full" />

      <Container>
        <div className="text-center space-y-6">
          <p className="text-muted">Hello, I am Your Name</p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            I’m a Software Engineer.
          </h1>

          <p className="text-muted max-w-xl mx-auto">
            Building meaningful digital products with clean architecture.
          </p>
        </div>
      </Container>
    </section>
  );
}