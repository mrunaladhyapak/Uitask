import { Routes, Route, BrowserRouter } from "react-router-dom";
// import "./App.css";
import Home from "@/Pages/Home";
function App() {
  return (
    <div className="App" style={{ overflowX: "hidden" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
