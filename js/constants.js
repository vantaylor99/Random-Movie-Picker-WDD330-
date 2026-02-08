export const TMBD_GENRE_OPTIONS = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' }
]

export const VIBE_MAP = {
    dateNight: { label: "Date Night", genres: [10749, 35, 18] },     // Romance, Comedy, Drama
    actionRush: { label: "Action Rush", genres: [28, 53, 12] },        // Action, Thriller, Adventure
    laughs: { label: "Laughs", genres: [35, 10751] },         // Comedy, Family
    epicAdventure: { label: "Epic Adventure", genres: [12, 14, 28] },        // Adventure, Fantasy, Action
    mindBender: { label: "Mind-Bender", genres: [878, 9648, 53] },     // Sci-Fi, Mystery, Thriller
    darkAndGritty: { label: "Dark and Gritty", genres: [80, 53, 18] },        // Crime, Thriller, Drama
    spooky: { label: "Spooky", genres: [27, 53, 9648] },      // Horror, Thriller, Mystery
    feelGood: { label: "Feel Good", genres: [10751, 35, 18] },     // Family, Comedy, Drama
    emotional: { label: "Emotional", genres: [18, 10749] },         // Drama, Romance
    trueStory: { label: "True Story", genres: [18, 36, 99] },        // Drama, History, Documentary
    animated: { label: "Animated", genres: [16, 10751, 12] },     // Animation, Family, Adventure
    chill: { label: "Chill", genres: [99, 10402, 35] },     // Documentary, Music, Comedy
};