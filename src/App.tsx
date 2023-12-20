import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Feedstudent from "./pages/Feedstudent";
import Editprofilestudent from "./pages/Editprofilestudent";
import Profilestudent from "./pages/Profilestudent";
import Profileteacher from "./pages/Profileteacher";
import Editprofileteacher from "./pages/Edtiprofileteacher";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="Editprofileteacher" replace />} />
        <Route path="/Feedstudent" element={<Feedstudent />} />
        <Route path="/Editprofilestudent" element={<Editprofilestudent />} />
        <Route path="/Profilestudent" element={<Profilestudent />} />
        <Route path="/Profileteacher" element={<Profileteacher />} />
        <Route path="/Editprofileteacher" element={<Editprofileteacher />} />




      </Routes>
    </BrowserRouter>
  );
}

export default App;
