import react from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
/* import Login from './Login';
import Logout from './Logout'; */
import Home from "./components/Pages/Home";


function App() {
  return (
      <Routes>
        <Route path="/home" element={<Home/>} />
        {/* <Route path="/logout" element={<Logout />} /> */}
        {/* <Route path="/*" element={<NotFound/>} />  */}
      </Routes>
  );
}
export default App;
