/**
 * CHALLENGE 4: Simulate API Call
 * Create a function `simulateAPICall` that takes no arguments.
 * It should return a promise that resolves with the string 'Data received'
 * after a random delay between 1 and 3 seconds.
 */
//success: create a func simulateapicall that returns a promise that resolves with the string data received with a random delay from 1-3 secs
//kw: creat a func, return a promise, promise will resolve with a string, with random seconds btwn 1-3
//actions create func return promise, create set timeout with resolve string, create math.random for time delay

const simulateAPICall = () =>{
    return new Promise((resolve,reject) => {
        let delay = (Math.floor(Math.random()*3)+1) * 1000
        setTimeout(()=> resolve(`Data received`), delay);
    });
}

// UNCOMMENT THESE LINES TO CHECK YOUR WORK
simulateAPICall()
  .then((message) => console.log(message)) // should log 'Data received' after a random delay between 1 and 3 seconds
  .catch((error) => console.error('Error:', error));
