import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import EventPage from "./pages/EventPage.jsx";
import SponsorPage from "./pages/SponsorPage.jsx";
import MerchPage from "./pages/MerchPage.jsx";

function App() {
  return (
    <Router>
      <div className="relative w-full max-w-full overflow-hidden text-white font-sans antialiased selection:bg-sky-500/30">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/events' element={<EventPage />} />
          <Route path='/sponsors' element={<SponsorPage />} />
          <Route path='/merch' element={<MerchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;