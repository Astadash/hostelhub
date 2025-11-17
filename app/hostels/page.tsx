import HostelCard from "@/components/HostelCard";

const allHostels = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  name: `Sample Hostel ${i + 1}`,
  location: "Sample Area, Islamabad",
  price: `PKR ${12000 + i * 2000} / month`,
  rating: 4.0 + (i % 2) * 0.3,
  img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
}));

export default function HostelListingPage() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">All Hostels</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {allHostels.map((hostel) => (
          <HostelCard key={hostel.id} hostel={hostel} />
        ))}
      </div>
    </div>
  );
}
