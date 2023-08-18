import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home";
import Show from "./components/Show/Show";
import Navbar from "./components/Navbar/Navbar";
import Shows from "./components/Shows/Shows";
import EditForm from "./components/EditForm/EditForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/shows/:id" element={<Show />} />
        <Route path="/shows/:id/edit" element={<EditForm />} />
      </Routes>
    </Router>
  )
}

export default App;