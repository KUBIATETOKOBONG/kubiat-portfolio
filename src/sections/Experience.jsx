export default function Experience() {

  const jobs = [

    {
      role: "Software Engineer",
      company: "Restoration Royal Mega Church",
      period: "2023 – Present",
      points: [
        "Built internal web systems for administration and operations",
        "Applications used by 50+ staff members",
        "Reduced manual reporting tasks by 30%"
      ]
    },

    {
      role: "Software Engineer",
      company: "Amdari",
      period: "2023 – 2026",
      points: [
        "Built full-stack applications in distributed teams",
        "Created reusable React components",
        "Improved UI performance by 35%"
      ]
    },

    {
      role: "Software Engineer",
      company: "Seplat Energy",
      period: "2020 – 2022",
      points: [
        "Built automation tools for engineering workflows",
        "Developed backend services using Python and Flask"
      ]
    }

  ]

  return (
    <section className="max-w-5xl mx-auto py-20 px-6">

      <h2 className="text-3xl font-bold mb-10">
        Experience
      </h2>

      {jobs.map((job, index) => (

        <div key={index} className="mb-8">

          <h3 className="text-xl font-semibold">
            {job.role} — {job.company}
          </h3>

          <p className="text-gray-500">{job.period}</p>

          <ul className="mt-3 text-gray-400 list-disc ml-5">

            {job.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}

          </ul>

        </div>

      ))}

    </section>
  )
}