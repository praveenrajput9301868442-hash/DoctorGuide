import React from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Activity,
  ShieldCheck,
  Zap,
  ArrowRight,
  UserPlus,
  Stethoscope,
  Search,
} from "lucide-react";

export default function Home() {
  return (
    <div className="w-full bg-slate-50">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden pt-20 pb-32">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-violet-100/50 rounded-full blur-3xl"></div>
        </div>

        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
                <Sparkles size={14} className="text-indigo-600" />
                <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
                  Meet the Future of Healthcare
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-8">
                The Right{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                  Care
                </span>{" "}
                Starts with the Right{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-rose-500">
                  Match
                </span>
                .
              </h1>

              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
                Stop guessing. Our medical-grade AI analyzes your symptoms to
                match you with the perfect specialist in seconds.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/suggest" className="btn-primary px-8 py-4 text-lg">
                  <Sparkles size={20} />
                  Ask AI Specialist
                </Link>
                <Link to="/doctors" className="btn-secondary px-8 py-4 text-lg">
                  Browse Providers
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt="User"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-500 font-medium">
                  Trusted by{" "}
                  <span className="text-indigo-600 font-bold">2,000+</span>{" "}
                  patients this month
                </p>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative z-10 animate-float">
                <div className="glass-card p-2 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
                    alt="Healthcare Professional"
                    className="rounded-xl object-cover w-full h-[500px]"
                  />
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute top-10 -left-10 z-20 glass-card p-4 animate-float [animation-delay:0.5s]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-rose-50 rounded-lg flex items-center justify-center text-rose-500">
                    <Activity size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">
                      Analysis
                    </p>
                    <p className="text-sm font-bold text-slate-800">
                      Symptoms Matched
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 -right-5 z-20 glass-card p-4 animate-float [animation-delay:1.2s]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-500">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">
                      Privacy
                    </p>
                    <p className="text-sm font-bold text-slate-800">
                      100% Secure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STEPS SECTION ================= */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">
              How it Works
            </h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">
              Get Medical Guidance in 3 Steps
            </h3>
            <p className="text-slate-500">
              Our seamless process ensures you get the attention you deserve
              without the typical healthcare hassle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <div className="relative group text-center md:text-left">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-8 border border-slate-100 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-xl group-hover:shadow-indigo-200 group-hover:-translate-y-2">
                <Search size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 text-center md:text-left">
                1. Describe Symptoms
              </h4>
              <p className="text-slate-500 leading-relaxed text-center md:text-left">
                Tell our AI how you feel. Describe your discomfort, history, and
                any symptoms you're experiencing.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative group text-center md:text-left">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-8 border border-slate-100 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-xl group-hover:shadow-indigo-200 group-hover:-translate-y-2">
                <Zap size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 text-center md:text-left">
                2. AI Consultation
              </h4>
              <p className="text-slate-500 leading-relaxed text-center md:text-left">
                Our specialized medical model analyzes thousands of specialties
                to find the exact match for your condition.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative group text-center md:text-left">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-8 border border-slate-100 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-xl group-hover:shadow-indigo-200 group-hover:-translate-y-2">
                <UserPlus size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 text-center md:text-left">
                3. Meet Your Doctor
              </h4>
              <p className="text-slate-500 leading-relaxed text-center md:text-left">
                Review your recommended specialist and book an appointment
                instantly. No more waiting lists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="py-24 bg-slate-50">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="glass-card p-6 mt-12 hover:-translate-y-2 transition-transform duration-300">
                  <Stethoscope className="text-indigo-600 mb-4" size={32} />
                  <h5 className="font-bold mb-2">Expert Specialists</h5>
                  <p className="text-xs text-slate-500">
                    Board-certified doctors across 50+ medical fields.
                  </p>
                </div>
                <div className="glass-card p-6 hover:-translate-y-2 transition-transform duration-300">
                  <ShieldCheck className="text-emerald-500 mb-4" size={32} />
                  <h5 className="font-bold mb-2">Verified Only</h5>
                  <p className="text-xs text-slate-500">
                    Every provider undergoes a rigorous verification process.
                  </p>
                </div>
                <div className="glass-card p-6 mt-[-24px] hover:-translate-y-2 transition-transform duration-300">
                  <Clock className="text-rose-500 mb-4" size={32} />
                  <h5 className="font-bold mb-2">24/7 Access</h5>
                  <p className="text-xs text-slate-500">
                    Access our AI specialist anytime, anywhere in the world.
                  </p>
                </div>
                <div className="glass-card p-6 mt-[-48px] hover:-translate-y-2 transition-transform duration-300">
                  <Zap className="text-amber-500 mb-4" size={32} />
                  <h5 className="font-bold mb-2">Instant Results</h5>
                  <p className="text-xs text-slate-500">
                    Get your recommendation faster than a search query.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">
                Precision Analysis
              </h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-8">
                Why AI Makes a Difference in Triage
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Traditional healthcare often leaves patients confused about
                where to start. Our AI acts as a sophisticated triage system,
                ensuring you see the right person the first time.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Eliminates misrouting to wrong specialists",
                  "Considers complex symptom overlays",
                  "Multilingual support for global patients",
                  "Constantly updated medical database",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700 font-medium"
                  >
                    <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                      <Zap size={12} fill="currentColor" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/suggest"
                className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:gap-4 transition-all group"
              >
                Try AI Specialized Matching <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="section-container mb-20 px-4">
        <div className="bg-indigo-600 rounded-[32px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-indigo-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-700/50 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to find your specialist?
            </h2>
            <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
              Join thousands of patients who have found their perfect doctor
              match using our AI system.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/suggest"
                className="bg-white text-indigo-600 hover:bg-slate-50 transition-colors px-10 py-5 rounded-2xl font-bold shadow-xl"
              >
                Get Started Now
              </Link>
              <button className="bg-indigo-500 text-white hover:bg-indigo-400 border border-indigo-400 transition-colors px-10 py-5 rounded-2xl font-bold">
                See How It Works
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Clock({ className, size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
