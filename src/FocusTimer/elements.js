export const minutes = document.getElementById('minutes')

export const seconds = document.getElementById('seconds')

export const controls = document.getElementById('controls')

export const musicButtons = document.getElementById('music-buttons')

export const colors = {
    treeColor: document.querySelector('#music-buttons .ph-tree'),
    rainColor: document.querySelector('#music-buttons .ph-cloud-rain'),
    coffeeColor: document.querySelector('#music-buttons .ph-storefront'),
    fireColor: document.querySelector('#music-buttons .ph-fire'),
    startTree(){
        colors.treeColor.classList.toggle('green')
    },
    startRain(){
        colors.rainColor.classList.toggle('blue')
    },
    startCoffee(){
        colors.coffeeColor.classList.toggle('brown')
    },
    startFire(){
        colors.fireColor.classList.toggle('red')
    },
}