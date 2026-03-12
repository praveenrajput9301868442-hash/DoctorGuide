import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Sparkles,
  Heart,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white">
                <Sparkles size={18} fill="currentColor" />
              </div>
              <span className="text-xl font-bold text-white">DoctorGuide</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Revolutionizing healthcare access with AI-driven expert
              recommendations. Find the right care, faster.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/doctors"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link
                  to="/suggest"
                  className="hover:text-indigo-400 transition-colors"
                >
                  AI Specialist
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-indigo-400" />
                <span>support@doctorguide.ai</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-indigo-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-indigo-400" />
                <span>123 Health Ave, Wellness City</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-6">Stay Healthy</h3>
            <p className="text-sm mb-4">
              Subscribe for latest health tips and AI updates.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-slate-800 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © 2024 DoctorGuide. Designed with{" "}
            <Heart size={12} className="inline text-rose-500" /> for a better
            world.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-indigo-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-indigo-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
