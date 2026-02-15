import { getMovies } from "./getApiResponse.mjs";

export default function getRandomMovieIndexes(movieListObject) {
    console.log(movieListObject);
    const totalPages = movieListObject.totalPages;
    const page = movieListObject.page
    const movies = movieListObject.movies
    const arrayLenght = movies.length;
    console.log(movieListObject);

    if (arrayLenght >= 3) {
        // array random index logic 
    }
    else if (arrayLenght < 3 && totalPages === 1) {
        return movies;
    }
    else {
        const secondMovieListObject = getMovies();
        console.log(secondMovieListObject);
    }

}