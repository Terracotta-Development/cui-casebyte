import React, { useState } from 'react';
import { Button } from '../chat/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Composer } from '../chat/components/Composer/Composer';
import { TerracottaTool } from '../chat/components/ToolRendering/tools/TerracottaTool';
import { X } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children: React.ReactNode }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-[var(--background)] rounded-[var(--radius-lg)] max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-[var(--border)]">
          <div className="flex items-center justify-between p-6 border-b border-[var(--border)]">
            <h2 className="text-xl font-bold text-[var(--foreground)] m-0">{title}</h2>
            <button
              onClick={onClose}
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] p-1 rounded-md hover:bg-[var(--muted)] transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    );
  };

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
              <button 
                className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] font-medium px-4 py-2 rounded-[var(--radius)] border-none bg-transparent cursor-pointer transition-colors duration-150"
                onClick={() => navigate('/signin')}
              >
                Log In
              </button>
              <button 
                className="bg-[var(--primary)] text-[var(--primary-foreground)] font-medium px-6 py-2 rounded-[var(--radius)] border-none cursor-pointer hover:opacity-90 transition-opacity duration-150"
                onClick={() => navigate('/signin')}
              >
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
                <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-[var(--foreground)] leading-tight m-0">
                  From hours of research to answers in seconds.
                </h1>
                <p className="text-xl text-[var(--muted-foreground)] leading-relaxed font-light m-0">
                  Casebyte is an AI assistant trained on Hong Kong law. Designed for legal professionals who need speed, accuracy, and confidence in every case.
                </p>
              </div>
              <div className="flex justify-center">
                <Button 
                  onClick={() => navigate('/signin')}
                  size="lg"
                  className="bg-[var(--primary)] text-[var(--primary-foreground)] font-bold text-lg py-6 px-16 rounded-[var(--radius-lg)] border-none shadow-[var(--shadow-lg)] hover:opacity-90 hover:shadow-[var(--shadow-lg)] hover:-translate-y-0.5 transition-all duration-300 transform"
                >
                  Get Started
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2" id="liveDemo">
              <div className="bg-[var(--card)] rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] p-6 border border-[var(--border)] space-y-4">
                {/* Mock Conversation View */}
                <div className="space-y-4">
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="bg-[var(--primary)] text-[var(--primary-foreground)] px-4 py-2 rounded-lg max-w-xs">
                      <p className="text-sm m-0">Find 2 cases on duty to avoid conflicts of interest, and summarize case facts</p>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex justify-start">
                    <div className="bg-[var(--muted)] px-4 py-2 rounded-lg max-w-md">
                      <p className="text-sm text-[var(--foreground)] mb-2 m-0">I'll search for Hong Kong cases related to duty to avoid conflicts of interest from the past 5 years and summarize the case facts for you.</p>
                      
                      {/* TerracottaTool Component */}
                      <div className="mt-3">
                        <TerracottaTool
                          toolName="mcp__terracotta-law__search_case_law"
                          input={{
                            query: '"duty to avoid conflicts of interest" OR "conflict of interest" OR "fiduciary duty" OR "breach of fiduciary duty"',
                            size: 2,
                            sort_by_date: "newest",
                          }}
                          result={JSON.stringify({
                            query: '"duty to avoid conflicts of interest" OR "conflict of interest" OR "fiduciary duty" OR "breach of fiduciary duty"',
                            result_count: 2,
                            results: [
                              {
                                id: "hkcfi_2024_3729",
                                case_name: "CHIEF FINE INVESTMENTS LTD (IN LIQUIDATION) AND ANOTHER V. KINGSTON CAPITAL INVESTMENT LTD AND OTHERS",
                                neutral_citation: "[2024] HKCFI 3729",
                                court: "HKCFI",
                                date: "2024-12-30",
                                case_url: "https://hklii.hk/en/cases/hkcfi/2024/3729",
                                highlights: [
                                  "Although in Polyline, the Court of Appeal’s decision was also affected by the fact that the contract in question was entered into by a director in <em>breach of fiduciary duty</em> and the other party was a company controlled by that very director, I do not read the Court of Appeal’s decision to mean that without such rogue director, a strike out application would succeed simply due to the existence of a strong estoppel defence. 34. As such, I do not agree that in pleading a case which seemingly might be defeated by a contractual estoppel defence would amount to an abuse of process. Henderson Abuse - Contradictory Evidence 35."
                                ]
                              },
                              {
                                id: "hkcfi_2024_3659",
                                case_name: "WONG KA WAI V. WONG KA YIN RITA (ONE OF THE EXECUTORS OF THE ESTATE OF WONG LUK KAN, DECEASED) AND ANOTHER",
                                neutral_citation: "[2024] HKCFI 3659",
                                court: "HKCFI",
                                date: "2024-12-03",
                                case_url: "https://hklii.hk/en/cases/hkcfi/2024/3659",
                                highlights: [
                                  "(1) Alleged breach of duty and <em>conflict of interest</em> 6. The plaintiff relies on four grounds to support her application. The first ground is that the defendants have allegedly breached their duties as executors by not collecting the debts owed by them to the estate and thereby acting in a <em>conflict of interest</em>. The plaintiff alleges that the 1st defendant owes to the estate C$130,000, being the partial proceeds of sale of a house in Markham, Ontario, Canada (“the Canadian Property”), and the 2nd defendant owes C$228,000 to the estate, also being part of the sale proceeds of the same property. The plaintiff alleges that the 2nd defendant further owes to the estate a sum of C$25,000. 7.Accordingly, given that there is a dispute between the parties on whether the defendants are indebted to the estate, I do not believe that the plaintiff can show that the 1st and the 2nd defendants are in breach of their duties by not collecting the debts owed by them to the estate or are acting in a <em>conflict of interest</em>. The plaintiff therefore fails on this ground. (2) Alleged failure to render full and proper accounts of the estate 12. The plaintiff’s second ground of removal is that the defendants have failed to render a full and proper account of the estate to her. 13. I note that there was extensive correspondence in 2020 between the plaintiff’s former solicitors and the defendants’ former solicitors in relation to the estate accounts prepared by the defendants."
                                ]
                              }
                            ]
                          })}
                        />
                      </div>
                      
                      <p className="text-sm text-[var(--foreground)] mt-3 m-0">
                        I found 2 relevant Hong Kong cases dealing with duty to avoid conflict of interests. These cases...
                      </p>
                    </div>
                  </div>
                </div>

                {/* Live Composer */}
                <div className="pt-2 border-t border-[var(--border)]">
                  <Composer
                    placeholder="Ask about Hong Kong case law, ordinances, or practice directions..."
                    onSubmit={() => {}} // No-op for demo
                    disabled={true}
                    showDirectorySelector={false}
                    showModelSelector={false}
                    enableFileAutocomplete={false}
                    showPermissionUI={false}
                    showStopButton={false}
                    showDisclaimer={false}
                  />
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
                Build stronger defense arguments with relevant legal precedents
                </h3>
                <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                  <p className="text-sm text-gray-700 italic font-medium">
                    "We are a law firm representing the Defendant in a monetary claim..."
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <p className="text-sm text-gray-700 font-medium">
                    Casebyte returns: Relevant HCR O.18 r.13, Practice Direction 5.4, and summaries of 3 key cases...
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
              <div className="space-y-6">
                <h3 className="font-bold text-gray-900 text-xl mb-6 group-hover:text-blue-700 transition-colors">
                  Reduce research time from hours to minutes
                </h3>
                <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                  <p className="text-sm text-gray-700 italic font-medium">
                    "Summarize the key legal principles in [Case Name]"
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <p className="text-sm text-gray-700 font-medium">
                    Casebyte returns: Concise summary of 5 key legal principles with relevant paragraph citations...
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <div className="space-y-6">
                <h3 className="font-bold text-gray-900 text-xl mb-6 group-hover:text-blue-700 transition-colors">
                  Enhance document quality and persuasiveness
                </h3>
                <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                  <p className="text-sm text-gray-700 italic font-medium">
                    "Help me optimize this affidavit in a professional legal writing style"
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <p className="text-sm text-gray-700 font-medium">
                    Casebyte returns: Revised text with improved structure, terminology, and persuasive language...
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
                No complex Boolean strings. Describe your Hong Kong legal issue in plain English and get precise results grounded in real case law.
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

      {/* Hallucination Comparison Section */}
      <section className="py-24 bg-gradient-to-r from-red-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Casebyte vs. General AI?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              General LLMs like ChatGPT and Claude often hallucinate legal cases. Casebyte only returns real, verified Hong Kong cases.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* General LLM - Problem */}
            <div className="bg-white rounded-2xl p-8 border-2 border-red-200 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.314 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-red-700">General LLMs</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <p className="text-sm font-medium text-gray-800 mb-2">User: "Find cases on contract disputes in Hong Kong"</p>
                </div>
                
                <p className="text-sm text-gray-700 italic">AI Response:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 mb-2">
                    Here are some relevant Hong Kong cases:
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• <span className="font-mono text-red-600">Wong v. Li [2023] HKCA 456</span> ⚠️</li>
                    <li>• <span className="font-mono text-red-600">Chan Holdings v. Metro Ltd [2024] HKCFI 789</span> ⚠️</li>
                    <li>• <span className="font-mono text-red-600">ABC Corp v. XYZ Ltd [2022] HKCA 123</span> ⚠️</li>
                  </ul>
                </div>

                <div className="bg-red-100 p-3 rounded-lg border-l-4 border-red-500">
                  <p className="text-sm font-semibold text-red-800">❌ Problem: These cases may be completely fabricated</p>
                  <p className="text-xs text-red-700 mt-1">No way to verify if these citations actually exist in Hong Kong law</p>
                </div>
              </div>
            </div>

            {/* Casebyte - Solution */}
            <div className="bg-white rounded-2xl p-8 border-2 border-green-200 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-700">Casebyte</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <p className="text-sm font-medium text-gray-800 mb-2">User: "Find cases on contract disputes in Hong Kong"</p>
                </div>
                
                <p className="text-sm text-gray-700 italic">Casebyte searches HKLII database...</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 mb-2">
                    Found 3 verified Hong Kong cases:
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• <span className="font-mono text-green-600">[2024] HKCFI 3729</span> 
                        <a href="#" className="text-blue-600 ml-1">🔗</a></li>
                    <li>• <span className="font-mono text-green-600">[2024] HKCFI 3659</span> 
                        <a href="#" className="text-blue-600 ml-1">🔗</a></li>
                    <li>• <span className="font-mono text-green-600">[2023] HKCA 287</span> 
                        <a href="#" className="text-blue-600 ml-1">🔗</a></li>
                  </ul>
                </div>

                <div className="bg-green-100 p-3 rounded-lg border-l-4 border-green-500">
                  <p className="text-sm font-semibold text-green-800">✅ Solution: Every case is real and verifiable</p>
                  <p className="text-xs text-green-700 mt-1">Direct links to actual Hong Kong court decisions from HKLII database</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <div className="w-28 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group bg-white border border-gray-200 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Free</h3>
              <div className="mb-8">
                <span className="text-5xl font-bold text-gray-900">Basic Plan</span>
              </div>
              <ul className="space-y-5 mb-10">
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">10 queries / month</span>
                </li>
              </ul>
              <button 
                className="w-full bg-gray-900 hover:bg-black text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => navigate('/signin')}
              >
                Start Now
              </button>
            </div>

            <div className="group bg-white border-2 border-blue-200 rounded-2xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-sm font-bold px-6 py-2 rounded-bl-xl rounded-tr-2xl shadow-lg">
                POPULAR
              </div>
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Core</h3>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-blue-600">US$59</span>
                  <span className="text-gray-600 text-xl ml-2">/month</span>
                </div>
                <ul className="space-y-5 mb-10">
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-sm">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">100 queries / month</span>
                  </li>
                </ul>
                <button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  onClick={() => navigate('/signin')}
                >
                  Start Now
                </button>
              </div>
            </div>
            
            <div className="group bg-white border border-gray-200 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Pro</h3>
              <div className="mb-8">
                <span className="text-5xl font-bold text-gray-900">US$199</span>
                <span className="text-gray-600 text-xl ml-2">/month</span>
              </div>
              <ul className="space-y-5 mb-10">
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">500 queries / month</span>
                </li>
              </ul>
              <button 
                className="w-full bg-gray-900 hover:bg-black text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => navigate('/signin')}
              >
                Start Now
              </button>
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
            Try Casebyte Now
          </button>
          <p className="text-white/70 text-sm mt-6 font-light">
            Crafted with ❤️ in Hong Kong
          </p>
        </div>
      </section>

      <footer className="bg-[var(--accent)] text-[var(--accent-foreground)] py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            <div>
              <p className="text-sm font-medium opacity-80 m-0">© 2025 Terracotta. All rights reserved.</p>
            </div>
            <div className="flex gap-8">
              <button 
                onClick={() => setShowPrivacyModal(true)}
                className="text-sm no-underline font-medium opacity-80 hover:opacity-100 transition-opacity duration-150 border-none bg-transparent cursor-pointer"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setShowTermsModal(true)}
                className="text-sm no-underline font-medium opacity-80 hover:opacity-100 transition-opacity duration-150 border-none bg-transparent cursor-pointer"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => setShowContactModal(true)}
                className="text-sm no-underline font-medium opacity-80 hover:opacity-100 transition-opacity duration-150 border-none bg-transparent cursor-pointer"
              >
                Contact Info
              </button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded-sm opacity-50"></div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <Modal isOpen={showPrivacyModal} onClose={() => setShowPrivacyModal(false)} title="Privacy Policy">
        <div className="space-y-4 text-[var(--foreground)] text-sm">
          <p><strong>Last updated:</strong> August 2025</p>
          
          <section>
            <h3 className="font-semibold text-base mb-2">Information We Collect</h3>
            <p>We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.</p>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2">How We Use Your Information</h3>
            <p>We use the information we collect to provide, maintain, and improve our legal research services, process transactions, and communicate with you.</p>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2">Information Sharing</h3>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2">Data Security</h3>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>
        </div>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal isOpen={showTermsModal} onClose={() => setShowTermsModal(false)} title="Terms of Service">
        <div className="space-y-4 text-[var(--foreground)] text-sm">
          <p><strong>Last updated:</strong> August 2025</p>
          
          <section>
            <h3 className="font-semibold text-base mb-2">Acceptance of Terms</h3>
            <p>By accessing and using Casebyte, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2">Use License</h3>
            <p>Permission is granted to temporarily use Casebyte for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2">Service Availability</h3>
            <p>We strive to provide continuous service but cannot guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue the service at any time.</p>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2">Professional Use</h3>
            <p>Casebyte is designed to assist legal professionals with research. The information provided should not be considered as legal advice and should be verified independently.</p>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2">Limitation of Liability</h3>
            <p>In no event shall Terracotta or its suppliers be liable for any damages arising out of the use or inability to use Casebyte.</p>
          </section>
        </div>
      </Modal>

      {/* Contact Info Modal */}
      <Modal isOpen={showContactModal} onClose={() => setShowContactModal(false)} title="Contact Information">
        <div className="space-y-6 text-[var(--foreground)]">
          <section>
            <h3 className="font-semibold text-base mb-3">Get in Touch</h3>
            <p className="mb-4">We'd love to hear from you. Contact us for support, questions, or feedback about Casebyte.</p>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-3">Email</h3>
            <p>
              <a 
                href="mailto:support@casebyte.ai" 
                className="text-[var(--primary)] hover:underline text-lg font-medium"
              >
                support@casebyte.ai
              </a>
            </p>
            <p className="text-[var(--muted-foreground)] text-sm mt-1">
              We typically respond within 48 hours during business days.
            </p>
          </section>
        </div>
      </Modal>
    </div>
  );
};

export default LandingPage;