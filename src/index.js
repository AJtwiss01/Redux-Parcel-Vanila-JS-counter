import "./styles.css";
import { createStore } from "redux";

document.getElementById("app").innerHTML = `
<h1>Basic Example of Redux</h1>
<h2> Counter in Vanilla JS </h2>
<div>
  Counter:
  <span id='counter'></span>
</div>

<button id='inc'>Increment</button>
<button id='dec'>Decrement</button>

`;

// Listen to click events
// Our mutation (reducer) function creates
// a _new_ state based on the action passed
function reducer(state, action) {
  console.log(`this is the action type that is dispatched ${action.type}`);
  switch (action.type) {
    case "INC":
      return Object.assign({}, state, { counter: state.counter + 1 });
    case "DEC":
      return Object.assign({}, state, { counter: state.counter - 1 });
    default:
      return state;
  }
}

let initialState = {
  counter: 3
};
const store = createStore(reducer, initialState);

// Function to update view (this might be React or Angular in a real app)
function updateView() {
  console.log(`get state everery update ${store.getState().counter}`);
  document.querySelector("#counter").innerText = store.getState().counter;
}

store.subscribe(updateView);

// Update view for the first time
updateView();

// Listen to click events
document.getElementById("inc").onclick = () => store.dispatch({ type: "INC" });
document.getElementById("dec").onclick = () => store.dispatch({ type: "DEC" });
