'use client'; // Enable client-side features

import React from 'react';

// Define a unified type for all artworks
type Artwork = {
  title: string;
  image: string;
  description: string;
  software?: string; // Optional for digital artworks
  medium?: string; // Optional for physical artworks
};

// Digital artworks data
const digitalArtworks: Artwork[] = [
  {
    title: 'Digital Artwork 1',
    image: 'https://dummyimage.com/600x400/000/fff',
    software: 'Adobe Fresco',
    description: 'A digital painting of a surreal landscape.',
  },
  {
    title: 'Digital Artwork 2',
    image: 'https://dummyimage.com/600x400/000/fff',
    software: 'Adobe Fresco',
    description: 'Abstract digital art inspired by dreams.',
  },
];

// Physical artworks data
const physicalArtworks: Artwork[] = [
  {
    title: 'Physical Artwork 1',
    image: 'https://dummyimage.com/600x400/000/fff',
    description: 'An acrylic painting on canvas.',
  },
  {
    title: 'Physical Artwork 2',
    image: 'https://dummyimage.com/600x400/000/fff',
    medium: 'Watercolor',
    description: 'A watercolor piece inspired by nature.',
  },
];

export default function ArtworksPage() {
  return (
    <section className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">My Artworks</h1>

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
            />
          ))}
        </div>
      </div>

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
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ArtworkCard Component
function ArtworkCard({
  title,
  image,
  description,
  software,
  medium,
}: Artwork) {
  return (
    <div className="border overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-60 object-cover" />
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
