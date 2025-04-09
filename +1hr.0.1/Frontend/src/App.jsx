import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./components/common/FrontPage";
import Structure from "./Layout/structure";
import Dashboard from "./pages/PatientBoard/PatientBoard";
import ChooseRole from "./pages/AuthPages/Role"
import BookTest from "./pages/PatientBoard/BookTest";
import MedicalStore from "./pages/PatientBoard/MedicalStore";
import Appointment from "./pages/PatientBoard/BookAppointment";
import VideoCall from "./pages/PatientBoard/VideoCall";
import DoctorBoard from "./pages/DoctorBoard/DoctorBoard";
import DoctorCertificationPage from "./pages/DoctorBoard/DocUpload";
import DoctorDetail from "./pages/DoctorBoard/DocDetail";
import ClinicDetails from "./pages/DoctorBoard/ClinicDetail";
import { CssBaseline } from "@mui/material";


function App() {
  return (
    <>
    <CssBaseline/>
    <BrowserRouter>
      <Routes>
        {/* Routes without Nav */}
        <Route path="/" element={<FrontPage />} />
        <Route path="/choose-role" element={<ChooseRole />} />
        
        {/* Routes with Nav (wrapped in Structure) */}
        <Route element={<Structure />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/booktest" element={<BookTest/>}/>
          <Route path ="/medicalstore" element={<MedicalStore/>}/>
          <Route path ="/bookappointment" element={<Appointment/>}/>
          <Route path="/videocall" element={<VideoCall/>}/>
          {/* Doctor Board Routes  */}
          <Route path="/doctor-document" element={<DoctorCertificationPage/>}/>
          <Route path="/doctor-detail" element ={<DoctorDetail/>}/>
          <Route path="/clinic-details" element={<ClinicDetails/>}/>
          <Route path="/doctors" element={<DoctorBoard/>}/>
          {/* Add all other routes that need Nav here */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
