import { useRef } from "react";
import { Heart, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const CardContainer = ({ children, className }) => {
  return (
    <div className={`flex flex-col justify-center items-center mt-10 gap-4 ${className}`}>
        {children}
    </div>
  )
}

const InfoCard = ({ trek }) => {
  const { name, location, price, discount, days, nights, image_url } = trek;
  return (
    <div className="bg-primary rounded-xl shadow-md overflow-hidden hover:shadow-lg transition relative group">
      {/* Image Section */}
      <div className="relative overflow-hidden h-56">
        <img
          src={image_url}
          alt={name}
          className="object-cover w-full h-full transform group-hover:scale-110 transition duration-400 cursor-pointer"
        />
        {/* Heart Icon */}
        {/* <div className="absolute top-2 right-2 rounded-full p-1 shadow-md hover:bg-red-100 cursor-pointer transition">
          <Heart className="text-primary w-5 h-5 fill-black/20" />
        </div> */}
      </div>

      {/* Info Section */}
      <div className="p-4 space-y-10">
        <div>
            <h3 className="text-lg font-semibold hover:text-style cursor-pointer">{name}</h3>
            <p className="text-sm text-gray-500 flex items-center gap-1"><MapPin className="w-4"/>{location.region}, {location.state}</p>
            <div className="h-[1px] w-full bg-zinc-400/30 mt-4"></div>
        </div>
        <div>
            {discount>0 && <p className="text-sm font-bold text-zinc-400 line-through">₹{price}</p>}
            <div className="flex justify-between items-center text-sm">
            <span className="text-red-500 font-semibold">₹{discount?price-(discount/100)*price:price}</span>
            <span className="text-gray-600">{days}D / {nights}N</span>
            </div>
        </div>
      </div>
    </div>
  );
};

const Carousel = ({ treks }) => {
    if(!treks || treks.length === 0) return "No treks available!";
    const scrollRef = useRef(null);
  
    const scroll = (direction) => {
      const container = scrollRef.current;
      if (!container) return;
  
      const cardWidth = 316; // 300px card + 16px gap (gap-4 = 1rem)
      container.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    };
  
    return (
        <div className="relative w-full max-w-[1280px] mx-auto">
        {/* Arrows */}
        <div className="absolute -left-5 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={() => scroll('left')}
            className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="absolute -right-5 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={() => scroll('right')}
            className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      
        {/* Scrollable List Without Padding */}
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden scroll-smooth py-4"
        >
          {/* Card wrapper with spacing */}
          <div className="flex gap-4 ml-auto mr-auto pl-4 pr-4">
            {treks.map((trek) => (
              <div
                key={trek.id}
                className="w-[300px] flex-shrink-0"
              >
                <InfoCard trek={trek} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export { InfoCard, Carousel, CardContainer };
