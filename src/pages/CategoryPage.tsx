import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

import {
  getCategory,
} from "../services/categoriesService";

import {
  getVendorsByCategory,
} from "../services/vendorService";

import VendorCard from "../components/VendorCard";

export default function CategoryPage() {
  const { id } = useParams();

  const [category, setCategory] =
    useState<any>(null);

  const [vendors, setVendors] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) return;

        const categoryData =
          await getCategory(id);

        const vendorData =
          await getVendorsByCategory(id);

        setCategory(categoryData);

        setVendors(vendorData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return  <Spinner/>
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-2">
        {category?.name}
      </h1>

      <p className="text-zinc-500 mb-10">
        {vendors.length} vendors found
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vendors.map((vendor: any) => (
          <VendorCard
            key={vendor.id}
            vendor={vendor}
          />
        ))}
      </div>
    </div>
  );
}