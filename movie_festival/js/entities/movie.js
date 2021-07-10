


class Movie{
    constructor(title, length, genre) {
        if (!title) {
            throw new Error('Field Title is required');
        }
        if (!length) {
            throw new Error('Field Length is required');
        }
        if (typeof length === "string") {
            throw new Error('The length of the movie should be a number.');
        }
        if (!genre) {
            throw new Error('Field Genre is required');
        }
        this.title = title;
        this.genre = genre;
        this.length = length;
        this.genreShort = `${genre[0].toUpperCase() + genre[genre.length-1].toUpperCase()}`; 
    };
    getData() {
        return `${this.title}, ${this.length}min, ${this.genreShort}`;
    };
};

export default Movie;