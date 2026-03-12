import { configureStore } from "@reduxjs/toolkit";
import DoctorSlicer from "../Slicer/DoctorSlicer.js";

let Store = configureStore({
    reducer: {
        doctorsList: DoctorSlicer
    }
})

export default Store;