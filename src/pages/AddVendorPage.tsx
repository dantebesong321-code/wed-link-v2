import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";
import { createVendor } from "../services/vendorService";

interface Category {
  id: string;
  name: string;
}

interface VendorFormData {
  name: string;
  businessName: string;
  description: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  city: string;
  country: string;
  imageUrl: string;
  priceRange: string;
  categoryId: string;
}

const initialFormState: VendorFormData = {
  name: "",
  businessName: "",
  description: "",
  email: "",
  phone: "",
  website: "",
  address: "",
  city: "",
  country: "",
  imageUrl: "",
  priceRange: "",
  categoryId: "",
};

export default function AddVendorPage() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState<Category[]>([]);
  const [formData, setFormData] =
    useState<VendorFormData>(initialFormState);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("/categories");

        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

 
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(null);

      const vendor = await createVendor(formData);

      navigate(`/vendors/${vendor.id}`);
    } catch (error) {
      console.error(error);

      setError(
        "Failed to create vendor. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-2">
        Add Vendor
      </h1>

      <p className="text-zinc-500 mb-8">
        Create a new wedding vendor profile.
      </p>

      {error && (
        <div className="mb-6 p-4 rounded-lg border border-red-200 bg-red-50 text-red-600">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        
        <div>
          <label className="block text-sm font-medium mb-2">
            Owner Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-zinc-200 p-3 rounded-lg"
            required
          />
        </div>

       
        <div>
          <label className="block text-sm font-medium mb-2">
            Business Name
          </label>

          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            className="w-full border border-zinc-200 p-3 rounded-lg"
            required
          />
        </div>

        {/* Category Dropdown */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Category
          </label>

          <select
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            className="
              w-full
              border
              border-zinc-200
              p-3
              rounded-lg
              bg-white
            "
            required
          >
            <option value="">
              Select Category
            </option>

            {categories.map((category) => (
              <option
                key={category.id}
                value={category.id}
              >
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Description
          </label>

          <textarea
            rows={4}
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-zinc-200 p-3 rounded-lg"
          />
        </div>

        {/* Email + Phone */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-zinc-200 p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Phone
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-zinc-200 p-3 rounded-lg"
            />
          </div>
        </div>

        {/* Website */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Website
          </label>

          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full border border-zinc-200 p-3 rounded-lg"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Address
          </label>

          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-zinc-200 p-3 rounded-lg"
          />
        </div>

        {/* City + Country */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              City
            </label>

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full border border-zinc-200 p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Country
            </label>

            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border border-zinc-200 p-3 rounded-lg"
            />
          </div>
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Image URL
          </label>

          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="https://..."
            className="w-full border border-zinc-200 p-3 rounded-lg"
          />

          {formData.imageUrl && (
            <img
              src={formData.imageUrl}
              alt="Preview"
              className="
                mt-4
                w-full
                h-60
                object-cover
                rounded-xl
              "
            />
          )}
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Price Range
          </label>

          <select
            name="priceRange"
            value={formData.priceRange}
            onChange={handleChange}
            className="
              w-full
              border
              border-zinc-200
              p-3
              rounded-lg
              bg-white
            "
          >
            <option value="">
              Select Price Range
            </option>

            <option value="$">$ Budget</option>
            <option value="$$">$$ Standard</option>
            <option value="$$$">$$$ Premium</option>
            <option value="$$$$">$$$$ Luxury</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            bg-black
            text-white
            py-4
            rounded-lg
            font-medium
            hover:bg-zinc-800
            transition
            disabled:opacity-50
          "
        >
          {loading
            ? "Creating Vendor..."
            : "Create Vendor"}
        </button>
      </form>
    </div>
  );
}