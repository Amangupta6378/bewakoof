import "./App.css";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define routes using the <Route> component */}
        <Route path="/" element={<Signup />} /> {/* Route for the Signup component */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Route for the Dashboard component */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
