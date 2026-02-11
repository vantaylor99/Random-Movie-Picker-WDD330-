import { qs } from "./util.mjs";
import { renderWithTemplate } from "./util.mjs";


function buildMovieTemplate(imgSrc, movieTitle, movieDescription, movieRating, vote_average, runTime, movieID) {

    const stars = calculateRating(vote_average);

    const template = `
    <div class="movie-details-div">
        <div class="movie-details-col1">
            <a href="/detailed_view/index.html?movieID=${movieID}">
                <img src="${imgSrc}" alt="Cover image of ${movieTitle}">
            </a>
            <a href="/detailed_view/index.html?movieID=${movieID}">
                <h3>${movieTitle}</h3>
            </a>
            <p>${movieRating}</p>
        </div>
        <div class="movie-details-col2">
            <p><strong><a href="/detailed_view/index.html?movieID=${movieID}">${movieTitle}: </a></strong>${movieDescription}</p>
            <a href="/detailed_view/index.html?movieID=${movieID}">
                <span class="stars">${stars}<span>
            </a>
            <p><strong>Runtime: </strong>${runTime}</p>
        </div>
    </div>
        `
    return template;
}

function calculateRating(vote_average) {
    const rating = Math.round(Number(vote_average / 2));
    let stars = "";
    if (rating === 5) {
        stars = `⭐⭐⭐⭐⭐`
    }
    else if (rating === 4) {
        stars = `⭐⭐⭐⭐<span style="opacity: 50%">⭐</span>`
    }
    else if (rating === 3) {
        stars = `⭐⭐⭐<span style="opacity: 50%">⭐⭐</span>`
    }
    else if (rating === 2) {
        stars = `⭐⭐<span style="opacity: 50%">⭐⭐⭐</span>`
    }
    else if (rating === 1) {
        stars = `⭐<span style="opacity: 50%">⭐⭐⭐⭐</span>`
    }
    else if (rating === 0) {
        stars = `<span style="opacity: 50%">⭐⭐⭐⭐⭐</span>`
    }
    return stars;
}

const imgSrc = "https://image.tmdb.org/t/p/w342/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg";
const movieTitle = "Fight Club";
const movieDescription = "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.";
const movieRating = "R";
const vote_average = 8.4;
const runTime = "2h 19m";
const movieID = 550;


const result = buildMovieTemplate(imgSrc, movieTitle, movieDescription, movieRating, vote_average, runTime, movieID);
const movieResultsDiv = qs(".movie-results");

renderWithTemplate(result, movieResultsDiv, null, null)

