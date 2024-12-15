import React from 'react';

function About() {
  return (
    <section className="w-full px-4 lg:px-0 py-24" id='About'>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center font-semibold mb-12">About</h2>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="flex-1 tracking-wide space-y-4 md:ml-20">
            <h3 className="text-center md:text-left text-xl font-bold">Hello! I'm Raman Pannu</h3>
            <p className="text-base text-center md:text-left text-gray-900 dark:text-gray-400 font-medium">
              I am an aspiring Web Developer with expertise in JavaScript, React, and front-end development. Currently pursuing a Diploma in Web Development at Humber College, I am passionate about creating user-friendly web applications and exploring UI/UX design. My experience includes working as a Full-Stack Developer, Frontend Developer, and UI/UX Designer, where I contributed to diverse projects ranging from responsive web applications to interactive prototypes.
            </p>
            <p className="text-base text-center md:text-left text-gray-900 dark:text-gray-400 font-medium">
              My professional journey includes roles at Tech Studios and Sai Technical Consultant, where I developed skills in React, Angular, .NET, and WordPress. As a freelancer, I have designed user-friendly interfaces and collaborated on Agile teams to deliver high-quality solutions. My goal is to continuously grow as a developer and contribute to impactful projects.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img src="./raman-profile.jpeg" alt="Profile" className="w-72 h-72 object-cover rounded-2xl shadow-lg hover:shadow-xl hover:rotate-6 transition duration-200" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;