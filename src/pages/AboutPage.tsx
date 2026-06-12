import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          About WedLink
        </h1>

        <p className="text-zinc-600 max-w-2xl mx-auto">
          WedLink helps couples discover trusted wedding
          vendors in one place. From photographers and
          venues to catering and makeup artists, finding
          the right professionals for your special day
          should be simple and enjoyable.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white border border-zinc-200 rounded-2xl p-6">
          <h2 className="font-bold text-xl mb-3">
            Our Mission
          </h2>

          <p className="text-zinc-600">
            Simplify wedding planning by connecting
            couples with quality vendors.
          </p>
        </div>

        <div className="bg-white border border-zinc-200 rounded-2xl p-6">
          <h2 className="font-bold text-xl mb-3">
            Trusted Vendors
          </h2>

          <p className="text-zinc-600">
            Browse vendors, compare options and find the
            perfect match for your wedding.
          </p>
        </div>

        <div className="bg-white border border-zinc-200 rounded-2xl p-6">
          <h2 className="font-bold text-xl mb-3">
            Easy Planning
          </h2>

          <p className="text-zinc-600">
            Save time by having all wedding services in
            one platform.
          </p>
        </div>
      </div>

      <div className="bg-zinc-100 rounded-3xl p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Start Exploring Vendors
        </h2>

        <p className="text-zinc-600 mb-6">
          Discover photographers, venues, catering and
          more.
        </p>

        <Link
          to="/vendors"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Browse Vendors
        </Link>
      </div>
    </div>
  );
}