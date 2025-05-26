import type { Movie, Mood, UserRating, UserPreferences } from "../types/movie";

// Mock Movies Data
export const mockMovies: Movie[] = [
  {
    id: 1,
    title: "The Grand Budapest Hotel",
    overview: "The adventures of Gustave H, a legendary concierge at a famous European hotel between the wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.",
    posterPath: "/eWdyYQreja6JGCzqHWXpWHDrrOc.jpg",
    backdropPath: "/xHDynIimfsgj0ZOs0j5ma8v1X3q.jpg",
    releaseDate: "2014-02-26",
    voteAverage: 8.1,
    genres: ["Comedy", "Drama"],
    runtime: 99,
    director: "Wes Anderson",
    cast: ["Ralph Fiennes", "Tony Revolori", "F. Murray Abraham"],
    mood: "whimsical",
    visualStyle: ["colorful", "symmetrical"],
    pacing: "moderate",
    themes: ["friendship", "nostalgia", "adventure"]
  },
  {
    id: 2,
    title: "Get Out",
    overview: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    posterPath: "/1SwAVYpuLj8KsH0ll7jXFIcXf9M.jpg",
    backdropPath: "/6S3fD7QYdW3WaXo2nVFUwDcP3Nv.jpg",
    releaseDate: "2017-02-24",
    voteAverage: 7.7,
    genres: ["Horror", "Mystery", "Thriller"],
    runtime: 104,
    director: "Jordan Peele",
    cast: ["Daniel Kaluuya", "Allison Williams", "Bradley Whitford"],
    mood: "suspenseful",
    visualStyle: ["modern", "atmospheric"],
    pacing: "tense",
    themes: ["racism", "social commentary", "horror"]
  },
  {
    id: 3,
    title: "The Social Network",
    overview: "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.",
    posterPath: "/n0ybibhJtQseOQj6xS4JtQL3pnd.jpg",
    backdropPath: "/5kkw5RT1OjTAMh3POhjo5LdaACZ.jpg",
    releaseDate: "2010-09-30",
    voteAverage: 7.7,
    genres: ["Drama", "History"],
    runtime: 120,
    director: "David Fincher",
    cast: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"],
    mood: "dramatic",
    visualStyle: ["modern", "minimalist"],
    pacing: "fast",
    themes: ["technology", "betrayal", "ambition"]
  },
  {
    id: 4,
    title: "Her",
    overview: "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
    posterPath: "/6rmk4QC9Qz0GcUBo9t6gBpON7fc.jpg",
    backdropPath: "/7IG9CXJqH9vYJwdxvVHtQNw9yVl.jpg",
    releaseDate: "2013-12-18",
    voteAverage: 8.0,
    genres: ["Drama", "Romance", "Sci-Fi"],
    runtime: 126,
    director: "Spike Jonze",
    cast: ["Joaquin Phoenix", "Scarlett Johansson", "Amy Adams"],
    mood: "melancholic",
    visualStyle: ["futuristic", "minimalist"],
    pacing: "slow",
    themes: ["love", "technology", "loneliness"]
  },
  {
    id: 5,
    title: "Pulp Fiction",
    overview: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    posterPath: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    backdropPath: "/suaEOtk1N1sgg2QM528B8Zc0zUo.jpg",
    releaseDate: "1994-09-10",
    voteAverage: 8.5,
    genres: ["Crime", "Drama"],
    runtime: 154,
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    mood: "intense",
    visualStyle: ["stylish", "gritty"],
    pacing: "fast",
    themes: ["crime", "violence", "redemption"]
  },
  {
    id: 6,
    title: "The Matrix",
    overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    posterPath: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    backdropPath: "/AmR3JG1VQVxU8TfAvljUhfSFUOx.jpg",
    releaseDate: "1999-03-30",
    voteAverage: 8.2,
    genres: ["Action", "Sci-Fi"],
    runtime: 136,
    director: "Lana Wachowski",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    mood: "mind-bending",
    visualStyle: ["cyberpunk", "dark"],
    pacing: "fast",
    themes: ["reality", "technology", "freedom"]
  },
  {
    id: 7,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    overview: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    posterPath: "/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    backdropPath: "/b1Y8SUb12gPHCSSSNlbX4nB3IKy.jpg",
    releaseDate: "2001-12-18",
    voteAverage: 8.4,
    genres: ["Adventure", "Fantasy", "Action"],
    runtime: 178,
    director: "Peter Jackson",
    cast: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
    mood: "epic",
    visualStyle: ["fantasy", "grand"],
    pacing: "moderate",
    themes: ["friendship", "courage", "destiny"]
  },
  {
    id: 8,
    title: "The Silence of the Lambs",
    overview: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    posterPath: "/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg",
    backdropPath: "/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg",
    releaseDate: "1991-02-01",
    voteAverage: 8.3,
    genres: ["Crime", "Drama", "Thriller"],
    runtime: 118,
    director: "Jonathan Demme",
    cast: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn"],
    mood: "thrilling",
    visualStyle: ["dark", "atmospheric"],
    pacing: "tense",
    themes: ["crime", "psychology", "horror"]
  },
  {
    id: 9,
    title: "Fight Club",
    overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    posterPath: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    backdropPath: "/52AfXWuXCHn3UjD17rBruA9f5qb.jpg",
    releaseDate: "1999-10-15",
    voteAverage: 8.4,
    genres: ["Drama"],
    runtime: 139,
    director: "David Fincher",
    cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
    mood: "intense",
    visualStyle: ["gritty", "dark"],
    pacing: "fast",
    themes: ["identity", "consumerism", "violence"]
  },
  {
    id: 10,
    title: "The Green Mile",
    overview: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    posterPath: "/o0lO84i7aQNxBkI5SH74a2cpeYS.jpg",
    backdropPath: "/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
    releaseDate: "1999-12-10",
    voteAverage: 8.5,
    genres: ["Crime", "Drama", "Fantasy"],
    runtime: 189,
    director: "Frank Darabont",
    cast: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"],
    mood: "emotional",
    visualStyle: ["realistic", "period"],
    pacing: "slow",
    themes: ["justice", "redemption", "miracles"]
  },
  {
    id: 11,
    title: "The Prestige",
    overview: "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
    posterPath: "/bdN3gXuIZYaJP7ftKKq2fwDnw4Q.jpg",
    backdropPath: "/aJa6emitTK6U4WQJz0s6dbmqQJk.jpg",
    releaseDate: "2006-10-20",
    voteAverage: 8.2,
    genres: ["Drama", "Mystery", "Thriller"],
    runtime: 130,
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson"],
    mood: "mysterious",
    visualStyle: ["period", "dark"],
    pacing: "moderate",
    themes: ["obsession", "deception", "sacrifice"]
  },
  {
    id: 12,
    title: "The Departed",
    overview: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    posterPath: "/n4H2vurTsR5O5G1yJ9F7pXq3Zpu.jpg",
    backdropPath: "/5a4JdoXz3dxB4UzBDWshQkrQ6bO.jpg",
    releaseDate: "2006-10-06",
    voteAverage: 8.2,
    genres: ["Crime", "Drama", "Thriller"],
    runtime: 151,
    director: "Martin Scorsese",
    cast: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"],
    mood: "intense",
    visualStyle: ["gritty", "realistic"],
    pacing: "fast",
    themes: ["betrayal", "identity", "crime"]
  },
  {
    id: 13,
    title: "The Lion King",
    overview: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    posterPath: "/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    backdropPath: "/1TUgZPcJfm9RuYYmU0F2CzVzqkY.jpg",
    releaseDate: "1994-06-24",
    voteAverage: 8.3,
    genres: ["Animation", "Adventure", "Drama"],
    runtime: 88,
    director: "Roger Allers",
    cast: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
    mood: "emotional",
    visualStyle: ["animated", "colorful"],
    pacing: "moderate",
    themes: ["family", "responsibility", "coming of age"]
  },
  {
    id: 14,
    title: "The Shining",
    overview: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
    posterPath: "/b6ko0IKCgWdWzX7JpQiM5xQjqpm.jpg",
    backdropPath: "/xHDynIimfsgj0ZOs0j5ma8v1X3q.jpg",
    releaseDate: "1980-05-23",
    voteAverage: 8.2,
    genres: ["Horror", "Drama"],
    runtime: 146,
    director: "Stanley Kubrick",
    cast: ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd"],
    mood: "horrifying",
    visualStyle: ["atmospheric", "isolated"],
    pacing: "slow",
    themes: ["madness", "isolation", "horror"]
  },
  {
    id: 15,
    title: "Goodfellas",
    overview: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    posterPath: "/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    backdropPath: "/sw7mordbZxgITU877yTpZCud90M.jpg",
    releaseDate: "1990-09-12",
    voteAverage: 8.4,
    genres: ["Crime", "Drama"],
    runtime: 146,
    director: "Martin Scorsese",
    cast: ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
    mood: "intense",
    visualStyle: ["gritty", "realistic"],
    pacing: "fast",
    themes: ["crime", "loyalty", "betrayal"]
  },
  {
    id: 16,
    title: "The Usual Suspects",
    overview: "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
    posterPath: "/jgJoRWltoS17nD5MAQ1yK2Ztefw.jpg",
    backdropPath: "/c2Ax8Rox5g6CneChwy1gmu4UbSb.jpg",
    releaseDate: "1995-07-19",
    voteAverage: 8.3,
    genres: ["Crime", "Drama", "Mystery"],
    runtime: 106,
    director: "Bryan Singer",
    cast: ["Kevin Spacey", "Gabriel Byrne", "Chazz Palminteri"],
    mood: "mysterious",
    visualStyle: ["noir", "dark"],
    pacing: "moderate",
    themes: ["crime", "deception", "mystery"]
  },
  {
    id: 17,
    title: "Saving Private Ryan",
    overview: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    posterPath: "/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg",
    backdropPath: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    releaseDate: "1998-07-24",
    voteAverage: 8.3,
    genres: ["Drama", "War"],
    runtime: 169,
    director: "Steven Spielberg",
    cast: ["Tom Hanks", "Matt Damon", "Tom Sizemore"],
    mood: "intense",
    visualStyle: ["realistic", "gritty"],
    pacing: "moderate",
    themes: ["war", "sacrifice", "duty"]
  },
  {
    id: 18,
    title: "Gladiator",
    overview: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    posterPath: "/ehGpN04mLsIhlp1G3MzIjcCv4Uv.jpg",
    backdropPath: "/xHDynIimfsgj0ZOs0j5ma8v1X3q.jpg",
    releaseDate: "2000-05-01",
    voteAverage: 8.2,
    genres: ["Action", "Adventure", "Drama"],
    runtime: 155,
    director: "Ridley Scott",
    cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
    mood: "epic",
    visualStyle: ["historical", "grand"],
    pacing: "moderate",
    themes: ["revenge", "honor", "power"]
  },
  {
    id: 19,
    title: "Schindler's List",
    overview: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    posterPath: "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    backdropPath: "/xHDynIimfsgj0ZOs0j5ma8v1X3q.jpg",
    releaseDate: "1993-11-30",
    voteAverage: 8.6,
    genres: ["Biography", "Drama", "History"],
    runtime: 195,
    director: "Steven Spielberg",
    cast: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
    mood: "emotional",
    visualStyle: ["black and white", "historical"],
    pacing: "slow",
    themes: ["holocaust", "redemption", "humanity"]
  },
  {
    id: 20,
    title: "Braveheart",
    overview: "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
    posterPath: "/2qAgGeYdLjelOEqjW9FYvPHpplC.jpg",
    backdropPath: "/xHDynIimfsgj0ZOs0j5ma8v1X3q.jpg",
    releaseDate: "1995-05-24",
    voteAverage: 8.3,
    genres: ["Biography", "Drama", "History"],
    runtime: 178,
    director: "Mel Gibson",
    cast: ["Mel Gibson", "Sophie Marceau", "Patrick McGoohan"],
    mood: "epic",
    visualStyle: ["historical", "grand"],
    pacing: "moderate",
    themes: ["freedom", "honor", "sacrifice"]
  },
  {
    id: 21,
    title: "The Wolf of Wall Street",
    overview: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
    posterPath: "/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg",
    backdropPath: "/xHDynIimfsgj0ZOs0j5ma8v1X3q.jpg",
    releaseDate: "2013-12-25",
    voteAverage: 8.0,
    genres: ["Biography", "Comedy", "Crime"],
    runtime: 180,
    director: "Martin Scorsese",
    cast: ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie"],
    mood: "wild",
    visualStyle: ["modern", "glamorous"],
    pacing: "fast",
    themes: ["greed", "corruption", "excess"]
  },
  {
    id: 22,
    title: "Avatar",
    overview: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    posterPath: "/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
    backdropPath: "/xHDynIimfsgj0ZOs0j5ma8v1X3q.jpg",
    releaseDate: "2009-12-10",
    voteAverage: 7.5,
    genres: ["Action", "Adventure", "Fantasy"],
    runtime: 162,
    director: "James Cameron",
    cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
    mood: "adventurous",
    visualStyle: ["fantasy", "colorful"],
    pacing: "moderate",
    themes: ["environment", "colonialism", "identity"]
  },
  {
    id: 23,
    title: "Rang De Basanti",
    overview: "The story of six young Indians who assist an English woman to film a documentary on the freedom fighters from their past, and the events that lead them to relive the long-forgotten saga of freedom.",
    posterPath: "/no-poster.png",
    backdropPath: "/no-poster.png",
    releaseDate: "2006-01-26",
    voteAverage: 8.5,
    genres: ["Drama"],
    runtime: 167,
    director: "Rakeysh Omprakash Mehra",
    cast: ["Aamir Khan", "Siddharth", "R. Madhavan"],
    mood: "patriotic",
    visualStyle: ["modern", "colorful"],
    pacing: "moderate",
    themes: ["patriotism", "youth", "activism"]
  },
  {
    id: 24,
    title: "Taare Zameen Par",
    overview: "An eight-year-old boy is thought to be a lazy trouble-maker, until the new art teacher has the patience and compassion to discover the real problem behind his struggles in school.",
    posterPath: "/8mM2F7D0QkZ0d6Q0imeOqRCGDpa.jpg",
    backdropPath: "/no-poster.png",
    releaseDate: "2007-12-21",
    voteAverage: 8.7,
    genres: ["Drama", "Family"],
    runtime: 165,
    director: "Aamir Khan",
    cast: ["Darsheel Safary", "Aamir Khan", "Tisca Chopra"],
    mood: "heartwarming",
    visualStyle: ["colorful", "vibrant"],
    pacing: "moderate",
    themes: ["education", "dyslexia", "creativity"]
  },
  {
    id: 25,
    title: "Swades",
    overview: "A successful Indian scientist returns to an Indian village to take his nanny to America with him and in the process rediscovers his roots.",
    posterPath: "/no-poster.png",
    backdropPath: "/no-poster.png",
    releaseDate: "2004-12-17",
    voteAverage: 8.4,
    genres: ["Drama"],
    runtime: 210,
    director: "Ashutosh Gowariker",
    cast: ["Shah Rukh Khan", "Gayatri Joshi", "Kishori Ballal"],
    mood: "thoughtful",
    visualStyle: ["realistic", "rural"],
    pacing: "moderate",
    themes: ["patriotism", "development", "social change"]
  },
  {
    id: 26,
    title: "PK",
    overview: "An alien on Earth loses the only device he can use to communicate with his spaceship. His innocent nature and child-like questions force the country to evaluate the impact of religion on its people.",
    posterPath: "/no-poster.png",
    backdropPath: "/no-poster.png",
    releaseDate: "2014-12-19",
    voteAverage: 8.2,
    genres: ["Comedy", "Drama", "Sci-Fi"],
    runtime: 153,
    director: "Rajkumar Hirani",
    cast: ["Aamir Khan", "Anushka Sharma", "Sanjay Dutt"],
    mood: "thoughtful",
    visualStyle: ["colorful", "modern"],
    pacing: "moderate",
    themes: ["religion", "society", "humanity"]
  },
  {
    id: 27,
    title: "Dilwale Dulhania Le Jayenge",
    overview: "A coming-of-age story based on the lives of street rappers in Mumbai.",
    posterPath: "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
    backdropPath: "/5BwqwxMEjeFtdknRV792Svo0K1v.jpg",
    releaseDate: "2019-02-14",
    voteAverage: 8.0,
    genres: ["Drama", "Music"],
    runtime: 154,
    director: "Zoya Akhtar",
    cast: ["Ranveer Singh", "Alia Bhatt", "Siddhant Chaturvedi"],
    mood: "energetic",
    visualStyle: ["urban", "gritty"],
    pacing: "moderate",
    themes: ["music", "struggle", "dreams"]
  },
  {
    id: 28,
    title: "Queen",
    overview: "A Delhi girl from a traditional family sets out on a solo honeymoon after her marriage gets cancelled.",
    posterPath: "/no-poster.png",
    backdropPath: "/no-poster.png",
    releaseDate: "2014-03-07",
    voteAverage: 8.3,
    genres: ["Comedy", "Drama"],
    runtime: 146,
    director: "Vikas Bahl",
    cast: ["Kangana Ranaut", "Rajkummar Rao", "Lisa Haydon"],
    mood: "uplifting",
    visualStyle: ["colorful", "modern"],
    pacing: "moderate",
    themes: ["independence", "self-discovery", "freedom"]
  },
  {
    id: 29,
    title: "Masaan",
    overview: "Four lives intersect along the Ganges: a low-caste boy in hopeless love, a daughter ridden with guilt of a sexual encounter ending in a tragedy, a hapless father with fading morality, and a spirited child yearning for a family.",
    posterPath: "/no-poster.png",
    backdropPath: "/no-poster.png",
    releaseDate: "2015-07-24",
    voteAverage: 8.2,
    genres: ["Drama"],
    runtime: 109,
    director: "Neeraj Ghaywan",
    cast: ["Richa Chadha", "Sanjay Mishra", "Vicky Kaushal"],
    mood: "melancholic",
    visualStyle: ["realistic", "gritty"],
    pacing: "slow",
    themes: ["social issues", "love", "redemption"]
  },
  {
    id: 30,
    title: "Haider",
    overview: "A young man returns to Kashmir after his father's disappearance to confront his uncle, whom he suspects of playing a role in his father's fate.",
    posterPath: "/no-poster.png",
    backdropPath: "/no-poster.png",
    releaseDate: "2014-10-02",
    voteAverage: 8.1,
    genres: ["Drama", "Thriller"],
    runtime: 160,
    director: "Vishal Bhardwaj",
    cast: ["Shahid Kapoor", "Tabu", "Kay Kay Menon"],
    mood: "intense",
    visualStyle: ["dark", "atmospheric"],
    pacing: "moderate",
    themes: ["revenge", "politics", "family"]
  },
  {
    id: 31,
    title: "Kapoor & Sons",
    overview: "A story about two brothers who visit their dysfunctional family and discover that their parents' marriage is on the verge of collapse, and their grandfather is a potty-mouthed force of nature.",
    posterPath: "/no-poster.png",
    backdropPath: "/no-poster.png",
    releaseDate: "2016-03-18",
    voteAverage: 8.0,
    genres: ["Drama", "Comedy"],
    runtime: 132,
    director: "Shakun Batra",
    cast: ["Sidharth Malhotra", "Fawad Khan", "Alia Bhatt"],
    mood: "emotional",
    visualStyle: ["modern", "realistic"],
    pacing: "moderate",
    themes: ["family", "relationships", "secrets"]
  },
  {
    id: 32,
    title: "Barfi!",
    overview: "Three young people learn that love can neither be defined nor contained by society's norms of normal and abnormal.",
    posterPath: "/no-poster.png",
    backdropPath: "/no-poster.png",
    releaseDate: "2012-09-14",
    voteAverage: 8.1,
    genres: ["Comedy", "Drama", "Romance"],
    runtime: 151,
    director: "Anurag Basu",
    cast: ["Ranbir Kapoor", "Priyanka Chopra", "Ileana D'Cruz"],
    mood: "heartwarming",
    visualStyle: ["colorful", "vibrant"],
    pacing: "moderate",
    themes: ["love", "disability", "acceptance"]
  },
  {
    id: 33,
    title: "Rockstar",
    overview: "Janardhan Jakhar chases his dreams of becoming a big Rock star, during which he falls in love with Heer.",
    posterPath: "/no-poster.png",
    backdropPath: "/no-poster.png",
    releaseDate: "2011-11-11",
    voteAverage: 7.7,
    genres: ["Drama", "Music", "Romance"],
    runtime: 159,
    director: "Imtiaz Ali",
    cast: ["Ranbir Kapoor", "Nargis Fakhri", "Shammi Kapoor"],
    mood: "emotional",
    visualStyle: ["modern", "musical"],
    pacing: "moderate",
    themes: ["music", "love", "loss"]
  },
  {
    id: 34,
    title: "Dil Chahta Hai",
    overview: "Three inseparable childhood friends are just out of college. Nothing comes between them - until they each fall in love, and their wildly different approaches to relationships creates tension.",
    posterPath: "/no-poster.png",
    backdropPath: "/no-poster.png",
    releaseDate: "2001-08-10",
    voteAverage: 8.4,
    genres: ["Comedy", "Drama", "Romance"],
    runtime: 183,
    director: "Farhan Akhtar",
    cast: ["Aamir Khan", "Saif Ali Khan", "Akshaye Khanna"],
    mood: "nostalgic",
    visualStyle: ["modern", "stylish"],
    pacing: "moderate",
    themes: ["friendship", "love", "growing up"]
  },
  {
    id: 35,
    title: "Gangs of Wasseypur",
    overview: "A clash between Sultan and Shahid Khan leads to the expulsion of Khan from Wasseypur, and ignites a deadly blood feud spanning three generations.",
    posterPath: "/no-poster.png",
    backdropPath: "/no-poster.png",
    releaseDate: "2012-06-22",
    voteAverage: 8.3,
    genres: ["Action", "Crime", "Drama"],
    runtime: 321,
    director: "Anurag Kashyap",
    cast: ["Manoj Bajpayee", "Richa Chadha", "Nawazuddin Siddiqui"],
    mood: "intense",
    visualStyle: ["gritty", "raw"],
    pacing: "fast",
    themes: ["revenge", "power", "family"]
  },
  {
    id: 36,
    title: "Piku",
    overview: "A quirky comedy about the relationship between a father and daughter.",
    posterPath: "/no-poster.png",
    backdropPath: "/no-poster.png",
    releaseDate: "2015-05-08",
    voteAverage: 8.1,
    genres: ["Comedy", "Drama"],
    runtime: 123,
    director: "Shoojit Sircar",
    cast: ["Deepika Padukone", "Amitabh Bachchan", "Irrfan Khan"],
    mood: "heartwarming",
    visualStyle: ["realistic", "modern"],
    pacing: "moderate",
    themes: ["family", "relationships", "aging"]
  },
  {
    id: 37,
    title: "Zindagi Na Milegi Dobara",
    overview: "Three friends decide to turn their fantasy vacation into reality after one of their number becomes engaged.",
    posterPath: "/no-poster.png",
    backdropPath: "/no-poster.png",
    releaseDate: "2011-07-15",
    voteAverage: 8.2,
    genres: ["Comedy", "Drama"],
    runtime: 155,
    director: "Zoya Akhtar",
    cast: ["Hrithik Roshan", "Farhan Akhtar", "Abhay Deol"],
    mood: "adventurous",
    visualStyle: ["colorful", "modern"],
    pacing: "moderate",
    themes: ["friendship", "travel", "self-discovery"]
  },
  {
    id: 38,
    title: "Udaan",
    overview: "Expelled from his school, a 16-year old boy returns home to his abusive and oppressive father.",
    posterPath: "/no-poster.png",
    backdropPath: "/no-poster.png",
    releaseDate: "2010-07-16",
    voteAverage: 8.3,
    genres: ["Drama"],
    runtime: 134,
    director: "Vikramaditya Motwane",
    cast: ["Rajat Barmecha", "Ronit Roy", "Ram Kapoor"],
    mood: "intense",
    visualStyle: ["realistic", "gritty"],
    pacing: "moderate",
    themes: ["coming of age", "family", "freedom"]
  },
  {
    id: 39,
    title: "Andhadhun",
    overview: "A series of mysterious events change the life of a blind pianist, who must now report a crime that he should technically know nothing of.",
    posterPath: "/no-poster.png",
    backdropPath: "/no-poster.png",
    releaseDate: "2018-10-05",
    voteAverage: 8.2,
    genres: ["Crime", "Thriller", "Comedy"],
    runtime: 139,
    director: "Sriram Raghavan",
    cast: ["Ayushmann Khurrana", "Tabu", "Radhika Apte"],
    mood: "thrilling",
    visualStyle: ["stylish", "modern"],
    pacing: "fast",
    themes: ["crime", "deception", "justice"]
  },
  {
    id: 40,
    title: "Chakde! India",
    overview: "Kabir Khan, a former hockey star, is tainted as someone who betrayed his country. However, he begins coaching the Indian women's national hockey team to prove his loyalty to the nation.",
    posterPath: "/no-poster.png",
    backdropPath: "/no-poster.png",
    releaseDate: "2007-08-10",
    voteAverage: 8.2,
    genres: ["Drama", "Family", "Sport"],
    runtime: 153,
    director: "Shimit Amin",
    cast: ["Shah Rukh Khan", "Vidya Malvade", "Sagarika Ghatge"],
    mood: "inspiring",
    visualStyle: ["modern", "realistic"],
    pacing: "fast",
    themes: ["sports", "patriotism", "redemption"]
  },
  {
    id: 41,
    title: "Lagaan",
    overview: "The people of a small village in Victorian India stake their future on a game of cricket against their ruthless British rulers.",
    posterPath: "/no-poster.png",
    backdropPath: "/no-poster.png",
    releaseDate: "2001-06-15",
    voteAverage: 8.5,
    genres: ["Drama", "Sport"],
    runtime: 224,
    director: "Ashutosh Gowariker",
    cast: ["Aamir Khan", "Gracy Singh", "Rachel Shelley"],
    mood: "inspiring",
    visualStyle: ["period", "vibrant"],
    pacing: "moderate",
    themes: ["colonialism", "sports", "unity"]
  },
  {
    id: 42,
    title: "Munna Bhai M.B.B.S.",
    overview: "A gangster sets out to fulfill his father's dream of becoming a doctor.",
    posterPath: "/no-poster.png",
    backdropPath: "/no-poster.png",
    releaseDate: "2003-12-19",
    voteAverage: 8.3,
    genres: ["Comedy", "Drama"],
    runtime: 156,
    director: "Rajkumar Hirani",
    cast: ["Sanjay Dutt", "Arshad Warsi", "Gracy Singh"],
    mood: "heartwarming",
    visualStyle: ["colorful", "modern"],
    pacing: "moderate",
    themes: ["family", "redemption", "compassion"]
  }
];

// Mock Moods Data
export const mockMoods: Mood[] = [
  { id: "relaxed", name: "Relaxed", icon: "smile" },
  { id: "energetic", name: "Energetic", icon: "bolt" },
  { id: "thoughtful", name: "Thoughtful", icon: "brain" },
  { id: "playful", name: "Playful", icon: "laugh" },
  { id: "romantic", name: "Romantic", icon: "heart" },
  { id: "mysterious", name: "Mysterious", icon: "mask" },
  { id: "adventurous", name: "Adventurous", icon: "rocket" },
  { id: "melancholic", name: "Melancholic", icon: "cloud-rain" }
];

// Mock User Data
export const mockUserProfile = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "JD",
  plan: "Premium",
  memberSince: "January 2024"
};

// Mock User Ratings
export const mockUserRatings: UserRating[] = [
  {
    id: 1,
    userId: 1,
    movieId: 1,
    rating: 5,
    feedback: "Mind-blowing concept and execution!",
    moodContext: "thoughtful",
    viewingContext: "evening",
    createdAt: new Date("2024-01-15T10:00:00Z")
  },
  {
    id: 2,
    userId: 1,
    movieId: 2,
    rating: 5,
    feedback: "A masterpiece of storytelling",
    moodContext: "thoughtful",
    viewingContext: "weekend",
    createdAt: new Date("2024-01-20T15:30:00Z")
  }
];

// Mock User Preferences
export const mockUserPreferences: UserPreferences = {
  id: 1,
  userId: 1,
  preferredGenres: ["Drama", "Sci-Fi", "Thriller"],
  preferredMoods: ["thoughtful", "mysterious"],
  preferredRuntime: "120-150",
  preferredLanguages: ["English"],
  cinematicPreferences: {
    visualStyle: ["cinematic", "dark"],
    pacing: ["moderate", "fast"],
    themes: ["psychological", "philosophical"]
  },
  updatedAt: new Date("2024-01-01T00:00:00Z")
};

// Mock My List
export const mockMyList: Movie[] = [mockMovies[0], mockMovies[1]];

// Mock Viewing History
export const mockViewingHistory: Movie[] = [mockMovies[0], mockMovies[1], mockMovies[2]];

// Helper function to simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API responses
export const mockApi = {
  getMovies: async (params: any = {}) => {
    await delay(500);
    let filteredMovies = [...mockMovies];
    
    if (params.mood) {
      filteredMovies = filteredMovies.filter(movie => movie.mood === params.mood);
    }
    if (params.genre) {
      filteredMovies = filteredMovies.filter(movie => movie.genres?.includes(params.genre));
    }
    if (params.search) {
      const searchLower = params.search.toLowerCase();
      filteredMovies = filteredMovies.filter(movie => 
        movie.title.toLowerCase().includes(searchLower) ||
        movie.overview?.toLowerCase().includes(searchLower) ||
        movie.director?.toLowerCase().includes(searchLower) ||
        (movie.cast && movie.cast.some((actor: string) => actor.toLowerCase().includes(searchLower)))
      );
    }
    if (params.visualStyle?.length) {
      filteredMovies = filteredMovies.filter(movie => 
        movie.visualStyle && params.visualStyle.some((style: string) => movie.visualStyle?.includes(style))
      );
    }
    if (params.pacing) {
      filteredMovies = filteredMovies.filter(movie => movie.pacing === params.pacing);
    }
    if (params.themes?.length) {
      filteredMovies = filteredMovies.filter(movie => 
        movie.themes && params.themes.some((theme: string) => movie.themes?.includes(theme))
      );
    }
    if (params.year) {
      filteredMovies = filteredMovies.filter(movie => 
        movie.releaseDate && new Date(movie.releaseDate).getFullYear() === parseInt(params.year)
      );
    }
    if (params.minRating) {
      filteredMovies = filteredMovies.filter(movie => 
        (movie.voteAverage ?? 0) >= parseFloat(params.minRating)
      );
    }
    if (params.runtime) {
      const [min, max] = params.runtime.split('-').map(Number);
      filteredMovies = filteredMovies.filter(movie => 
        (movie.runtime ?? 0) >= min && (movie.runtime ?? 0) <= max
      );
    }
    
    // Sort options
    if (params.sortBy) {
      switch (params.sortBy) {
        case 'rating':
          filteredMovies.sort((a, b) => (b.voteAverage ?? 0) - (a.voteAverage ?? 0));
          break;
        case 'year':
          filteredMovies.sort((a, b) => 
            (b.releaseDate ? new Date(b.releaseDate).getTime() : 0) - (a.releaseDate ? new Date(a.releaseDate).getTime() : 0)
          );
          break;
        case 'title':
          filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'runtime':
          filteredMovies.sort((a, b) => (b.runtime ?? 0) - (a.runtime ?? 0));
          break;
      }
    }
    
    return filteredMovies;
  },

  getMovie: async (id: number) => {
    await delay(300);
    const movie = mockMovies.find(m => m.id === id);
    if (!movie) throw new Error('Movie not found');
    
    // Add related movies based on genres, mood, and themes
    const relatedMovies = mockMovies
      .filter(m => m.id !== id && (
        (m.genres && movie.genres && m.genres.some(g => movie.genres?.includes(g))) ||
        (m.mood && movie.mood && m.mood === movie.mood) ||
        (m.themes && movie.themes && m.themes.some(t => movie.themes?.includes(t)))
      ))
      .slice(0, 4);
    
    return {
      ...movie,
      relatedMovies
    };
  },

  getRecommendations: async (params: any = {}) => {
    await delay(800);
    let recommendations = [...mockMovies];
    
    // If user has preferences, prioritize movies matching those preferences
    if (params.userId) {
      const userPreferences = mockUserPreferences;
      recommendations = recommendations.map(movie => {
        let score = 70; // Base score
        // Genre match
        if (movie.genres && userPreferences.preferredGenres && movie.genres.some(g => userPreferences.preferredGenres?.includes(g))) {
          score += 10;
        }
        // Mood match
        if (userPreferences.preferredMoods && movie.mood && userPreferences.preferredMoods.includes(movie.mood)) {
          score += 10;
        }
        // Visual style match
        if (movie.visualStyle && userPreferences.cinematicPreferences && movie.visualStyle.some(s => userPreferences.cinematicPreferences?.visualStyle.includes(s))) {
          score += 5;
        }
        // Pacing match
        if (userPreferences.cinematicPreferences && movie.pacing && userPreferences.cinematicPreferences.pacing.includes(movie.pacing)) {
          score += 5;
        }
        // Theme match
        if (movie.themes && userPreferences.cinematicPreferences && movie.themes.some(t => userPreferences.cinematicPreferences?.themes.includes(t))) {
          score += 5;
        }
        return {
          ...movie,
          compatibilityScore: Math.min(score, 100)
        };
      });
    } else {
      // If no user preferences, use random scores
      recommendations = recommendations.map(movie => ({
        ...movie,
        compatibilityScore: Math.floor(Math.random() * 30) + 70
      }));
    }
    // Sort by compatibility score
    recommendations.sort((a, b) => (b.compatibilityScore ?? 0) - (a.compatibilityScore ?? 0));
    return recommendations;
  },

  getMoods: async () => {
    await delay(200);
    return mockMoods;
  },

  getMicroGenres: async () => {
    await delay(200);
    return [
      "Contemplative Sci-Fi",
      "Feel-Good Heists",
      "Cozy Mysteries",
      "Minimal Dialogue Dramas",
      "Neon-Noir Thrillers"
    ];
  },

  createRating: async (rating: any) => {
    await delay(500);
    return {
      id: Math.random(),
      ...rating,
      createdAt: new Date().toISOString()
    };
  },

  getUserRatings: async (userId: number) => {
    await delay(300);
    return mockUserRatings;
  },

  getUserPreferences: async (userId: number) => {
    await delay(300);
    return mockUserPreferences;
  },

  getMyList: async () => {
    await delay(300);
    return mockMyList;
  },

  getViewingHistory: async () => {
    await delay(300);
    return mockViewingHistory;
  },

  getProfile: async (userId: number) => {
    await delay(300);
    return mockUserProfile;
  },

  // New methods for enhanced features
  getMovieStats: async () => {
    await delay(300);
    return {
      totalMovies: mockMovies.length,
      genres: Array.from(new Set(mockMovies.flatMap(m => m.genres ?? []))),
      years: Array.from(new Set(mockMovies.map(m => m.releaseDate ? new Date(m.releaseDate).getFullYear() : 0))),
      averageRating: mockMovies.reduce((acc, m) => acc + (m.voteAverage ?? 0), 0) / mockMovies.length,
      averageRuntime: mockMovies.reduce((acc, m) => acc + (m.runtime ?? 0), 0) / mockMovies.length
    };
  },

  getSimilarMovies: async (movieId: number) => {
    await delay(400);
    const movie = mockMovies.find(m => m.id === movieId);
    if (!movie) throw new Error('Movie not found');
    
    return mockMovies
      .filter(m => m.id !== movieId)
      .map(m => ({
        ...m,
        similarityScore: calculateSimilarityScore(movie, m)
      }))
      .sort((a, b) => b.similarityScore - a.similarityScore)
      .slice(0, 6);
  },

  getTrendingMovies: async () => {
    await delay(300);
    return mockMovies
      .sort((a, b) => (b.voteAverage ?? 0) - (a.voteAverage ?? 0))
      .slice(0, 5);
  },

  getNewReleases: async () => {
    await delay(300);
    return mockMovies
      .sort((a, b) => 
        (b.releaseDate ? new Date(b.releaseDate).getTime() : 0) - (a.releaseDate ? new Date(a.releaseDate).getTime() : 0)
      )
      .slice(0, 5);
  }
};

// Helper function to calculate similarity score between movies
function calculateSimilarityScore(movie1: Movie, movie2: Movie): number {
  let score = 0;
  // Genre similarity
  const genreMatches = (movie1.genres && movie2.genres)
    ? movie1.genres.filter(g => movie2.genres?.includes(g)).length
    : 0;
  score += genreMatches * 20;
  // Mood similarity
  if (movie1.mood && movie2.mood && movie1.mood === movie2.mood) {
    score += 15;
  }
  // Theme similarity
  const themeMatches = (movie1.themes && movie2.themes)
    ? movie1.themes.filter(t => movie2.themes?.includes(t)).length
    : 0;
  score += themeMatches * 10;
  // Visual style similarity
  const styleMatches = (movie1.visualStyle && movie2.visualStyle)
    ? movie1.visualStyle.filter(s => movie2.visualStyle?.includes(s)).length
    : 0;
  score += styleMatches * 5;
  // Pacing similarity
  if (movie1.pacing && movie2.pacing && movie1.pacing === movie2.pacing) {
    score += 10;
  }
  return Math.min(score, 100);
} 