block = document.querySelector(".block")

function slideup(){
    anime({
        targets: '.block',
        opacity: 1,
        top: 0,
        duration: 3000
    }) 
}

slideup()