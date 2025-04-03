// pages/about.js
import React from 'react'

const About = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">About Us</h1>
          <p className="text-lg sm:text-xl text-gray-600 mt-4">
            Learn more about our mission, values, and the team behind it all.
          </p>
        </header>

        {/* Section 1: Mission Statement */}
        <section className="bg-white py-12 px-6 shadow-lg rounded-lg mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700">
            At [Your Company Name], we are committed to providing the best services to our customers, focusing on quality, efficiency, and innovation. Our mission is to empower businesses to reach their full potential by offering scalable solutions and excellent customer service.
          </p>
        </section>

        {/* Section 2: Team */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 text-center">John Doe</h3>
            <p className="text-center text-gray-600">CEO & Founder</p>
            <p className="mt-4 text-gray-700">
              John is the visionary behind the company. With over 15 years of experience in the industry, John is passionate about leading the team and creating impactful solutions for our clients.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 text-center">Jane Smith</h3>
            <p className="text-center text-gray-600">Chief Marketing Officer</p>
            <p className="mt-4 text-gray-700">
              Jane is responsible for our marketing strategies and ensuring that our brand stays ahead of the competition. She is passionate about creating innovative marketing campaigns and building customer relationships.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 text-center">Mark Johnson</h3>
            <p className="text-center text-gray-600">Lead Developer</p>
            <p className="mt-4 text-gray-700">
              Mark is the technical brain behind our platform. With years of experience in software development, he ensures that our solutions are innovative, efficient, and scalable.
            </p>
          </div>
        </section>

        {/* Section 3: Values */}
        <section className="bg-white py-12 px-6 shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Values</h2>
          <ul className="space-y-4">
            <li className="flex items-center text-lg text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-4.418 0-8 1.792-8 4v2c0 2.208 3.582 4 8 4s8-1.792 8-4v-2c0-2.208-3.582-4-8-4z" />
              </svg>
              Innovation - We constantly innovate to meet the needs of our customers and stay ahead of the curve.
            </li>
            <li className="flex items-center text-lg text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-4.418 0-8 1.792-8 4v2c0 2.208 3.582 4 8 4s8-1.792 8-4v-2c0-2.208-3.582-4-8-4z" />
              </svg>
              Customer Focus - Our customers are at the heart of everything we do.
            </li>
            <li className="flex items-center text-lg text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-4.418 0-8 1.792-8 4v2c0 2.208 3.582 4 8 4s8-1.792 8-4v-2c0-2.208-3.582-4-8-4z" />
              </svg>
              Integrity - We uphold the highest standards of honesty and integrity in all our dealings.
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default About
