
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ManagerModal from "@/components/ManagerModal";
import HostelCard from "@/components/HostelCard";
import Link from "next/link";

const topHostels = [
  {
    id: 1,
    name: "GreenView Boys Hostel",
    location: "H-12, Near NUST",
    price: "PKR 14,000 / month",
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  },
  {
    id: 2,
    name: "Comfort Inn Girls Hostel",
    location: "G-10 Markaz",
    price: "PKR 18,000 / month",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
  },
  {
    id: 3,
    name: "Executive Hostel Islamabad",
    location: "F-10/1",
    price: "PKR 22,000 / month",
    rating: 4.2,
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  },
];

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <section className="w-full bg-white py-20 shadow-sm text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-4"
        >
          Find Your Perfect Hostel in Islamabad
        </motion.h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
          Explore verified hostels, compare prices, and contact hostel managers instantly.
        </p>

        <Link href="/hostels">
          <Button className="rounded-xl px-8 py-6 text-lg">Explore All Hostels</Button>
        </Link>

        <Button
          className="rounded-xl px-8 py-6 text-lg ml-4 bg-green-600 hover:bg-green-700"
          onClick={() => setIsOpen(true)}
        >
          List Your Hostel
        </Button>
      </section>

      {/* TOP HOSTELS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Top Recommendations</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {topHostels.map((hostel) => (
            <HostelCard key={hostel.id} hostel={hostel} />
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">What Students Say</h2>
        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6 mt-10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-6 rounded-xl shadow bg-gray-50">
              <p className="text-gray-700 italic">“Amazing service and very reliable listings!”</p>
              <p className="text-gray-500 mt-2">- Student #{i}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {/* Modal */}
      <ManagerModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
