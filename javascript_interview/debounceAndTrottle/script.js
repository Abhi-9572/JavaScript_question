/**DEBOUNCE
 * 1.Create a button with name Click here and add debounce as follows =>
 * -->show Button pressed <X>  times  every time button is presses
 * -->show Triggered <Y> times count after every 800ms of debounce
 */

/**It limits the amount of function call and wait for certain amount of time before running it again
 * search in flip kart
 * if we call the api call after every type of letter then it will cause pressure on backend service
 * which is not a good system design
 */

/**THROTTLE
 * 1.Create a button with name Click here and add debounce as follows =>
 * -->show Button pressed <X>  times  every time button is presses
 * -->show Triggered <Y> times count after every 800ms of throttle
 */

// Throttling in JavaScript is a technique used to limit the number of times a function can be executed over a period of time. This is useful for performance optimization, especially when dealing with events that fire frequently, such as window resizing, scrolling, or keypresses.

// How Throttling Works:

// Limit Execution Rate: Throttling ensures that a function is executed at most once every specified interval of time.
// Controlled Execution: Even if the event is triggered continuously, the throttled function will only run at the specified intervals.
// Simple Example:

// Imagine you have a function that runs whenever you scroll the page. Without throttling, this function could run hundreds of times per second, potentially causing performance issues. By throttling the function, you can limit its execution to, say, once every 200 milliseconds.

// Here’s how you can implement throttling in JavaScript:

const button = document.querySelector("._button");
const buttonPressed = document.querySelector("._increment_count");
const actualIncrement = document.querySelector("._increment_actual");

var pressedCount = 0;
var triggeredCount = 0;

const debounceCount = _.debounce(() => {
  actualIncrement.innerHTML = ++triggeredCount;
}, 800);

const throttleCount = _.throttle(() => {
  actualIncrement.innerHTML = ++triggeredCount;
}, 800);

button.addEventListener("click", () => {
  buttonPressed.innerHTML = ++pressedCount;
  //   debounceCount();
  throttleCount();
});
