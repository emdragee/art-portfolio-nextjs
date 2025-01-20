'use client';

import React, { useState, useRef } from 'react';
import { Artwork, digitalArtworks, physicalArtworks } from './artworksData';

export default function LightboxGallery() {
  const [isOpen, setIsOpen] = useState(false); // Tracks modal state
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks current image index

  // Combine all artworks for lightbox navigation
  const gallery = [...digitalArtworks, ...physicalArtworks];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const showNext = () => {
    setCurrentIndex((currentIndex + 1) % gallery.length);
  };

  const showPrevious = () => {
    setCurrentIndex((currentIndex - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8 text-center">My Artworks</h1>

      {/* Physical Artworks Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Physical Artworks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {physicalArtworks.map((art, index) => (
            <ArtworkCard
              key={index}
              title={art.title}
              image={art.image}
              medium={art.medium}
              description={art.description}
              onClick={() => openLightbox(digitalArtworks.length + index)}
            />
          ))}
        </div>
      </div>

      
      {/* Digital Artworks Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Digital Artworks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {digitalArtworks.map((art, index) => (
            <ArtworkCard
              key={index}
              title={art.title}
              image={art.image}
              software={art.software}
              description={art.description}
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on inner click
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-4xl"
              onClick={closeLightbox}
            >
              &times;
            </button>

            {/* Image */}
            <img
              src={gallery[currentIndex].image}
              alt={gallery[currentIndex].title}
              className="w-full popup-img-height  object-contain rounded-lg"
            />

            {/* Navigation Arrows */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 text-white rounded-full p-2 hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                showPrevious();
              }}
            >
              &#8592; {/* Left Arrow */}
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 text-white rounded-full p-2 hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
            >
              &#8594; {/* Right Arrow */}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Artwork Card Component
function ArtworkCard({
  title,
  image,
  description,
  software,
  medium,
  onClick,
}: Artwork & { onClick: () => void }) {
  return (
    <div
      className="border overflow-hidden shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        {software && (
          <p className="text-sm text-gray-500 mb-2">
            <span className="font-bold">Software: </span>
            {software}
          </p>
        )}
        {medium && (
          <p className="text-sm text-blue-600 mb-2">
            <span className="font-bold">Medium: </span>
            {medium}
          </p>
        )}
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
