import React from 'react';

const digitalArtworks = [
    { title: 'Digital Artwork 1', image: 'https://dummyimage.com/600x400/000/fff', description: 'A digital painting of a surreal landscape.' },
    { title: 'Digital Artwork 2', image: 'https://dummyimage.com/600x400/000/fff', description: 'Abstract digital art inspired by dreams.' },
  ];
  
  const physicalArtworks = [
    { title: 'Physical Artwork 1', image: 'https://dummyimage.com/600x400/000/fff', description: 'An acrylic painting on canvas.' },
    { title: 'Physical Artwork 2', image: 'https://dummyimage.com/600x400/000/fff', description: 'A watercolor piece inspired by nature.' },
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
            <ArtworkCard key={index} title={art.title} image={art.image} description={art.description} />
          ))}
        </div>
      </div>


      {/* Physical Artworks Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Physical Artworks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {digitalArtworks.map((art, index) => (
            <ArtworkCard key={index} title={art.title} image={art.image} description={art.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ArtworkCard Component
function ArtworkCard({ title, image, description }: { title: string; image: string; description: string }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
