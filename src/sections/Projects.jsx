import { motion } from "framer-motion"

const projects = [
  {
    name: "Kigami Projects Web",
    description: "Community platform with responsive design and structured UI layout.",
    stack: "HTML • CSS • JavaScript",
    live: "https://kigamiprojectsweb.vercel.app",
    github: "https://github.com/KUBIATETOKOBONG/kigamiprojectsweb",
    image: "/Projects/kigami.png"
  },
  {
    name: "Vue Blog Platform",
    description: "Blog platform built with Vue using component architecture.",
    stack: "Vue • JavaScript",
    live: "https://vue-blog-app-mauve.vercel.app/",
    github: "https://github.com/KUBIATETOKOBONG/vue-blog-app",
    image: "/Projects/vue-blog.png"
  },
  {
    name: "Markdown Preview App",
    description: "Live markdown editor and preview application.",
    stack: "JavaScript • Markdown",
    live: "https://markdown-vue-zeta.vercel.app/",
    github: "https://github.com/KUBIATETOKOBONG/markdown-vue",
    image: "/Projects/markdown-preview.png"
  },
  {
    name: "E-Commerce Platform",
    description: "Online product catalogue with cart functionality.",
    stack: "React • API Integration",
    live: "https://e-commerce-kubiat.vercel.app/",
    github: "https://github.com/KUBIATETOKOBONG/E-commerce",
    image: "/Projects/ecommerce.png"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-24 px-6">

      <h2 className="text-3xl font-bold mb-12 text-center">
        Selected Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, i) => (

          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
          >

            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">

              <h3 className="text-xl font-semibold">
                {project.name}
              </h3>

              <p className="text-gray-400 mt-2">
                {project.description}
              </p>

              <p className="text-gray-500 text-sm mt-2">
                {project.stack}
              </p>

              <div className="flex gap-4 mt-4">

                <a
                  href={project.live}
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  Code
                </a>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  )
}