import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Navbar from "./components/navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Booking from "./components/Booking";
// import Contact from "./components/Contact";
// import Facility from "./components/Facility";

// function App() {
//   return (
//     <Router>
//       <Navbar />   {/* 👈 Tambahkan ini */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/booking" element={<Booking />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/facility" element={<Facility />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

