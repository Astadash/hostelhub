"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Phone } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

interface Hostel {
  name: string;
  location: string;
  price: string;
  rating: number;
  img: string;
}

const LandingPage: React.FC = () => {
  const hostels: Hostel[] = [
    {
      name: "GreenView Boys Hostel",
      location: "H-12, Near NUST",
      price: "PKR 14,000 / month",
      rating: 4.5,
      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    },
    {
      name: "Comfort Inn Girls Hostel",
      location: "G-10 Markaz, Islamabad",
      price: "PKR 18,000 / month",
      rating: 4.8,
      img: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
    },
    {
      name: "Executive Hostel Islamabad",
      location: "F-10/1",
      price: "PKR 22,000 / month",
      rating: 4.2,
      img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="w-full bg-white py-20 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4"
          >
            Find Your Perfect Hostel in Islamabad
          </motion.h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            A trusted platform to explore, compare, and connect with verified
            hostels across Islamabad. Designed exclusively for university students.
          </p>

          <Button className="rounded-2xl px-8 py-6 text-lg">
            Explore Hostels
          </Button>
        </div>
      </section>

      {/* Hostel Listings */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Featured Hostels</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {hostels.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <Card className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src={h.img}
                  alt={h.name}
                  className="w-full h-48 object-cover"
                />

                <CardContent className="p-4">
                  <h3 className="font-semibold text-xl mb-1">{h.name}</h3>

                  <p className="flex items-center text-gray-600 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1" /> {h.location}
                  </p>

                  <p className="text-gray-800 font-medium mb-3">{h.price}</p>

                  <div className="flex items-center text-yellow-500 mb-4">
                    <Star className="w-4 h-4 mr-1" /> {h.rating}
                  </div>

                  <Button className="w-full rounded-xl py-5 flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Contact Hostel
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Why HostelHub?</h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            We bridge the gap between students and hostel providers through
            verified listings, transparent information, and a smooth comparison
            experience.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Verified Listings</h3>
              <p className="text-gray-600 text-sm">
                Trusted hostels with authentic details and updated facilities.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Easy Comparison</h3>
              <p className="text-gray-600 text-sm">
                Filter and compare hostels based on budget, location, and features.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Direct Contact</h3>
              <p className="text-gray-600 text-sm">
                Reach out to hostel managers instantly with a single click.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 text-center">
        <p className="text-gray-400">
          © 2025 HostelHub.pk — All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
