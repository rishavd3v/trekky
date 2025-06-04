import { useEffect, useState } from "react";
import { InfoCard } from "../components/Cards";
import Pagination from "../components/ui/Pagination";
import SearchBar from "../components/SearchBar";
import useTrekStore from "../store/trekStore";
import { useSearchParam } from "react-use";
import { useNavigate } from "react-router-dom";

export default function Trek() {
    const treks = useTrekStore((state)=>state.treks);
    const sampleTrek = treks;

    const navigate = useNavigate();
    const getTrekByLocation = useTrekStore((state)=>state.getTrekByLocation);
    const getFilteredTreks = useTrekStore((state)=>state.getFilteredTreks);

    const destinationQuery = useSearchParam("destination");
    const difficultyQuery = useSearchParam("difficulty");
    const seasonQuery = useSearchParam("season");

    const [filteredTreks, setFilteredTreks] = useState(sampleTrek);
    const [selectedLocation, setSelectedLocation] = useState(null);
    
    const cardsPerPage = 12;
    const totalPages = Math.ceil(filteredTreks.length / cardsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=>{
        if(destinationQuery || difficultyQuery || seasonQuery){
            setFilteredTreks(getFilteredTreks({
                location: destinationQuery ? destinationQuery : null,
                difficulty: difficultyQuery ? (difficultyQuery==="challenging"?"hard":difficultyQuery) : null,
                season: seasonQuery ? seasonQuery : null
            }));
        }
        else{
            setFilteredTreks(sampleTrek);
        }
        setCurrentPage(1);
    },[destinationQuery,difficultyQuery,seasonQuery,treks]);

    const onSearch = (query)=>{
        setSelectedLocation(query);
        navigate('/treks');
        setCurrentPage(1);
        setFilteredTreks(getTrekByLocation(query));
    }

    const startIndex = (currentPage - 1) * cardsPerPage;
    const currentTreks = filteredTreks.slice(startIndex, startIndex + cardsPerPage);

    useEffect(() => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    }, [currentPage]);

    return (
        <div className="flex flex-col gap-4">
            <section className="relative bg-cover bg-center py-16"
             style={{ backgroundImage: `url('/images/bg1.jpg')` }}>
                <div className="absolute inset-0 bg-black/30"></div>
                <SearchBar data={sampleTrek} onSearch={onSearch} />
            </section>

            <div className="mx-24 mt-8">
                <section>
                    <p className="text-accent mb-4">{filteredTreks.length} treks found{filteredTreks.length>0 &&
                    (seasonQuery||destinationQuery||difficultyQuery||selectedLocation) && " : " + (destinationQuery || seasonQuery || difficultyQuery || selectedLocation).toUpperCase()}</p>
                </section>

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {currentTreks.map((trek) => (
                    <InfoCard key={trek.id} trek={trek} />
                    ))}
                </section>

                <div className="mt-10">
                    <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
}
