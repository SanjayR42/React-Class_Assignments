import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BooksExplorer from "./BookExplorer";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "1rem", background: "#eee" }}>
        <Link to="/books">📚 Go to Book Explorer</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Welcome! Click the link above to explore books.</h2>} />
        <Route path="/books" element={<BooksExplorer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
