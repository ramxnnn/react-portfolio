import React from 'react';

function About() {
  return (
    <section className="w-full px-4 lg:px-0 py-24" id='About'>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center font-semibold mb-12">About</h2>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="flex-1 tracking-wide space-y-4 md:ml-20">
            <h3 className="text-center md:text-left text-xl font-bold">Hello! I'm Muskaan</h3>
            <p className="text-base text-center md:text-left text-gray-900 dark:text-gray-400 font-medium">
              I am a passionate UX Designer with expertise in user research, wireframing, and prototyping. Currently advancing my skills in Human-Computer Interaction, I focus on creating intuitive digital experiences that bridge user needs with business goals. My experience includes working as a UX Researcher and Interaction Designer, where I've contributed to projects ranging from mobile apps to enterprise software.
            </p>
            <p className="text-base text-center md:text-left text-gray-900 dark:text-gray-400 font-medium">
              My professional journey includes roles at Design Studios and as a UX Consultant, where I developed skills in Figma, user testing, and information architecture. As a freelancer, I've created user-centered designs and collaborated with cross-functional teams to deliver accessible solutions. My goal is to create designs that are not just beautiful but truly functional and inclusive.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img src="./muskaan-profile.jpg" className="w-72 h-72 object-cover rounded-2xl shadow-lg hover:shadow-xl hover:rotate-6 transition duration-200" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

