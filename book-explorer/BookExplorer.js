import { useEffect, useState } from "react";
import axios from "axios";

export default function BooksExplorer() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("");
  const [sort, setSort] = useState("downloads");

  useEffect(() => {
    fetchBooks();
  }, [query, language, sort]);

  const fetchBooks = async () => {
    try {
      let url = `https://gutendex.com/books?sort=${sort}`;
      if (query) url += `&search=${query}`;
      if (language) url += `&languages=${language}`;

      const res = await axios.get(url);
      setBooks(res.data.results);
    } catch (error) {
      console.error("Error fetching books", error);
    }
  };

  return (
    <div className="container py-4">
      <h2 className="mb-3"> Public Domain Book Explorer</h2>

      {/* Search + Filters */}
      <div className="row mb-3">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title or author..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-control"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="">All Languages</option>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="es">Spanish</option>
          </select>
        </div>
        <div className="col-md-3">
          <select
            className="form-control"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="downloads">Sort by Popularity</option>
            <option value="title">Sort by Title</option>
          </select>
        </div>
      </div>

      {/* Books List */}
      <div className="row">
        {books.map((book) => (
          <div key={book.id} className="col-md-4 mb-3">
            <div className="card h-100">
              {book.formats["image/jpeg"] && (
                <img
                  src={book.formats["image/jpeg"]}
                  alt={book.title}
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">
                  <strong>Author:</strong>{" "}
                  {book.authors.length > 0
                    ? book.authors[0].name
                    : "Unknown"}
                </p>
                <p className="card-text">
                  <strong>Downloads:</strong> {book.download_count}
                </p>
              </div>
              <div className="card-footer">
                <a
                  href={
                    book.formats["text/html"] || book.formats["application/pdf"]
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-primary"
                >
                   Read
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
