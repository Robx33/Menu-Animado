const navBar = document.querySelector(".navbar")
const allLi = document.querySelectorAll('li')

allLi.forEach((li, index) => { // forEach percorre minhas li e com evento de click remove a classe especificada e adciona uma outra

    li.addEventListener('click', e => {
        navBar.querySelector(".active-list").classList.remove("active-list") 
        li.classList.add("active-list")

        const indicator = document.querySelector(".indicator")
        indicator.style.transform = `translateX(calc(${index * 90}px))` // Colocando o estilo 'transform'
    })
})

