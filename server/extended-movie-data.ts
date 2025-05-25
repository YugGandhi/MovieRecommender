import type { InsertMovie } from "../shared/schema";

export const extendedMovieDatabase: InsertMovie[] = [
  // Hollywood Action Movies
  {
    tmdbId: 299536,
    title: "Avengers: Infinity War",
    overview: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    releaseDate: "2018-04-25",
    posterPath: "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    backdropPath: "/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
    genres: ["Action", "Adventure", "Science Fiction"],
    runtime: 149,
    voteAverage: 8.3,
    voteCount: 28000,
    popularity: 345.2,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Epic Scale", "Spectacular Effects"],
      pacing: "Fast",
      narrativeStructure: "Ensemble",
      themes: ["Sacrifice", "Unity", "Power"]
    },
    moodTags: ["Epic", "Thrilling"],
    microGenres: ["Superhero Epic", "Cosmic Adventure"]
  },
  {
    tmdbId: 299534,
    title: "Avengers: Endgame",
    overview: "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
    releaseDate: "2019-04-24",
    posterPath: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    backdropPath: "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    genres: ["Action", "Adventure", "Drama"],
    runtime: 181,
    voteAverage: 8.4,
    voteCount: 24000,
    popularity: 298.5,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Epic Scale", "Emotional Depth"],
      pacing: "Measured",
      narrativeStructure: "Epic Journey",
      themes: ["Redemption", "Sacrifice", "Legacy"]
    },
    moodTags: ["Epic", "Emotional"],
    microGenres: ["Superhero Epic", "Time Travel Adventure"]
  },
  {
    tmdbId: 324857,
    title: "Spider-Man: Into the Spider-Verse",
    overview: "Teenager Miles Morales becomes Spider-Man of his reality, crossing paths with five counterparts from other dimensions.",
    releaseDate: "2018-12-14",
    posterPath: "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    backdropPath: "/7d6EY00g1c39SGZOoCJ5Py9nNth.jpg",
    genres: ["Animation", "Action", "Adventure"],
    runtime: 117,
    voteAverage: 8.4,
    voteCount: 18500,
    popularity: 245.8,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Innovative Animation", "Comic Book Style"],
      pacing: "Dynamic",
      narrativeStructure: "Coming of Age",
      themes: ["Identity", "Responsibility", "Family"]
    },
    moodTags: ["Inspiring", "Creative"],
    microGenres: ["Animated Superhero", "Multiverse Adventure"]
  },

  // Bollywood Movies
  {
    tmdbId: 390043,
    title: "The Lunchbox",
    overview: "A mistaken delivery in Mumbai's famously efficient lunchbox delivery system connects a young housewife to an older man in the dusk of his life.",
    releaseDate: "2013-09-20",
    posterPath: "/5GBMHX1tsLlxnwibfcr7AuYGqFq.jpg",
    backdropPath: "/x3QJpuKM8SjhJqj5yGe8cWJKIBH.jpg",
    genres: ["Drama", "Romance"],
    runtime: 104,
    voteAverage: 7.8,
    voteCount: 850,
    popularity: 12.4,
    originalLanguage: "hi",
    adult: false,
    cinematicDna: {
      visualStyle: ["Intimate Realism", "Urban Mumbai"],
      pacing: "Contemplative",
      narrativeStructure: "Character Study",
      themes: ["Love", "Connection", "Loneliness"]
    },
    moodTags: ["Heartwarming", "Thoughtful"],
    microGenres: ["Mumbai Romance", "Food Drama"]
  },
  {
    tmdbId: 454983,
    title: "Dangal",
    overview: "Former wrestler Mahavir Singh Phogat trains his daughters to become world-class wrestlers.",
    releaseDate: "2016-12-23",
    posterPath: "/fyGTDpBsIDb2r4HN4OeDj26sMVl.jpg",
    backdropPath: "/fM5QPF5zSo5DUBKnUB6lJ8nqJZt.jpg",
    genres: ["Drama", "Sport"],
    runtime: 161,
    voteAverage: 8.5,
    voteCount: 1200,
    popularity: 18.3,
    originalLanguage: "hi",
    adult: false,
    cinematicDna: {
      visualStyle: ["Gritty Sports Realism", "Rural India"],
      pacing: "Inspirational Build",
      narrativeStructure: "Sports Biopic",
      themes: ["Family", "Determination", "Gender Equality"]
    },
    moodTags: ["Inspiring", "Triumphant"],
    microGenres: ["Sports Biopic", "Father-Daughter Drama"]
  },
  {
    tmdbId: 364689,
    title: "3 Idiots",
    overview: "Two friends search for their long-lost companion who disappeared after their engineering college graduation.",
    releaseDate: "2009-12-25",
    posterPath: "/66A9MqXOyVFsmONaZlmNQbhLOLf.jpg",
    backdropPath: "/4VPpOsXKgLiyNiV0jXqX4LjQjMs.jpg",
    genres: ["Comedy", "Drama"],
    runtime: 170,
    voteAverage: 8.4,
    voteCount: 2100,
    popularity: 22.7,
    originalLanguage: "hi",
    adult: false,
    cinematicDna: {
      visualStyle: ["Colorful Comedy", "College Campus"],
      pacing: "Energetic",
      narrativeStructure: "Friendship Saga",
      themes: ["Education", "Friendship", "Following Dreams"]
    },
    moodTags: ["Feel-Good", "Funny"],
    microGenres: ["College Comedy", "Life Philosophy"]
  },

  // Classic Hollywood
  {
    tmdbId: 278,
    title: "The Shawshank Redemption",
    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    releaseDate: "1994-09-23",
    posterPath: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    backdropPath: "/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg",
    genres: ["Drama"],
    runtime: 142,
    voteAverage: 9.3,
    voteCount: 26000,
    popularity: 178.9,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Prison Realism", "Hope in Darkness"],
      pacing: "Contemplative",
      narrativeStructure: "Character Journey",
      themes: ["Hope", "Friendship", "Redemption"]
    },
    moodTags: ["Inspiring", "Profound"],
    microGenres: ["Prison Drama", "Redemption Story"]
  },
  {
    tmdbId: 238,
    title: "The Godfather",
    overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    releaseDate: "1972-03-24",
    posterPath: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    backdropPath: "/hAPeXBdGDGmXRPj4OZZ0poH6M7W.jpg",
    genres: ["Crime", "Drama"],
    runtime: 175,
    voteAverage: 9.2,
    voteCount: 19000,
    popularity: 145.7,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Classic Cinematography", "Shadow and Light"],
      pacing: "Deliberate",
      narrativeStructure: "Family Saga",
      themes: ["Power", "Family", "Corruption"]
    },
    moodTags: ["Classic", "Intense"],
    microGenres: ["Crime Family Saga", "American Classic"]
  },

  // Korean Cinema
  {
    tmdbId: 496243,
    title: "Parasite",
    overview: "Act like you own the place. A poor family schemes to become employed by a wealthy family.",
    releaseDate: "2019-05-30",
    posterPath: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    backdropPath: "/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
    genres: ["Comedy", "Thriller", "Drama"],
    runtime: 132,
    voteAverage: 8.5,
    voteCount: 17500,
    popularity: 89.3,
    originalLanguage: "ko",
    adult: false,
    cinematicDna: {
      visualStyle: ["Social Realism", "Architectural Metaphor"],
      pacing: "Building Tension",
      narrativeStructure: "Class Commentary",
      themes: ["Class Struggle", "Deception", "Inequality"]
    },
    moodTags: ["Thought-Provoking", "Unsettling"],
    microGenres: ["Social Thriller", "Dark Class Comedy"]
  },
  {
    tmdbId: 37165,
    title: "The Handmaiden",
    overview: "A woman is hired as a handmaiden to a Japanese heiress, but secretly she is involved in a plot to defraud her.",
    releaseDate: "2016-06-01",
    posterPath: "/dUr4HgDx1FW8hp8bS3CviM7Xmdd.jpg",
    backdropPath: "/9Vr1w30e3SZhYrqE04hO3M8mlRe.jpg",
    genres: ["Drama", "Romance", "Thriller"],
    runtime: 145,
    voteAverage: 8.1,
    voteCount: 3200,
    popularity: 24.1,
    originalLanguage: "ko",
    adult: false,
    cinematicDna: {
      visualStyle: ["Lavish Period Detail", "Erotic Artistry"],
      pacing: "Methodical Seduction",
      narrativeStructure: "Three-Act Deception",
      themes: ["Love", "Betrayal", "Freedom"]
    },
    moodTags: ["Artistic", "Seductive"],
    microGenres: ["Erotic Thriller", "Period Deception"]
  },

  // Japanese Cinema
  {
    tmdbId: 129,
    title: "Spirited Away",
    overview: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods and witches.",
    releaseDate: "2001-07-20",
    posterPath: "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    backdropPath: "/bSXfU4dwZyBA05fHkBFpREzgc2D.jpg",
    genres: ["Animation", "Family", "Adventure"],
    runtime: 125,
    voteAverage: 8.6,
    voteCount: 14000,
    popularity: 98.5,
    originalLanguage: "ja",
    adult: false,
    cinematicDna: {
      visualStyle: ["Hand-Drawn Magic", "Fantastical Worlds"],
      pacing: "Dreamlike Journey",
      narrativeStructure: "Coming of Age Fantasy",
      themes: ["Growth", "Environmentalism", "Courage"]
    },
    moodTags: ["Magical", "Inspiring"],
    microGenres: ["Studio Ghibli Fantasy", "Child's Adventure"]
  },

  // More Hollywood Blockbusters
  {
    tmdbId: 157336,
    title: "Interstellar",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    releaseDate: "2014-11-07",
    posterPath: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdropPath: "/pbrkL804c8yAv3zBZR4QPWZGyZp.jpg",
    genres: ["Adventure", "Drama", "Science Fiction"],
    runtime: 169,
    voteAverage: 8.6,
    voteCount: 33000,
    popularity: 178.2,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Cosmic Grandeur", "Scientific Realism"],
      pacing: "Epic Journey",
      narrativeStructure: "Space Odyssey",
      themes: ["Love", "Sacrifice", "Time"]
    },
    moodTags: ["Profound", "Epic"],
    microGenres: ["Hard Sci-Fi", "Space Family Drama"]
  },
  {
    tmdbId: 27205,
    title: "Inception",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.",
    releaseDate: "2010-07-16",
    posterPath: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    backdropPath: "/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
    genres: ["Action", "Science Fiction", "Mystery"],
    runtime: 148,
    voteAverage: 8.8,
    voteCount: 35000,
    popularity: 198.7,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Mind-Bending Visuals", "Layered Reality"],
      pacing: "Complex Build",
      narrativeStructure: "Nested Dreams",
      themes: ["Reality", "Memory", "Guilt"]
    },
    moodTags: ["Mind-Bending", "Thrilling"],
    microGenres: ["Dream Heist", "Reality Thriller"]
  },

  // More Bollywood Classics
  {
    tmdbId: 19404,
    title: "Dilwale Dulhania Le Jayenge",
    overview: "When Raj meets Simran in Europe, it isn't love at first sight but when Simran moves to India for an arranged marriage, love makes its presence felt.",
    releaseDate: "1995-10-20",
    posterPath: "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
    backdropPath: "/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg",
    genres: ["Comedy", "Drama", "Romance"],
    runtime: 189,
    voteAverage: 8.1,
    voteCount: 1800,
    popularity: 15.6,
    originalLanguage: "hi",
    adult: false,
    cinematicDna: {
      visualStyle: ["Romantic Bollywood", "European Romance"],
      pacing: "Musical Romance",
      narrativeStructure: "Love Story",
      themes: ["Love", "Family Honor", "Tradition vs Modernity"]
    },
    moodTags: ["Romantic", "Feel-Good"],
    microGenres: ["Classic Bollywood Romance", "Cultural Love Story"]
  },
  {
    tmdbId: 213121,
    title: "Queen",
    overview: "A Delhi girl from a traditional family sets out on a solo honeymoon after her marriage gets cancelled.",
    releaseDate: "2013-03-07",
    posterPath: "/w7RJKSvWyKYaKT2IVPl5iYK8aSC.jpg",
    backdropPath: "/s4lA2hW4oI99hBdtGmCKzXWJKtd.jpg",
    genres: ["Comedy", "Drama"],
    runtime: 146,
    voteAverage: 8.2,
    voteCount: 450,
    popularity: 8.9,
    originalLanguage: "hi",
    adult: false,
    cinematicDna: {
      visualStyle: ["Modern Delhi", "European Adventure"],
      pacing: "Self-Discovery Journey",
      narrativeStructure: "Coming of Age",
      themes: ["Independence", "Self-Discovery", "Women Empowerment"]
    },
    moodTags: ["Empowering", "Funny"],
    microGenres: ["Female Empowerment", "Solo Travel Comedy"]
  },

  // Thrillers & Horror
  {
    tmdbId: 419704,
    title: "Ad Astra",
    overview: "An astronaut travels to the outer edges of the solar system to find his missing father and unravel a mystery that threatens Earth.",
    releaseDate: "2019-09-20",
    posterPath: "/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
    backdropPath: "/5BwqwxMEjeFtdknRV792Svo0K1v.jpg",
    genres: ["Adventure", "Drama", "Mystery"],
    runtime: 123,
    voteAverage: 6.5,
    voteCount: 4500,
    popularity: 67.8,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Space Noir", "Psychological Realism"],
      pacing: "Contemplative",
      narrativeStructure: "Father-Son Journey",
      themes: ["Isolation", "Family", "Human Connection"]
    },
    moodTags: ["Contemplative", "Melancholic"],
    microGenres: ["Psychological Space Drama", "Father-Quest"]
  },
  {
    tmdbId: 348,
    title: "Alien",
    overview: "During its return to the earth, commercial spaceship Nostromo intercepts a distress signal from a distant planet.",
    releaseDate: "1979-05-25",
    posterPath: "/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg",
    backdropPath: "/AmR3JG1VQVxU8TfAvljUhfSFUOx.jpg",
    genres: ["Horror", "Science Fiction"],
    runtime: 117,
    voteAverage: 8.1,
    voteCount: 13000,
    popularity: 89.4,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Claustrophobic Terror", "Industrial Gothic"],
      pacing: "Slow Burn Horror",
      narrativeStructure: "Survival Horror",
      themes: ["Survival", "Corporate Greed", "Unknown Terror"]
    },
    moodTags: ["Scary", "Suspenseful"],
    microGenres: ["Space Horror", "Creature Feature"]
  }
];

// Additional genre categories for better browsing
export const additionalGenres = [
  "Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", 
  "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", 
  "Music", "Mystery", "Romance", "Science Fiction", "Sport", "Thriller", 
  "War", "Western", "Musical", "Film-Noir", "Short"
];

export const additionalMicroGenres = [
  // Action Sub-genres
  "Superhero Epic", "Martial Arts", "Military Action", "Spy Thriller", "Chase Films",
  "Disaster Movies", "Post-Apocalyptic", "Vigilante Justice", "Heist Films",
  
  // Drama Sub-genres  
  "Family Drama", "Legal Drama", "Medical Drama", "Prison Drama", "Sports Drama",
  "Coming of Age", "Character Study", "Social Drama", "Historical Drama",
  
  // Comedy Sub-genres
  "Romantic Comedy", "Dark Comedy", "Satire", "Slapstick", "Parody",
  "Buddy Comedy", "Teen Comedy", "Family Comedy", "Musical Comedy",
  
  // Horror Sub-genres
  "Psychological Horror", "Supernatural Horror", "Slasher", "Monster Movies", 
  "Zombie Films", "Vampire Movies", "Ghost Stories", "Body Horror",
  
  // Sci-Fi Sub-genres
  "Space Opera", "Cyberpunk", "Time Travel", "Alien Invasion", "Dystopian",
  "Hard Sci-Fi", "Space Western", "Robot/AI Films", "Superhero Sci-Fi",
  
  // Romance Sub-genres
  "Historical Romance", "Contemporary Romance", "Teen Romance", "LGBTQ+ Romance",
  "Cross-Cultural Romance", "Workplace Romance", "Second Chance Romance",
  
  // International Cinema
  "Bollywood Musical", "K-Drama Style", "Japanese Horror", "French New Wave",
  "Italian Neorealism", "German Expressionism", "Nordic Noir", "Latin American Cinema",
  
  // Regional/Cultural
  "Mumbai Street Life", "Small Town America", "Urban Youth", "Rural Drama",
  "Immigration Stories", "Cultural Clash", "Generational Conflict"
];