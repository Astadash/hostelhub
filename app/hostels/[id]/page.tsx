export default function HostelDetail({ params }) {
  const id = params.id;
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-4">Hostel #{id}</h1>
      <img
        src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
        className="w-full h-64 object-cover rounded-xl mb-6"
      />

      <p className="text-lg text-gray-700 mb-4">
        This is a sample hostel detail page. You can add full description, pricing,
        room types, amenities, gallery and more here.
      </p>

      <button className="px-6 py-3 bg-green-600 text-white rounded-xl text-lg">
        Contact Hostel Manager
      </button>
    </div>
  );
}
