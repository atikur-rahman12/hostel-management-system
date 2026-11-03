"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
  // State for storing the current year after client mount
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Hostel Facilities", href: "/facilities" },
    { name: "Rooms & Seats", href: "/rooms" },
    { name: "Hostel Rules & Regulations", href: "/rules" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "https://facebook.com", icon: FaFacebook },
    { name: "Twitter", href: "https://twitter.com", icon: BsTwitterX },
    { name: "Instagram", href: "https://instagram.com", icon: FaInstagram },
    { name: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedin },
  ];

  return (
    <footer className="bg-[#0b192c] text-gray-300 border-t border-blue-900/40 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-blue-900/40">
          {/* Column 1: Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/30">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-wide text-white">
                MBPI<span className="text-blue-400"> Hostel</span>
              </span>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed">
              Providing modern, secure, and hassle-free hostel management
              solutions for students and admins. Enjoy comfortable living with
              seamlessly organized facilities.
            </p>

            {/* Social Media Links */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Connect With Us
              </p>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-9 h-9 rounded-xl bg-[#122238]/80 flex items-center justify-center text-blue-400 border border-blue-900/40 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:-translate-y-1 transition-all duration-200"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-blue-500 pb-1.5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-200"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-blue-500 pb-1.5">
              Contact Info
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span>Moulvibazar Polytechnic Institute, Moulvibazar</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>+880 1700-000000</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>support@mbpihostel.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter / Important Update */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-blue-500 pb-1.5">
              Stay Updated
            </h3>
            <p className="text-sm text-gray-400 mb-3">
              Subscribe to get the latest notices regarding hostel room
              availability & updates.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#122238]/60 border border-blue-900/40 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium shadow-md shadow-blue-600/30 transition-all duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section: Copyright & Legal Policies */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          {/* Copyright Information */}
          <p className="text-center md:text-left">
            &copy; {currentYear}{" "}
            <span className="text-white font-medium">MBPI Hostel</span>. All
            rights reserved.
          </p>

          {/* Legal Links (Privacy Policy & Terms) */}
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              <span>Privacy Policy</span>
            </Link>
            <span className="text-blue-900/60">•</span>
            <Link
              href="/terms"
              className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
            >
              <FileText className="w-4 h-4 text-blue-500" />
              <span>Terms & Conditions</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
