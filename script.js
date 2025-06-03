let menu_option = document.querySelectorAll(".menu_option")
let menu_class_fullmenu = document.querySelector(".menu_class_fullmenu")

let burgers = document.querySelectorAll(".burger")
let menu_class_burgers = document.querySelector(".menu_class_burgers")

let chicken = document.querySelectorAll(".chicken")
let menu_class_chicken = document.querySelector(".menu_class_chicken")

let potato = document.querySelectorAll(".potato")
let menu_class_potato = document.querySelector(".menu_class_potato")

let sauces = document.querySelectorAll(".sauce")
let menu_class_sauces = document.querySelector(".menu_class_sauces")

let drinks = document.querySelectorAll(".drink")
let menu_class_drinks = document.querySelector(".menu_class_drinks")

let desserts = document.querySelectorAll(".dessert")
let menu_class_desserts = document.querySelector(".menu_class_desserts")

let binbtn = document.querySelectorAll(".binbtn")

let products = [
    {
        id: 1,
        name: "Тейсті Джуніор",
        price: 110,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/Big%20Tasty%20Junior:nutrition-calculator-tile"
    }
]

menu_class_fullmenu.addEventListener("click", function(){
    for(let i = 0; i<menu_option.length; i++){
        menu_option[i].style.display = "flex"
    }
})
menu_class_burgers.addEventListener("click", function(){
    for(let i = 0; i<menu_option.length; i++){
        menu_option[i].style.display = "none"
    }
    for(let i = 0; i<burgers.length; i++){
        burgers[i].style.display = "flex"
    }
})
menu_class_chicken.addEventListener("click", function(){
    for(let i = 0; i<menu_option.length; i++){
        menu_option[i].style.display = "none"
    }
    for(let i = 0; i<chicken.length; i++){
        chicken[i].style.display = "flex"
    }
})
menu_class_potato.addEventListener("click", function(){
    for(let i = 0; i<menu_option.length; i++){
        menu_option[i].style.display = "none"
    }
    for(let i = 0; i<potato.length; i++){
        potato[i].style.display = "flex"
    }
})
menu_class_sauces.addEventListener("click", function(){
    for(let i = 0; i<menu_option.length; i++){
        menu_option[i].style.display = "none"
    }
    for(let i = 0; i<sauces.length; i++){
        sauces[i].style.display = "flex"
    }
})
menu_class_drinks.addEventListener("click", function(){
    for(let i = 0; i<menu_option.length; i++){
        menu_option[i].style.display = "none"
    }
    for(let i = 0; i<drinks.length; i++){
        drinks[i].style.display = "flex"
    }
})
menu_class_desserts.addEventListener("click", function(){
    for(let i = 0; i<menu_option.length; i++){
        menu_option[i].style.display = "none"
    }
    for(let i = 0; i<desserts.length; i++){
        desserts[i].style.display = "flex"
    }
})



for(let i = 0; i<menu_option.length; i++){
    binbtn[i].addEventListener("click", function(){
        
    })
}