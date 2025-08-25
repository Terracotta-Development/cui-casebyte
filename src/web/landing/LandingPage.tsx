import React from 'react';
import { Button } from '../chat/components/ui/button';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)] border-b border-[var(--border)] backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div>
              <h1 className="text-2xl font-bold text-[var(--foreground)] m-0">Casebyte</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] font-medium px-4 py-2 rounded-[var(--radius)] border-none bg-transparent cursor-pointer transition-colors duration-150">
                Log In
              </button>
              <button className="bg-[var(--primary)] text-[var(--primary-foreground)] font-medium px-6 py-2 rounded-[var(--radius)] border-none cursor-pointer hover:opacity-90 transition-opacity duration-150">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[var(--background)] pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] leading-tight m-0">
                  Find the Hong Kong cases that matter. In seconds, not hours.
                </h1>
                <p className="text-xl text-[var(--muted-foreground)] leading-relaxed font-light m-0">
                  An AI research assistant trained specifically on the Hong Kong judiciary. 
                  Pinpoint relevant precedents, optimize your arguments, and never miss a deadline.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => navigate('/signin')}
                  className="bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold py-4 px-10 rounded-[var(--radius-lg)] border-none shadow-[var(--shadow-md)] hover:opacity-90 hover:shadow-[var(--shadow-lg)] hover:-translate-y-0.5 transition-all duration-300 transform"
                >
                  Get Started
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2" id="searchBox">
              <div className="bg-[var(--card)] rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] p-8 border border-[var(--border)]">
                <div className="bg-[var(--muted)] rounded-[var(--radius)] p-6 mb-6 border border-[var(--border)]">
                  <div className="flex gap-3 mb-4">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-400 shadow-[var(--shadow-sm)]"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-400 shadow-[var(--shadow-sm)]"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-green-400 shadow-[var(--shadow-sm)]"></div>
                  </div>
                  <div className="bg-[var(--background)] p-5 rounded-[var(--radius)] shadow-[var(--shadow-sm)] border border-[var(--border)]">
                    <p className="text-[var(--muted-foreground)] font-medium m-0">Search: "monetary claim dispute quantum calculation methods"</p>
                  </div>
                </div>
                <div className="bg-[var(--secondary)] rounded-[var(--radius)] p-6 border border-[var(--border)]">
                  <h3 className="font-bold text-[var(--foreground)] mb-3 text-lg m-0">[Case Name 2018] HKCFI 567</h3>
                  <p className="text-[var(--secondary-foreground)] text-sm mb-3 font-medium m-0">Relevant paragraphs: 42-48, 56-61</p>
                  <p className="text-[var(--muted-foreground)] leading-relaxed m-0">
                    The court established that quantum calculations must consider contemporary market factors...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--muted)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-6 m-0">
              Less Searching. Faster Progress.
            </h2>
            <div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded-sm"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
              <div className="space-y-6">
                <h3 className="font-bold text-gray-900 text-xl mb-6 group-hover:text-blue-700 transition-colors">
                  Struggling to Formulate a Defense Strategy
                </h3>
                <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                  <p className="text-sm text-gray-700 italic font-medium">
                    "We are a law firm representing the Defendant in a monetary claim..."
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <p className="text-sm text-gray-700 font-medium">
                    The AI returns: Relevant HCR O.18 r.13, Practice Direction 5.4, and summaries of 3 key cases...
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-blue-700 font-semibold">
                    Build stronger defense arguments with relevant legal precedents
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
              <div className="space-y-6">
                <h3 className="font-bold text-gray-900 text-xl mb-6 group-hover:text-blue-700 transition-colors">
                  Time-Consuming Case Analysis
                </h3>
                <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                  <p className="text-sm text-gray-700 italic font-medium">
                    "summarize the key legal principles in [Case Name]"
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <p className="text-sm text-gray-700 font-medium">
                    The AI returns: Concise summary of 5 key legal principles with relevant paragraph citations...
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-blue-700 font-semibold">
                    Reduce research time from hours to minutes
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <div className="space-y-6">
                <h3 className="font-bold text-gray-900 text-xl mb-6 group-hover:text-blue-700 transition-colors">
                  Optimizing Legal Documents
                </h3>
                <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                  <p className="text-sm text-gray-700 italic font-medium">
                    "help me optimize this affidavit in a professional legal writing style"
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <p className="text-sm text-gray-700 font-medium">
                    The AI returns: Revised document with improved structure, terminology, and persuasive language...
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-blue-700 font-semibold">
                    Enhance document quality and persuasiveness
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Powerful Tools Built for Hong Kong Practice
            </h2>
            <div className="w-32 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group text-center space-y-6">
              <div className="relative">
                <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <svg className="w-10 h-10 text-blue-600 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <div className="absolute -inset-2 bg-blue-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg -z-10"></div>
              </div>
              <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-blue-700 transition-colors">Ask Like You Would a Colleague</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                No complex Boolean strings. Describe your legal issue in plain English and get precise results from HKLII databases.
              </p>
            </div>

            <div className="group text-center space-y-6">
              <div className="relative">
                <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <svg className="w-10 h-10 text-blue-600 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                </div>
                <div className="absolute -inset-2 bg-blue-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg -z-10"></div>
              </div>
              <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-blue-700 transition-colors">Elevate Your Drafting</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Refine your affirmations and submissions to meet the high standards of the Hong Kong judiciary.
              </p>
            </div>

            <div className="group text-center space-y-6">
              <div className="relative">
                <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <svg className="w-10 h-10 text-blue-600 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <div className="absolute -inset-2 bg-blue-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg -z-10"></div>
              </div>
              <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-blue-700 transition-colors">Quick-Cite Reports</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Get AI-generated summaries of case facts, holdings, and key quotes ready for copy-pasting into your drafts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-light">Start with a 7-day free trial.</p>
            <div className="w-28 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group bg-white border border-gray-200 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Core</h3>
              <div className="mb-8">
                <span className="text-5xl font-bold text-gray-900">US$59</span>
                <span className="text-gray-600 text-xl ml-2">/month</span>
              </div>
              <ul className="space-y-5 mb-10">
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">100 queries / month</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Basic document optimization</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Email support</span>
                </li>
              </ul>
              <button className="w-full bg-gray-900 hover:bg-black text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
            </div>

            <div className="group bg-white border-2 border-blue-200 rounded-2xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-sm font-bold px-6 py-2 rounded-bl-xl rounded-tr-2xl shadow-lg">
                POPULAR
              </div>
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Pro</h3>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-blue-600">US$199</span>
                  <span className="text-gray-600 text-xl ml-2">/month</span>
                </div>
                <ul className="space-y-5 mb-10">
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-sm">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">500 queries / month</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-sm">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Advanced document optimization</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-sm">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-sm">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Multi-user access</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-[var(--primary)] text-[var(--primary-foreground)]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight m-0">
            Reclaim Your Time and Focus on Your Strategy
          </h2>
          <p className="text-xl max-w-4xl mx-auto mb-12 leading-relaxed font-light opacity-90 m-0">
            Use our AI assistant to enhance your practice.
          </p>
          <button className="bg-[var(--background)] text-[var(--primary)] font-bold py-5 px-12 rounded-[var(--radius-lg)] border-none cursor-pointer text-lg shadow-[var(--shadow-lg)] hover:bg-[var(--muted)] hover:-translate-y-1 transition-all duration-300 transform">
            Start Your Free Trial Now
          </button>
        </div>
      </section>

      <footer className="bg-[var(--accent)] text-[var(--accent-foreground)] py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            <div>
              <p className="text-sm font-medium opacity-80 m-0">© 2023 Casebyte. All rights reserved.</p>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-sm no-underline font-medium opacity-80 hover:opacity-100 transition-opacity duration-150">
                Privacy Policy
              </a>
              <a href="#" className="text-sm no-underline font-medium opacity-80 hover:opacity-100 transition-opacity duration-150">
                Terms of Service
              </a>
              <a href="#" className="text-sm no-underline font-medium opacity-80 hover:opacity-100 transition-opacity duration-150">
                Contact Info
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded-sm opacity-50"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;