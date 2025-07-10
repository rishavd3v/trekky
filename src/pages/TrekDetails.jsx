import { useParams } from "react-router-dom";
import useTrekStore from "../store/trekStore";
import { useEffect, useState } from "react";
import ImageGrid from "../components/ImageGrid";
import { Heading, LightText } from "../components/ui/Text";
import {
  Check,
  Clock,
  Dumbbell,
  Footprints,
  MapPin,
  Mountain,
  X,
} from "lucide-react";
import ItineraryCard from "../components/ItineraryCard";
import FAQCard from "../components/FAQ";
import LoadingSpinner from "../components/LoadingSpinner";
import { ErrorPage, TrekNotFound } from "../components/Error";

export default function TrekDetails() {
  const { slug } = useParams();
  const loading = useTrekStore((state)=>state.loading);
  const error = useTrekStore((state)=>state.error);
  const getTrekBySlug = useTrekStore((state) => state.getTrekBySlug);
  const treks = useTrekStore((state) => state.treks);
  const [trek, setTrek] = useState();


  useEffect(() => {
    setTrek(getTrekBySlug(slug));
  }, [treks,slug]);

  if(loading) return <LoadingSpinner/>
  if(error) return <ErrorPage/>
  
  if (!trek && !loading) return <TrekNotFound/>

  return (
    trek && (
      <div className="mx-24 mt-24 flex flex-col gap-16">
        <section>
          <Heading className="">{trek.name}</Heading>
          <div className="py-2 flex gap-1">
            <MapPin className="w-4 text-accent" />
            <LightText>
              {trek.region}, {trek.state}, India
            </LightText>
          </div>
        </section>

        <section>
          <ImageGrid />
        </section>

        <section className="grid grid-cols-3">
          <div className="col-span-2">
            <div className="flex gap-14 items-center">
              <SmallInfoCard
                icon={<Dumbbell className="w-5" />}
                title={"Difficulty"}
                desc={`${trek.difficulty}`}
              />
              <SmallInfoCard
                icon={<Clock className="w-5" />}
                title={"Duration"}
                desc={`${trek.days} Days ${trek.nights} Nights`}
              />
              <SmallInfoCard
                icon={<Mountain className="w-5" />}
                title={"Altitude"}
                desc={`${trek.altitude} meters`}
              />
              <SmallInfoCard
                icon={<Footprints className="w-5" />}
                title={"Distance"}
                desc={`${trek.distance} km`}
              />
            </div>

            <div className="mt-8">
              <div className="space-y-2">
                <Title>About</Title>
                <Desc>{trek.about}</Desc>
              </div>
              <div className="mt-4">
                <ul>
                  <li>
                    <span className="font-semibold">State: </span>
                    {trek.state}
                  </li>
                  <li>
                    <span className="font-semibold">Region: </span>
                    {trek.region}
                  </li>
                  <li>
                    <span className="font-semibold">Start/End Point: </span>
                    {trek.from} to {trek.to}
                  </li>
                  <li>
                    <span className="font-semibold">Duration: </span>
                    {`${trek.days}D/${trek.nights}N`}
                  </li>
                  <li>
                    <span className="font-semibold">Trek Distance: </span>
                    {trek.distance} km
                  </li>
                  <li>
                    <span className="font-semibold">Altitude: </span>
                    {trek.altitude.toLocaleString()} meters (
                    {(trek.altitude * 3.28).toLocaleString(undefined, {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    })}{" "}
                    ft)
                  </li>
                  <li>
                    <span className="font-semibold">Difficulty Level: </span>
                    {trek.difficulty}
                  </li>
                  <li>
                    <span className="font-semibold">Best Season: </span>
                    {trek.months[0]} to {trek.months[trek.months.length - 1]}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>{/* payment card */}</div>
        </section>

        {trek.highlights.length > 0 && (
          <section>
            <Title>Highlights</Title>
            <div className="space-y-3 mt-4">
              {trek.highlights.map((text,index) => {
                return (
                  <div className="flex items-center gap-2" key={index}>
                    <Check className="w-5 h-5 p-1 text-green-700 bg-green-200  rounded-full" />
                    <p>{text}</p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {trek.inclusion.length > 0 && trek.exclusion.length > 0 && (
          <section>
            <Title>Inclusion/Exclusion</Title>
            <div className="grid grid-cols-2">
              <div className="space-y-3 mt-4 col-span-1">
                {trek.inclusion.map((text,index) => {
                  return (
                    <div className="flex items-center gap-2" key={index}>
                      <Check className="w-5 h-5 p-1 text-green-700 bg-green-200  rounded-full" />
                      <p>{text}</p>
                    </div>
                  );
                })}
              </div>
              <div className="space-y-3 mt-4">
                {trek.exclusion.map((text, index) => {
                  return (
                    <div className="flex items-center gap-2" key={index}>
                      <X className="w-5 h-5 p-1 text-red-700 bg-red-200  rounded-full" />
                      <p>{text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}
        
        {trek.itinerary.length>0 && <section>
          <Title>Itinerary</Title>

          <div className="space-y-3 mt-4">
            {trek.itinerary.map((day, index)=>{
              return(
                <ItineraryCard title={day.title} itinerary={day.body} index={index} key={index}/>
              )
            })}
          </div>
        </section>}

        {trek.faq.length > 0 && <section>
          <Title>Frequently Asked Questions</Title>
          <div className="space-y-3 mt-4">
            {trek.faq.map((item, index) => {
              return (
                <FAQCard title={item.question} faq={item.answer} key={index}/>
              );
            })}
          </div>
        </section>}

        
      </div>
    )
  );
}

function Title({ children }) {
  return <h1 className="text-2xl font-semibold">{children}</h1>;
}
function Desc({ children }) {
  return <h1 className="">{children}</h1>;
}
function SmallInfoCard({ title, desc, icon }) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-accent p-3 border border-gray-300 rounded-lg aspect-square">
        {icon}
      </div>
      <div className="">
        <p className="font-bold">{title}</p>
        <p className="text-accent text-sm">{desc}</p>
      </div>
    </div>
  );
}
