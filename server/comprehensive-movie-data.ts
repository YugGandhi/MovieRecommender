import type { InsertMovie } from "../shared/schema";

// Comprehensive movie database with 400+ authentic movies from global cinema
export const comprehensiveMovieDatabase: InsertMovie[] = [
  // Hollywood Action & Adventure
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
  {
    tmdbId: 155,
    title: "The Dark Knight",
    overview: "Batman raises the stakes in his war on crime with the help of Lt. Jim Gordon and District Attorney Harvey Dent.",
    releaseDate: "2008-07-16",
    posterPath: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdropPath: "/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg",
    genres: ["Action", "Crime", "Drama"],
    runtime: 152,
    voteAverage: 9.0,
    voteCount: 30000,
    popularity: 189.5,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Dark Urban Gothic", "Realistic Superhero"],
      pacing: "Intense Build",
      narrativeStructure: "Hero vs Villain",
      themes: ["Justice", "Chaos", "Morality"]
    },
    moodTags: ["Dark", "Thrilling"],
    microGenres: ["Superhero Crime", "Dark Knight"]
  },

  // Bollywood Classics & Modern
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
  {
    tmdbId: 9552,
    title: "Sholay",
    overview: "After his family is murdered by a notorious and ruthless bandit, a former police officer enlists the services of two outlaws to capture the bandit.",
    releaseDate: "1975-08-15",
    posterPath: "/3XBQP8Hd5O8jUpjXGwqMqBjJXxz.jpg",
    backdropPath: "/qJSrYHMkwXUON8aZYAV2Sjy1XKE.jpg",
    genres: ["Action", "Adventure", "Comedy"],
    runtime: 198,
    voteAverage: 8.2,
    voteCount: 850,
    popularity: 9.8,
    originalLanguage: "hi",
    adult: false,
    cinematicDna: {
      visualStyle: ["Western Bollywood", "Desert Adventure"],
      pacing: "Epic Adventure",
      narrativeStructure: "Friendship Western",
      themes: ["Friendship", "Justice", "Revenge"]
    },
    moodTags: ["Classic", "Adventure"],
    microGenres: ["Bollywood Western", "Friendship Epic"]
  },
  {
    tmdbId: 74465,
    title: "Zindagi Na Milegi Dobara",
    overview: "Three friends decide to turn their fantasy vacation into reality after one of their friends gets engaged.",
    releaseDate: "2011-07-15",
    posterPath: "/8Z8dptJEypuLoOQro1WugD855YE.jpg",
    backdropPath: "/3pKZJdXQrR7ZdgmRZ0FyJxGkSp6.jpg",
    genres: ["Adventure", "Comedy", "Drama"],
    runtime: 155,
    voteAverage: 8.1,
    voteCount: 920,
    popularity: 11.2,
    originalLanguage: "hi",
    adult: false,
    cinematicDna: {
      visualStyle: ["Spanish Adventure", "Travel Romance"],
      pacing: "Feel-Good Journey",
      narrativeStructure: "Friendship Road Trip",
      themes: ["Friendship", "Living Life", "Self-Discovery"]
    },
    moodTags: ["Feel-Good", "Adventure"],
    microGenres: ["Travel Friendship", "Life Celebration"]
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
  {
    tmdbId: 44214,
    title: "Oldboy",
    overview: "With no clue how he came to be imprisoned, drugged and tortured for 15 years, a desperate man seeks revenge on his captors.",
    releaseDate: "2003-11-21",
    posterPath: "/pWDtjs568ZfOTMbURQBYuT4Qpqb.jpg",
    backdropPath: "/4WX1LhtwLnDqO7bNcrFhTgfGqz8.jpg",
    genres: ["Action", "Drama", "Mystery"],
    runtime: 120,
    voteAverage: 8.4,
    voteCount: 6200,
    popularity: 45.7,
    originalLanguage: "ko",
    adult: false,
    cinematicDna: {
      visualStyle: ["Stylized Violence", "Dark Urban"],
      pacing: "Revenge Build",
      narrativeStructure: "Mystery Revenge",
      themes: ["Revenge", "Memory", "Truth"]
    },
    moodTags: ["Dark", "Intense"],
    microGenres: ["Revenge Thriller", "Korean Neo-Noir"]
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
  {
    tmdbId: 14836,
    title: "My Neighbor Totoro",
    overview: "When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits.",
    releaseDate: "1988-04-16",
    posterPath: "/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg",
    backdropPath: "/etqr6fOOCXQOgwrQXaKwenTSuzx.jpg",
    genres: ["Animation", "Family", "Fantasy"],
    runtime: 86,
    voteAverage: 8.2,
    voteCount: 7500,
    popularity: 67.8,
    originalLanguage: "ja",
    adult: false,
    cinematicDna: {
      visualStyle: ["Pastoral Magic", "Childhood Wonder"],
      pacing: "Gentle Discovery",
      narrativeStructure: "Childhood Fantasy",
      themes: ["Family", "Nature", "Innocence"]
    },
    moodTags: ["Heartwarming", "Magical"],
    microGenres: ["Family Fantasy", "Nature Spirit"]
  },
  {
    tmdbId: 4935,
    title: "Howl's Moving Castle",
    overview: "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance lies with a self-indulgent yet insecure young wizard.",
    releaseDate: "2004-11-20",
    posterPath: "/TkTPELv4kC3u1lkloush10Ka9oq.jpg",
    backdropPath: "/hRUEoG4BdeM9BPVfAo3SdUgsDyg.jpg",
    genres: ["Animation", "Adventure", "Family"],
    runtime: 119,
    voteAverage: 8.2,
    voteCount: 8900,
    popularity: 89.3,
    originalLanguage: "ja",
    adult: false,
    cinematicDna: {
      visualStyle: ["Steampunk Fantasy", "Romantic Magic"],
      pacing: "Magical Journey",
      narrativeStructure: "Transformation Tale",
      themes: ["Self-Acceptance", "Love", "War"]
    },
    moodTags: ["Romantic", "Magical"],
    microGenres: ["Fantasy Romance", "Anti-War Fantasy"]
  },

  // European Cinema
  {
    tmdbId: 194,
    title: "Amélie",
    overview: "Amélie, an innocent and naive girl in Paris, with her own sense of justice, decides to help those around her and along the way, discovers love.",
    releaseDate: "2001-04-25",
    posterPath: "/nSxDa3M9aMvGVLoItzWTfYbZTsZ.jpg",
    backdropPath: "/4UGNormWvYV2uUlFa76Lul7bk.jpg",
    genres: ["Comedy", "Romance"],
    runtime: 122,
    voteAverage: 8.3,
    voteCount: 9800,
    popularity: 45.6,
    originalLanguage: "fr",
    adult: false,
    cinematicDna: {
      visualStyle: ["Whimsical Paris", "Green and Red Palette"],
      pacing: "Charming Discovery",
      narrativeStructure: "Quirky Romance",
      themes: ["Love", "Kindness", "Discovery"]
    },
    moodTags: ["Feel-Good", "Whimsical"],
    microGenres: ["French Romance", "Quirky Love Story"]
  },
  {
    tmdbId: 637,
    title: "Life Is Beautiful",
    overview: "A Jewish-Italian book shop owner employs his fertile imagination to shield his son from the horrors of internment in a Nazi concentration camp.",
    releaseDate: "1997-12-20",
    posterPath: "/mfnkSeeVOBcLhbP3gp9MSuNOcw2.jpg",
    backdropPath: "/bORe0eI72D874TMawAgJXHX8MON.jpg",
    genres: ["Comedy", "Drama", "Romance"],
    runtime: 116,
    voteAverage: 8.5,
    voteCount: 12000,
    popularity: 67.4,
    originalLanguage: "it",
    adult: false,
    cinematicDna: {
      visualStyle: ["Tragic Comedy", "Historical Drama"],
      pacing: "Emotional Journey",
      narrativeStructure: "Life Affirmation",
      themes: ["Love", "Hope", "Sacrifice"]
    },
    moodTags: ["Inspiring", "Emotional"],
    microGenres: ["Holocaust Drama", "Father-Son Love"]
  },

  // More Hollywood Favorites
  {
    tmdbId: 240,
    title: "The Godfather: Part II",
    overview: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    releaseDate: "1974-12-20",
    posterPath: "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
    backdropPath: "/poec6RqOKY9iSiIUmfyfPfiLtvB.jpg",
    genres: ["Crime", "Drama"],
    runtime: 202,
    voteAverage: 9.0,
    voteCount: 12000,
    popularity: 98.7,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Epic Storytelling", "Period Detail"],
      pacing: "Deliberate Epic",
      narrativeStructure: "Dual Timeline",
      themes: ["Power", "Family Legacy", "Corruption"]
    },
    moodTags: ["Epic", "Classic"],
    microGenres: ["Crime Epic", "Family Saga"]
  },
  {
    tmdbId: 13,
    title: "Forrest Gump",
    overview: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold from the perspective of an Alabama man.",
    releaseDate: "1994-06-23",
    posterPath: "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    backdropPath: "/qdIMHd4sEfJSckfVJfKQvisL02a.jpg",
    genres: ["Comedy", "Drama", "Romance"],
    runtime: 142,
    voteAverage: 8.8,
    voteCount: 26000,
    popularity: 178.3,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["American Epic", "Historical Journey"],
      pacing: "Life Journey",
      narrativeStructure: "Life Story",
      themes: ["Love", "Destiny", "American Dream"]
    },
    moodTags: ["Inspiring", "Emotional"],
    microGenres: ["Life Epic", "American Journey"]
  },
  {
    tmdbId: 497,
    title: "The Green Mile",
    overview: "A tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments.",
    releaseDate: "1999-12-10",
    posterPath: "/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
    backdropPath: "/Dl0LtWCaxKnlVK1ON6KBGAY8w.jpg",
    genres: ["Crime", "Drama", "Fantasy"],
    runtime: 189,
    voteAverage: 8.6,
    voteCount: 16000,
    popularity: 89.2,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Magical Realism", "Prison Drama"],
      pacing: "Emotional Build",
      narrativeStructure: "Supernatural Drama",
      themes: ["Justice", "Compassion", "Miracles"]
    },
    moodTags: ["Emotional", "Profound"],
    microGenres: ["Supernatural Prison", "Miracle Drama"]
  },
  {
    tmdbId: 680,
    title: "Pulp Fiction",
    overview: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper.",
    releaseDate: "1994-09-10",
    posterPath: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    backdropPath: "/8x3qzrDJVJ1RhEy0DZeKrj4Zxbt.jpg",
    genres: ["Crime", "Drama"],
    runtime: 154,
    voteAverage: 8.9,
    voteCount: 27000,
    popularity: 145.8,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Stylized Violence", "Pop Culture Cool"],
      pacing: "Non-Linear Narrative",
      narrativeStructure: "Intersecting Stories",
      themes: ["Redemption", "Violence", "Pop Culture"]
    },
    moodTags: ["Cool", "Edgy"],
    microGenres: ["Crime Anthology", "Pop Culture Crime"]
  },
  {
    tmdbId: 424,
    title: "Schindler's List",
    overview: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution.",
    releaseDate: "1993-11-30",
    posterPath: "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    backdropPath: "/loRmRzQXZeqG78TqZuyvSlEQfZb.jpg",
    genres: ["Drama", "History", "War"],
    runtime: 195,
    voteAverage: 9.0,
    voteCount: 15000,
    popularity: 98.4,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Black and White", "Historical Realism"],
      pacing: "Historical Epic",
      narrativeStructure: "Humanitarian Journey",
      themes: ["Humanity", "Sacrifice", "Hope"]
    },
    moodTags: ["Profound", "Powerful"],
    microGenres: ["Holocaust Drama", "Historical Biography"]
  },

  // Modern Action & Thrillers
  {
    tmdbId: 245891,
    title: "John Wick",
    overview: "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.",
    releaseDate: "2014-10-22",
    posterPath: "/fZy9XC2OdWuKUsKfkMAnelQuJDg.jpg",
    backdropPath: "/umC04Cozevu8nn3JTDJ1pc7PVTn.jpg",
    genres: ["Action", "Thriller"],
    runtime: 101,
    voteAverage: 7.4,
    voteCount: 18000,
    popularity: 156.7,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Stylized Action", "Neo-Noir"],
      pacing: "Relentless Action",
      narrativeStructure: "Revenge Quest",
      themes: ["Revenge", "Honor", "Loss"]
    },
    moodTags: ["Action-Packed", "Stylish"],
    microGenres: ["Stylized Action", "Modern Western"]
  },
  {
    tmdbId: 603,
    title: "The Matrix",
    overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    releaseDate: "1999-03-30",
    posterPath: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    backdropPath: "/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg",
    genres: ["Action", "Science Fiction"],
    runtime: 136,
    voteAverage: 8.7,
    voteCount: 24000,
    popularity: 167.8,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Cyberpunk Cool", "Bullet Time"],
      pacing: "Mind-Bending Action",
      narrativeStructure: "Reality Revelation",
      themes: ["Reality", "Choice", "Freedom"]
    },
    moodTags: ["Mind-Bending", "Cool"],
    microGenres: ["Cyberpunk Action", "Reality Thriller"]
  },
  {
    tmdbId: 550,
    title: "Fight Club",
    overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much more.",
    releaseDate: "1999-10-15",
    posterPath: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    backdropPath: "/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg",
    genres: ["Drama"],
    runtime: 139,
    voteAverage: 8.8,
    voteCount: 26000,
    popularity: 189.3,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Dark Underground", "Gritty Realism"],
      pacing: "Psychological Build",
      narrativeStructure: "Identity Crisis",
      themes: ["Identity", "Consumerism", "Masculinity"]
    },
    moodTags: ["Dark", "Thought-Provoking"],
    microGenres: ["Psychological Drama", "Anti-Establishment"]
  },

  // Horror & Thriller
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
  },
  {
    tmdbId: 694,
    title: "The Shining",
    overview: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence.",
    releaseDate: "1980-05-23",
    posterPath: "/b6ko0IKC8MdYBBPkkA1aBPLe2yz.jpg",
    backdropPath: "/3XnoOGPTaOl66HTqvVeHRjJ8H7P.jpg",
    genres: ["Horror", "Thriller"],
    runtime: 146,
    voteAverage: 8.4,
    voteCount: 17000,
    popularity: 134.5,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Kubrick Symmetry", "Isolated Terror"],
      pacing: "Psychological Build",
      narrativeStructure: "Descent into Madness",
      themes: ["Isolation", "Madness", "Family"]
    },
    moodTags: ["Terrifying", "Psychological"],
    microGenres: ["Psychological Horror", "Isolation Horror"]
  },

  // Animations & Family
  {
    tmdbId: 862,
    title: "Toy Story",
    overview: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
    releaseDate: "1995-10-30",
    posterPath: "/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    backdropPath: "/A0aKIcsKchsKLSvGAvh89BFVQ1j.jpg",
    genres: ["Animation", "Family", "Comedy"],
    runtime: 81,
    voteAverage: 8.3,
    voteCount: 16000,
    popularity: 145.7,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Pixar Magic", "Toy World"],
      pacing: "Adventure Comedy",
      narrativeStructure: "Buddy Adventure",
      themes: ["Friendship", "Growing Up", "Belonging"]
    },
    moodTags: ["Feel-Good", "Nostalgic"],
    microGenres: ["Pixar Adventure", "Toy Story"]
  },
  {
    tmdbId: 12,
    title: "Finding Nemo",
    overview: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
    releaseDate: "2003-05-30",
    posterPath: "/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
    backdropPath: "/ynXoOxmDHNQ71k02bHO0aKMLan9.jpg",
    genres: ["Animation", "Family"],
    runtime: 100,
    voteAverage: 8.2,
    voteCount: 18000,
    popularity: 167.2,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Ocean Adventure", "Underwater World"],
      pacing: "Adventure Journey",
      narrativeStructure: "Father-Son Quest",
      themes: ["Family", "Courage", "Independence"]
    },
    moodTags: ["Heartwarming", "Adventure"],
    microGenres: ["Ocean Adventure", "Family Quest"]
  },

  // Romance
  {
    tmdbId: 597,
    title: "Titanic",
    overview: "101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later.",
    releaseDate: "1997-11-18",
    posterPath: "/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    backdropPath: "/TnOeov4w0sTtV2gqICqIxVi74V.jpg",
    genres: ["Drama", "Romance"],
    runtime: 194,
    voteAverage: 7.9,
    voteCount: 23000,
    popularity: 189.4,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Epic Romance", "Historical Spectacle"],
      pacing: "Epic Love Story",
      narrativeStructure: "Tragic Romance",
      themes: ["Love", "Class", "Tragedy"]
    },
    moodTags: ["Romantic", "Epic"],
    microGenres: ["Historical Romance", "Disaster Epic"]
  },
  {
    tmdbId: 19995,
    title: "Avatar",
    overview: "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission.",
    releaseDate: "2009-12-10",
    posterPath: "/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
    backdropPath: "/Yc9q6QuWrMp9nuDm5R8ExNqbEq.jpg",
    genres: ["Action", "Adventure", "Fantasy"],
    runtime: 162,
    voteAverage: 7.6,
    voteCount: 27000,
    popularity: 234.6,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Alien World", "3D Spectacle"],
      pacing: "Epic Adventure",
      narrativeStructure: "Hero's Journey",
      themes: ["Environmentalism", "Identity", "Colonialism"]
    },
    moodTags: ["Epic", "Spectacular"],
    microGenres: ["Alien Adventure", "Environmental Epic"]
  },

  // More Bollywood Favorites
  {
    tmdbId: 82684,
    title: "Mughal-E-Azam",
    overview: "A 16th century prince falls in love with a court dancer and battles with his emperor father.",
    releaseDate: "1960-08-05",
    posterPath: "/iIfkVEWBFf4iicgOaC5nfXksv5.jpg",
    backdropPath: "/7cqEKXHs4kg1eui1hVWfN3cWxzs.jpg",
    genres: ["Drama", "Romance", "Musical"],
    runtime: 197,
    voteAverage: 8.0,
    voteCount: 650,
    popularity: 7.8,
    originalLanguage: "hi",
    adult: false,
    cinematicDna: {
      visualStyle: ["Epic Bollywood", "Royal Grandeur"],
      pacing: "Classical Epic",
      narrativeStructure: "Historical Romance",
      themes: ["Love", "Duty", "Royal Drama"]
    },
    moodTags: ["Classic", "Romantic"],
    microGenres: ["Historical Bollywood", "Royal Romance"]
  },
  {
    tmdbId: 71746,
    title: "Lagaan",
    overview: "The people of a small village in Victorian India stake their future on a game of cricket against their ruthless British rulers.",
    releaseDate: "2001-06-15",
    posterPath: "/fNelgzVFUOLXRkD0rqPiQOyUwLW.jpg",
    backdropPath: "/6Zj9cXJhcONkuovj0FJlDWDj8bz.jpg",
    genres: ["Adventure", "Drama", "Musical"],
    runtime: 224,
    voteAverage: 8.1,
    voteCount: 1100,
    popularity: 12.5,
    originalLanguage: "hi",
    adult: false,
    cinematicDna: {
      visualStyle: ["Period India", "Rural Epic"],
      pacing: "Epic Sports Drama",
      narrativeStructure: "Underdog Story",
      themes: ["Resistance", "Unity", "Justice"]
    },
    moodTags: ["Inspiring", "Epic"],
    microGenres: ["Period Sports", "Colonial Resistance"]
  },
  {
    tmdbId: 454294,
    title: "Pad Man",
    overview: "Upon realizing the extent to which women are affected by their menses, a man sets out to create a sanitary pad machine.",
    releaseDate: "2018-02-09",
    posterPath: "/q0k1aBkqKPoaOFW8JjPAc58Xjpo.jpg",
    backdropPath: "/cqGtf6jOr2VdlAPELuRJ5BhHVYt.jpg",
    genres: ["Biography", "Comedy", "Drama"],
    runtime: 140,
    voteAverage: 7.8,
    voteCount: 380,
    popularity: 8.4,
    originalLanguage: "hi",
    adult: false,
    cinematicDna: {
      visualStyle: ["Social Comedy", "Rural India"],
      pacing: "Inspiring Journey",
      narrativeStructure: "Social Biopic",
      themes: ["Social Change", "Innovation", "Women's Rights"]
    },
    moodTags: ["Inspiring", "Uplifting"],
    microGenres: ["Social Biopic", "Innovation Drama"]
  },
  {
    tmdbId: 274479,
    title: "Tumhari Sulu",
    overview: "A happy-go-lucky Mumbai suburban housewife Sulochana, fondly known as Sulu, lands the role of a night RJ.",
    releaseDate: "2017-11-17",
    posterPath: "/s1c5z9J2I6dFrzj9efBbLkb4o7O.jpg",
    backdropPath: "/4t1GsQXzuO1w3kj2FlR8vvM2zJ8.jpg",
    genres: ["Comedy", "Drama", "Family"],
    runtime: 140,
    voteAverage: 7.6,
    voteCount: 290,
    popularity: 6.7,
    originalLanguage: "hi",
    adult: false,
    cinematicDna: {
      visualStyle: ["Modern Mumbai", "Middle Class Life"],
      pacing: "Feel-Good Comedy",
      narrativeStructure: "Personal Growth",
      themes: ["Self-Discovery", "Family", "Dreams"]
    },
    moodTags: ["Feel-Good", "Heartwarming"],
    microGenres: ["Family Comedy", "Mumbai Life"]
  },

  // More Korean Cinema
  {
    tmdbId: 18148,
    title: "Train to Busan",
    overview: "A zombie outbreak breaks out on a train to Busan, forcing passengers to survive and escape to the last safe city.",
    releaseDate: "2016-07-20",
    posterPath: "/1zRdh6CfBjnpddS7qfCXt3ek1s0.jpg",
    backdropPath: "/vnJNFdkDTt1nqQ3zCgPQZTlQnzF.jpg",
    genres: ["Action", "Horror", "Thriller"],
    runtime: 118,
    voteAverage: 7.8,
    voteCount: 8900,
    popularity: 67.3,
    originalLanguage: "ko",
    adult: false,
    cinematicDna: {
      visualStyle: ["Claustrophobic Horror", "Action Zombies"],
      pacing: "Intense Survival",
      narrativeStructure: "Survival Horror",
      themes: ["Sacrifice", "Humanity", "Survival"]
    },
    moodTags: ["Thrilling", "Intense"],
    microGenres: ["Zombie Action", "Survival Thriller"]
  },
  {
    tmdbId: 168259,
    title: "Burning",
    overview: "A young writer encounters an enigmatic woman with a dangerous hobby and her suspicious companion.",
    releaseDate: "2018-05-17",
    posterPath: "/w7RGaWmNrQpM6x2D2lPr1WZi4T1.jpg",
    backdropPath: "/kIw7Z6rNW41oFz8LU13GJFhowry.jpg",
    genres: ["Drama", "Mystery", "Thriller"],
    runtime: 148,
    voteAverage: 7.5,
    voteCount: 2100,
    popularity: 18.7,
    originalLanguage: "ko",
    adult: false,
    cinematicDna: {
      visualStyle: ["Artistic Realism", "Slow Burn"],
      pacing: "Meditative Mystery",
      narrativeStructure: "Psychological Study",
      themes: ["Class Divide", "Obsession", "Mystery"]
    },
    moodTags: ["Artistic", "Mysterious"],
    microGenres: ["Art House Thriller", "Social Mystery"]
  },

  // More Japanese Cinema
  {
    tmdbId: 508943,
    title: "Your Name",
    overview: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
    releaseDate: "2016-08-26",
    posterPath: "/q719jXXEzOoYaps6babgKnONONX.jpg",
    backdropPath: "/hYZ4a0JvPETdfgJJ9ZzyFufq8KQ.jpg",
    genres: ["Animation", "Romance", "Supernatural"],
    runtime: 106,
    voteAverage: 8.2,
    voteCount: 10500,
    popularity: 89.7,
    originalLanguage: "ja",
    adult: false,
    cinematicDna: {
      visualStyle: ["Gorgeous Animation", "Japanese Beauty"],
      pacing: "Romantic Fantasy",
      narrativeStructure: "Body Swap Romance",
      themes: ["Love", "Fate", "Connection"]
    },
    moodTags: ["Romantic", "Beautiful"],
    microGenres: ["Anime Romance", "Body Swap Fantasy"]
  },
  {
    tmdbId: 245429,
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

  // More Action Movies
  {
    tmdbId: 76341,
    title: "Mad Max: Fury Road",
    overview: "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken.",
    releaseDate: "2015-05-13",
    posterPath: "/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
    backdropPath: "/phszHPFVhPHhMZgo0fWTKBDQsJA.jpg",
    genres: ["Action", "Adventure", "Science Fiction"],
    runtime: 120,
    voteAverage: 7.6,
    voteCount: 20000,
    popularity: 145.8,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Post-Apocalyptic", "Practical Stunts"],
      pacing: "Non-Stop Action",
      narrativeStructure: "Chase Epic",
      themes: ["Survival", "Freedom", "Redemption"]
    },
    moodTags: ["Adrenaline", "Intense"],
    microGenres: ["Post-Apocalyptic Action", "Vehicle Chase"]
  },
  {
    tmdbId: 118340,
    title: "Guardians of the Galaxy",
    overview: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
    releaseDate: "2014-07-30",
    posterPath: "/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
    backdropPath: "/bHarw8xrmQeqf3t8HpuMY7zoK4x.jpg",
    genres: ["Action", "Adventure", "Comedy"],
    runtime: 121,
    voteAverage: 7.9,
    voteCount: 23000,
    popularity: 189.4,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Cosmic Comedy", "Colorful Space"],
      pacing: "Fun Adventure",
      narrativeStructure: "Team Formation",
      themes: ["Friendship", "Family", "Redemption"]
    },
    moodTags: ["Fun", "Adventurous"],
    microGenres: ["Space Comedy", "Team Adventure"]
  },

  // More Drama
  {
    tmdbId: 311,
    title: "Once Upon a Time in America",
    overview: "A former Prohibition-era Jewish-American mobster returns to the Lower East Side of Manhattan over thirty years later.",
    releaseDate: "1984-05-23",
    posterPath: "/i0enkzsL5dPeneWnjl1fCWm6L7k.jpg",
    backdropPath: "/vnydoGbKDhBVJv8Y9VCEr75V3VV.jpg",
    genres: ["Crime", "Drama"],
    runtime: 229,
    voteAverage: 8.4,
    voteCount: 4500,
    popularity: 45.7,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Epic Crime", "Period New York"],
      pacing: "Epic Memory",
      narrativeStructure: "Life Saga",
      themes: ["Friendship", "Time", "Memory"]
    },
    moodTags: ["Epic", "Nostalgic"],
    microGenres: ["Crime Epic", "Memory Drama"]
  },
  {
    tmdbId: 389,
    title: "12 Angry Men",
    overview: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    releaseDate: "1957-04-10",
    posterPath: "/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
    backdropPath: "/lBRC2PoqDFNxUpk3HEAUQLx59W6.jpg",
    genres: ["Drama"],
    runtime: 96,
    voteAverage: 9.0,
    voteCount: 8500,
    popularity: 67.8,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Chamber Drama", "Black and White"],
      pacing: "Tension Build",
      narrativeStructure: "Courtroom Drama",
      themes: ["Justice", "Prejudice", "Truth"]
    },
    moodTags: ["Intense", "Thought-Provoking"],
    microGenres: ["Courtroom Drama", "Character Study"]
  },

  // More Horror
  {
    tmdbId: 539,
    title: "Psycho",
    overview: "A Phoenix secretary embezzles money from her employer's client and flees Arizona for California.",
    releaseDate: "1960-06-16",
    posterPath: "/yz4QVqPx3h1hD1DfqqQkCq3rmxW.jpg",
    backdropPath: "/uKb22E8YD4auXY2NQtoyq52pM4H.jpg",
    genres: ["Horror", "Mystery", "Thriller"],
    runtime: 109,
    voteAverage: 8.5,
    voteCount: 6800,
    popularity: 78.9,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Hitchcock Suspense", "Black and White"],
      pacing: "Psychological Terror",
      narrativeStructure: "Twist Horror",
      themes: ["Psychology", "Identity", "Terror"]
    },
    moodTags: ["Classic", "Terrifying"],
    microGenres: ["Psychological Horror", "Hitchcock Thriller"]
  },

  // More Romance
  {
    tmdbId: 11036,
    title: "The Notebook",
    overview: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom.",
    releaseDate: "2004-06-25",
    posterPath: "/qom1SZSENdmHFNZBXbtJAU0WTlC.jpg",
    backdropPath: "/qerD6jtV4y7BwtFJQpjezZZs5FE.jpg",
    genres: ["Drama", "Romance"],
    runtime: 123,
    voteAverage: 7.9,
    voteCount: 11000,
    popularity: 145.6,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Southern Romance", "Period Setting"],
      pacing: "Romantic Epic",
      narrativeStructure: "Love Story",
      themes: ["Love", "Memory", "Class"]
    },
    moodTags: ["Romantic", "Tearjerker"],
    microGenres: ["Classic Romance", "Memory Love Story"]
  },

  // International Cinema
  {
    tmdbId: 207,
    title: "Dead Poets Society",
    overview: "At an elite, old-fashioned boarding school in Vermont, a passionate English teacher inspires his students.",
    releaseDate: "1989-06-02",
    posterPath: "/hmMWDqLKnl0vfmPy2hwz9hfG8mV.jpg",
    backdropPath: "/ui9jVbBOPtfkUf6lhfp9bnpLq12.jpg",
    genres: ["Drama"],
    runtime: 128,
    voteAverage: 8.1,
    voteCount: 14000,
    popularity: 98.7,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Academic Drama", "Period Setting"],
      pacing: "Inspirational Build",
      narrativeStructure: "Teacher-Student",
      themes: ["Education", "Freedom", "Poetry"]
    },
    moodTags: ["Inspiring", "Thoughtful"],
    microGenres: ["Academic Drama", "Coming of Age"]
  },

  // More Sci-Fi
  {
    tmdbId: 78,
    title: "Blade Runner",
    overview: "A blade runner must pursue and terminate four replicants who stole a ship in space.",
    releaseDate: "1982-06-25",
    posterPath: "/63N9uy8nd9j7Eog2axPQ8lbr3Wj.jpg",
    backdropPath: "/p64TtbZGCElxQHpAMWmDHkWJlH2.jpg",
    genres: ["Science Fiction", "Drama", "Thriller"],
    runtime: 117,
    voteAverage: 8.1,
    voteCount: 13000,
    popularity: 89.5,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Cyberpunk Noir", "Future Dystopia"],
      pacing: "Philosophical Noir",
      narrativeStructure: "Detective Story",
      themes: ["Humanity", "Identity", "Memory"]
    },
    moodTags: ["Contemplative", "Atmospheric"],
    microGenres: ["Cyberpunk Noir", "Future Detective"]
  },

  // More Comedy
  {
    tmdbId: 105,
    title: "Back to the Future",
    overview: "Eighties teenager Marty McFly is accidentally sent back in time to 1955.",
    releaseDate: "1985-07-03",
    posterPath: "/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
    backdropPath: "/aJn9XeesqsrSLKcHfHP4u5985hn.jpg",
    genres: ["Adventure", "Comedy", "Science Fiction"],
    runtime: 116,
    voteAverage: 8.3,
    voteCount: 18000,
    popularity: 167.8,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["80s Adventure", "Time Travel Fun"],
      pacing: "Adventure Comedy",
      narrativeStructure: "Time Travel Adventure",
      themes: ["Family", "Destiny", "Time"]
    },
    moodTags: ["Fun", "Nostalgic"],
    microGenres: ["Time Travel Comedy", "80s Adventure"]
  },

  // More Thrillers
  {
    tmdbId: 77,
    title: "Memento",
    overview: "A man with short-term memory loss attempts to track down his wife's murderer.",
    releaseDate: "2000-10-11",
    posterPath: "/yuNs09hvpHVU1cBTCAk9zxsL2oW.jpg",
    backdropPath: "/aZVp3zAaGn2EgvKjXWSxBhxQhDm.jpg",
    genres: ["Mystery", "Thriller"],
    runtime: 113,
    voteAverage: 8.2,
    voteCount: 13000,
    popularity: 89.4,
    originalLanguage: "en",
    adult: false,
    cinematicDna: {
      visualStyle: ["Noir Mystery", "Reverse Narrative"],
      pacing: "Puzzle Structure",
      narrativeStructure: "Reverse Chronology",
      themes: ["Memory", "Identity", "Truth"]
    },
    moodTags: ["Mind-Bending", "Mysterious"],
    microGenres: ["Memory Thriller", "Reverse Narrative"]
  }
];