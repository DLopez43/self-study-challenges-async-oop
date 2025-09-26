/**
 * CHALLENGE 2: Movie
 * Create a class `Movie` that models a movie. Each `Movie` object should
 * contain properties for `title`, `director`, and `releaseYear`, which
 * are set via arguments when the object is created.
 * The class should also have methods `getTitle`, `getDirector`, `getReleaseYear`,
 * and `getDetails` which returns a string combining the title, director, and releaseYear.
 */
//success- create a class that will construct movies labeled Movie
//kw: has three props set to input arg(title director and release year)
//has 4 methods:
//get title, get dir get release year = will display requested prop val in a string

class Movie {
  constructor(title, director, releaseYear) {
    this.title = title;
    this.director = director;
    this.releaseYear = releaseYear;
  }
  // getTitle = function (){
  //     return this.title;
  // }
  // getDirector = function (){
  //     return this.director;
  // }
  // getReleaseYear = function (){
  //     return this.releaseYear;
  // }
  getInfo = function (info) {
    switch (info) {
      case "title":
        return this.title;

      case "director":
        return this.director;

      case "year":
        return this.releaseYear;

      default:
        return `That request doesn't exist`;
    }
  };
  getDetails = function () {
    return `The movie ${this.title} directed by ${this.director}, released in ${this.releaseYear}`;
  };
}

// UNCOMMENT THESE LINES TO CHECK YOUR WORK
const myMovie = new Movie("Inception", "Christopher Nolan", 2010);
// console.log(myMovie.getTitle()); // => should return 'Inception'
// console.log(myMovie.getDirector()); // => should return 'Christopher Nolan'
// console.log(myMovie.getReleaseYear()); // => should return 2010
console.log(myMovie.getInfo("title"));
console.log(myMovie.getInfo("hi"));
console.log(myMovie.getInfo("year"));
console.log(myMovie.getDetails()); // => should return 'Inception directed by Christopher Nolan, released in 2010'
