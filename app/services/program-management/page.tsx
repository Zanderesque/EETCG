'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ProgramManagement() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 text-white bg-navy">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Program Management</h1>
          <p className="max-w-2xl mx-auto text-xl">
            Coordinate multiple related projects to achieve strategic business objectives and maximize value.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Strategic Program Management</h2>
              <p className="mb-4 text-gray-600">
                Program management goes beyond individual project management to coordinate multiple related projects that collectively achieve strategic business objectives. At Elite Enterprise Transformation Consulting Group, we provide comprehensive program management services that align your initiatives with organizational goals and drive transformative outcomes.
              </p>
              <p className="mb-4 text-gray-600">
                Our experienced program managers excel at orchestrating complex, interdependent projects, managing shared resources, and ensuring that the collective benefits of your program exceed the sum of its individual parts.
              </p>
              <p className="text-gray-600">
                Whether you're implementing enterprise-wide technology solutions, undergoing organizational transformation, or launching strategic initiatives, our program management expertise will help you navigate complexity, optimize resources, and deliver sustainable business value.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="p-1 bg-white rounded-lg shadow-lg">
                <div className="w-full h-64 overflow-hidden bg-gray-200 rounded-lg">
                  {/* Placeholder for program management image */}
                  <div className="flex items-center justify-center w-full h-full bg-gray-200">
                    <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differences */}
      <section className="py-16 bg-light-gray">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Program vs. Project Management</h2>
            <p className="text-gray-600">
              Understanding the distinction between program and project management is crucial for effective organizational execution.
            </p>
          </div>

          <div className="overflow-hidden bg-white rounded-lg shadow-md">
            <div className="px-6 py-4 text-white bg-navy">
              <h3 className="text-xl font-bold">Key Differences</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 text-lg font-bold">Project Management</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mt-0.5 mr-2 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>Focuses on delivering specific outputs</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mt-0.5 mr-2 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>Typically has a defined start and end date</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mt-0.5 mr-2 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>Manages resources within a single project</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mt-0.5 mr-2 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>Success measured by delivering on time, within budget, and to specification</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 text-lg font-bold">Program Management</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mt-0.5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>Focuses on delivering strategic business outcomes</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mt-0.5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>Often ongoing or evolving with multiple phases</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mt-0.5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>Coordinates resources across multiple projects</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mt-0.5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>Success measured by achieving strategic objectives and business benefits</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Program Management Approach</h2>
            <p className="text-gray-600">
              We follow a comprehensive approach to program management that ensures alignment with strategic objectives and delivers sustainable business value.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Strategic Alignment */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-navy">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Strategic Alignment</h3>
              <p className="text-gray-600">
                We ensure that program objectives align with your organization's strategic goals and deliver measurable business value.
              </p>
            </div>

            {/* Governance Framework */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-navy">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Governance Framework</h3>
              <p className="text-gray-600">
                We establish robust governance structures to provide oversight, decision-making, and accountability throughout the program lifecycle.
              </p>
            </div>

            {/* Benefits Management */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-navy">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Benefits Management</h3>
              <p className="text-gray-600">
                We identify, track, and realize the benefits of your program, ensuring that investments deliver tangible returns.
              </p>
            </div>

            {/* Stakeholder Engagement */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-navy">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Stakeholder Engagement</h3>
              <p className="text-gray-600">
                We develop and implement strategies to engage stakeholders effectively, manage expectations, and drive program adoption.
              </p>
            </div>

            {/* Resource Optimization */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-navy">
                <span className="text-xl font-bold">5</span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Resource Optimization</h3>
              <p className="text-gray-600">
                We optimize resource allocation across projects, minimize conflicts, and ensure efficient utilization of people, time, and budget.
              </p>
            </div>

            {/* Risk Management */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-navy">
                <span className="text-xl font-bold">6</span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Risk Management</h3>
              <p className="text-gray-600">
                We identify, assess, and mitigate risks at both the program and project levels to protect program outcomes and business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-light-gray">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">Program Management Services</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left Column */}
            <div>
              <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-bold">Program Strategy & Setup</h3>
                <p className="text-gray-600">
                  Define program vision, objectives, and success criteria. Establish governance structures, roles, and responsibilities to ensure effective program execution.
                </p>
              </div>
              
              <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-bold">Program Planning & Coordination</h3>
                <p className="text-gray-600">
                  Develop integrated program plans, coordinate interdependencies between projects, and optimize resource allocation across the program.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-bold">Benefits Realization</h3>
                <p className="text-gray-600">
                  Identify, track, and measure program benefits to ensure that investments deliver expected returns and contribute to strategic objectives.
                </p>
              </div>
            </div>
            
            {/* Right Column */}
            <div>
              <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-bold">Program Governance</h3>
                <p className="text-gray-600">
                  Implement effective decision-making frameworks, reporting mechanisms, and escalation procedures to ensure program oversight and accountability.
                </p>
              </div>
              
              <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-bold">Stakeholder Management</h3>
                <p className="text-gray-600">
                  Develop and implement strategies to engage stakeholders, manage expectations, and drive program adoption across the organization.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-bold">Program Recovery</h3>
                <p className="text-gray-600">
                  Assess troubled programs, identify root causes of issues, and implement recovery strategies to get them back on track and delivering value.
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
            <h2 className="mb-4 text-3xl font-bold">Benefits of Our Program Management Services</h2>
            <p className="text-gray-600">
              Partner with us to transform your strategic initiatives into tangible business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 mr-2 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-lg font-bold">Strategic Alignment</h3>
              </div>
              <p className="text-gray-600">
                Ensure that all projects and initiatives align with and contribute to your organization's strategic objectives.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 mr-2 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-lg font-bold">Enhanced Coordination</h3>
              </div>
              <p className="text-gray-600">
                Improve coordination between related projects, reducing conflicts and optimizing resource utilization.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 mr-2 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-lg font-bold">Maximized Business Value</h3>
              </div>
              <p className="text-gray-600">
                Focus on delivering business benefits and outcomes rather than just project outputs, ensuring return on investment.
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
                Establish clear governance structures and decision-making processes to ensure effective program oversight.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 mr-2 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-lg font-bold">Effective Change Management</h3>
              </div>
              <p className="text-gray-600">
                Manage organizational change effectively to ensure successful adoption and realization of program benefits.
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
                Identify and manage risks at the program level, addressing interdependencies and systemic issues that may impact multiple projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white bg-navy">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Transform Your Strategic Initiatives?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Contact us today to discuss how our program management services can help you achieve your strategic objectives.
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
