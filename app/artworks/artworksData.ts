export type Artwork = {
    title: string;
    image: string;
    description: string;
    software?: string; // Optional for digital artworks
    medium?: string; // Optional for physical artworks
  };
  
  // Digital artworks data
  export const digitalArtworks: Artwork[] = [
    {
      title: 'Digital Artwork 1',
      image: 'https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      software: 'Adobe Fresco',
      description: 'A digital painting of a surreal landscape.',
    },
    {
      title: 'Digital Artwork 2',
      image: 'https://dummyimage.com/600x400/111/eee',
      software: 'Adobe Fresco',
      description: 'Abstract digital art inspired by dreams.',
    },
  ];
  
  // Physical artworks data
  export const physicalArtworks: Artwork[] = [
    {
      title: 'Physical Artwork 1',
      image: 'https://dummyimage.com/600x400/222/ddd',
      description: 'An acrylic painting on canvas.',
      medium: 'Acrylic',
    },
    {
      title: 'Physical Artwork 2',
      image: 'https://dummyimage.com/600x400/333/ccc',
      description: 'A watercolor piece inspired by nature.',
      medium: 'Watercolor',
    },
  ];
  