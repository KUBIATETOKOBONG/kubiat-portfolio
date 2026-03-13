export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">

      <h2 className="text-3xl font-bold mb-10">
        Tech Stack
      </h2>

      <div className="grid md:grid-cols-4 gap-6 text-gray-400">

        <div>
          <h3 className="text-white font-semibold">Frontend</h3>
          <p>React</p>
          <p>Vue</p>
          <p>Next.js</p>
          <p>Tailwind</p>
        </div>

        <div>
          <h3 className="text-white font-semibold">Backend</h3>
          <p>Node.js</p>
          <p>Express</p>
          <p>Flask</p>
        </div>

        <div>
          <h3 className="text-white font-semibold">Databases</h3>
          <p>PostgreSQL</p>
          <p>MongoDB</p>
        </div>

        <div>
          <h3 className="text-white font-semibold">Tools</h3>
          <p>Docker</p>
          <p>Git</p>
          <p>CI/CD</p>
        </div>

      </div>

    </section>
  )
}