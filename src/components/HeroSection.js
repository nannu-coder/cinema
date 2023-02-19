import React from "react";
import Button from "./Button";
import "../styles/HeroSection.css";
import bannerVideo from "../assets/movie-1.png";

const HeroSection = () => {
  return (
    <section className="section-hero">
      <div className="hero-section-content">
        <h1 className="hero-heading">
          Get endless entertainment, and the shows and movies you love.
        </h1>
        <div className="hero-description">
          <p className="hero-des">
            Stream full seasons of exclusive series, current-season episodes,
            hit movies, Dali originals, kids shows, and more.
          </p>
        </div>
        <div className="cta-btn">
          <Button text="Start Free Trial" />
        </div>
      </div>
      <div className="hero-video">
        <img className="img-fluid" src={bannerVideo} alt="banner img" />
      </div>
    </section>
  );
};

export default HeroSection;
