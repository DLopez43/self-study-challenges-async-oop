/**
 * CHALLENGE 3: Sum After Delay
 * Create a function `sumAfterDelay` that takes two numbers and a delay
 * (in milliseconds) as arguments. It should return a promise that resolves
 * with the sum of the two numbers after the specified delay.
 */
//success: a func with the label sumAfter Delay thatreturn a promise that will combine two inputs after a delay time once resolved
//kw: create fun, inputs num1,num 2 and delay time, return  promise that sesolves with sum of num inputs
//actions: create func, return promise, promise will resolve the sum of 2 inputs
const sumAfterDelay=( num1, num2, waitTime )=> {
    return new Promise((resolve,reject) => {
        let sum = num1+num2;
        if(typeof sum ==='number') {
        setTimeout(()=>resolve(sum), waitTime)
        } else{
            reject('Something went wrong')
        }
    });
}
// UNCOMMENT THESE LINES TO CHECK YOUR WORK
sumAfterDelay(5, 10, 1000)
  .then((sum) => console.log(sum)) // should log 15 after 1 second
  .catch((error) => console.error('Error:', error));
