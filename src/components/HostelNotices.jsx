"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bell,
  Calendar,
  ChevronRight,
  FileText,
  Pin,
  Megaphone,
  AlertCircle,
} from "lucide-react";

export default function HostelNotices() {
  const notices = [
    {
      id: 1,
      title: "Hostel Monthly Fee Payment Deadline for November",
      category: "Finance",
      date: "03 Nov 2026",
      description:
        "All residents are requested to clear their monthly hostel and meal fees by November 10th to avoid late fee surcharges.",
      isImportant: true,
      isPinned: true,
    },
    {
      id: 2,
      title: "Weekly Dining & Meal Menu Updated",
      category: "Dining",
      date: "01 Nov 2026",
      description:
        "The updated meal chart for the current month is now active. Please check the meal management portal for preferences.",
      isImportant: false,
      isPinned: true,
    },
    {
      id: 3,
      title: "Quarterly Maintenance & Wi-Fi Inspection Schedule",
      category: "Maintenance",
      date: "28 Oct 2026",
      description:
        "High-speed optical fiber cable maintenance will take place this Thursday from 10:00 AM to 02:00 PM.",
      isImportant: false,
      isPinned: false,
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-semibold shadow-sm mb-4">
              <Megaphone className="w-4 h-4 text-blue-600" />
              <span>Stay Updated</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Latest{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Notices & Announcements
              </span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Important guidelines, administrative updates, and daily
              announcements for hostel residents.
            </p>
          </div>

          <Link
            href="/notices"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 group shrink-0"
          >
            <span>View All Notices</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Notices Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className={`relative rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md ${
                notice.isImportant
                  ? "border-amber-200 bg-amber-50/30"
                  : "border-gray-200/80 bg-gray-50/50 hover:bg-white hover:border-blue-300"
              }`}
            >
              <div>
                {/* Top Badges & Meta */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-gray-200 text-gray-700 text-xs font-medium shadow-2xs">
                    <FileText className="w-3.5 h-3.5 text-blue-600" />
                    {notice.category}
                  </span>

                  <div className="flex items-center gap-2">
                    {notice.isPinned && (
                      <span
                        className="p-1.5 rounded-md bg-blue-50 text-blue-600"
                        title="Pinned Notice"
                      >
                        <Pin className="w-3.5 h-3.5 fill-blue-600/20" />
                      </span>
                    )}
                    {notice.isImportant && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-100 text-amber-800 text-[11px] font-semibold">
                        <AlertCircle className="w-3 h-3 text-amber-600" />{" "}
                        Urgent
                      </span>
                    )}
                  </div>
                </div>

                {/* Notice Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2.5 line-clamp-2 hover:text-blue-600 transition-colors">
                  {notice.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-6">
                  {notice.description}
                </p>
              </div>

              {/* Notice Footer Details */}
              <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-gray-400" />
                  <span>{notice.date}</span>
                </div>

                <Link
                  href={`/notices/${notice.id}`}
                  className="font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  Read Details <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
