export type Artwork = {
    title: string;
    image: string;
    description: string;
    software?: string; // Optional for digital artworks
    medium?: string; // Optional for physical artworks
    date: string;
  };
    // Physical artworks data
    export const physicalArtworks: Artwork[] = [
        {
          title: 'Northcliffe Tree',
          image: 'https://imagedelivery.net/2DJRavW3O9VLw5fFBBZYRA/57d48cb6-c8b5-4426-b5ea-c8403c925e00/public',
          description: 'This is a painting of a tree in Northcliffe WA.',
          medium: 'Oil on mdf bord.',
          date: '03-01-2023',
        },
        {
          title: 'Untitled Self portait',
          image: 'https://imagedelivery.net/2DJRavW3O9VLw5fFBBZYRA/e4bf0dc4-6a67-4627-3ce0-318374a78700/public',
          description: 'A ruff self portrait i created without prior sketching',
          medium: 'Acrylic on Paper',
          date: '13-09-2022',
        },
        {
          title: 'Fire and Ice',
          image: 'https://imagedelivery.net/2DJRavW3O9VLw5fFBBZYRA/60fb1df5-9c66-43cf-503b-5589aae1d800/public',
          description: 'A ruff self portrait i created without prior sketching',
          medium: 'Water colour and fine liners on paper',
          date: '26-09-2022',
        },
        {
          title: 'Fire and Ice',
          image: 'https://imagedelivery.net/2DJRavW3O9VLw5fFBBZYRA/4a05710b-21ab-4cc2-2b50-6318dc0a7800/public',
          description: 'A ruff self portrait i created without prior sketching',
          medium: 'Water colour and fine liners on paper',
          date: '26-09-2022',
        },
      ];

  // Digital artworks data
  export const digitalArtworks: Artwork[] = [
    {
      title: 'Digital Artwork 1',
      image: 'https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      software: 'Adobe Fresco',
      description: 'A digital painting of a surreal landscape.',
      date: '2025-01-15',
    },
    {
      title: 'Digital Artwork 2',
      image: 'https://dummyimage.com/600x400/111/eee',
      software: 'Adobe Fresco',
      description: 'Abstract digital art inspired by dreams.',
      date: '2025-01-15',
    },
  ];
  
  