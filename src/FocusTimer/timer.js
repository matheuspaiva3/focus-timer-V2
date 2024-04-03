import state from "./state.js";
import * as el from './elements.js'
import * as actions from './actions.js'

export function updateDisplay(minutes, seconds){
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2,'0')
    el.seconds.textContent = String(seconds).padStart(2,'0')
}

export function countdown(){
    clearTimeout(state.countdownId)
    if(state.isRunning === false){
        return
    }
    
    console.log('teste countdown')
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)
    console.log(minutes,seconds)
    seconds--

    if(seconds < 0){
        seconds = 59
        minutes--
    }

    if(minutes < 0){
        return
    }
    updateDisplay(minutes,seconds)

    state.countdownId = setTimeout(() => countdown(), 1000);
}
export function turnUp(){
    let minutes = Number(el.minutes.textContent)
    minutes = minutes + 5
    updateDisplay(minutes)
}
export function turnDown(){
    let minutes = Number(el.minutes.textContent)
    console.log(minutes)
    minutes -= 5
    updateDisplay(minutes)
}