// Sample memorial data as specified in the prompt
export const memorialData = {
  name: "John O. Smith",
  dob: "1952-08-04",
  dod: "2023-12-01",
  bio: "John was a father, teacher, and jazz lover who lived a life of joy, service, and laughter. He loved gardening, community events, and spending time with his grandchildren.",
  location: "Atlanta, GA",
  photos: [
    "/api/placeholder/400/300",
    "/api/placeholder/400/300", 
    "/api/placeholder/400/300",
    "/api/placeholder/400/300",
    "/api/placeholder/400/300",
    "/api/placeholder/400/300"
  ],
  profileImage: "/api/placeholder/200/200",
  coverImage: "/api/placeholder/800/400",
  tributes: [
    { 
      id: 1,
      name: "Emily", 
      message: "You taught me how to see the world with curiosity. Rest well, John ❤️",
      timestamp: "2023-12-05T10:30:00Z",
      avatar: "/api/placeholder/40/40"
    },
    { 
      id: 2,
      name: "Raymond", 
      message: "Miss your music already, brother. Say hi to Dad for me.",
      timestamp: "2023-12-04T15:45:00Z",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      message: "Mr. Smith was the best teacher I ever had. He made learning fun and always believed in us. Thank you for everything.",
      timestamp: "2023-12-03T09:15:00Z",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 4,
      name: "Michael Davis",
      message: "John's jazz collection was legendary. Many evenings spent listening to Miles Davis and Coltrane at his place. Those memories will live forever.",
      timestamp: "2023-12-02T18:20:00Z",
      avatar: "/api/placeholder/40/40"
    }
  ],
  fundraiser: {
    goal: 5000,
    raised: 3620,
    currency: "USD",
    title: "Memorial Fund for John O. Smith",
    description: "Help us celebrate John's life and support his family during this difficult time."
  },
  candles: 47,
  timeline: [
    {
      year: "1952",
      event: "Born in Atlanta, Georgia"
    },
    {
      year: "1974",
      event: "Graduated from University of Georgia with a degree in Education"
    },
    {
      year: "1976",
      event: "Started teaching at Roosevelt Elementary School"
    },
    {
      year: "1980",
      event: "Married his beloved wife, Margaret"
    },
    {
      year: "1985",
      event: "Welcomed first child, David"
    },
    {
      year: "1988",
      event: "Welcomed second child, Lisa"
    },
    {
      year: "2010",
      event: "Retired after 34 years of teaching"
    },
    {
      year: "2015",
      event: "Became a grandfather to Emma"
    },
    {
      year: "2018",
      event: "Became a grandfather to James"
    },
    {
      year: "2023",
      event: "Passed away peacefully surrounded by family"
    }
  ]
};

// Language translations
export const translations = {
  en: {
    lightCandle: "Light a Candle",
    postTribute: "Post a Tribute",
    lifeStory: "Life Story",
    timeline: "Timeline",
    photoGallery: "Photo Gallery",
    fundraiser: "Memorial Fund",
    tributes: "Tributes",
    candlesLit: "candles lit",
    goal: "Goal",
    raised: "Raised",
    donate: "Donate",
    writeMessage: "Write your tribute message...",
    yourName: "Your name",
    submit: "Submit Tribute",
    born: "Born",
    died: "Died",
    age: "Age",
    location: "Location",
    selectLanguage: "Select Language"
  },
  ha: {
    lightCandle: "Haska Kyandir",
    postTribute: "Bar Saƙon Tuna",
    lifeStory: "Tarihin Rayuwa",
    timeline: "Jadawalin Lokaci",
    photoGallery: "Hotunan Tunawa",
    fundraiser: "Asusun Tunawa",
    tributes: "Saƙonnin Tunawa",
    candlesLit: "kyandirori an haska",
    goal: "Manufa",
    raised: "An tara",
    donate: "Bayar da Gudummawa",
    writeMessage: "Rubuta saƙon tunawa...",
    yourName: "Sunan ka",
    submit: "Aika Saƙon Tunawa",
    born: "An haife",
    died: "Ya rasu",
    age: "Shekaru",
    location: "Wuri",
    selectLanguage: "Zaɓi Harshe"
  },
  sw: {
    lightCandle: "Washa Taa",
    postTribute: "Andika Ushuhuda",
    lifeStory: "Historia ya Maisha",
    timeline: "Ratiba ya Wakati",
    photoGallery: "Galeri ya Picha",
    fundraiser: "Mfuko wa Kumbukumbu",
    tributes: "Ushuhuda",
    candlesLit: "taa zimewashwa",
    goal: "Lengo",
    raised: "Imekusanywa",
    donate: "Toa Mchango",
    writeMessage: "Andika ujumbe wako wa ushuhuda...",
    yourName: "Jina lako",
    submit: "Tuma Ushuhuda",
    born: "Alizaliwa",
    died: "Alifariki",
    age: "Umri",
    location: "Mahali",
    selectLanguage: "Chagua Lugha"
  }
};

// Helper functions
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

export const calculateAge = (dob, dod) => {
  const birth = new Date(dob);
  const death = new Date(dod);
  const age = death.getFullYear() - birth.getFullYear();
  const monthDiff = death.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && death.getDate() < birth.getDate())) {
    return age - 1;
  }
  return age;
};

export const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
};

