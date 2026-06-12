import type { Vendor } from "../types/vendor";
import VendorCard from "./VendorCard";
import { GrFormNext } from "react-icons/gr";
import { Link } from "react-router-dom";

interface FeaturedProps {
  vendors: Vendor[];
}

export default function FeaturedVendors({
  vendors,
}: FeaturedProps) {
  return (
    <section className="mb-20">
      <div className="flex justify-between items-center">
      <div className="mb-8">
        <h2
          className="
          text-3xl
          font-bold
        "
        >
          Featured Vendors
        </h2>

        <p className="text-gray-500 mt-2">
          Discover talented wedding professionals.
        </p>
      </div>
      <Link
  to="/vendors"
  className="
    flex
    gap-1
    items-center
    hover:text-zinc-500
    transition
  "
>
  <p>See more</p>
  <GrFormNext size={16} />
</Link>

    
     </div>

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
      "
      >
        {vendors.map((vendor) => (
          <VendorCard
            key={vendor.id}
            vendor={vendor}
          />
        ))}
      </div>
    </section>
  );
}