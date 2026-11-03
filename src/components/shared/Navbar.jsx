"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Building2,
  Home,
  BedDouble,
  Info,
  PhoneCall,
  Bell,
  User,
  LogIn,
  UserPlus,
  LogOut,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  ClipboardList,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Prothome user logged-out thakbe (Login & Register button show korbe)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  // Scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Facilities", href: "/facilities", icon: Sparkles },
    { name: "Rooms", href: "/rooms", icon: BedDouble },
    { name: "Rules", href: "/rules", icon: ClipboardList },
    { name: "About", href: "/about", icon: Info },
    { name: "Contact", href: "/contact", icon: PhoneCall },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-gray-200/50 py-3 border-b border-gray-200"
          : "bg-white py-4 border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/30 group-hover:scale-105 transition-transform duration-200">
              <Building2 className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold tracking-wide text-gray-900">
              MBPI<span className="text-blue-600"> Hostel</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-gray-100/80 p-1.5 rounded-full border border-gray-200">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/40"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-200/60"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${isActive ? "text-white" : "text-blue-600"}`}
                  />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Section: Login / Register (or Profile when logged in) */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Notification Icon (Shudhu logged in thaklei dekhabe) */}
            {isLoggedIn && (
              <button
                aria-label="Notifications"
                className="relative p-2.5 rounded-xl bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200 border border-gray-200 transition-colors"
              >
                <Bell className="w-5 h-5 text-blue-600" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full ring-2 ring-white animate-pulse"></span>
              </button>
            )}

            {isLoggedIn ? (
              /* User Profile Dropdown */
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-3 p-1.5 pr-3 rounded-xl bg-gray-100 hover:bg-gray-200 border border-gray-200 transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                    AR
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold text-gray-900 leading-tight">
                      Atikur Rahman
                    </p>
                    <p className="text-[10px] text-blue-600 font-medium">
                      Resident
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isProfileOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-52 rounded-2xl bg-white border border-gray-200 shadow-2xl shadow-gray-200/80 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-xs font-semibold text-gray-900">
                        Atikur Rahman
                      </p>
                      <p className="text-[11px] text-gray-500">
                        atikur@example.com
                      </p>
                    </div>
                    <Link
                      href="/profile"
                      onClick={() => setIsProfileOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <User className="w-4 h-4" />
                      <span>User Profile</span>
                    </Link>
                    <div className="my-1 border-t border-gray-100"></div>
                    <button
                      onClick={() => {
                        setIsProfileOpen(false);
                        setIsLoggedIn(false); // Logout korle abar login/register dekhabe
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-rose-600 hover:bg-rose-50 transition-colors text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Log Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Prothome ei Login & Register Buttons gulo thakbe */
              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-all"
                >
                  <LogIn className="w-4 h-4 text-blue-600" />
                  <span>Login</span>
                </Link>
                <Link
                  href="/register"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Register</span>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            {isLoggedIn && (
              <button
                aria-label="Notifications"
                className="relative p-2 rounded-xl bg-gray-100 text-gray-600 border border-gray-200"
              >
                <Bell className="w-5 h-5 text-blue-600" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full"></span>
              </button>
            )}
            <button
              aria-label="Toggle Mobile Menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-gray-700 bg-gray-100 border border-gray-200 hover:text-gray-900"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          {isLoggedIn && (
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                AR
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Atikur Rahman
                </p>
                <p className="text-xs text-blue-600">Resident</p>
              </div>
            </div>
          )}

          <nav className="space-y-1">
            {navLinks.now?.map
              ? navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? "bg-blue-600 text-white shadow-md"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${isActive ? "text-white" : "text-blue-600"}`}
                      />
                      <span>{link.name}</span>
                    </Link>
                  );
                })
              : navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? "bg-blue-600 text-white shadow-md"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${isActive ? "text-white" : "text-blue-600"}`}
                      />
                      <span>{link.name}</span>
                    </Link>
                  );
                })}
          </nav>

          <div className="pt-2 border-t border-gray-200 space-y-2">
            {isLoggedIn ? (
              <>
                <Link
                  href="/profile"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  <User className="w-5 h-5 text-blue-600" />
                  <span>User Profile</span>
                </Link>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsLoggedIn(false);
                  }}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-base font-medium text-rose-600 hover:bg-rose-50 text-left"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Log Out</span>
                </button>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-2 pt-1">
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 hover:bg-gray-100"
                >
                  <LogIn className="w-4 h-4 text-blue-600" />
                  <span>Login</span>
                </Link>
                <Link
                  href="/register"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 shadow-md"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Register</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
