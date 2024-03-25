class Movie {
    constructor(title, year, released, genre, director, writer, plot, poster) {
        this.title = title;
        this.year = year;
        this.released = released;
        this.genre = genre;
        this.director = director;
        this.writer = writer;
        this.plot = plot;
        this.poster = poster;
    }
}

class MovieApp {
    constructor() {
        this.searchQuery = "";
        this.resultMovie = null;
        this.recentMovies = [];
        this.activeMovies = null;
    }

    async searchMovie(event) {
        if (event.code === "Enter") {
            event.preventDefault();
            const searchInput = document.querySelector("input");
            const searchQuery = searchInput.value;
            const apiEndPoint = `http://www.omdbapi.com/?t=${searchQuery}&apikey=45112140`;
            const response = await fetch(apiEndPoint);
            const result = await response.json();
           
                console.log(result);

        }
    }

    attachSearchEventListener() {
        const searchInput = document.querySelector("input");
        searchInput.addEventListener("keydown", this.searchMovie);
    }
}

const movieObject = new Movie(
    "Guardians of the Galaxy Vol. 2",
    "2017",
    "05 May 2017",
    "Action, Adventure, Comedy",
    "James Gunn",
    "James Gunn, Dan Abnett, Andy Lanning",
    "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
    "poster-url"
);

const movieApp = new MovieApp();
movieApp.attachSearchEventListener();
