import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

// 1. EXTENDED INTERFACE TO SUPPORT CATEGORIES
interface DiscoverSectionProps {
  search: string;
  setSearch: (value: string) => void;
  selectedCategory: string | null;
  setSelectedCategory: (id: string | null) => void;
}

export default function DiscoverSection({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
}: DiscoverSectionProps) {
  
  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Discover Vendors</h2>
        <p className="text-zinc-500">
          Search by vendor name or browse categories
        </p>
      </div>

      <SearchBar value={search} onChange={setSearch} />

     
      <CategoryFilter 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />
    </section>
  );
}