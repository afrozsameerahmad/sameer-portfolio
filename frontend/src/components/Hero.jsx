export default function Hero() {
  return (
    <section className="text-center py-24 px-6">
      <h2 className="text-5xl font-bold mb-4">
        Hi, I'm Sameer Ahmad 👋
      </h2>

      <p className="text-xl text-slate-400 mb-6">
        Aspiring Data Scientist & AI Engineer
      </p>

      <p className="max-w-2xl mx-auto text-slate-300 mb-8">
        Building intelligent systems using data, machine learning,
        and modern technologies.
      </p>

      <div className="space-x-4">
        <a
          href="#projects"
          className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="border px-6 py-3 rounded hover:bg-white hover:text-black"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
