import { createSlice } from "@reduxjs/toolkit";

let DoctorSlicer = createSlice({
    name: "doctors",
    initialState: {
     doctors: [
  {
    id: 101,
    name: "Dr. Rahul Mehta",
    specialization: "Cardiologist",
    desc: "A globally recognized leader in interventional cardiology with over 15 years of experience. Dr. Mehta specializes in complex valve repairs and preventive heart health strategies for high-risk patients.",
    location: "New York, Medical Plaza",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
    fees: 800
  },
  {
    id: 102,
    name: "Dr. Emily Carter",
    specialization: "Dermatologist",
    desc: "Specializing in advanced dermatological surgery and medical aesthetics. Dr. Carter is known for her holistic approach to skin health, combining clinical excellence with cutting-edge skincare technology.",
    location: "Los Angeles, Sunset Blvd",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400",
    fees: 600
  },
  {
    id: 103,
    name: "Dr. Arjun Verma",
    specialization: "Neurologist",
    desc: "Expert in neuro-oncology and epilepsy management. Dr. Verma has pioneered several non-invasive treatment protocols for chronic migraine and vestibular disorders during his 12 years of practice.",
    location: "Chicago, North Michigan Ave",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400",
    fees: 900
  },
  {
    id: 104,
    name: "Dr. Sophia Williams",
    specialization: "Pediatrician",
    desc: "Dedicated to providing compassionate care for children of all ages. Dr. Williams focuses on developmental milestones, advanced immunizations, and child psychology in a friendly, supportive environment.",
    location: "San Francisco, Bay Area Dr",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1559839734-2b71f153678f?auto=format&fit=crop&q=80&w=400",
    fees: 500
  },
  {
    id: 105,
    name: "Dr. Vikram Singh",
    specialization: "Orthopedist",
    desc: "Renowned orthopedic surgeon specializing in robotic-assisted joint replacements and sports medicine. He has successfully treated over 500 elite athletes for complex ligament injuries.",
    location: "Houston, Medical District",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
    fees: 750
  },
  {
    id: 106,
    name: "Dr. Olivia Brown",
    specialization: "Gynecologist",
    desc: "Expert in reproductive endocrinology and minimally invasive robotic surgery. Dr. Brown provides personalized care for high-risk pregnancies and complex gynecological conditions.",
    location: "Seattle, Pine St",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400",
    fees: 700
  },
  {
    id: 107,
    name: "Dr. Aman Khurana",
    specialization: "Oncologist",
    desc: "Lead oncologist with a focus on precision medicine and targeted therapies for solid tumors. Dr. Khurana is committed to providing comprehensive, compassionate cancer care for his patients.",
    location: "Boston, Longwood Medical",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=400",
    fees: 1000
  },
  {
    id: 108,
    name: "Dr. Sarah Jenkins",
    specialization: "Psychiatrist",
    desc: "Specializing in mood disorders and geriatric psychiatry. Dr. Jenkins uses an integrative approach to mental wellness, combining cognitive therapy with lifestyle optimization.",
    location: "Portland, SW 5th Ave",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1559839734-2b71f153678f?auto=format&fit=crop&q=80&w=400",
    fees: 550
  },
  {
    id: 109,
    name: "Dr. Marcus Thorne",
    specialization: "Urologist",
    desc: "Expert in urological oncology and advanced robotic surgery. Dr. Thorne is recognized for his contributions to minimally invasive prostate and kidney treatment protocols.",
    location: "Miami, Health District",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400",
    fees: 850
  }
]
    },
    reducers: {
        setDoctors: (state, action) => {
            state.doctors.push(action.payload)
        }
    }
  
})

export default DoctorSlicer.reducer;

export const {setDoctors} = DoctorSlicer.actions