import {
  FiSearch,
  FiGrid,
  FiHeart,
} from "react-icons/fi";

const steps = [
  {
    icon: FiSearch,
    title: "Search",
    description:
      "Browse wedding vendors by category, location, or keyword.",
  },
  {
    icon: FiGrid,
    title: "Compare",
    description:
      "View photos, services, pricing, and details to find the right match.",
  },
  {
    icon: FiHeart,
    title: "Connect",
    description:
      "Save favorites and contact vendors directly for your big day.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-2 mb-10">
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold mb-3">
          How It Works
        </h2>

        <p className="text-zinc-500 max-w-xl mx-auto">
          Finding your dream wedding team takes only a few minutes.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="
                bg-white
                border
                border-zinc-200
                rounded-2xl
                p-8
                text-center
                relative
              "
            >
              <div
                className="
                  absolute
                  top-4
                  right-4
                  text-zinc-100
                  text-5xl
                  font-bold
                "
              >
                0{index + 1}
              </div>

              <div className="flex justify-center mb-5">
                <div
                  className="
                    w-14
                    h-14
                    rounded-full
                    bg-zinc-100
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Icon size={24} />
                </div>
              </div>

              <h3 className="font-semibold text-xl mb-3">
                {step.title}
              </h3>

              <p className="text-zinc-500">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}