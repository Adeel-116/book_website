import React, { useEffect, useRef } from "react";
import brandImage from "../assets/brandImage.png";

function Slider() {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const scrollSpeed = 0.5; // adjust this for slower/faster speed

    const scroll = () => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        container.scrollLeft += scrollSpeed;

        // Looping logic
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
          container.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <div className="w-full bg-[#00c0ff] py-5.5 flex justify-center items-center">
      <div
        ref={scrollRef}
        className="w-[80%] flex md:px-10 md:gap-x-30 gap-x-15 scroll-smooth no-scrollbar overflow-hidden"
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex-shrink-0">
            <img src={brandImage} alt={`brand-${i}`} className="xl:w-[160px] lg:w-[150px] md:w-[120px] w-[110px]" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
