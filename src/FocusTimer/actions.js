import state from "./state.js";
import * as timer from "./timer.js";
import * as sounds from "./sounds.js";
import * as el from "./elements.js";

export function toggleRunning() {
  state.isRunning = true;
  console.log(state.isRunning);

  timer.countdown();
}
export function togglePause() {
  state.isRunning = false;
  console.log(state.isRunning);

  sounds.fire.pause();
  sounds.café.pause();
  sounds.rain.pause();
  sounds.forest.pause();
}
export function turnUp() {
  timer.turnUp();
}

export function turnDown() {
  timer.turnDown();
}

export function musicTree() {
  onclick = () => {
    el.colors.startTree();
  };
  sounds.forest.play();

  sounds.fire.pause();
  sounds.café.pause();
  sounds.rain.pause();
}

export function musicRain() {
  onclick = () => {
    el.colors.startRain();
  };
  
  sounds.rain.play();
  sounds.forest.pause();
  sounds.fire.pause();
  sounds.café.pause();
}
export function musicStore() {
  onclick = () => {
    el.colors.startCoffee();
  };
  sounds.café.play();

  sounds.rain.pause();
  sounds.forest.pause();
  sounds.fire.pause();
}
export function musicFire() {
  onclick = () => {
    el.colors.startFire();
  };
  sounds.fire.play();

  sounds.café.pause();
  sounds.rain.pause();
  sounds.forest.pause();
}
