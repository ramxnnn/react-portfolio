import React from 'react'

function Services() {
  return (
    <section className="w-fill px-4 lg:px-0 py-24" id='Services'>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center font-semibold mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="py-4 px-4 space-y-4 hover:scale-105 hover:shadow-xl rounded-lg border border-gray-100 dark:border-gray-900 transition duration-200">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-medium">🔍 UX Research</span>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold">User Insights</h2>
              <p className="text-base text-gray-900 dark:text-gray-400 font-medium">
                I conduct comprehensive user research through interviews, surveys, and usability testing to uncover pain points and behaviors. My research informs design decisions that truly resonate with your target audience.
              </p>
            </div>
          </div>
          <div className="py-4 px-4 space-y-4 hover:scale-105 hover:shadow-xl rounded-lg border border-gray-100 dark:border-gray-900 transition duration-200">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-medium">✏️ Interface Design</span>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold">Wireframing & Prototyping</h2>
              <p className="text-base text-gray-900 dark:text-gray-400 font-medium">
                From low-fidelity wireframes to high-fidelity interactive prototypes, I create designs that balance aesthetics with functionality using Figma and Adobe XD.
              </p>
            </div>
          </div>
          <div className="py-4 px-4 space-y-4 hover:scale-105 hover:shadow-xl rounded-lg border border-gray-100 dark:border-gray-900 transition duration-200">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-medium">🧠 UX Strategy</span>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold">Experience Mapping</h2>
              <p className="text-base text-gray-900 dark:text-gray-400 font-medium">
                I develop comprehensive UX strategies including user flows, journey maps, and information architecture to ensure cohesive, intuitive product experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services