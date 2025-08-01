'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function StrategicPlanning() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 text-white bg-navy">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Strategic Planning</h1>
          <p className="max-w-2xl mx-auto text-xl">
            Develop clear, actionable strategies that align with your vision and drive sustainable growth.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Chart Your Path to Success</h2>
              <p className="mb-4 text-gray-600">
                In today's rapidly changing business landscape, a well-defined strategy is essential for organizational success. At Elite Enterprise Transformation Consulting Group, we provide comprehensive strategic planning services that help you clarify your vision, set meaningful goals, and develop actionable plans to achieve them.
              </p>
              <p className="mb-4 text-gray-600">
                Our strategic planning experts bring deep industry knowledge and proven methodologies to guide your organization through the process of defining where you want to go and how you'll get there.
              </p>
              <p className="text-gray-600">
                Whether you're launching a new business, entering new markets, or transforming your existing operations, our strategic planning services will help you make informed decisions, allocate resources effectively, and create a roadmap for sustainable growth.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="p-1 bg-white rounded-lg shadow-lg">
                <div className="w-full h-64 overflow-hidden bg-gray-200 rounded-lg">
                  {/* Placeholder for strategic planning image */}
                  <div className="flex items-center justify-center w-full h-full bg-gray-200">
                    <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Strategic Planning */}
      <section className="py-16 bg-light-gray">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Why Strategic Planning Matters</h2>
            <p className="text-gray-600">
              Strategic planning is the foundation for organizational success, providing clarity, direction, and focus.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-navy">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold">Clear Direction</h3>
              <p className="text-gray-600">
                Define your organization's purpose, vision, and long-term objectives to provide a clear sense of direction for all stakeholders.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-navy">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold">Informed Decision Making</h3>
              <p className="text-gray-600">
                Make better decisions based on data, market insights, and a thorough understanding of your competitive landscape.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-navy">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold">Alignment & Focus</h3>
              <p className="text-gray-600">
                Align your team around common goals and priorities, ensuring everyone is working toward the same objectives.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-navy">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold">Proactive Approach</h3>
              <p className="text-gray-600">
                Anticipate changes in your business environment and prepare for future challenges and opportunities rather than simply reacting to them.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-navy">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold">Risk Management</h3>
              <p className="text-gray-600">
                Identify potential risks and develop mitigation strategies to protect your organization from threats and vulnerabilities.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-navy">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold">Resource Optimization</h3>
              <p className="text-gray-600">
                Allocate your resources effectively to maximize return on investment and achieve your strategic objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Strategic Planning Approach</h2>
            <p className="text-gray-600">
              We follow a comprehensive, collaborative approach to strategic planning that ensures your strategy is both visionary and actionable.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Assessment */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-navy">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Assessment</h3>
              <p className="text-gray-600">
                Analyze your current state, including strengths, weaknesses, opportunities, and threats. Review your mission, vision, and values.
              </p>
            </div>

            {/* Strategy Development */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-navy">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Strategy Development</h3>
              <p className="text-gray-600">
                Define strategic objectives, identify strategic options, and develop a clear roadmap with specific goals and initiatives.
              </p>
            </div>

            {/* Implementation Planning */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-navy">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Implementation Planning</h3>
              <p className="text-gray-600">
                Create detailed action plans, assign responsibilities, allocate resources, and establish timelines and milestones.
              </p>
            </div>

            {/* Monitoring & Adaptation */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-navy">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Monitoring & Adaptation</h3>
              <p className="text-gray-600">
                Establish metrics and KPIs, regularly review progress, and adapt your strategy as needed based on results and changing conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-light-gray">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">Strategic Planning Services</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left Column */}
            <div>
              <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-bold">Vision & Mission Development</h3>
                <p className="text-gray-600">
                  Clarify your organization's purpose, aspirations, and core values to provide a foundation for your strategic planning efforts.
                </p>
              </div>
              
              <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-bold">Market & Competitive Analysis</h3>
                <p className="text-gray-600">
                  Analyze market trends, customer needs, and competitive landscape to identify opportunities and threats in your business environment.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-bold">Business Model Innovation</h3>
                <p className="text-gray-600">
                  Evaluate and refine your business model to create sustainable competitive advantage and drive profitable growth.
                </p>
              </div>
            </div>
            
            {/* Right Column */}
            <div>
              <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-bold">Strategic Goal Setting</h3>
                <p className="text-gray-600">
                  Define clear, measurable strategic objectives and key results (OKRs) that align with your vision and drive organizational performance.
                </p>
              </div>
              
              <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-bold">Implementation Roadmapping</h3>
                <p className="text-gray-600">
                  Develop detailed implementation plans with specific initiatives, timelines, resource requirements, and accountability measures.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-bold">Strategy Review & Adaptation</h3>
                <p className="text-gray-600">
                  Establish processes for regular strategy reviews and adjustments to ensure your strategy remains relevant in a changing environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Benefits of Our Strategic Planning Services</h2>
            <p className="text-gray-600">
              Partner with us to develop and implement strategies that drive sustainable growth and competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 mr-2 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-lg font-bold">Clarity & Focus</h3>
              </div>
              <p className="text-gray-600">
                Gain clarity on your organization's direction and focus your resources on the initiatives that will drive the greatest impact.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 mr-2 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-lg font-bold">Competitive Advantage</h3>
              </div>
              <p className="text-gray-600">
                Identify and leverage your unique strengths and capabilities to differentiate your organization in the marketplace.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 mr-2 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-lg font-bold">Aligned Leadership</h3>
              </div>
              <p className="text-gray-600">
                Build consensus among your leadership team around strategic priorities and create a shared vision for the future.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 mr-2 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-lg font-bold">Improved Decision Making</h3>
              </div>
              <p className="text-gray-600">
                Make more informed decisions based on a clear understanding of your strategic objectives and market dynamics.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 mr-2 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-lg font-bold">Sustainable Growth</h3>
              </div>
              <p className="text-gray-600">
                Develop strategies that drive long-term, sustainable growth rather than short-term gains at the expense of future success.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 mr-2 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-lg font-bold">Adaptability</h3>
              </div>
              <p className="text-gray-600">
                Build a strategy that is both robust and flexible, allowing you to adapt to changing market conditions and emerging opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white bg-navy">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Define Your Strategic Direction?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Contact us today to discuss how our strategic planning services can help you chart a path to sustainable success.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <Link href="/contact" className="btn bg-gold text-navy hover:bg-opacity-90">
              Schedule a Consultation
            </Link>
            <Link href="/services" className="btn bg-transparent border-2 border-white hover:bg-white hover:text-navy">
              Explore Other Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
