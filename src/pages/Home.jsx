import React, { useState } from 'react';

const Home = () => {
  const [isPlus1, setIsPlus1] = useState(false);
  const [isPlus2, setIsPlus2] = useState(false);
  const [isPlus3, setIsPlus3] = useState(false);
  const [isPlus4, setIsPlus4] = useState(false);
  const [isPlus5, setIsPlus5] = useState(false);
  const [isPlus6, setIsPlus6] = useState(false);

  const toggleButton1 = () => setIsPlus1(!isPlus1);
  const toggleButton2 = () => setIsPlus2(!isPlus2);
  const toggleButton3 = () => setIsPlus3(!isPlus3);
  const toggleButton4 = () => setIsPlus4(!isPlus4);
  const toggleButton5 = () => setIsPlus5(!isPlus5);
  const toggleButton6 = () => setIsPlus6(!isPlus6);

  return (
    <div>
      <section className='pt-20 flex justify-center items-center'>
        <div className='flex justify-center items-center flex-col gap-9 p-6'>
          <h3 className='text-kinpur bg-kinpur2 px-4 py-1 rounded-full font-semibold'>Introducing EulaRise</h3>
          <h1 className='text-6xl text-center font-bold text-bala'>
            The analytics platform to Analyze your
            <span className='px-3 bg-clip-text text-transparent bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--primary))] font-bold'>
              End User Agreements
            </span>
          </h1>
          <p className='text-2xl text-balac max-w-lg text-center'>
            Discover the power of automation and data-driven suggestion End User Legal Agreement
          </p>
          <a href='http://localhost:5000/get-started'>
            <button className='text-white py-4 px-10 rounded-full font-bold bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--primary))] hover:shadow-lg transition-shadow duration-300'>
              Get Started
            </button>
          </a>
          <img src='/src/images/intros.png' alt='Intro Image' className='rounded-lg shadow-md'/>
        </div>
      </section>

      <div className="flex flex-col max-w-6xl py-24 p-10">
        <h2 className='text-2xl my-5 fontbold'>AI Powered Analysis</h2>
        <div className="flex gap-8">
          <div className="flex flex-col gap-6 flex-1">
            {/* Smart Scanning Section */}
            <div className="flex gap-4">
              <div className="bg-purple-300 text-primary shrink-0 w-16 h-16 flex justify-center items-center rounded-[1rem]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-search"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-balance">Smart Scanning</h3>
                <p>AI-Powered Analysis: Leverages AI to detect harmful clauses and legal risks.</p>
              </div>
            </div>

            {/* Real-Time Analytics Section */}
            <div className="flex gap-4">
              <div className="bg-purple-300 text-primary shrink-0 w-16 h-16 flex justify-center items-center rounded-[1rem]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chart-no-axes-column"
                >
                  <line x1="18" x2="18" y1="20" y2="10"></line>
                  <line x1="12" x2="12" y1="20" y2="4"></line>
                  <line x1="6" x2="6" y1="20" y2="14"></line>
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-balance">Real-Time Analytics</h3>
                <p>Real-Time Insights: Instant feedback on your agreements.</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center">
            <img
              width="600"
              height="400"
              className="rounded-tl-[2.5rem] rounded-bl-[5rem] rounded-tr-[2.5rem] bg-purple-600"
              src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/Group-996-(1)-1-(1)_f451be65-dbe3-40f7-9f28-1d20de09b016.png"
              alt="Illustration"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col max-w-6xl py-24 p-10">
        <div className="flex gap-8">
          <div className="flex flex-col gap-6 flex-1">
            {/* Smart Scanning Section */}
            <div className="flex gap-4">
              <div className="bg-purple-300 text-primary shrink-0 w-16 h-16 flex justify-center items-center rounded-[1rem]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chart-line"
                >
                  <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                  <path d="m19 9-5 5-4-4-3 3"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-balance">Confidentiality</h3>
                <p>Our Data stays private.</p>
              </div>
            </div>

            {/* Real-Time Analytics Section */}
            <div className="flex gap-4">
              <div className="bg-purple-300 text-primary shrink-0 w-16 h-16 flex justify-center items-center rounded-[1rem]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-text-quote"
                >
                  <path d="M17 6H3"></path>
                  <path d="M21 12H8"></path>
                  <path d="M21 18H8"></path>
                  <path d="M3 12v6"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-balance">Our Mission</h3>
                <p>Our mission is to simplify legal agreements.</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center">
            <img
              width="600"
              height="400"
              className="rounded-tl-[2.5rem] rounded-bl-[5rem] rounded-tr-[2.5rem] bg-purple-600"
              src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/Group-998-1-(1)_1507accd-74f9-4ae3-b086-4b4cd18dd00c.png"
              alt="Illustration"
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div>
        <p className='faq text-kinpur text-2xl font-bold text-center mt-52'>FAQ's</p>
        <h1 className='text-4xl font-semibold text-center mt-4 text-bala'>Frequently Asked Questions</h1>
        <div className='mt-10 text-bala'>
          <div className='border-b-0 px-8 rounded-3xl py-3 bg-white mx-60 mb-4'>
            <h3 className='flex'>
              <button className='flex flex-1 justify-between items-center text-2xl font-semibold py-3' onClick={toggleButton1}>
                What does EULARISE do?
                <svg className={`size-10 p-2 rounded bg-kinpur2 text-primary transition-transform duration-[1000ms] ease-out`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path className={`transition-transform ${isPlus1 ? 'rotate-90' : ''}`} d="M12 5v14"></path>
                  <path d="M5 12h14"></path>
                </svg>
              </button>
            </h3>
            {isPlus1 && <p className='text-xl'>EULARISE analyzes EULAs to detect harmful clauses, simplify terms, and provide actionable insights.</p>}
          </div>

          <div className='border-b-0 px-8 rounded-3xl py-3 bg-white mx-60 mb-4'>
            <h3 className='flex'>
              <button className='flex flex-1 justify-between items-center text-2xl font-semibold py-3' onClick={toggleButton2}>
                Is my data safe with EULARISE?
                <svg className={`size-10 p-2 rounded bg-kinpur2 text-primary transition-transform duration-[1000ms] ease-out`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path className={`transition-transform ${isPlus2 ? 'rotate-90' : ''}`} d="M12 5v14"></path>
                  <path d="M5 12h14"></path>
                </svg>
              </button>
            </h3>
            {isPlus2 && <p className='text-xl'>Yes, all data is encrypted and not stored on our servers. We comply with global privacy regulations.</p>}
          </div>

          <div className='border-b-0 px-8 rounded-3xl py-3 bg-white mx-60 mb-4'>
            <h3 className='flex'>
              <button className='flex flex-1 justify-between items-center text-2xl font-semibold py-3' onClick={toggleButton3}>
                Can I use EULARISE for free?
                <svg className={`size-10 p-2 rounded bg-kinpur2 text-primary transition-transform duration-[1000ms] ease-out`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path className={`transition-transform ${isPlus3 ? 'rotate-90' : ''}`} d="M12 5v14"></path>
                  <path d="M5 12h14"></path>
                </svg>
              </button>
            </h3>
            {isPlus3 && <p className='text-xl'>Yes, our Free Plan allows up to 2 document analyses per month.</p>}
          </div>

          <div className='border-b-0 px-8 rounded-3xl py-3 bg-white mx-60 mb-4'>
            <h3 className='flex'>
              <button className='flex flex-1 justify-between items-center text-2xl font-semibold py-3' onClick={toggleButton4}>
                Does EULARISE provide legal advice?
                <svg className={`size-10 p-2 rounded bg-kinpur2 text-primary transition-transform duration-[1000ms] ease-out`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path className={`transition-transform ${isPlus4 ? 'rotate-90' : ''}`} d="M12 5v14"></path>
                  <path d="M5 12h14"></path>
                </svg>
              </button>
            </h3>
            {isPlus4 && <p className='text-xl'>No, EULARISE offers analysis and suggestions but does not replace professional legal counsel.</p>}
          </div>

          <div className='border-b-0 px-8 rounded-3xl py-3 bg-white mx-60 mb-4'>
            <h3 className='flex'>
              <button className='flex flex-1 justify-between items-center text-2xl font-semibold py-3' onClick={toggleButton5}>
                Is my data secure?
                <svg className={`size-10 p-2 rounded bg-kinpur2 text-primary transition-transform duration-[1000ms] ease-out`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path className={`transition-transform ${isPlus5 ? 'rotate-90' : ''}`} d="M12 5v14"></path>
                  <path d="M5 12h14"></path>
                </svg>
              </button>
            </h3>
            {isPlus5 && <p className='text-xl'>Yes, we prioritize data security with industry-standard protocols and encryption measures to safeguard your information.</p>}
          </div>

          <div className='border-b-0 px-8 rounded-3xl py-3 bg-white mx-60 mb-4'>
            <h3 className='flex'>
              <button className='flex flex-1 justify-between items-center text-2xl font-semibold py-3' onClick={toggleButton6}>
                How fast is the analysis?
                <svg className={`size-10 p-2 rounded bg-kinpur2 text-primary transition-transform duration-[1000ms] ease-out`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path className={`transition-transform ${isPlus6 ? 'rotate-90' : ''}`} d="M12 5v14"></path>
                  <path d="M5 12h14"></path>
                </svg>
              </button>
            </h3>
            {isPlus6 && <p className='text-xl'>The analysis typically takes less than 10 seconds for most documents.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
