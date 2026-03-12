import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  Sparkles,
  User,
  Calendar,
  Activity,
  MapPin,
  Star,
  ArrowRight,
  ShieldCheck,
  Loader2,
} from "lucide-react";
import askAi from "../Utils/AskAi";

export default function Suggest() {
  const [loading, setLoading] = useState(false);
  const [recommendedDoctor, setRecommendedDoctor] = useState(null);
  const doctorsList = useSelector((state) => state.doctorsList);

  const doctorData = doctorsList.doctors.map((doctor) => ({
    id: doctor.id,
    specialization: doctor.specialization,
    desc: doctor.desc,
  }));
  const doctorDataString = JSON.stringify(doctorData);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      age: formData.get("age"),
      gender: formData.get("gender"),
      descOfProblem: formData.get("descOfProblem"),
    };

    if (!data.name || !data.age || !data.gender || !data.descOfProblem) {
      toast.warning("Please fill in all details to get a recommendation.");
      return;
    }

    setLoading(true);
    setRecommendedDoctor(null);

    try {
      const res = await askAi(data, doctorDataString);
      const matchedDoctor = doctorsList.doctors.find(
        (doctor) => doctor.id === parseInt(res.id),
      );

      if (matchedDoctor) {
        setRecommendedDoctor(matchedDoctor);
        toast.success("We've found the perfect specialist for you!");
      } else {
        toast.info(
          "Our AI couldn't find a direct match. Please browse all doctors.",
        );
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-slate-50 min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-4">
            <Sparkles size={14} className="text-indigo-600" />
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
              AI Triage System
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Describe Your <span className="text-indigo-600">Concern</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Our medical AI will analyze your symptoms and connect you with the
            most qualified specialist in our network.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <div className="glass-card p-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
              <Activity className="text-indigo-600" size={24} />
              Consultation Form
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">
                    Your Name
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
                      size={18}
                    />
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. John Doe"
                      className="input-field pl-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">
                    Your Age
                  </label>
                  <div className="relative">
                    <Calendar
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
                      size={18}
                    />
                    <input
                      type="number"
                      name="age"
                      placeholder="e.g. 28"
                      className="input-field pl-12"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 px-1">
                  Gender
                </label>
                <div className="flex gap-4">
                  {["Male", "Female", "Other"].map((val) => (
                    <label key={val} className="flex-1">
                      <input
                        type="radio"
                        value={val}
                        name="gender"
                        className="peer hidden"
                      />
                      <div className="w-full text-center py-3 rounded-xl border border-slate-200 text-slate-600 font-medium cursor-pointer transition-all peer-checked:bg-indigo-600 peer-checked:text-white peer-checked:border-indigo-600 hover:bg-slate-50">
                        {val}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">
                  Explain your symptoms
                </label>
                <textarea
                  name="descOfProblem"
                  rows="5"
                  placeholder="Tell us what you're experiencing... (e.g. Sharp chest pain, chronic headaches)"
                  className="input-field resize-none"
                />
              </div>

              <button
                disabled={loading}
                className="btn-primary w-full py-4 text-lg font-bold group"
                type="submit"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Consulting AI...
                  </>
                ) : (
                  <>
                    <Sparkles size={20} />
                    Find My Specialist
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Result Section */}
          <div className="relative min-h-[500px]">
            {recommendedDoctor ? (
              <div className="glass-card p-1 overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-700">
                <div className="relative h-64 overflow-hidden rounded-xl">
                  <img
                    src={recommendedDoctor.image}
                    alt={recommendedDoctor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest mb-3">
                      <ShieldCheck size={12} fill="currentColor" />
                      Exact Match Found
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {recommendedDoctor.name}
                    </h3>
                    <p className="text-indigo-300 font-bold uppercase tracking-widest text-xs">
                      {recommendedDoctor.specialization}
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-slate-600 text-sm leading-relaxed mb-8">
                    {recommendedDoctor.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-slate-600 text-sm">
                        <MapPin size={18} className="text-indigo-600" />
                        <span className="font-medium">
                          {recommendedDoctor.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-600 text-sm">
                        <Star size={18} className="text-amber-500" />
                        <span className="font-medium">
                          {recommendedDoctor.rating} Rating
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">
                        Fee
                      </p>
                      <p className="text-3xl font-bold text-slate-900">
                        ₹{recommendedDoctor.fees}
                      </p>
                    </div>
                  </div>

                  <Link to={`/appointment/${recommendedDoctor.id}`}>
                    <button className="btn-primary w-full py-4 font-bold shadow-indigo-200">
                      Confirm Appointment
                      <ArrowRight size={20} />
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="h-full border-2 border-dashed border-slate-200 rounded-[32px] flex flex-col items-center justify-center p-12 text-center text-slate-400">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                  {loading ? (
                    <Loader2
                      className="animate-spin text-indigo-600"
                      size={40}
                    />
                  ) : (
                    <Stethoscope size={40} />
                  )}
                </div>
                <h4 className="text-xl font-bold text-slate-600 mb-2">
                  {loading ? "Analyzing Symptoms..." : "Awaiting Consultation"}
                </h4>
                <p className="text-sm max-w-xs">
                  {loading
                    ? "Our medical AI is comparing your inputs with our expert database."
                    : "Complete the form to see our recommendation."}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
