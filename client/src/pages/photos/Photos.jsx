import React from "react";
import "./Photos.css";
import Navbar from "../../components/Navbar";

const uploadedPhotos = [
  {
    id: 1,
    title: "The Eyes",
    imageUrl: "/art-1.jpg",
    artist: "Anya Painter",
  },
  {
    id: 2,
    title: "Human Color",
    imageUrl: "/art-2.jpeg",
    artist: "Leo Green",
  },
  {
    id: 3,
    title: " Sea Waves",
    imageUrl: "/art-3.webp",
    artist: "Mira Blue",
  },
  {
    id: 4,
    title: "The Peacock",
    imageUrl: "/art-4.jpeg",
    artist: "Sophie Lane",
  },
];

const Photos = () => {
  return (
    <>
    <Navbar/>
    <div className="photos-page">
      <h2>User Uploaded Artworks</h2>
      <div className="photos-grid">
        {uploadedPhotos.map((photo) => (
          <div key={photo.id} className="photo-card">
            <img src={photo.imageUrl} alt={photo.title} />
            <div className="photo-info">
              <h4>{photo.title}</h4>
              <p>By {photo.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Photos;
