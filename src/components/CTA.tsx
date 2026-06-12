import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section
      className="
      bg-black
      text-white
      rounded-3xl
      py-16
      px-8
      text-center
      my-20
    "
    >
      <h2 className="text-4xl font-bold">
        Ready To Plan Your Wedding?
      </h2>

      <p className="mt-4 text-gray-300">
        Browse top-rated vendors and
        build your dream wedding.
      </p>

      <Link to= {"/vendors"}>
      <button
        className="
        mt-8
        hover:bg-zinc-200
        bg-white
        text-black
        px-6
        py-3
        rounded-md
        font-medium
      "
      >
        Explore Vendors for free
      </button>
      </Link>
    </section>
  );
}