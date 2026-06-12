import type { Vendor } from "../types/vendor";
import { FiMapPin } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

interface VendorCardProps {
  vendor: Vendor;
}

export default function VendorCard({
  vendor,
}: VendorCardProps) {

  return (
    <Link to={`/vendors/${vendor.id}`}>
    <div
      className="
      bg-white
      rounded-2xl
      h-130
      overflow-hidden
      shadow-sm
      hover:shadow-lg
      transition-all
      duration-300
      border
      border-gray-100
    "
    >
      <img
        src={vendor.imageUrl}
        alt={vendor.businessName}
        className="
        
        w-full
          h-64
          object-cover
        "
      />

      <div className="p-5">
        <span
          className="
          inline-block
          bg-gray-100
          text-xs
          px-3
          py-1
          rounded-full
          mb-3
        "
        >
          {vendor.category.name}
        </span>

        <h3 className="text-xl font-semibold">
          {vendor.businessName}
        </h3>

        <p className="text-gray-500 mt-2 line-clamp-2">
          {vendor.description}
        </p>

        <div className="flex items-center gap-2 mt-4">
          <FiMapPin />
          <span>
            {vendor.city}, {vendor.country}
          </span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="font-medium">
            {vendor.priceRange}
          </span>

          <div className="flex items-center gap-1">
            <FaStar />
            <span>5.0</span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}