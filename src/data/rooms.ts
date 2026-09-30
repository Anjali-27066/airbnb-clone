export const rooms = [
 {
  id: 'living-room-1',
  name: 'Living room 1',
  amenities: ['Sofa', 'Air conditioning', 'Ceiling fan', 'TV'],
  photos: [
    '/living room 1.1.jpeg', // large top image
    '/living room 1.2.jpeg', // bottom left
    '/living room 1.3.jpeg'  // bottom right
  ]
},

  {
    id: 'living-room-2',
    name: 'Living room 2',
    amenities: ['Ceiling fan', 'Hot tub'],
    photos: ['/living room 2.1.jpeg', '/hero-3.jpeg', '/living room 2.3.jpeg', '/living room 2.4.jpeg', '/living room 2.5.jpeg', '/living room 2.6.jpeg', '/living room 2.7.jpeg']
  },
  {
    id: 'full-kitchen',
    name: 'Full kitchen',
    amenities: [
      'Freezer',
      'Fridge',
      'Blender',
      'Cooker',
      'Cooking basics',
      'Kettle',
      'Microwave',
      'Toaster',
      'Wine glasses',
      'Coffee',
      'Crockery and cutlery'
    ],
    photos: ['/kitchen-1.jpeg', '/kitchen-2.jpeg']
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    amenities: [
      'Double bed',
      'Air conditioning',
      'Bed linen',
      'Ceiling fan',
      'Clothes storage',
      'Cot',
      'Hangers',
      'Iron',
      'Room-darkening blinds',
      'Cleaning available during stay',
      'Cleaning products',
      'Long-term stays allowed',
      'Private entrance',
      'Wifi'
    ],
    photos: ['/hero-4.jpeg', '/bedroom 1.jpeg', '/bedroom 2.jpeg', '/bedroom 3.jpeg', '/bedroom 4.jpeg', '/bedroom 5.jpeg']
  },
  {
    id: 'full-bathroom',
    name: 'Full bathroom',
    amenities: ['Hairdryer', 'Hot water', 'Shampoo', 'Shower gel'],
    photos: ['/bathroom.jpeg']
  },
  {
    id: 'gym',
    name: 'Gym',
    amenities: ['Air conditioning', 'Gym', 'Exercise equipment', 'Ceiling fan'],
    photos: ['/gym.jpeg','/gym 2.jpeg', '/gym 3.jpeg', '/gym 4.jpeg', '/gym 5.jpeg']
  },
  {
    id: 'exterior',
    name: 'Exterior',
    amenities: [],   // ✅ added empty array
    photos: ['/hero-5.jpeg', '/exterior 1.jpeg', '/exterior 2.jpeg', '/exterior 3.jpeg', '/exterior 4.jpeg', '/exterior 5.jpeg']
  },
  {
    id: 'pool',
    name: 'Pool',
    amenities: ['Pool'],
    photos: ['/pool-1.jpeg', '/pool 2.jpeg', '/pool 3.jpeg']
  },
  {
    id: 'additional',
    name: 'Additional photos',
    amenities: [],   // ✅ added empty array
    photos: ['/additional-1.jpeg', '/additional 2.jpeg',  '/additional 3.jpeg',  '/additional 4.jpeg',  '/additional 5.jpeg',  '/additional 6.jpeg',  '/additional 7.jpeg',  '/additional 8.jpeg',  '/additional 9.jpeg',  '/additional 10.jpeg']
  }
]
export const allPhotos = rooms.flatMap(r =>
  r.photos.map((src, i) => ({ src, alt: `${r.name}, photo ${i + 1}` }))
)
