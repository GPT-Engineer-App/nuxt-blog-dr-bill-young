import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
