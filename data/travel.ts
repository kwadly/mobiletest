export type Landmark = {
  name: string;
  description: string;
  image: string;
};

export const destinations = [
  {
    id: 'new-york',
    city: 'New York City',
    country: 'United States',
    flag: '🇺🇸',
    image: 'https://images.unsplash.com/photo-1516382310788-74f29196f98a?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'cairo',
    city: 'Cairo',
    country: 'Egypt',
    flag: '🇪🇬',
    image: 'https://images.unsplash.com/photo-1594808846629-d8db69293d63?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'kyoto',
    city: 'Kyoto',
    country: 'Japan',
    flag: '🇯🇵',
    image: 'https://images.unsplash.com/photo-1595894427194-998804656179?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'lisbon',
    city: 'Lisbon',
    country: 'Portugal',
    flag: '🇵🇹',
    image: 'https://images.unsplash.com/photo-1693944844815-1a70c5e778a6?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'marrakech',
    city: 'Marrakech',
    country: 'Morocco',
    flag: '🇲🇦',
    image: 'https://images.unsplash.com/photo-1628790892460-2beb0e371226?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'rome',
    city: 'Rome',
    country: 'Italy',
    flag: '🇮🇹',
    image: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'bali',
    city: 'Bali',
    country: 'Indonesia',
    flag: '🇮🇩',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'cape-town',
    city: 'Cape Town',
    country: 'South Africa',
    flag: '🇿🇦',
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'istanbul',
    city: 'Istanbul',
    country: 'Türkiye',
    flag: '🇹🇷',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'cusco',
    city: 'Cusco',
    country: 'Peru',
    flag: '🇵🇪',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'petra',
    city: 'Petra',
    country: 'Jordan',
    flag: '🇯🇴',
    image: 'https://images.unsplash.com/photo-1579606032821-4e6161c81bd3?auto=format&fit=crop&w=900&q=85',
  },
];

export const landmarksByDestination: Record<string, Landmark[]> = {
  'new-york': [
    {
      name: 'Central Park',
      description: 'A peaceful stretch of gardens, paths, and open lawns in the middle of Manhattan.',
      image: 'https://images.unsplash.com/photo-1516382310788-74f29196f98a?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'The High Line',
      description: 'An elevated garden walk with city views, art, and neighborhood stops.',
      image: 'https://images.unsplash.com/photo-1766858771923-e3845a9ad796?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Grand Central Terminal',
      description: 'A landmark Beaux-Arts station known for its grand halls and starry ceiling.',
      image: 'https://images.unsplash.com/photo-1750077807597-49d411681f05?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Roosevelt Island Tramway',
      description: 'Glide above the East River for a fresh view of the Manhattan skyline.',
      image: 'https://images.unsplash.com/photo-1751178040581-a1daceb7c441?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Chelsea Market',
      description: 'Browse a lively indoor market filled with independent food counters.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=85',
    },
  ],
  cairo: [
    {
      name: 'Giza Pyramids',
      description: 'Explore the ancient pyramid complex on the edge of the city.',
      image: 'https://images.unsplash.com/photo-1594808846629-d8db69293d63?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Museum of Egyptian Civilization',
      description: 'Discover Egypt’s story through artifacts spanning thousands of years.',
      image: 'https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Khan el-Khalili',
      description: 'Wander the old market lanes for crafts, cafés, and local color.',
      image: 'https://images.unsplash.com/photo-1710211288826-b7df3ab71588?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Al-Azhar Park',
      description: 'Pause in landscaped gardens with far-reaching views over historic Cairo.',
      image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Cairo Citadel',
      description: 'Explore a hilltop fortress with sweeping views across the city.',
      image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=600&q=85',
    },
  ],
  kyoto: [
    {
      name: 'Fushimi Inari Taisha',
      description: 'Walk beneath the vermilion gates winding up the forested hillside.',
      image: 'https://images.unsplash.com/photo-1595894427194-998804656179?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Yasaka Shrine',
      description: 'Visit a lantern-lit shrine at the edge of Kyoto’s historic Gion district.',
      image: 'https://images.unsplash.com/photo-1707905644807-1d20b965c580?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Arashiyama Bamboo Grove',
      description: 'Follow a quiet path through towering bamboo on Kyoto’s western edge.',
      image: 'https://images.unsplash.com/photo-1736595100936-187630771acd?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Nishiki Market',
      description: 'Sample Kyoto specialties along a covered lane of local food stalls.',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Kinkaku-ji',
      description: 'See the Golden Pavilion reflected in the garden pond around it.',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=85',
    },
  ],
  lisbon: [
    {
      name: 'Belém Tower',
      description: 'See the riverside fortress that watched over Lisbon’s historic harbor.',
      image: 'https://images.unsplash.com/photo-1693944844815-1a70c5e778a6?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Tram 28',
      description: 'Ride Lisbon’s classic yellow tram through the old neighborhoods.',
      image: 'https://images.unsplash.com/photo-1682447448492-682010151fc5?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Alfama',
      description: 'Get lost among tiled facades, small squares, and hillside viewpoints.',
      image: 'https://images.unsplash.com/photo-1513735492246-483525079686?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Jerónimos Monastery',
      description: 'Admire intricate stonework at one of Belém’s most striking monuments.',
      image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Praça do Comércio',
      description: 'Take in the broad waterfront square and its bright arcaded buildings.',
      image: 'https://images.unsplash.com/photo-1727009462205-9cdf782f48c0?auto=format&fit=crop&w=600&q=85',
    },
  ],
  marrakech: [
    {
      name: 'Bahia Palace',
      description: 'Step into tiled courtyards and richly decorated rooms in the medina.',
      image: 'https://images.unsplash.com/photo-1628790892460-2beb0e371226?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Jardin Majorelle',
      description: 'Take a calm garden walk among palms, cacti, and vivid blue details.',
      image: 'https://images.unsplash.com/photo-1599859725763-4a16c9468890?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Jemaa el-Fnaa',
      description: 'See the main square come alive with food stalls and evening performers.',
      image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=600&q=85',
    },
  ],
  rome: [
    {
      name: 'Colosseum',
      description: 'Walk through the monumental arena at the heart of ancient Rome.',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Trevi Fountain',
      description: 'Find the ornate fountain tucked into the city’s lively historic center.',
      image: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Pantheon',
      description: 'Step inside the ancient temple and look up through its open dome.',
      image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Villa Borghese Gardens',
      description: 'Unwind among shaded paths, galleries, and quiet garden viewpoints.',
      image: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=600&q=85',
    },
  ],
  bali: [
    {
      name: 'Uluwatu Temple',
      description: 'Visit the clifftop temple for dramatic ocean views at sunset.',
      image: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Tegallalang Rice Terraces',
      description: 'Follow paths through layered rice fields and tropical greenery.',
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Tirta Empul',
      description: 'See the historic water temple and its spring-fed bathing pools.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Ubud Art Market',
      description: 'Browse local crafts and textiles in the center of Ubud.',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=85',
    },
  ],
  'cape-town': [
    {
      name: 'Table Mountain',
      description: 'Take in the city and coastline from this unmistakable mountain plateau.',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Kirstenbosch Gardens',
      description: 'Explore native fynbos and mountain-backed botanical paths.',
      image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Boulders Beach',
      description: 'Walk the boardwalk beside a sheltered beach and its penguin colony.',
      image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Bo-Kaap',
      description: 'See the colorful hillside streets and learn about the area’s heritage.',
      image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=600&q=85',
    },
  ],
  istanbul: [
    {
      name: 'Hagia Sophia',
      description: 'Explore centuries of architecture in this landmark beneath a vast dome.',
      image: 'https://images.unsplash.com/photo-1710211288826-b7df3ab71588?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Süleymaniye Mosque',
      description: 'Visit a hilltop mosque with peaceful courtyards and Golden Horn views.',
      image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Grand Bazaar',
      description: 'Browse covered lanes filled with ceramics, textiles, and tea shops.',
      image: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Galata Tower',
      description: 'Climb above the old quarter for a memorable view over the Bosphorus.',
      image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=85',
    },
  ],
  cusco: [
    {
      name: 'Machu Picchu',
      description: 'Plan a visit to the mountain citadel surrounded by Andean peaks.',
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Sacsayhuamán',
      description: 'Walk among the massive stone walls overlooking Cusco.',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'San Pedro Market',
      description: 'Taste regional produce and browse everyday goods near the center.',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Qorikancha',
      description: 'Discover the Inca temple foundations within a historic convent complex.',
      image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=600&q=85',
    },
  ],
  petra: [
    {
      name: 'The Treasury',
      description: 'Follow the narrow Siq to Petra’s rose-colored carved facade.',
      image: 'https://images.unsplash.com/photo-1677752512557-a29806af5c38?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'The Monastery',
      description: 'Climb the hillside trail to one of Petra’s largest monuments.',
      image: 'https://images.unsplash.com/photo-1691783639104-806ca12a9a8f?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Royal Tombs',
      description: 'See the richly colored facades carved into the eastern cliff face.',
      image: 'https://images.unsplash.com/photo-1551171129-8ce1ebb911b3?auto=format&fit=crop&w=600&q=85',
    },
    {
      name: 'Little Petra',
      description: 'Explore a quieter nearby archaeological site set in a narrow canyon.',
      image: 'https://images.unsplash.com/photo-1579606032821-4e6161c81bd3?auto=format&fit=crop&w=600&q=85',
    },
  ],
};
