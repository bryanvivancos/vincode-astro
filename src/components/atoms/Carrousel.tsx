import React, { useRef } from "react";
import { Icon } from "../icons/Icon";
import { others_projects } from "../../CONSTANTS";

interface CarrouselItem {
  src: string;
  href: string;
  title: string;
}

interface CarrouselProps {
  items: CarrouselItem[];
  autoPlay?: boolean;
  interval?: number;
}

const ITEM_WIDTH_REM = 16; // w-64 => 16rem

const Carrousel: React.FC<CarrouselProps> = ({
  items,
  // autoPlay = true,
  // interval = 3000, 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.9;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // useEffect(() => {
  //   if (autoPlay) {
  //     intervalRef.current = setInterval(() => scroll("right"), interval);
  //     return () => {
  //       if (intervalRef.current) clearInterval(intervalRef.current);
  //     };
  //   }
  // }, [autoPlay, interval]);

  const paddingCalc = `calc((100% - ${ITEM_WIDTH_REM}rem) / 12)`;

  return (
    <div className="relative w-full">

      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 hover:opacity-50 h-full p-2 shadow-md z-20"
        aria-label="anterior"
      >
        
        <Icon
        name="ChevronLeftIcon"
        className={`-mx-6 w-24 h-full text-white ${others_projects.length <= 4 ? "hidden" : ""}`} 
        />
      </button>


      <div ref={containerRef}
        className={`flex items-center ${others_projects.length <= 4 ? "justify-center" : ""} h-96 gap-6 overflow-x-scroll snap-x snap-mandatory scrollbar-hide scroll-smooth animate-slide-in-top`}
        style={{
          paddingLeft: paddingCalc,
          paddingRight: paddingCalc,
          // scroll-padding hace que el snap-center tenga en cuenta ese padding
          scrollPaddingLeft: paddingCalc,
          scrollPaddingRight: paddingCalc,
        }}>

        {others_projects.map((item, index) => (
          <div
            key={index}
            className="shrink-0 w-64 snap-center flex flex-col items-center"
          >
            <a href={item.url} target="_blank" className={`border border-transparent rounded-lg flex flex-col gap-3 transition-all transform duration-300 ease-in-out hover:border-primary hover:-translate-y-1 overflow-hidden`}>
              <img
                src={item.img}
                alt={`imagen de ${item.title}`}
                className="w-full h-full object-cover overflow-hidden"
              />
              <p className="mt-1 text-lg font-semibold text-white text-center pb-4">
                {item.title}
              </p>
            </a>
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 hover:opacity-50 h-full p-2 shadow-md z-10"
      >
        <Icon
        name="ChevronRightIcon"
        className={`-mr-8 w-24 h-24 text-white ${others_projects.length <= 4 ? "hidden" : ""}`} />
      </button>
    </div>
  );
};

export default Carrousel;