const card1 = document.querySelector(".card1")
const card2 = document.querySelector(".card2")
const cookieClick = document.querySelector("#fortuneCookie")
const btnReturn = document.querySelector("#btnReturn")

cringePhrases = ["A vida trará coisas boas se tiver paciência.","Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.","Não compense na ira o que lhe falta na razão.","Defeitos e virtudes são apenas dois lados da mesma moeda.","A maior de todas as torres começa no solo.","Não há que ser forte. Há que ser flexível.","Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.","Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?","Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.","A juventude não é uma época da vida, é um estado de espírito."]



cookieClick.addEventListener('click', function(){

    let index = Math.round(Math.random()*10)

    document.querySelector("h2").innerText = cringePhrases[index]

    card1.classList.add("hide")
    card2.classList.remove("hide")


})

btnReturn.addEventListener('click', function(){
    card2.classList.add("hide")
    card1.classList.remove("hide")
})


