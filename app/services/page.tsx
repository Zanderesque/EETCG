'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 text-white bg-navy">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Services</h1>
          <p className="max-w-2xl mx-auto text-xl">
            Comprehensive consulting solutions to transform your business and drive sustainable growth.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">How We Help You Succeed</h2>
            <p className="text-gray-600">
              At Elite Enterprise Transformation Consulting Group, we offer a range of specialized services 
              designed to address your most complex business challenges and unlock new opportunities for growth.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Project Management */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-navy">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold">Project Management</h3>
              <p className="mb-6 text-gray-600">
                Expert guidance to plan, execute, and deliver projects on time, within budget, and to specification.
                Our certified project managers ensure your initiatives achieve their objectives efficiently.
              </p>
              <Link href="/services/project-management" className="inline-block px-6 py-3 font-semibold text-white transition-colors rounded-md bg-navy hover:bg-opacity-90">
                Learn More
              </Link>
            </div>

            {/* Program Management */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-navy">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold">Program Management</h3>
              <p className="mb-6 text-gray-600">
                Coordinate multiple related projects to achieve strategic business objectives and maximize value.
                We align program outcomes with your organizational goals for transformative results.
              </p>
              <Link href="/services/program-management" className="inline-block px-6 py-3 font-semibold text-white transition-colors rounded-md bg-navy hover:bg-opacity-90">
                Learn More
              </Link>
            </div>

            {/* Strategic Planning */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-navy">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold">Strategic Planning</h3>
              <p className="mb-6 text-gray-600">
                Develop clear, actionable strategies that align with your vision and drive sustainable growth.
                Our strategic planning process helps you navigate complexity and seize opportunities.
              </p>
              <Link href="/services/strategic-planning" className="inline-block px-6 py-3 font-semibold text-white transition-colors rounded-md bg-navy hover:bg-opacity-90">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-light-gray">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Consulting Approach</h2>
            <p className="text-gray-600">
              We follow a proven methodology that ensures we deliver tailored solutions that address your unique challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Discover */}
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-navy">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Discover</h3>
              <p className="text-gray-600">
                We begin by understanding your business, challenges, goals, and vision through in-depth consultations.
              </p>
            </div>

            {/* Analyze */}
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-navy">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Analyze</h3>
              <p className="text-gray-600">
                Our experts analyze your current state, identify gaps, and determine the best path forward.
              </p>
            </div>

            {/* Strategize */}
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-navy">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Strategize</h3>
              <p className="text-gray-600">
                We develop a customized strategy and implementation plan tailored to your specific needs.
              </p>
            </div>

            {/* Implement & Optimize */}
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-navy">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Implement & Optimize</h3>
              <p className="text-gray-600">
                We execute the plan, monitor progress, and continuously refine our approach to ensure optimal results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Industries We Serve</h2>
            <p className="text-gray-600">
              Our consulting expertise spans across multiple industries, allowing us to bring diverse perspectives and best practices to your business.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <h3 className="mb-2 text-xl font-bold">Healthcare</h3>
            </div>
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <h3 className="mb-2 text-xl font-bold">Financial Services</h3>
            </div>
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <h3 className="mb-2 text-xl font-bold">Technology</h3>
            </div>
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <h3 className="mb-2 text-xl font-bold">Manufacturing</h3>
            </div>
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <h3 className="mb-2 text-xl font-bold">Retail</h3>
            </div>
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <h3 className="mb-2 text-xl font-bold">Government</h3>
            </div>
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <h3 className="mb-2 text-xl font-bold">Education</h3>
            </div>
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <h3 className="mb-2 text-xl font-bold">Non-Profit</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white bg-navy">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Transform Your Business?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Schedule a consultation with our experts to discuss how our services can help you achieve your business goals.
          </p>
          <Link href="/contact" className="btn bg-gold text-navy hover:bg-opacity-90">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
