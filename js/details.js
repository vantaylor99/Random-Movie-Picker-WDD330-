import { qs } from "./util.mjs";
import { renderWithTemplate } from "./util.mjs";
import calculateRating from "./modules/calculateRating.mjs";
import getMovieLink from "./modules/getMovieLink.mjs";

function buildMovieDetailViewTemplate(backdropPath, movieTitle, movieDescription, movieRating, vote_average, runTime, posterPath, movieLink) {

    const stars = calculateRating(vote_average);

    const template = `
    <a href="${movieLink}">
        <img src="${backdropPath}" alt="Cover image of ${movieTitle}" class="backdrop">
    </a>
    <div class="movie-details-columns">
        <div class="movie-details-col1">
            <p><strong><a href="${movieLink}">${movieTitle}: </a></strong>${movieDescription}</p>
        </div>
        <div class="movie-details-col2">
            <a href="${movieLink}">
                <img src="${posterPath}" alt="Poster image of ${movieTitle}" class="movie-details-img">
            </a>
            <p class="movie-details-rating">${movieRating}</p>
            <a href="${movieLink}">
                    <h3>${movieTitle}</h3>
            </a>
            <a href="${movieLink}">
                <span class="stars">${stars}<span>
            </a>
            <p><strong>Runtime: </strong>${runTime}</p>
        </div>
    </div<    `
    return template;
}



const backdropPath = "https://image.tmdb.org/t/p/w342/hZkgoQYus5vegHoetLkCJzb17zJ.jpg";
const posterPath = "https://image.tmdb.org/t/p/w342/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
const movieTitle = "Fight Club";
const movieDescription = "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.";
const movieRating = "R";
const vote_average = 8.4;
const runTime = "2h 19m";
const homePageLink = "http://www.foxmovies.com/movies/fight-club"


const result = buildMovieDetailViewTemplate(backdropPath, movieTitle, movieDescription, movieRating, vote_average, runTime, posterPath, homePageLink);
const movieResultsDiv = qs(".movie-details-div");

renderWithTemplate(result, movieResultsDiv, null, null)

