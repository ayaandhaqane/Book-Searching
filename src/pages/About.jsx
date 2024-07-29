import React, { lazy, Suspense } from 'react';
import Loading from '../components/Loading';

const Header = lazy(() => import('../components/Header'));
const Footer = lazy(() => import('../components/Footer'));

function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Suspense fallback={<Loading />}>
        <Header />
      </Suspense>
      <section id="about" className="bg-white text-gray-800 min-h-screen flex flex-col pt-16">
        <div className="container mx-auto px-6 py-20 flex-grow flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-base text-white font-semibold tracking-wide uppercase">About Us</h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-600 sm:text-4xl">
              Helping businesses deliver <span className="text-[#4B0082]">exceptional</span> buyer experiences.
            </h3>
            <p className="mt-4 text-lg text-black">
            At AyaanBooks, we are committed to revolutionizing the online book searching experience by offering an extensive and user-friendly platform. 
            Our mission is to simplify the process of finding the perfect book for any purpose,
             whether it’s for education, entertainment, or professional development. 
             We curate a vast selection of titles, ensuring that our users have access to the best resources available.
              Our dedicated team works tirelessly to provide personalized recommendations, 
             making book discovery both enjoyable and efficient. Join us on our journey to foster a love of reading and lifelong learning for everyone.
            </p>
            <div className="mt-8">
              <a href="#" className="bg-[#4B0082] text-white py-3 px-6 rounded-full text-lg hover:bg-blue-700 transition duration-300 ease-in-out shadow-md">
                Sign Up for Free
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative w-full max-w-md">
              <img src="public/about.jpg" alt="Person working" className="rounded-full shadow-lg w-full h-full object-cover z-10"/>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute -bottom-10 left-0 w-32 h-32 bg-[#4B0082] rounded-full opacity-75"></div>
                <div className="absolute -top-10 right-0 w-32 h-32 bg-blue-600 rounded-full opacity-60"></div>
                <div className="absolute -bottom-20 right-20 w-32 h-32 bg-blue-600 rounded-full opacity-65"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default About;