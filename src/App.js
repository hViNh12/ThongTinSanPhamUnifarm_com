import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import QrPage from "./pages/QrPage";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/:dateStr" element={<IndexPage />} />
        <Route path="/qr" element={<QrPage />} />
      </Routes>
    </Router>
  );
}

export default App;
