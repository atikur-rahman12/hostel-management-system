"use client";

import { Users, DoorClosed, Armchair, CheckCircle2 } from "lucide-react";

export default function HostelStats() {
  const statsData = [
    {
      id: 1,
      title: "Total Students",
      value: "28",
      description: "Active residents currently staying",
      icon: Users,
      badgeColor: "bg-blue-50 text-blue-600 border-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: 2,
      title: "Total Rooms",
      value: "15",
      description: "Fully furnished comfortable rooms",
      icon: DoorClosed,
      badgeColor: "bg-indigo-50 text-indigo-600 border-indigo-100",
      iconColor: "text-indigo-600",
    },
    {
      id: 3,
      title: "Total Seats",
      value: "60",
      description: "Total capacity across all rooms",
      icon: Armchair,
      badgeColor: "bg-sky-50 text-sky-600 border-sky-100",
      iconColor: "text-sky-600",
    },
    {
      id: 4,
      title: "Available Seats",
      value: "32",
      description: "Ready for immediate booking",
      icon: CheckCircle2,
      badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
      iconColor: "text-emerald-600",
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Hostel <span className="text-blue-600">Overview & Statistics</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Real-time insights into our hostel capacity, active occupancy, and
            available room allocations.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-lg shadow-gray-100 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border ${stat.badgeColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Live Data
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                    {stat.value}
                  </h3>
                  <p className="text-base font-semibold text-gray-800">
                    {stat.title}
                  </p>
                  <p className="text-xs text-gray-500 pt-1">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
