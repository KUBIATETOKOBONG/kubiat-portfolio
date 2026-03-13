export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      <h1 className="text-6xl font-bold">
        Kubiatabasi Etokobong
      </h1>

      <p className="text-xl text-gray-400 mt-4">
        Full-Stack Software Engineer
      </p>

      <p className="max-w-xl mt-6 text-gray-500">
        Full-stack engineer with 8+ years of experience building scalable
        applications across banking, healthcare, energy and nonprofit sectors.
        Specialized in React, Node.js, Python and modern cloud deployments.
      </p>

      <div className="flex gap-4 mt-8">

        <a
          href="https://github.com/KUBIATETOKOBONG"
          className="bg-gray-900 px-5 py-2 rounded-lg hover:bg-gray-800"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/kubiat-etokobong-7979b135b"
          className="bg-gray-900 px-5 py-2 rounded-lg hover:bg-gray-800"
        >
          LinkedIn
        </a>

        <a
          href="/Kubiat_Etokobong_CV.pdf"
          className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-500"
        >
          Download CV
        </a>

      </div>

    </section>
  )
}