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
let product_name = document.querySelectorAll(".product_name")

let container = document.querySelector(".catalog_order");
let placeholder_order_text = document.querySelector(".placeholder_order_text")

let submit_input = document.querySelectorAll("input")
let confirm_order = document.querySelector(".confirm_order")

let sum = 0
let confirm_text = document.querySelector(".confirm_order span:nth-child(1)")

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

let products = [
    {
        id: 1,
        name: "Тейсті Джуніор",
        price: 120,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/Big%20Tasty%20Junior:nutrition-calculator-tile"
    },
    {
        id: 2,
        name: "Біг Тейсті Сингл",
        price: 110,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/Big%20Tasty%20Single:nutrition-calculator-tile"
    },
    {
        id: 3,
        name: "Дабл Біг Тейсті",
        price: 130,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/Big%20Tasty%20Double:nutrition-calculator-tile"
    },
    {
        id: 4,
        name: "МакКріспі",
        price: 120,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_MCCRISPY:nutrition-calculator-tile"
    },
    {
        id: 5,
        name: "МакКріспі Делюкс",
        price: 120,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_McCRISPY_DELUXE:nutrition-calculator-tile"
    },
    {
        id: 6,
        name: "Біг Мак",
        price: 140,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Big-Mac:nutrition-calculator-tile"
    },
    {
        id: 7,
        name: "Гамбургер",
        price: 100,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Hamburger:nutrition-calculator-tile"
    },
    {
        id: 8,
        name: "Чізбургер",
        price: 90,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Cheeseburger:nutrition-calculator-tile"
    },
    {
        id: 9,
        name: "Дабл Чізбургер",
        price: 130,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Double-Cheeseburger:nutrition-calculator-tile"
    },
    {
        id: 10,
        name: "МакЧікен",
        price: 110,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_McChicken:nutrition-calculator-tile"
    },
    {
        id: 11,
        name: "Філе-о-фіш",
        price: 100,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_File-O-Fish:nutrition-calculator-tile"
    },
    {
        id: 12,
        name: "Роял Чізбургер",
        price: 120,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Royal-Cheeseburger:nutrition-calculator-tile"
    },
    {
        id: 13,
        name: "Дабл Роял Чізбургер",
        price: 140,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Double-Royal-Cheeseburger:nutrition-calculator-tile"
    },
    {
        id: 14,
        name: "Чізбургер з беконом",
        price: 110,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Cheeseburger-Bacon:nutrition-calculator-tile"
    },
    {
        id: 15,
        name: "Чікен Джуніор",
        price: 100,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_McJunior:nutrition-calculator-tile"
    },
    {
        id: 16,
        name: "Чікен МакНагетс, 4 штуки",
        price: 80,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Nuggets_4pcs_v2:nutrition-calculator-tile"
    },
    {
        id: 17,
        name: "Чікен МакНагетс, 6 штук",
        price: 110,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Nuggets_6pcs_v2:nutrition-calculator-tile"
    },
    {
        id: 18,
        name: "Чікен МакНагетс, 9 штук",
        price: 130,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Nuggets_9pcs_v2:nutrition-calculator-tile"
    },
    {
        id: 19,
        name: "Чікен МакНагетс, 20 штук",
        price: 150,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Nuggets_20pcs_v2:nutrition-calculator-tile"
    },
    {
        id: 20,
        name: "Курячі Стріпси, 3 штуки",
        price: 80,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_STRIPS_3pcs_v2:nutrition-calculator-tile"
    },
    {
        id: 21,
        name: "Курячі Стріпси, 6 штук",
        price: 110,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_STRIPS_6pcs_v2:nutrition-calculator-tile"
    },
    {
        id: 22,
        name: "Курячі Стріпси, 12 штук",
        price: 130,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_STRIPS_12pcs_v2:nutrition-calculator-tile"
    },
    {
        id: 23,
        name: "Стріпси Чікен Бокс",
        price: 200,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_MIXBOX_Nuggets-Strips_v2:nutrition-calculator-tile"
    },
    {
        id: 24,
        name: "Картопля Фрі велика",
        price: 90,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Frites_Large_v2:nutrition-calculator-tile"
    },
    {
        id: 25,
        name: "Картопля Фрі середня",
        price: 70,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Frites_Middle_v2:nutrition-calculator-tile"
    },
    {
        id: 26,
        name: "Картопля Фрі маленька",
        price: 50,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Frites_Small_v2:nutrition-calculator-tile"
    },
    {
        id: 27,
        name: "Картопляні Діпи",
        price: 80,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_DIPS_v2:nutrition-calculator-tile"
    },
    {
        id: 28,
        name: "Картопля Фрі із сирним соусом і беконом",
        price: 160,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_chips_bacon:nutrition-calculator-tile"
    },
    {
        id: 29,
        name: "Соус кисло-солодкий",
        price: 40,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_SWEETSOUR%20SOUCE:nutrition-calculator-tile"
    },
    {
        id: 30,
        name: "Соус Барбекю",
        price: 40,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_BBQ%20SOUCE:nutrition-calculator-tile"
    },
    {
        id: 31,
        name: "Кетчуп",
        price: 40,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_KETCHUP%20SOUCE:nutrition-calculator-tile"
    },
    {
        id: 32,
        name: "Майонез",
        price: 40,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_MAYO%20SOUCE:nutrition-calculator-tile"
    },
    {
        id: 33,
        name: "Соус Гірчичний",
        price: 40,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_MUSTARD%20SOUCE:nutrition-calculator-tile"
    },
    {
        id: 34,
        name: "Соус Сирний",
        price: 40,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_CHEESE%20SOUCE:nutrition-calculator-tile"
    },
    {
        id: 35,
        name: "Апельсиновий сік великий",
        price: 60,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Juice_Orange_450ml_v2:nutrition-calculator-tile"
    },
    {
        id: 36,
        name: "Апельсиновий сік малий",
        price: 40,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Juice_Orange_300ml_v2:nutrition-calculator-tile"
    },
    {
        id: 37,
        name: "Кока-Кола велика",
        price: 60,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_CocaCola_500ml_v2:nutrition-calculator-tile"
    },
    {
        id: 38,
        name: "Кока-Кола середня",
        price: 40,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_CocaCola_400ml_v2:nutrition-calculator-tile"
    },
    {
        id: 39,
        name: "Кока-Кола мала",
        price: 30,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_CocaCola_250ml_v2:nutrition-calculator-tile"
    },
    {
        id: 40,
        name: "Фанта велика",
        price: 60,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Fanta_500ml_v2:nutrition-calculator-tile"
    },
    {
        id: 41,
        name: "Фанта середня",
        price: 40,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Fanta_400ml_v2:nutrition-calculator-tile"
    },
    {
        id: 42,
        name: "Фанта мала",
        price: 30,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Fanta_250ml_v2:nutrition-calculator-tile"
    },
    {
        id: 43,
        name: "Спрайт великий",
        price: 60,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Sprite_500ml_v2:nutrition-calculator-tile"
    },
    {
        id: 44,
        name: "Спрайт середній",
        price: 40,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Sprite_400ml_v2:nutrition-calculator-tile"
    },
    {
        id: 45,
        name: "Спрайт малий",
        price: 30,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Sprite_250ml_v2:nutrition-calculator-tile"
    },
    {
        id: 46,
        name: "МакШейк Шоколад",
        price: 80,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_ShakeCoko_v2jpg:nutrition-calculator-tile"
    },
    {
        id: 47,
        name: "МакШейк Ваніль",
        price: 80,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_ShakeVanilka_v2:nutrition-calculator-tile"
    },
    {
        id: 48,
        name: "МакШейк Полуниця",
        price: 80,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_ShakeJahoda_v2:nutrition-calculator-tile"
    },
    {
        id: 49,
        name: "МакПиріг Вишня",
        price: 70,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Pie_v2:nutrition-calculator-tile"
    },
    {
        id: 50,
        name: "Круасан Мигдаль",
        price: 40,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_CROISANT%20ALMOND:nutrition-calculator-tile"
    },
    {
        id: 51,
        name: "Круасан Крем-Какао",
        price: 40,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_CROISANT%20CHOKO:nutrition-calculator-tile"
    },
    {
        id: 52,
        name: "МакФлурі Кіт-Кат Полуниця",
        price: 80,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_McFlurry-jahoda:nutrition-calculator-tile"
    },
    {
        id: 53,
        name: "МакФлурі Кіт-Кат Карамель",
        price: 80,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_McFlurry-KARAMEL:nutrition-calculator-tile"
    },
    {
        id: 54,
        name: "МакФлурі Кіт-Кат Шоколад",
        price: 80,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_McFlurry-choko:nutrition-calculator-tile"
    },
    {
        id: 55,
        name: "МакСанді Полуниця",
        price: 70,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_McSANDY%20STRAWBERRY%20GLASS:nutrition-calculator-tile"
    },
    {
        id: 56,
        name: "МакСанді Карамель",
        price: 70,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_McSANDY%20CARAMEL%20GLASS:nutrition-calculator-tile"
    },
    {
        id: 57,
        name: "МакСанді Шоколад",
        price: 70,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_McSANDY%20CHOCO%20GLASS:nutrition-calculator-tile"
    },
    {
        id: 58,
        name: "МакСанді Полуниця у вафельному стаканчику",
        price: 90,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_McSANDY%20STRAWBERRY%20WAFFEL:nutrition-calculator-tile"
    },
    {
        id: 59,
        name: "МакСанді Карамель у вафельному стаканчику",
        price: 90,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_McSANDY%20CHARAMEL%20WAFFEL:nutrition-calculator-tile"
    },
    {
        id: 60,
        name: "МакСанді Шоколад у вафельному стаканчику",
        price: 90,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_McSANDY%20CHOCOLATE%20WAFFEL:nutrition-calculator-tile"
    },
    {
        id: 61,
        name: "Морозиво ріжок",
        price: 80,
        image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_IceCone_v2:nutrition-calculator-tile"
    }
]

function addToCart(){
    for(let i = 0; i<binbtn.length; i++){
        binbtn[i].addEventListener("click", function(){
            anime({
                targets: binbtn[i],
                backgroundColor: ["#118b40" ,"#ffffff"],
                easing: 'easeOutQuad',
                duration:600
            })
            let name = product_name[i].textContent;
            let id = products.find(i => i.name === name).id;
            let image = products.find(i =>i.name === name).image;
            let price = products.find(i => i.name === name).price;
            let el = document.createElement('div');
            el.className = 'menu_option';
            el.innerHTML = `<img class = "option_img" src = "${products[i].image}"><p><span class = "product_name">${products[i].name}</span> ${products[i].price} грн</p>`;
            sum += products[i].price
            confirm_text.innerHTML = `Підтвердити (${sum}грн)`
            container.appendChild(el)
            placeholder_order_text.innerHTML = ''
        })
    }
}

addToCart()

confirm_order.addEventListener("click", function(){
    if(container.innerHTML == ''){
        alert("Ви ще не створили замовлення!")
        return
    }
    for(let i = 0; i < submit_input.length; i++){
        if(submit_input[i].value == ''){
            alert("Заповніть всі поля!")
            return
        }
    }
    alert("Ваше замовлення вже в дорозі!")
    container.innerHTML = ''
    for(let i = 0; i < submit_input.length; i++){
        submit_input[i].value = ''
    }
    sum = 0
    confirm_text.innerHTML = 'Підтвердити'
})