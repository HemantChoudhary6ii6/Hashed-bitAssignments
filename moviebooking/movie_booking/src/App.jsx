import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import "./app.css";

const movies = [
  { id: 1, title: "Iron Man", img: "https://i.ibb.co/LgM0Yss/ironman.jpg" },
  { id: 2, title: "Captain America", img: "https://i.ibb.co/0qKmQKW/captain.jpg" },
  { id: 3, title: "Thor", img: "https://i.ibb.co/x58cvDn/thor.jpg" },
  { id: 4, title: "Hulk", img: "https://i.ibb.co/jT3gqbw/hulk.jpg" },
  { id: 5, title: "Black Panther", img: "https://i.ibb.co/ZSM5RvM/blackpanther.jpg" },
  { id: 6, title: "Doctor Strange", img: "https://i.ibb.co/4R0vJXr/strange.jpg" },
  { id: 7, title: "Ant-Man", img: "https://i.ibb.co/nnbwjzy/antman.jpg" },
  { id: 8, title: "Spider-Man", img: "https://i.ibb.co/wWZk5qP/spiderman.jpg" },
  { id: 9, title: "Black Widow", img: "https://i.ibb.co/Xx4P98f/blackwidow.jpg" },
  { id: 10, title: "Captain Marvel", img: "https://i.ibb.co/zXbnJTK/captainmarvel.jpg" },
  { id: 11, title: "Shang-Chi", img: "https://i.ibb.co/yRfdRtF/shangchi.jpg" },
  { id: 12, title: "Guardians of the Galaxy", img: "https://i.ibb.co/wr6Xdbq/guardians.jpg" },
  { id: 13, title: "Eternals", img: "https://i.ibb.co/YTWdGcH/eternals.jpg" },
  { id: 14, title: "Loki", img: "https://i.ibb.co/hLR2y2g/loki.jpg" },
  { id: 15, title: "WandaVision", img: "https://i.ibb.co/XtKjStc/wanda.jpg" },
  { id: 16, title: "Hawkeye", img: "https://i.ibb.co/6FgSdt7/hawkeye.jpg" },
];

function MovieList() {
  return (
    <div className="container">
      <h2>Marvel Movies</h2>
      <div className="grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img src={movie.img} alt={movie.title} />
            <h4>{movie.title}</h4>
            <Link to={`/movie/${movie.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function MovieDetail() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id == id);
  const navigate = useNavigate();

  if (!movie) return <p>Movie not found</p>;

  return (
    <div className="container">
      <h2>{movie.title}</h2>
      <img src={movie.img} alt={movie.title} style={{ maxWidth: "300px" }} />
      <br />
      <button onClick={() => navigate(`/book/${movie.id}`)}>Book Seat</button>
    </div>
  );
}

function BookingForm() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id == id);
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", mobile: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = "MARVEL-" + Math.floor(Math.random() * 100000);
    navigate(`/confirm/${bookingId}`, { state: { ...form } });
  };

  return (
    <div className="container">
      <h2>Book Ticket for {movie?.title}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="tel"
          placeholder="Mobile"
          value={form.mobile}
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function ConfirmPage({ location }) {
  const { id } = useParams();
  const state = history.state?.usr || {};

  return (
    <div className="container confirm">
      <h2>Booking Confirmed</h2>
      <p>Booking ID: <strong>{id}</strong></p>
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
      <p>Mobile: {state.mobile}</p>
      <Link to="/"><button>Back to Movies</button></Link>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/book/:id" element={<BookingForm />} />
        <Route path="/confirm/:id" element={<ConfirmPage />} />
      </Routes>
    </Router>
  );
}
