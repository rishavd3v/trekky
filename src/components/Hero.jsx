import { Link } from "react-router-dom";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <div
      className="relative bg-cover bg-center flex justify-center items-center text-primary rounded-xl mt-20"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        height: "calc(100vh - 100px)",
      }}
    >
      <div className="absolute inset-0 bg-black/30 rounded-xl"></div>

      <div className="relative z-10 items-center text-center px-4 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-7xl font-bold">Discover Exciting Treks</h1>
          <p className="text-xl font-semibold">
            Explore Stunning Hiking Trails in India
          </p>
        </div>

        <div className="mt-6">
          <Link to={"/treks"}><Button>Explore</Button></Link>
        </div>
      </div>
    </div>
  );
}
