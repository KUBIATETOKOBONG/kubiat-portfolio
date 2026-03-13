
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto py-24 px-6 flex flex-col md:flex-row gap-10 items-center"
    >
      <motion.img
        src="/kubiat-profile.png" 
        alt="Kubiatabasi Etokobong"
        className="w-64 h-64 rounded-2xl object-cover shadow-lg"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      />

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-400 mb-4">
          I am <strong>Kubiatabasi Etokobong</strong>, a Full-Stack Software Engineer
          with 8+ years experience building scalable web platforms, enterprise
          systems, and production applications across banking, healthcare, energy,
          and nonprofit sectors. I specialize in React, Node.js, Python, and cloud
          deployments.
        </p>
        <p className="text-gray-400">
          My goal is to deliver high-quality software that improves workflows and
          creates real impact. I enjoy designing modern user interfaces, building
          backend APIs, and deploying production-ready applications.
       
        </p>
     <p className="text-gray-400 mb-4">
        I don’t just write code — I create software that improves workflows, delivers real impact, and scales
        across teams. My projects are production-ready, user-focused, and maintainable.
      
       </p>
      <p className="text-gray-400">
        Whether it’s designing modern user interfaces, building backend APIs, or deploying to the cloud,
        I bring reliability, speed, and a collaborative mindset to every project. Let’s build something
        meaningful together.
      </p>

      </motion.div>
    </section>
  );
}
