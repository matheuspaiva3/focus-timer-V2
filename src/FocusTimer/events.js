import {controls,musicButtons} from './elements.js'
import * as actions from './actions.js'

export function registerControl(){
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != 'function'){
          return
        }
        actions[action]()
    })
}
export function registerMusic(){
    musicButtons.addEventListener('click',(event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != 'function'){
            return
        }
       actions[action]()
    })
}