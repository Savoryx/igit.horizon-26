import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";

function App() {
  return (
    <Router>
      {/* Changed w-screen to w-full and added min-h-screen */}
      <div className="w-full min-h-screen bg-black overflow-hidden">
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;