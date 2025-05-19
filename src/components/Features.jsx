import {
  ShieldCheck,
  UsersRound,
  CalendarCheck,
  MapPinned,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Local Guides",
    desc: "Trained professionals who ensure your safety and provide authentic experiences.",
  },
  {
    icon: UsersRound,
    title: "Thousands of Happy Trekkers",
    desc: "Trusted by a growing community of adventurers across India.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Cancellation",
    desc: "Change of plans? Enjoy hassle-free rescheduling and refund options.",
  },
  {
    icon: MapPinned,
    title: "Accurate Trail Info",
    desc: "Get up-to-date itineraries, trail difficulty, and altitude profiles.",
  },
];
const stats = [
  {title:"5000+", sub:"Happy Trekkers"},
  {title:"98%", sub:"Satisfaction Rate"},
  {title:"100+", sub:"Trekking Locations"},
  {title:"5 Star", sub:"Rated Company"},
]

export default function Features() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Why Choose Us?</h2>
        <p className="text-gray-500 text-lg">
          Your trusted partner for unforgettable trekking experiences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map(({ icon: Icon, title, desc }, index) => (
          <div
            key={index}
            className="flex gap-4 items-start bg-white p-6 rounded-xl shadow hover:shadow-md transition"
          >
            <div className="bg-primary/10 p-3 rounded-full">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-1">{title}</h4>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 mt-20">
        {stats.map(({title, sub}, index) => (
          <div key={index} className="flex flex-col items-center">
            <h4 className="text-7xl font-bold text-accent mb-1">{title}</h4>
            <p className="text-gray-500 text-lg">{sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
