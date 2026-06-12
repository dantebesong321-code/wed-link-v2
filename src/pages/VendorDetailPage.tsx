import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getVendor } from "../services/vendorService";
import { GrLanguage, GrMap, GrPhone, GrCurrency } from "react-icons/gr";
import { deleteVendor } from "../services/vendorService";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import Map from "../components/Map";




function VendorDetailPage(){

const { id } = useParams();
const [vendor, setVendor] = useState<any>(null);
const navigate = useNavigate();

useEffect(() => {
  if (!id) return;

  getVendor(id).then(setVendor);
}, [id]);

const handleDelete = async () => {
  const confirmed = window.confirm(
    "Delete this vendor?"
  );

  if (!confirmed) return;

  await deleteVendor(vendor.id);

  navigate("/");
};


if (!vendor) {
  return <Spinner/>
}

return (
  <div className="max-w-3xl mx-auto px-6 py-12 min-h-svh">


    <img
      src={vendor.imageUrl  ||
    "https://placehold.co/600x400"}
      className="
        w-150
        h-300px
        object-cover
        rounded-2xl
      "
    />

    <div className="mt-8">

      <div className="mb-12">
      <h1 className="flex items-center gap-3 text-3xl font-bold">
        {vendor.businessName}
      </h1>

      <p className="flex items-center gap-3 mt-4 text-gray-600">
        {vendor.description}
      </p>
      </div>

      <Map
  address={vendor.address}
  city={vendor.city}
  country={vendor.country}
/>

      <div className="flex items-center gap-3 mt-6">
        <GrMap size={18} /> {vendor.city}
      </div>

      <div className="flex items-center gap-3 mt-3">
        <GrCurrency size={18} /> {vendor.priceRange}
      </div>

      <div className="flex items-center gap-3 mt-3">
        <GrPhone size={18}/> {vendor.phone}
      </div>

      <div className="flex items-center gap-2 mt-3">
     
        <GrLanguage size={18} /> {vendor.website}
      </div>

    </div>

    <div className="flex gap-2 mt-10">
    <Link
  to={`/vendors/${vendor.id}/edit`}
  className="
  hover:bg-zinc-300
    bg-zinc-200
    text-black
    px-4
    py-2
    rounded-xl
  "
>
  Edit Vendor
</Link>

<button
  onClick={handleDelete}
  className="
  hover:bg-zinc-300
    bg-zinc-200
    text-black
    px-4
    py-2
    rounded-xl
  "
>
  Delete Vendor
</button>
</div>
  </div>
);
}

export default VendorDetailPage