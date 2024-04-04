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
        colors.treeColor.classList.add('green')
        colors.rainColor.classList.remove('blue')
        colors.coffeeColor.classList.remove('brown')
        colors.fireColor.classList.remove('red')
    },
    startRain(){
        colors.rainColor.classList.add('blue')
        colors.treeColor.classList.remove('green')
        colors.coffeeColor.classList.remove('brown')
        colors.fireColor.classList.remove('red')
    },
    startCoffee(){
        colors.coffeeColor.classList.add('brown')
        colors.rainColor.classList.remove('blue')
        colors.treeColor.classList.remove('green')
        colors.fireColor.classList.remove('red')
    },
    startFire(){
        colors.fireColor.classList.add('red')
        colors.rainColor.classList.remove('blue')
        colors.coffeeColor.classList.remove('brown')
        colors.treeColor.classList.remove('green')
    },
}