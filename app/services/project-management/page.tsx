'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ProjectManagement() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 text-white bg-navy">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Project Management</h1>
          <p className="max-w-2xl mx-auto text-xl">
            Expert guidance to plan, execute, and deliver projects on time, within budget, and to specification.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Driving Project Success</h2>
              <p className="mb-4 text-gray-600">
                In today's fast-paced business environment, effective project management is critical to achieving organizational goals and maintaining competitive advantage. At Elite Enterprise Transformation Consulting Group, we provide comprehensive project management services that ensure your initiatives are completed successfully, on time, and within budget.
              </p>
              <p className="mb-4 text-gray-600">
                Our certified project managers bring decades of combined experience across various industries, utilizing proven methodologies and best practices to guide your projects from initiation to successful completion.
              </p>
              <p className="text-gray-600">
                Whether you're launching a new product, implementing a system, or undergoing organizational change, our project management expertise will help you navigate challenges, mitigate risks, and achieve your desired outcomes.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="p-1 bg-white rounded-lg shadow-lg">
                <div className="w-full h-64 overflow-hidden bg-gray-200 rounded-lg">
                  {/* Placeholder for project management image */}
                  <div className="flex items-center justify-center w-full h-full bg-gray-200">
                    <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-light-gray">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Project Management Approach</h2>
            <p className="text-gray-600">
              We follow a structured yet flexible approach to project management, tailored to your specific needs and organizational context.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Initiation */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-navy">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Initiation</h3>
              <p className="text-gray-600">
                Define project scope, objectives, and stakeholders. Develop project charter and secure necessary approvals and resources.
              </p>
            </div>

            {/* Planning */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-navy">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Planning</h3>
              <p className="text-gray-600">
                Create detailed project plans including schedule, budget, resource allocation, risk management, and communication strategies.
              </p>
            </div>

            {/* Execution */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-navy">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Execution</h3>
              <p className="text-gray-600">
                Implement the project plan, coordinate resources, manage stakeholder expectations, and oversee deliverable development.
              </p>
            </div>

            {/* Monitoring & Closing */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-navy">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Monitoring & Closing</h3>
              <p className="text-gray-600">
                Track progress, manage changes, address issues, and ensure quality. Formalize completion, document lessons learned, and transition deliverables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">Project Management Services</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left Column */}
            <div>
              <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-bold">Project Assessment & Recovery</h3>
                <p className="text-gray-600">
                  Evaluate troubled projects and implement recovery strategies to get them back on track. We identify root causes of issues and develop actionable plans to address them.
                </p>
              </div>
              
              <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-bold">Project Planning & Execution</h3>
                <p className="text-gray-600">
                  Develop comprehensive project plans and lead execution activities. Our experts manage scope, schedule, budget, resources, and quality to ensure successful delivery.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-bold">Project Governance</h3>
                <p className="text-gray-600">
                  Establish effective governance frameworks to ensure proper oversight, decision-making, and accountability throughout the project lifecycle.
                </p>
              </div>
            </div>
            
            {/* Right Column */}
            <div>
              <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-bold">PMO Setup & Optimization</h3>
                <p className="text-gray-600">
                  Design, implement, or enhance Project Management Offices (PMOs) to improve project delivery capabilities and align with organizational objectives.
                </p>
              </div>
              
              <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-bold">Project Management Training</h3>
                <p className="text-gray-600">
                  Develop your team's project management capabilities through customized training programs, workshops, and coaching sessions.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-bold">Agile Transformation</h3>
                <p className="text-gray-600">
                  Guide organizations in adopting Agile methodologies, including Scrum, Kanban, and hybrid approaches to increase flexibility and responsiveness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-light-gray">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Benefits of Our Project Management Services</h2>
            <p className="text-gray-600">
              Partner with us to achieve exceptional project outcomes and drive business value.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 mr-2 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-lg font-bold">Improved Project Success Rates</h3>
              </div>
              <p className="text-gray-600">
                Increase the likelihood of project success through proven methodologies, expert guidance, and proactive risk management.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 mr-2 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-lg font-bold">Cost and Time Efficiency</h3>
              </div>
              <p className="text-gray-600">
                Optimize resource utilization, reduce waste, and deliver projects on time and within budget through effective planning and control.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 mr-2 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-lg font-bold">Enhanced Stakeholder Satisfaction</h3>
              </div>
              <p className="text-gray-600">
                Improve stakeholder engagement and satisfaction through clear communication, expectation management, and quality deliverables.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 mr-2 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-lg font-bold">Increased Organizational Capability</h3>
              </div>
              <p className="text-gray-600">
                Build internal project management capabilities through knowledge transfer, training, and establishment of sustainable practices.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 mr-2 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-lg font-bold">Strategic Alignment</h3>
              </div>
              <p className="text-gray-600">
                Ensure projects align with and contribute to your organization's strategic objectives and business goals.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 mr-2 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-lg font-bold">Risk Mitigation</h3>
              </div>
              <p className="text-gray-600">
                Identify, assess, and manage project risks proactively to minimize their impact on project outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white bg-navy">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Elevate Your Project Management?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Contact us today to discuss how our project management services can help you achieve your business objectives.
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
