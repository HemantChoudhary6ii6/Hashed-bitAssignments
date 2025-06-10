import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import "./app.css";

const movies = [
  { id: 1, title: "Iron Man", img: "https://cdn.marvel.com/content/1x/ironman_lob_crd_01_3.jpg" },
  { id: 2, title: "Captain America", img: "https://cdn.marvel.com/content/1x/captainamerica_lob_crd_01.jpg" },
  { id: 3, title: "Thor", img: "https://cdn.marvel.com/content/1x/thor_lob_crd_01.jpg" },
  { id: 4, title: "Hulk", img: "https://cdn.marvel.com/content/1x/theincrediblehulk_lob_crd_03.jpg" },
  { id: 5, title: "Black Panther", img: "https://cdn.marvel.com/content/1x/blackpanther_lob_crd_01_4.jpg" },
  { id: 6, title: "Doctor Strange", img: "https://cdn.marvel.com/content/1x/doctorstrangeinthemultiverseofmadness_lob_crd_02_3.jpg" },
  { id: 7, title: "Ant-Man", img: "https://cdn.marvel.com/content/1x/ant-man_lob_crd_01_8.jpg" },
  { id: 8, title: "Spider-Man", img: "https://cdn.marvel.com/content/1x/spider-manfarfromhome_lob_crd_04_3.jpg" },
  { id: 9, title: "Black Widow", img: "https://cdn.marvel.com/content/1x/blackwidow_lob_crd_06.jpg" },
  { id: 10, title: "Captain Marvel", img: "https://cdn.marvel.com/content/1x/captainmarvel_lob_crd_06.jpg" },
  { id: 11, title: "Shang-Chi", img: " https://cdn.marvel.com/content/1x/shangchi_lob_crd_07.jpg"},
  { id: 12, title: "Guardians of the Galaxy", img: "https://cdn.marvel.com/content/1x/guardiansofthegalaxy_lob_crd_03.jpg" },
  { id: 13, title: "Eternals", img: "https://cdn.marvel.com/content/1x/eternals_lob_crd_06.jpg" },
  { id: 14, title: "Loki", img: "https://cdn.marvel.com/content/1x/loki_lob_crd_04.jpg" },
  { id: 15, title: "WandaVision", img: "https://cdn.marvel.com/content/1x/wandavision_lob_crd_06.jpg" },
  { id: 16, title: "Hawkeye", img: "https://cdn.marvel.com/content/1x/hawkeye_lob_crd_01.jpg" },
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
