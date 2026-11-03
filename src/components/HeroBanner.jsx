"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  LogIn,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

export default function HeroBanner() {
  const [selectedLocation, setSelectedLocation] = useState("");

  const locations = [
    "Dhaka",
    "Sylhet",
    "Chittagong",
    "Moulvibazar",
    "Rajshahi",
  ];

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center bg-[#0b192c] overflow-hidden pt-20">
      {/* Background Hostel Image with Dark Blue Gradient Overlay (Exact match to provided screenshot) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=2000"
          alt="Hostel Building"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Gradient Overlay from Solid Deep Navy Blue to Transparent Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b192c] via-[#0b192c]/90 to-[#0b192c]/40 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b192c] via-transparent to-transparent opacity-80" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="max-w-2xl space-y-6">
          {/* Hostel Name & Tag Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/30 backdrop-blur-md text-blue-400 text-xs sm:text-sm font-medium">
            <Building2 className="w-4 h-4 text-blue-400" />
            <span>MBPI Hostel</span>
            <span className="text-blue-600">•</span>
            <span className="text-gray-300 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> Safe Stay •
              Better Future
            </span>
          </div>

          {/* Main Attractive Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Find Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              Perfect Place
            </span>{" "}
            to Stay
          </h1>

          {/* Short Description */}
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            Our hostel provides a comfortable, safe, and friendly environment
            for students. We are committed to ensuring the best living
            experience with modern facilities and seamless digital management.
          </p>

          {/* Call To Action Buttons (Student Login CTA & Contact CTA) */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/login"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              <LogIn className="w-4 h-4" />
              <span>Student Login</span>
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#122238]/80 hover:bg-blue-900/40 text-gray-200 hover:text-white font-semibold text-sm border border-blue-900/50 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <PhoneCall className="w-4 h-4 text-blue-400" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
