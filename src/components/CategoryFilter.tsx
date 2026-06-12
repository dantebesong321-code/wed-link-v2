import { FiCamera } from "react-icons/fi";
import { 
  GrRestaurant, 
  GrMusic,
  GrSpa, 
  GrMapLocation, 
  GrUserFemale 
} from "react-icons/gr";
import { useState, useEffect } from "react";
import { getCategories } from "../services/categoriesService";

interface Category {
  id: string;
  name: string;
}

// 1. Accept the category filter props from DiscoverSection
interface CategoryFilterProps {
  selectedCategory: string | null;
  setSelectedCategory: (id: string | null) => void;
}

const iconMap: Record<string, any> = {
  Photography: FiCamera,
  Decoration: GrSpa,
  DJ: GrMusic,
  Makeup: GrUserFemale, 
  Venue: GrMapLocation,
  Catering: GrRestaurant,
};

function CategoryFilter({ selectedCategory, setSelectedCategory }: CategoryFilterProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <section className="mt-8">
      <div className="flex justify-center flex-wrap lg:gap-4 gap-2">
        
        {/* 2. Add an "All Categories" reset switch button */}
        <button
          onClick={() => setSelectedCategory(null)}
          className={`
            flex items-center gap-2 px-5 py-3 rounded-full border transition font-medium text-sm
            ${!selectedCategory 
              ? "bg-black text-white border-black" 
              : "bg-white text-zinc-800 border-zinc-200 hover:bg-zinc-50"
            }
          `}
        >
          All Vendors
        </button>

        {categories.map((category) => {
          const Icon = iconMap[category.name] || FiCamera;
          const isSelected = selectedCategory === category.id;

          return (
           
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                flex items-center gap-2 px-5 py-3 rounded-full border transition font-medium text-sm
                ${isSelected 
                  ? "bg-black text-white border-black" 
                  : "bg-white text-zinc-800 border-zinc-200 hover:bg-zinc-50"
                }
              `}
            >
              <Icon size={16} />
              {category.name}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default CategoryFilter;