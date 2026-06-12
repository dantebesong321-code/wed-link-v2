import { useEffect, useState } from "react";
import type { Vendor } from "../types/vendor";

import { getVendors } from "../services/vendorService";

import VendorCard from "../components/VendorCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import Spinner from "../components/Spinner";

export default function VendorsPage() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState<string | null>(null);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const data = await getVendors();
        setVendors(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchVendors();
  }, []);

  const filteredVendors = vendors.filter((vendor) => {
    const businessName = vendor.businessName || "";
    const city = vendor.city || "";
    const description = vendor.description || "";

    const matchesSearch =
      businessName
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      city
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      description
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      !selectedCategory ||
      vendor.categoryId === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return <Spinner />
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">
          Find Your Perfect Vendor
        </h1>

        <p className="text-zinc-500">
          Browse photographers, venues, makeup artists,
          DJs and more.
        </p>
      </div>

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="my-8">
        <p className="text-zinc-500">
          {filteredVendors.length} vendors found
        </p>
      </div>

      {filteredVendors.length === 0 ? (
        <div className="text-center py-20">
          <h3 className="text-xl font-semibold mb-2">
            No vendors found
          </h3>

          <p className="text-zinc-500">
            Try another search term.
          </p>
        </div>
      ) : (
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >
          {filteredVendors.map((vendor) => (
            <VendorCard
              key={vendor.id}
              vendor={vendor}
            />
          ))}
        </div>
      )}
    </div>
  );
}