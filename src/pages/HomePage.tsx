import { useEffect, useState } from "react";

import Hero from "../components/Hero";
import FeaturedVendors from "../components/FeaturedVendors";
import InspirationCarousel from "../components/InspirationCarousel";
import BenefitsSection from "../components/BenefitsSection";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";
import Spinner from "../components/Spinner";

import { getVendors } from "../services/vendorService";
import type { Vendor } from "../types/vendor";

export default function HomePage() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const data = await getVendors();
        setVendors(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchVendors();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="max-w-7xl mx-auto px-6">
      <Hero />

      <BenefitsSection />

      <FeaturedVendors
        vendors={vendors.slice(0, 3)}
      />

      <HowItWorks />

      <InspirationCarousel />

      <CTA />
    </div>
  );
}