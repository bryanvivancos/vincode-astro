import React, { useRef } from "react";
import { Icon } from "../icons/Icon";

interface CarrouselItem {
  img: string;
  url: string;
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

  return (
    <div className="relative w-full overflow-hidden timeline-view animate-bounce-fade-in animate-range-[entry_10%_cover_40%] mt-8">

      <button
        onClick={() => scroll("left")}
        className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 group ${items.length <= 4 ? "hidden" : ""}`}
        aria-label="anterior"
      >
        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
          <Icon
            name="ChevronLeftIcon"
            className="w-6 h-6 text-white"
          />
        </div>
      </button>


      <div ref={containerRef}
        className={`flex items-center ${items.length <= 4 ? "justify-center flex-wrap" : "overflow-x-auto"} gap-6 py-4 px-4 scrollbar-hide scroll-smooth`}>

        {items.map((item, index) => (
          <div
            key={index}
            className="shrink-0 w-64 snap-center flex flex-col items-center"
          >
            <a href={item.url} target="_blank" className="bg-background-card border border-border rounded-xl overflow-hidden transition-all duration-300 ease-out hover:border-primary hover:shadow-lg hover:-translate-y-1 group">
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={`imagen de ${item.title}`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="p-4 text-base font-semibold text-white text-center group-hover:text-primary transition-colors duration-300">
                {item.title}
              </p>
            </a>
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 group ${items.length <= 4 ? "hidden" : ""}`}
        aria-label="siguiente"
      >
        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
          <Icon
            name="ChevronRightIcon"
            className="w-6 h-6 text-white"
          />
        </div>
      </button>
    </div>
  );
};

export default Carrousel;