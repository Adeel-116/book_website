import React from "react";
import Header from "../components/Header";
import backgroundImage from "../assets/background.jpg";
import Button from "../components/Button";
import ratingImage from "../assets/toprating.png";
import Form from "../components/Form";
import Slider from "../components/Slider";

function HomePage() {
  return (
    <>
      <div className="w-full h-auto flex">
        <div
          className="w-full h-auto bg-cover bg-center relative"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <header className="fixed top-0 left-0 z-[100] w-full flex justify-center bg-[#F6F8FA]">
            <Header />
          </header>

          <section className="hero-Section w-full h-auto xl:py-40 py-36 flex justify-center items-center">
            <div className="2xl:w-[80%] lg:w-[90%] md:w-[95%] w-[80%] h-auto flex md:flex-nowrap flex-wrap gap-y-3">
              <div className="md:w-1/2 w-full flex flex-col gap-y-2 justify-center">
                <h6>Get your story written</h6>
                <h1 className="xl:w-[90%] w-full">
                  Become a popular author with Premium Book Publishers!
                </h1>
                <p className="xl:w-[80%] w-full">
                  It is our aim to make your stories become a reality on paper
                  allowing them to attract many readers. Our professionals
                  follow a proper approach and are creative following what is
                  trending in the writing industry. Simply tell us what your
                  plot is and we will do the rest.
                </p>

                <div className="button flex space-x-2 mt-3">
                  <Button text="Live Chat" />
                  <Button text="Get A Quote" />
                  <Button text="+1302-518-4405" />
                </div>

                <div className="flex h-auto space-x-2">
                  <img src={ratingImage} alt="review-images" className="lg:w-[130px] md:w-[120px] w-[80px]" />
                  <img src={ratingImage} alt="review-images" className="lg:w-[130px] md:w-[120px] w-[80px]"/>
                  <img src={ratingImage} alt="review-images" className="lg:w-[130px] md:w-[120px] w-[80px]"/>
                </div>

                <div className="text-wite flex items-center gap-1">
                  <span>
                    Rated 9 out of 10 ⭐⭐⭐⭐⭐ based on 3,543 satisfied
                    customers
                  </span>
                </div>
              </div>

              <div className="md:w-1/2 w-full flex md:justify-end">
                <div className="xl:w-[60%] lg:w-[75%] md:w-[85% w-full">
                  <Form />
                </div>
              </div>
            </div>
          </section>

          <div className="absolute bottom-0 left-0 w-full bg-[#00c0ff]">
            <Slider />
          </div>
        </div>

      </div>
    </>
  );
}

export default HomePage;
