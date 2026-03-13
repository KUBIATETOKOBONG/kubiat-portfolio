export default function Achievements() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">

      <h2 className="text-3xl font-bold mb-10">
        Key Achievements
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-2xl font-bold">10+</h3>
          <p className="text-gray-400 mt-2">
            Production web platforms built and deployed
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-2xl font-bold">100+</h3>
          <p className="text-gray-400 mt-2">
            Internal users supported by enterprise systems
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-2xl font-bold">30–40%</h3>
          <p className="text-gray-400 mt-2">
            Workflow improvement through automation
          </p>
        </div>

      </div>

    </section>
  )
}