/**DEBOUNCE
 * 1.Create a button with name Click here and add debounce as follows =>
 * -->show Button pressed <X>  times  every time button is presses
 * -->show Triggered <Y> times count after every 800ms of debounce
 */

const button = document.querySelector("._button");
const buttonPressed = document.querySelector("._increment_count");
const actualIncrement = document.querySelector("._increment_actual");

var pressedCount = 0;
var triggeredCount = 0;

const debounceCount = _.debounce(() => {
  actualIncrement.innerHTML = ++triggeredCount;
}, 800);

button.addEventListener("click", () => {
  buttonPressed.innerHTML = ++pressedCount;
  debounceCount();
});
