import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import heroImage from '../assets/homepg2.png';
import homeImage3 from '../assets/homeimage3.jpg';
import homeImage4 from '../assets/Homeimage4.png';

const HomePage = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to track the current image index
  const navigate = useNavigate();

  // Array of image URLs for the slideshow
  const slideshowImages = [heroImage, homeImage3, homeImage4];

  const handleViewDetails = (property) => {
    setSelectedProperty(property);
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery.toLowerCase().includes('buy')) {
      navigate('/buy');
    } else if (searchQuery.toLowerCase().includes('sell')) {
      navigate('/sell');
    } else if (searchQuery.toLowerCase().includes('rent')) {
      navigate('/rent');
    } else {
      alert('No matching option found. Please enter "buy", "sell", or "rent".');
    }
  };

  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % slideshowImages.length);
  };

  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Your Perfect Home</h1>
          <p>Uncover the best properties with our expert assistance. Find the ideal property with our comprehensive listings.</p>
          <button className="btn">Browse Listings</button>
        </div>
        <div className="hero-image">
          <img src={slideshowImages[currentImageIndex]} alt="Slideshow" />
          <button className="next-btn" onClick={handleNextImage}>Next</button>
        </div>
      </section>

      <section className="search">
        <h2>What are you looking for?</h2>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for buy, sell, or rent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="btn">Search</button>
        </form>
      </section>

      <section className="property-listings">
        <h2>Featured Properties</h2>
        <div className="property-cards">
          <div className="property-card">
            <img src={homeImage3} alt="Property 1" />
            <div className="property-info">
              <h3>Beautiful Family Home</h3>
              <p>Rs.50,00,000</p>
              <button className="btn" onClick={() => handleViewDetails({
                image: homeImage3,
                address: "Beautiful Family Home",
                price: "RS.70,00,000",
                description: "A lovely family home with spacious rooms and a beautiful garden and swimming pool.",
                specialOffers: "10% discount if bought this month."
              })}>View Details</button>
            </div>
          </div>
          <div className="property-card">
            <img src="https://uploads-cf.cdn.placester.net/images%2F55c10510b1c93c3e2300000e%2F224060035%2F224060035_1.jpg?d" alt="Property 2" />
            <div className="property-info">
              <h3>Tree House Apartment</h3>
              <p>Rs.90,00,000</p>
              <button className="btn" onClick={() => handleViewDetails({
                image: "https://uploads-cf.cdn.placester.net/images%2F55c10510b1c93c3e2300000e%2F224060035%2F224060035_1.jpg?d",
                address: "Modern Apartment Like Tree House",
                price: "Rs.90,00,000",
                description: "Open space ideal for development or agricultural use.",
                specialOffers: "Free Registration for first 10 customers!!"
              })}>View Details</button>
            </div>
          </div>
          <div className="property-card">
            <img src="https://lscdn.blob.core.windows.net/property/realestatead/29_07_2024_11_55_28_IMG_20240629_WA0005.jpg" alt="Property 2" />
            <div className="property-info">
              <h3>Lands and Plots</h3>
              <p>Rs.50,00,000</p>
              <button className="btn" onClick={() => handleViewDetails({
                image: "https://lscdn.blob.core.windows.net/property/realestatead/29_07_2024_11_55_28_IMG_20240629_WA0005.jpg",
                address: "Lands and Plots ",
                price: "Rs.50,00,000",
                description: "For each 5000 sq.ft plot 20% off.",
                specialOffers: ""
              })}>View Details</button>
            </div>
          </div>
          <div className="property-card">
            <img src={homeImage4} alt="Property 3" />
            <div className="property-info">
              <h3>Luxury Condo</h3>
              <p>Rs.80,50,000</p>
              <button className="btn" onClick={() => handleViewDetails({
                image: homeImage4,
                address: "Luxury Condo",
                price: "Rs.80,50,000",
                description: "A high-end condo with luxurious amenities and stunning views.",
                specialOffers: "Complimentary interior design consultation."
              })}>View Details</button>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Find Your New Home?</h2>
        <p>Contact us today to start your search with our dedicated team.</p>
        <button className="btn">Get in Touch</button>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>We are a dedicated real estate company focused on helping you find the perfect home.</p>
          </div>
          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>Email: dhakshanasree1@gmail.com</p>
            <p>Phone: 1234567890</p>
          </div>
          <div className="footer-section address">
            <h2>Address</h2>
            <p>123 Real Estate St.</p>
            <p>City, State, ZIP</p>
          </div>
        </div>
      </footer>

      {selectedProperty && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src={selectedProperty.image} alt={`Property ${selectedProperty.address}`} />
            <h3>{selectedProperty.address}</h3>
            <p>{selectedProperty.price}</p>
            <p>{selectedProperty.description}</p>
            <p><strong>Special Offers:</strong> {selectedProperty.specialOffers}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
