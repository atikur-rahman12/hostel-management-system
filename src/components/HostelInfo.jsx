"use client";

import {
  Building,
  UserCheck,
  BedDouble,
  CheckCircle,
  Mail,
  Phone,
  ShieldCheck,
  Wifi,
  Coffee,
  Sparkles,
} from "lucide-react";

export default function HostelInfo() {
  const adminList = [
    {
      name: "Mehedi sir",
      role: "Hostel Super",
      contact: "+880 1711-000000",
      email: "hostelsuper@mbpihostel.com",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    },
    {
      name: "Manik Miah",
      role: "Assistant Superintendent",
      contact: "+880 1722-000000",
      email: "superintendent@mbpihostel.com",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    },
  ];

  const accommodationFeatures = [
    {
      title: "Fully Furnished Rooms",
      desc: "Bed, study table, chair & spacious wardrobe provided.",
    },
    {
      title: "High-Speed Wi-Fi",
      desc: "24/7 unlimited internet access across all rooms.",
    },
    {
      title: "Hygienic Dining",
      desc: "Nutritious & daily updated meal plan prepared fresh.",
    },
    {
      title: "24/7 Security & Surveillance",
      desc: "CCTV monitoring & round-the-clock security personnel.",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* 1. Section Header & Hostel Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider">
              <Building className="w-4 h-4" />
              <span>About Our Hostel</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Welcome to <span className="text-blue-600">MBPI Hostel</span>{" "}
              Resident Living
            </h2>

            <p className="text-base text-gray-600 leading-relaxed">
              At MBPI Hostel, we provide more than just a place to sleep. We
              offer a vibrant, safe, and academically enriching environment
              tailored for student success. Equipped with modern infrastructure,
              automated management workflows, and a friendly atmosphere, our
              residents experience hassle-free living throughout their academic
              journey.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    100% Secure
                  </h4>
                  <p className="text-xs text-gray-500">
                    Biometric & Guard Protection
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                <Sparkles className="w-6 h-6 text-blue-600 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    Modern Facilities
                  </h4>
                  <p className="text-xs text-gray-500">
                    Clean & Quiet Environment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Banner Accent */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 group">
              <img
                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800"
                alt="Hostel Campus Interior"
                className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-gray-100 shadow-md">
                <p className="text-xs font-semibold text-blue-600 uppercase">
                  Student Community
                </p>
                <p className="text-sm font-bold text-gray-900">
                  Designed for Comfort, Peace & Productivity
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Accommodation Details Section */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-2">
              <BedDouble className="w-4 h-4" />
              <span>Living Spaces</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Accommodation & Amenities
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Explore room configurations and essential facilities provided to
              every boarder.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accommodationFeatures.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50/70 p-6 rounded-2xl border border-gray-100 hover:border-blue-500/30 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-md shadow-blue-600/20">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Hostel Administration Information */}
        <div className="space-y-8 pt-4">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-2">
              <UserCheck className="w-4 h-4" />
              <span>Management Body</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Hostel Administration
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Our dedicated management team ensures daily operations,
              discipline, and resident welfare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {adminList.map((admin, index) => (
              <div
                key={index}
                className="flex items-center gap-5 p-5 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100 hover:border-blue-500/30 transition-all duration-300"
              >
                <img
                  src={admin.image}
                  alt={admin.name}
                  className="w-20 h-20 rounded-xl object-cover border border-blue-100 shadow-sm shrink-0"
                />
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-gray-900">
                    {admin.name}
                  </h4>
                  <p className="text-xs font-semibold text-blue-600">
                    {admin.role}
                  </p>

                  <div className="pt-2 space-y-1 text-xs text-gray-500">
                    <p className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>{admin.contact}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>{admin.email}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
