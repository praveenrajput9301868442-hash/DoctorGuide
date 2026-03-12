import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  MapPin,
  Star,
  ShieldCheck,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { toast } from "react-toastify";

export default function Appointment() {
  const { id } = useParams();
  const doctorsList = useSelector((state) => state.doctorsList.doctors);
  const doctor = doctorsList.find((doc) => doc.id === parseInt(id));

  const [isBooked, setIsBooked] = useState(false);

  if (!doctor) {
    return (
      <div className="section-container text-center py-40">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">
          Doctor not found
        </h1>
        <Link to="/doctors" className="btn-primary inline-flex">
          Back to Doctors
        </Link>
      </div>
    );
  }

  const handleBooking = () => {
    setIsBooked(true);
    toast.success(`Appointment requested with ${doctor.name}!`);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-32">
      {/* Header / Breadcrumb */}
      <div className="bg-white border-b border-slate-200 py-8 mb-12">
        <div className="section-container">
          <Link
            to="/doctors"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-medium transition-colors mb-4"
          >
            <ArrowLeft size={16} />
            Back to Specialists
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">
            Book Appointment
          </h1>
        </div>
      </div>

      <div className="section-container">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Doctor Info Card */}
          <div className="lg:col-span-1">
            <div className="glass-card overflow-hidden sticky top-32">
              <div className="relative h-64">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
                  <ShieldCheck size={12} fill="currentColor" />
                  Top Rated
                </div>
              </div>
              <div className="p-8 text-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-1">
                  {doctor.name}
                </h2>
                <p className="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-6">
                  {doctor.specialization}
                </p>

                <div className="flex justify-center items-center gap-4 mb-8">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star size={18} fill="currentColor" />
                    <span className="font-bold text-slate-800">
                      {doctor.rating}
                    </span>
                  </div>
                  <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
                  <p className="font-bold text-slate-900">₹{doctor.fees}</p>
                </div>

                <div className="space-y-4 text-left border-t border-slate-100 pt-6">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={18}
                      className="text-slate-400 mt-1 flex-shrink-0"
                    />
                    <span className="text-sm text-slate-600 font-medium">
                      {doctor.location}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock
                      size={18}
                      className="text-slate-400 mt-1 flex-shrink-0"
                    />
                    <div className="text-sm text-slate-600 font-medium">
                      <p>Next Slot: Today</p>
                      <p className="text-xs text-slate-400 font-normal">
                        Available from 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Interface */}
          <div className="lg:col-span-2">
            {isBooked ? (
              <div className="glass-card p-12 text-center animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-8 shadow-inner">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Request Sent!
                </h3>
                <p className="text-slate-500 text-lg mb-10 max-w-md mx-auto">
                  We've received your request for an appointment with{" "}
                  {doctor.name}. You'll receive a confirmation via email
                  shortly.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/" className="btn-primary">
                    Return Home
                  </Link>
                  <Link to="/doctors" className="btn-secondary">
                    View More Doctors
                  </Link>
                </div>
              </div>
            ) : (
              <div className="glass-card p-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">
                  Scheduling Details
                </h3>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                      Select Preferred Day
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {["Today", "Tomorrow", "Wed, 12 Feb", "Thu, 13 Feb"].map(
                        (day, idx) => (
                          <button
                            key={day}
                            className={`py-4 px-2 rounded-xl border font-bold text-sm transition-all ${idx === 0 ? "bg-indigo-600 border-indigo-600 text-white shadow-lg" : "bg-white border-slate-200 text-slate-600 hover:border-indigo-400"}`}
                          >
                            {day}
                          </button>
                        ),
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                      Select Time Slot
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        "04:00 PM",
                        "04:30 PM",
                        "05:00 PM",
                        "05:30 PM",
                        "06:00 PM",
                        "06:30 PM",
                      ].map((time, idx) => (
                        <button
                          key={time}
                          className={`py-3 px-2 rounded-lg border font-medium text-sm transition-all ${idx === 2 ? "bg-indigo-50 border-indigo-200 text-indigo-700" : "bg-white border-slate-100 text-slate-500 hover:bg-slate-50"}`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-indigo-50/50 rounded-2xl p-6 border border-indigo-100">
                    <h4 className="font-bold text-slate-900 mb-2">
                      Doctor's Note
                    </h4>
                    <p className="text-sm text-slate-600 italic leading-relaxed">
                      "{doctor.desc.split(".")[0]}. I look forward to meeting
                      you and addressing your health concerns effectively."
                    </p>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={handleBooking}
                      className="btn-primary w-full py-5 text-lg font-bold shadow-indigo-200"
                    >
                      Request Instant Booking
                      <Calendar size={20} />
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-4 px-10">
                      By clicking above, you agree to our terms of service and
                      patient privacy policy.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
