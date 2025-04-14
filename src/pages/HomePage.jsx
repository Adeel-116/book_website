import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import ratingImage from "../assets/toprating.png";
import Form from "../components/Form";
import Slider from "../components/Slider";
import bgVideo from "../assets/bg_video3.mp4";
import ServiceCard from "../components/ServiceCard";
import BookImage from "../assets/book5.webp";
import IntroCard from "../components/IntroCard";
import BookImage2 from "../assets/book4.webp";
import SolutionSection from "../components/SolutionSection"
import Portfolio from "../components/Portfolio"
import CTASection from "../components/CTASection";
import Book7 from "../assets/book7.webp"
import FAQ from "../components/FAQ";
import CTABook1 from "../assets/cta-Book.webp"
import CTABook2 from "../assets/cta-Book2.webp"

function HomePage() {
  return (
    <>
      <div className="w-full h-auto flex flex-col">
        <header className="w-full bg-white">
          <Header />
        </header>

        <section className="hero-Section w-full relative py-15 bg-gray-900 flex justify-center items-center">
          <div className="2xl:w-[80%] lg:w-[90%] md:w-[95%] w-[90%] h-auto flex md:flex-nowrap flex-wrap gap-y-3">
            <div className="md:w-1/2 w-full flex flex-col gap-y-2 justify-center">
              <h6>Get your story written</h6>
              <h1 className="xl:w-[90%] w-full">
                Become a popular author with Premium Book Publishers!
              </h1>
              <p className="xl:w-[80%] w-full">
                It is our aim to make your stories become a reality on paper
                allowing them to attract many readers. Our professionals follow
                a proper approach and are creative following what is trending in
                the writing industry. Simply tell us what your plot is and we
                will do the rest.
              </p>

              <div className="button flex space-x-2 mt-3 flex-wrap gap-y-3">
                <Button text="Live Chat" />
                <Button text="Get A Quote" />
                <Button text="+1302-518-4405" />
              </div>

              <div className="flex h-auto space-x-2 md:flex-row">
                <img
                  src={ratingImage}
                  alt="review-images"
                  className="lg:w-[130px] md:w-[120px] w-[80px]"
                />
                <img
                  src={ratingImage}
                  alt="review-images"
                  className="lg:w-[130px] md:w-[120px] w-[80px]"
                />
                <img
                  src={ratingImage}
                  alt="review-images"
                  className="lg:w-[130px] md:w-[120px] w-[80px]"
                />
              </div>

              <div className="text-wite flex items-center gap-1">
                <span>
                  Rated 9 out of 10 ⭐⭐⭐⭐⭐ based on 3,543 satisfied
                  customers
                </span>
              </div>
            </div>

            <div className="md:w-1/2 w-full flex md:justify-end">
              <div className="xl:w-[60%] lg:w-[75%] md:w-[85%] w-full">
                <Form />
              </div>
            </div>
          </div>
        </section>

        <div className="w-full">
          <Slider />
        </div>

        {/* 2nd Section */}
        <section className="w-full h-auto flex justify-center py-10">
          <div className="2xl:w-[80%] lg:w-[90%] md:w-[95%] sm:w-[80%] w-[90%] h-auto flex md:flex-nowrap flex-wrap gap-y-3">
            <div className="md:w-[60%] w-full  flex flex-col gap-y-2 justify-center">
              <ServiceCard />
            </div>

            <div className="md:w-[40%] md:py-10 py-5 w-full md:flex lg:justify-end">
              {/* Image for small devices */}
              <img
                src={BookImage2}
                alt="Book Mobile"
                className="md:hidden w-[100%] h-auto drop-shadow-[10px_10px_15px_rgba(0,0,0,0.4)]"
              />

              {/* Image for medium and up devices */}
              <img
                src={BookImage}
                alt="Book Desktop"
                className="hidden md:block md:w-[90%] xl:py-0 py-30  w-[100%] h-auto drop-shadow-[10px_10px_15px_rgba(0,0,0,0.4)]"
              />
            </div>
          </div>
        </section>

        {/* 3rd Section */}
        <section className="w-full h-auto flex justify-center bg-[#DDDFDF]">
          <div className="2xl:w-[80%] lg:w-[90%] md:w-[95%] sm:w-[80%] w-[90%] h-auto flex md:flex-nowrap flex-wrap gap-y-3">
            <IntroCard />
          </div>
        </section>


        <section className="bg-[#ffffff]">
          <SolutionSection />
        </section>

        <section className="2xl:w-[80%] lg:w-[90%] md:w-[95%] sm:w-[80%] w-[90%] mx-auto">
          <Portfolio />
        </section>

        <div className="sm:py-15 py-5">
          <section className="w-full h-auto bg-gradient-to-r from-[#155DFC] to-blue-800 ">
            <CTASection />
          </section>
        </div>



        <section className="w-full h-auto flex justify-center">
          <div className="2xl:w-[80%] lg:w-[90%] md:w-[95%] sm:w-[80%] w-[90%] h-auto flex md:flex-nowrap flex-wrap gap-y-3">
            <div className="md:w-[60%] w-full  flex flex-col gap-y-2 justify-center">
              <FAQ />
            </div>

            <div className="md:w-[40%] md:py-20 py-5 w-full md:flex lg:justify-end">
              {/* Image for small devices */}
              <img
                src={Book7}
                alt="Book"
                className="w-[100%] h-auto drop-shadow-[10px_10px_15px_rgba(0,0,0,0.4)]"
              />
            </div>
          </div>
        </section>




        {/* <section className="w-full min-h-[400px] bg-blue-500 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-10 lg:py-0 overflow-hidden">
         
          <div className="hidden lg:block flex-1 relative h-full min-h-[300px]">
            <img
              src={CTABook2}
              alt="Book marketing visual"
              className="w-full h-full object-cover object-left"
            />
          </div>

          
          <div className="flex-1 max-w-4xl text-center space-y-6 p-6 lg:p-10">
            <p className="text-base sm:text-lg font-semibold text-black mb-4">
              Do You Want Your Business To Profit?
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6">
              Get Help Of A Book Marketing Strategist Encouraging An ROI Marketing Approach
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                text="Get A Quote"
                className="w-full sm:w-auto px-8 py-3 text-sm sm:text-base"
              />
              <Button
                text="Live Chat"
                className="w-full sm:w-auto px-8 py-3 text-sm sm:text-base"
              />
              <Button
                text="+1 302-518-4405"
                className="w-full sm:w-auto px-8 py-3 text-sm sm:text-base bg-gray-100 hover:bg-gray-200"
              />
            </div>
          </div>

          
          <div className="hidden lg:block flex-1 relative h-full min-h-[300px]">
            <img
              src={CTABook1}
              alt="Marketing strategy visual"
              className="w-full h-full object-cover object-right"
            />
          </div>
        </section> */}


      </div>






    </>
  );
}

export default HomePage;
