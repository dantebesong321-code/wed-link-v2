import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { getVendor, updateVendor } from "../services/vendorService";
import api from "../services/api";

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

export default function EditVendorPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState<VendorFormData>(initialFormState);

  const [categories, setCategories] =
    useState<Category[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;

      try {
        setLoading(true);

        const [vendorResponse, categoriesResponse] =
          await Promise.all([
            getVendor(id),
            api.get("/categories"),
          ]);

        setFormData({
          ...initialFormState,
          ...vendorResponse,
        });

        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error(error);
        setError("Could not load vendor details.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
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

    if (!id) return;

    try {
      setSaving(true);
      setError(null);

      await updateVendor(id, formData);

      navigate(`/vendors/${id}`);
    } catch (error) {
      console.error(error);

      setError(
        "Failed to update vendor. Please try again."
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-20">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-2">
        Edit Vendor
      </h1>

      <p className="text-zinc-500 mb-8">
        Update vendor information.
      </p>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Owner Name */}
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
          />
        </div>

        {/* Business Name */}
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
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Category
          </label>

          <select
            name="categoryId"
            value={formData.categoryId}
            onChange={(e) =>
              setFormData({
                ...formData,
                categoryId: e.target.value,
              })
            }
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
              alt={formData.businessName}
              className="
                mt-4
                h-60
                w-full
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
            value={formData.priceRange}
            onChange={(e) =>
              setFormData({
                ...formData,
                priceRange: e.target.value,
              })
            }
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

            <option value="$">
              $ Budget
            </option>

            <option value="$$">
              $$ Standard
            </option>

            <option value="$$$">
              $$$ Premium
            </option>

            <option value="$$$$">
              $$$$ Luxury
            </option>
          </select>
        </div>

        <button
          type="submit"
          disabled={saving}
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
          {saving
            ? "Updating Vendor..."
            : "Update Vendor"}
        </button>
      </form>
    </div>
  );
}