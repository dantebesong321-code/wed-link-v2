import HeroVideo from "../assets/hero-video.mp4"
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto mb-8 px-4">
      <div className="relative overflow-hidden rounded-3xl shadow-sm" >

      <div className="hero-video" >
        <video src={HeroVideo} loop autoPlay></video>
        </div>

   
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-6">

          <h1 className="text-white text-4xl md:text-6xl font-bold max-w-4xl">
            Find Wedding Vendors
          </h1>

          <p className="text-white/90 mt-4 max-w-2xl text-lg">
            Discover photographers, makeup artists, venues and DJs
            for your special day.
          </p>
          <Link to={"/vendors"}>
          <button
            className="
              mt-8
              bg-black
              text-white
              px-6
              py-3
              rounded-md
              hover:bg-zinc-900
            "
          >
            Browse Vendors
          </button>
          </Link>

        </div>
      </div>
    </section>
  );
}