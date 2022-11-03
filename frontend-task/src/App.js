import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Home from "./pages/Home/index";
import CreateEvent from "./pages/CreateEvent/index.jsx";
import Event from "./pages/Event/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <SideNav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create" element={<CreateEvent />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
