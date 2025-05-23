import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const ItineraryCard = ({ title, itinerary = [], index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleCard = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen, itinerary]);

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm transition-all duration-300 overflow-hidden">
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3 bg-gray-50 cursor-pointer hover:bg-gray-100"
        onClick={toggleCard}
      >
        <h3 className="text-lg font-semibold">Day {index+1}: {title}</h3>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </div>

      {/* Animated Body */}
      <div
        className="transition-all duration-300 ease-in-out"
        style={{ maxHeight: `${height}px` }}
      >
        <div ref={contentRef} className="px-6 py-4 text-gray-700">
          <ul className="list-disc pl-4 space-y-2">
            {itinerary.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItineraryCard;