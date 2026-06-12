interface MapProps {
  address: string;
  city: string;
  country: string;
}

export default function Map({
  address,
  city,
  country,
}: MapProps) {
  const location = encodeURIComponent(
    `${address}, ${city}, ${country}`
  );

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">
        Location
      </h3>

      <iframe
        title="vendor-location"
        width="100%"
        height="350"
        loading="lazy"
        className="rounded-2xl border"
        src={`https://maps.google.com/maps?q=${location}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
      />
    </div>
  );
}