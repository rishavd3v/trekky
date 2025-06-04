import { MapPin } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useClickAway } from "react-use";
import useTrekStore from "../store/trekStore";

const SearchBar = ({ data, onSearch }) => {
  const [query, setQuery] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const containerRef = useRef(null);
  const getUniqueLocations = useTrekStore((state) => state.getUniqueLocations);

  useClickAway(containerRef, () => setShowDropdown(false));

  const uniqueLocations = getUniqueLocations();

  useEffect(() => {
    setFilteredLocations(uniqueLocations);
  }, [data]);

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
    
    const filtered = uniqueLocations.filter((loc) => {
      const combined = `${loc.state}, ${loc.region}`.toLowerCase();
      return combined.includes(value);
    });
  
    setFilteredLocations(filtered);
    setShowDropdown(true);
  };

  const handleSelect = (loc) => {
    const selected = `${loc.state}, ${loc.region}`;
    setQuery(selected);
    setShowDropdown(false);
    onSearch(selected);
  };

  const handleSearch = () => {
    onSearch(query);
    setShowDropdown(false);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-md mx-auto">
      <div className="pl-2 flex justify-between bg-primary border border-gray-300 items-center rounded-full">
        <div className="flex items-center focus:outline-none gap-2 px-2">
          <MapPin className="w-5" />
          <div>
            <input
              type="text"
              placeholder="Enter location..."
              value={query}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              onFocus={() => setShowDropdown(true)}
              className="w-full focus:outline-none"
            />
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="bg-blue text-white px-10 py-4 rounded-full m-2 hover:bg-blue-600 transition cursor-pointer font-semibold"
        >
          Search
        </button>
      </div>

      {showDropdown && filteredLocations.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-200 rounded-lg mt-2 w-full max-h-60 overflow-y-auto shadow-md">
          {filteredLocations.map((loc, index) => (
            <li
              key={`${loc.state}-${loc.region}-${index}`}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(loc)}
            >
              {loc.state}, {loc.region}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;