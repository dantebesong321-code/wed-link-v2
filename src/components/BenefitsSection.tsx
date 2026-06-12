import {
  FiUsers,
  FiSearch,
  FiMapPin,
  FiHeart,
} from "react-icons/fi";

const benefits = [
  {
    icon: FiUsers,
    title: "All Vendors in One Place",
    description:
      "Photographers, venues, caterers, DJs and more — all organized in one simple directory.",
  },
  {
    icon: FiSearch,
    title: "Quick & Easy Search",
    description:
      "Find trusted wedding professionals instantly using search and category filters.",
  },
  {
    icon: FiMapPin,
    title: "Find Vendors Near You",
    description:
      "Explore vendors by city and location to discover services available in your area.",
  },
  {
    icon: FiHeart,
    title: "Save Your Favorites",
    description:
      "Build your shortlist and keep track of the vendors you love most.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-2 mb-10"> 
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-3">
          Why Couples Love WedLink
        </h2>

        <p className="text-zinc-500 max-w-2xl mx-auto">
          Planning your wedding should feel exciting, not overwhelming.
          WedLink helps you discover and compare vendors effortlessly.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <div
              key={benefit.title}
              className="
                bg-white
                p-8
                rounded-2xl
                border
                border-zinc-200
                hover:shadow-lg
                transition
              "
            >
              <div className="mb-4">
                <Icon
                  size={28}
                  className="text-black"
                />
              </div>

              <h3 className="font-semibold text-lg mb-2">
                {benefit.title}
              </h3>

              <p className="text-zinc-500 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}