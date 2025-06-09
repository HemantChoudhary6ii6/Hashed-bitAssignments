import React, { useState } from 'react';
import { ArrowLeft, Star, Clock, Calendar } from 'lucide-react';

const MovieBookingApp = () => {
  const [currentPage, setCurrentPage] = useState('movies');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    mobile: ''
  });
  const [bookingId, setBookingId] = useState('');

  // Sample movie data with placeholder images
  const movies = [
    { id: 1, title: 'The Dark Knight', genre: 'Action', rating: 9.0, duration: '152 min', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop' },
    { id: 2, title: 'Inception', genre: 'Sci-Fi', rating: 8.8, duration: '148 min', image: 'https://images.unsplash.com/photo-1489599735985-c6d69a43c63a?w=300&h=400&fit=crop' },
    { id: 3, title: 'Interstellar', genre: 'Sci-Fi', rating: 8.6, duration: '169 min', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop' },
    { id: 4, title: 'The Avengers', genre: 'Action', rating: 8.0, duration: '143 min', image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=400&fit=crop' },
    { id: 5, title: 'Pulp Fiction', genre: 'Crime', rating: 8.9, duration: '154 min', image: 'https://images.unsplash.com/photo-1489599735985-c6d69a43c63a?w=300&h=400&fit=crop' },
    { id: 6, title: 'The Matrix', genre: 'Sci-Fi', rating: 8.7, duration: '136 min', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop' },
    { id: 7, title: 'Forrest Gump', genre: 'Drama', rating: 8.8, duration: '142 min', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop' },
    { id: 8, title: 'The Shawshank Redemption', genre: 'Drama', rating: 9.3, duration: '142 min', image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=400&fit=crop' },
    { id: 9, title: 'Goodfellas', genre: 'Crime', rating: 8.7, duration: '146 min', image: 'https://images.unsplash.com/photo-1489599735985-c6d69a43c63a?w=300&h=400&fit=crop' },
    { id: 10, title: 'The Godfather', genre: 'Crime', rating: 9.2, duration: '175 min', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop' },
    { id: 11, title: 'Schindler\'s List', genre: 'Drama', rating: 9.0, duration: '195 min', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop' },
    { id: 12, title: 'Fight Club', genre: 'Drama', rating: 8.8, duration: '139 min', image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=400&fit=crop' },
    { id: 13, title: 'The Lord of the Rings', genre: 'Fantasy', rating: 8.9, duration: '178 min', image: 'https://images.unsplash.com/photo-1489599735985-c6d69a43c63a?w=300&h=400&fit=crop' },
    { id: 14, title: 'Star Wars', genre: 'Sci-Fi', rating: 8.6, duration: '121 min', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop' },
    { id: 15, title: 'Casablanca', genre: 'Romance', rating: 8.5, duration: '102 min', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop' },
    { id: 16, title: 'Titanic', genre: 'Romance', rating: 7.9, duration: '194 min', image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=400&fit=crop' }
  ];

  const generateBookingId = () => {
    return 'BK' + Math.random().toString(36).substr(2, 8).toUpperCase();
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setCurrentPage('details');
  };

  const handleBookSeats = () => {
    setCurrentPage('booking');
  };

  const handleFormSubmit = () => {
    if (bookingData.name && bookingData.email && bookingData.mobile) {
      const id = generateBookingId();
      setBookingId(id);
      setCurrentPage('confirmation');
    }
  };

  const handleInputChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  // Page 1: Movie List
  const MovieListPage = () => (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Now Showing
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group"
              onClick={() => handleMovieClick(movie)}
            >
              <div className="relative">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-64 object-cover group-hover:brightness-75 transition-all duration-300"
                />
                <div className="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded-full text-sm font-bold flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  {movie.rating}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                  {movie.title}
                </h3>
                <p className="text-gray-400 text-sm mb-2">{movie.genre}</p>
                <div className="flex items-center text-gray-400 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {movie.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Page 2: Movie Details
  const MovieDetailsPage = () => (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setCurrentPage('movies')}
          className="mb-6 flex items-center text-purple-400 hover:text-purple-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Movies
        </button>
        
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={selectedMovie?.image}
                alt={selectedMovie?.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                {selectedMovie?.title}
              </h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center bg-yellow-500 text-black px-3 py-1 rounded-full mr-4">
                  <Star className="w-4 h-4 mr-1" />
                  <span className="font-bold">{selectedMovie?.rating}</span>
                </div>
                <span className="text-purple-400 font-semibold">{selectedMovie?.genre}</span>
              </div>
              
              <div className="flex items-center mb-6 text-gray-400">
                <Clock className="w-5 h-5 mr-2" />
                <span>{selectedMovie?.duration}</span>
                <Calendar className="w-5 h-5 ml-6 mr-2" />
                <span>Available Today</span>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Synopsis</h3>
                <p className="text-gray-300 leading-relaxed">
                  Experience the ultimate cinematic journey with {selectedMovie?.title}. This {selectedMovie?.genre.toLowerCase()} masterpiece delivers an unforgettable story that will keep you on the edge of your seat. Don't miss this incredible viewing experience!
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Showtimes</h3>
                <div className="flex flex-wrap gap-3">
                  {['10:00 AM', '1:30 PM', '4:00 PM', '7:30 PM', '10:00 PM'].map((time) => (
                    <span key={time} className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-500 transition-colors cursor-pointer">
                      {time}
                    </span>
                  ))}
                </div>
              </div>
              
              <button
                onClick={handleBookSeats}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Book Seats Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Page 3: Booking Form
  const BookingFormPage = () => (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-md mx-auto">
        <button
          onClick={() => setCurrentPage('details')}
          className="mb-6 flex items-center text-purple-400 hover:text-purple-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Details
        </button>
        
        <div className="bg-gray-800 rounded-xl p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Book Your Tickets
          </h2>
          
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">{selectedMovie?.title}</h3>
            <p className="text-gray-400">Complete your booking details</p>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={bookingData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={bookingData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Mobile Number *
              </label>
              <input
                type="tel"
                name="mobile"
                value={bookingData.mobile}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="Enter your mobile number"
              />
            </div>
            
            <button
              onClick={handleFormSubmit}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Page 4: Confirmation
  const ConfirmationPage = () => (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-md mx-auto">
        <div className="bg-gray-800 rounded-xl p-8 shadow-2xl text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Booking Confirmed!
            </h2>
            <p className="text-gray-400">Your tickets have been successfully booked</p>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-6 mb-8">
            <div className="mb-4">
              <p className="text-sm text-gray-400 mb-1">Booking ID</p>
              <p className="text-2xl font-bold text-purple-400">{bookingId}</p>
            </div>
            
            <div className="border-t border-gray-600 pt-4">
              <h3 className="text-lg font-semibold text-purple-400 mb-4">{selectedMovie?.title}</h3>
              
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-400">Name:</span>
                  <span className="text-white">{bookingData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Email:</span>
                  <span className="text-white">{bookingData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Mobile:</span>
                  <span className="text-white">{bookingData.mobile}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Show Time:</span>
                  <span className="text-white">7:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Date:</span>
                  <span className="text-white">Today</span>
                </div>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => {
              setCurrentPage('movies');
              setSelectedMovie(null);
              setBookingData({ name: '', email: '', mobile: '' });
              setBookingId('');
            }}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book Another Movie
          </button>
        </div>
      </div>
    </div>
  );

  // Render current page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'movies':
        return <MovieListPage />;
      case 'details':
        return <MovieDetailsPage />;
      case 'booking':
        return <BookingFormPage />;
      case 'confirmation':
        return <ConfirmationPage />;
      default:
        return <MovieListPage />;
    }
  };

  return renderCurrentPage();
};

export default MovieBookingApp;
