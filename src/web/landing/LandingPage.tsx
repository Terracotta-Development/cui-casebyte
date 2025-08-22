import React from 'react';

const LandingPage = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--background)',
      color: 'var(--foreground)'
    }}>
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'var(--background)',
        borderBottom: '1px solid var(--border)',
        backdropFilter: 'blur(8px)'
      }}>
        <div className="container mx-auto px-6">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '64px'
          }}>
            <div>
              <h1 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'var(--foreground)',
                margin: 0
              }}>Casebyte</h1>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <button style={{
                color: 'var(--muted-foreground)',
                fontWeight: '500',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius)',
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                transition: 'color var(--transition-fast)'
              }} 
              onMouseEnter={(e) => e.target.style.color = 'var(--foreground)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--muted-foreground)'}>
                Log In
              </button>
              <button style={{
                backgroundColor: 'var(--primary)',
                color: 'var(--primary-foreground)',
                fontWeight: '500',
                padding: '0.5rem 1.5rem',
                borderRadius: 'var(--radius)',
                border: 'none',
                cursor: 'pointer',
                transition: 'opacity var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '0.9'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        backgroundColor: 'var(--background)',
        paddingTop: '8rem',
        paddingBottom: '6rem'
      }}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <h1 style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 'bold',
                  color: 'var(--foreground)',
                  lineHeight: '1.1',
                  margin: 0
                }}>
                  Find the Hong Kong cases that matter. In seconds, not hours.
                </h1>
                <p style={{
                  fontSize: '1.25rem',
                  color: 'var(--muted-foreground)',
                  lineHeight: '1.6',
                  fontWeight: '300',
                  margin: 0
                }}>
                  An AI research assistant trained specifically on the Hong Kong judiciary. 
                  Pinpoint relevant precedents, optimize your arguments, and never miss a deadline.
                </p>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }} className="sm:flex-row">
                <button style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                  fontWeight: '600',
                  padding: '1rem 2.5rem',
                  borderRadius: 'var(--radius-lg)',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-md)',
                  transition: 'all var(--transition-normal)',
                  transform: 'translateY(0)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.opacity = '0.9';
                  e.target.style.boxShadow = 'var(--shadow-lg)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = '1';
                  e.target.style.boxShadow = 'var(--shadow-md)';
                  e.target.style.transform = 'translateY(0)';
                }}>
                  Get Started
                </button>
                {/* <button style={{
                  backgroundColor: 'var(--background)',
                  color: 'var(--muted-foreground)',
                  fontWeight: '600',
                  padding: '1rem 2.5rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '2px solid var(--border)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-normal)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = 'var(--primary)';
                  e.target.style.color = 'var(--primary)';
                  e.target.style.backgroundColor = 'var(--secondary)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'var(--border)';
                  e.target.style.color = 'var(--muted-foreground)';
                  e.target.style.backgroundColor = 'var(--background)';
                }}>
                  How lawyers use our tool
                </button> */}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div style={{
                backgroundColor: 'var(--card)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-lg)',
                padding: '2rem',
                border: '1px solid var(--border)'
              }}>
                <div style={{
                  backgroundColor: 'var(--muted)',
                  borderRadius: 'var(--radius)',
                  padding: '1.5rem',
                  marginBottom: '1.5rem',
                  border: '1px solid var(--border)'
                }}>
                  <div style={{
                    display: 'flex',
                    gap: '0.75rem',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      backgroundColor: '#ef4444',
                      boxShadow: 'var(--shadow-sm)'
                    }}></div>
                    <div style={{
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      backgroundColor: '#f59e0b',
                      boxShadow: 'var(--shadow-sm)'
                    }}></div>
                    <div style={{
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      backgroundColor: '#10b981',
                      boxShadow: 'var(--shadow-sm)'
                    }}></div>
                  </div>
                  <div style={{
                    backgroundColor: 'var(--background)',
                    padding: '1.25rem',
                    borderRadius: 'var(--radius)',
                    boxShadow: 'var(--shadow-sm)',
                    border: '1px solid var(--border)'
                  }}>
                    <p style={{
                      color: 'var(--muted-foreground)',
                      fontWeight: '500',
                      margin: 0
                    }}>Search: "monetary claim dispute quantum calculation methods"</p>
                  </div>
                </div>
                <div style={{
                  backgroundColor: 'var(--secondary)',
                  borderRadius: 'var(--radius)',
                  padding: '1.5rem',
                  border: '1px solid var(--border)'
                }}>
                  <h3 style={{
                    fontWeight: 'bold',
                    color: 'var(--foreground)',
                    marginBottom: '0.75rem',
                    fontSize: '1.125rem',
                    margin: '0 0 0.75rem 0'
                  }}>[Case Name 2018] HKCFI 567</h3>
                  <p style={{
                    color: 'var(--secondary-foreground)',
                    fontSize: '0.875rem',
                    marginBottom: '0.75rem',
                    fontWeight: '500',
                    margin: '0 0 0.75rem 0'
                  }}>Relevant paragraphs: 42-48, 56-61</p>
                  <p style={{
                    color: 'var(--muted-foreground)',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    The court established that quantum calculations must consider contemporary market factors...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{
        padding: '6rem 0',
        backgroundColor: 'var(--muted)'
      }}>
        <div className="container mx-auto px-6">
          <div style={{
            textAlign: 'center',
            marginBottom: '5rem'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 'bold',
              color: 'var(--foreground)',
              marginBottom: '1.5rem',
              margin: '0 0 1.5rem 0'
            }}>
              Less Searching. Faster Progress.
            </h2>
            <div style={{
              width: '96px',
              height: '4px',
              backgroundColor: 'var(--primary)',
              margin: '0 auto',
              borderRadius: '2px'
            }}></div>
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
      <section style={{
        padding: '6rem 0',
        backgroundColor: 'var(--primary)',
        color: 'var(--primary-foreground)'
      }}>
        <div className="container mx-auto px-6" style={{ textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 'bold',
            marginBottom: '2rem',
            lineHeight: '1.2',
            margin: '0 0 2rem 0'
          }}>
            Reclaim Your Time and Focus on Your Strategy
          </h2>
          <p style={{
            fontSize: '1.25rem',
            marginBottom: '3rem',
            maxWidth: '64rem',
            margin: '0 auto 3rem auto',
            lineHeight: '1.6',
            fontWeight: '300',
            opacity: '0.9'
          }}>
            Use our AI assistant to enhance your practice.
          </p>
          <button style={{
            backgroundColor: 'var(--background)',
            color: 'var(--primary)',
            fontWeight: 'bold',
            padding: '1.25rem 3rem',
            borderRadius: 'var(--radius-lg)',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.125rem',
            transition: 'all var(--transition-normal)',
            boxShadow: 'var(--shadow-lg)',
            transform: 'translateY(0)'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'var(--muted)';
            e.target.style.boxShadow = 'var(--shadow-lg)';
            e.target.style.transform = 'translateY(-4px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'var(--background)';
            e.target.style.boxShadow = 'var(--shadow-md)';
            e.target.style.transform = 'translateY(0)';
          }}>
            Start Your Free Trial Now
          </button>
        </div>
      </section>

      <footer style={{
        backgroundColor: 'var(--accent)',
        color: 'var(--accent-foreground)',
        padding: '4rem 0'
      }}>
        <div className="container mx-auto px-6">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem'
          }} className="md:flex-row md:space-y-0">
            <div>
              <p style={{
                fontSize: '0.875rem',
                fontWeight: '500',
                margin: 0,
                opacity: '0.8'
              }}>© 2023 Casebyte. All rights reserved.</p>
            </div>
            <div style={{
              display: 'flex',
              gap: '2rem'
            }}>
              <a href="#" style={{
                fontSize: '0.875rem',
                color: 'inherit',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'opacity var(--transition-fast)',
                opacity: '0.8'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '1'}
              onMouseLeave={(e) => e.target.style.opacity = '0.8'}>
                Privacy Policy
              </a>
              <a href="#" style={{
                fontSize: '0.875rem',
                color: 'inherit',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'opacity var(--transition-fast)',
                opacity: '0.8'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '1'}
              onMouseLeave={(e) => e.target.style.opacity = '0.8'}>
                Terms of Service
              </a>
              <a href="#" style={{
                fontSize: '0.875rem',
                color: 'inherit',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'opacity var(--transition-fast)',
                opacity: '0.8'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '1'}
              onMouseLeave={(e) => e.target.style.opacity = '0.8'}>
                Contact Info
              </a>
            </div>
          </div>
          <div style={{
            marginTop: '2rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center'
          }}>
            <div style={{
              width: '96px',
              height: '4px',
              backgroundColor: 'var(--primary)',
              margin: '0 auto',
              borderRadius: '2px',
              opacity: '0.5'
            }}></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;