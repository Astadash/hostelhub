"use client";
import Link from "next/link";

export default function HostelCard({ hostel }) {
  return (
    <Link href={`/hostels/${hostel.id}`}>
      <div className="cursor-pointer rounded-2xl overflow-hidden shadow hover:scale-[1.02] transition-all bg-white">
        <img src={hostel.img} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold text-xl mb-1">{hostel.name}</h3>
          <p className="text-gray-600 text-sm">{hostel.location}</p>
          <p className="text-gray-800 font-medium mt-2">{hostel.price}</p>
        </div>
      </div>
    </Link>
  );
}