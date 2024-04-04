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
  el.colors.treeColor.classList.remove('green')
  el.colors.rainColor.classList.remove('blue')
  el.colors.coffeeColor.classList.remove('brown')
  el.colors.fireColor.classList.remove('red')
}
export function turnUp() {
  timer.turnUp();
}

export function turnDown() {
  timer.turnDown();
}

let control = state.isMute;
export function musicTree() {
  console.log(control);
 
    el.colors.startTree();
    sounds.forest.play();
    sounds.fire.pause();
    sounds.café.pause();
    sounds.rain.pause();
    
    if(!control){
      sounds.forest.pause()
      el.colors.treeColor.classList.remove('green')
    }
    control = !control
   
}

export function musicRain() {
  
    el.colors.startRain();
    sounds.rain.play();
    sounds.forest.pause();
    sounds.fire.pause();
    sounds.café.pause();
    
    if(!control){
      sounds.rain.pause()
      el.colors.rainColor.classList.remove('blue')
    }
    control = !control
  
}
export function musicStore() {
  el.colors.startCoffee();
  sounds.café.play();
  sounds.rain.pause();
  sounds.forest.pause();
  sounds.fire.pause();
  if(!control){
    sounds.café.pause()
    el.colors.coffeeColor.classList.remove('brown')
  }
  control = !control
}
export function musicFire() {
  el.colors.startFire();
  sounds.fire.play();
  sounds.café.pause();
  sounds.rain.pause();
  sounds.forest.pause();
  if(!control){
    sounds.fire.pause()
    el.colors.fireColor.classList.remove('red')
  }
  control = !control
}
