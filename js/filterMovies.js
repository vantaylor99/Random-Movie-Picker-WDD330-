import { getMovies } from "./modules/getApiResponse.mjs";
import getRandomMovieIndexes from "./modules/getRandomMoviesFromPageObject.mjs";

const testFilters = {
    startYear: "2010",
    endYear: "2010",
    genres: "28"
};


const movieArray = await getMovies(testFilters);
getRandomMovieIndexes(movieArray)