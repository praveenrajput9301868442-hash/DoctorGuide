import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MapPin, Star, Clock, ArrowRight, ShieldCheck } from "lucide-react";

export default function Doctors() {
  const doctorsList = useSelector((state) => state.doctorsList);

  return (
    <div className="bg-slate-50 min-h-screen pb-32">
      


      <div className="bg-white border-b border-slate-200 py-20 mb-16">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Find Your <span className="text-indigo-600">Specialist</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Access our network of board-certified medical professionals. Every
            provider on our platform is thoroughly verified for your peace of
            mind.
          </p>
        </div>
      </div>

      <div className="section-container">
       


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctorsList.doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="glass-card group hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
            >
             

              <div className="relative overflow-hidden h-72">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm border border-white/20">
                  <ShieldCheck size={14} className="text-emerald-500" />
                  <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                    Verified
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>


              <div className="p-8 flex-grow flex flex-col">
                <div className="mb-4">
                  <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-1.5">
                    {doctor.specialization}
                  </p>
                  <h2 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {doctor.name}
                  </h2>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {doctor.desc}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2.5 text-sm text-slate-600">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
                      <MapPin size={16} />
                    </div>
                    <span className="font-medium">{doctor.location}</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-sm text-slate-600">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
                      <Clock size={16} />
                    </div>
                    <span className="font-medium">Available Next: Today</span>
                  </div>
                </div>

                <div className="mt-auto border-t border-slate-100 pt-6 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-amber-500 bg-amber-50 px-3 py-1 rounded-lg">
                    <Star size={16} fill="currentColor" />
                    <span className="font-bold text-sm text-slate-800">
                      {doctor.rating}
                    </span>
                  </div>

                  <div className="text-right">
                    <p className="text-[10px] font-bold text-slate-400 uppercase">
                      Consultation
                    </p>
                    <p className="text-xl font-bold text-slate-900">
                      ₹{doctor.fees}
                    </p>
                  </div>
                </div>

                {/* Button */}
                <Link to={`/appointment/${doctor.id}`} className="mt-8">
                  <button className="btn-primary w-full py-4 text-sm font-bold group/btn">
                    Book Appointment
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover/btn:translate-x-1"
                    />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
