/**
 * CHALLENGE 1: Bird
 * You are working with National Geographic on a bird tracking application.
 * You are tasked with creating a function that returns objects representing
 * different birds. Each `Bird` object should contain the following properties,
 * which are initially set via arguments when the object is created:
 *
 * `species` (string representing the bird's species)
 * `color` (string representing the bird's color)
 * `locations` (array of locations where the bird has been found)
 *
 * The following methods must also be available to every instance of a Bird object
 * (but not stored on the individual objects themselves):
 * `getColor` (returns the color of the bird)
 * `setColor` (sets a new color for the bird)
 * `getLocations` (returns the locations where the bird was found)
 * `addLocation` (adds a new location to the locations array)
 *
 * The methods that take an argument must accept only one argument, and it must be a string.
 */

//success create a fun that creates an ob with new intances of bird, eeach bird should have 3 props species, color, location. attached to the protype should be 3 methods :getColor` (returns the color of the bird)
//  * `setColor` (sets a new color for the bird)= input string
//  * `getLocations` (returns the locations where the bird was found)
//  * `addLocation` (adds a new location to the locations array) input string
//  *

function Bird(species, color, location) {
  this.species = species;
  this.color = color;
  this.location = location;
}

Bird.prototype.setColor = function (color) {
    this.color = color;
};

Bird.prototype.getColor = function () {
  if (this.color) return this.color;

  return "This information is unknown";
};

Bird.prototype.addLocation = function (newLocation) {
  this.location.push(newLocation)

};

Bird.prototype.getLocations = function (newLocation) {
  return this.location

};

// UNCOMMENT THESE LINES TO CHECK YOUR WORK
const newBird = new Bird("canary", "red", ["newyork", "spain"]);
console.log(newBird); // => should log { species: 'canary', 'color: 'red', locations: ['newyork', 'spain'] }
console.log(newBird.getColor()); // => should return 'red'
newBird.setColor('yellow');
console.log(newBird.getColor()); // => should return 'yellow'
newBird.addLocation('france');
console.log(newBird.getLocations()); // => should return ['newyork', 'spain', 'france'];
