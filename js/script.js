`use strict`
class Artikal{
    constructor(jedinstveniBroj, naziv, cena){
        this.jedinstveniBroj = jedinstveniBroj
        this.naziv = naziv
        this.cena = cena
    }
}
let artikli =[]

document.addEventListener('DOMContentLoaded', initializeApartments)

function initializeApartments() {

    const artMonitor = new Artikal(1,"Monitor", 165)
    const artTv = new Artikal(2,"TV", 650)
    const artMis = new Artikal(3,"Mis", 20)
    const artTastatura = new Artikal(4,"Tastatura", 55)

    artikli = [artMonitor,artTv,artMis,artTastatura];
  
    createProductRows()
    handleFormSubmission()
    loadTabeleStyles()
  }

function loadTabeleStyles(){
    let tabela = document.querySelector("#artikli") 
    tabela.style.borderCollapse = "collapse"
    tabela.style.border = "1px solid black"
    tabela.style.textAlign = "center"
    let ths = document.querySelectorAll("th")
    for (let th of ths) {
    th.style.border = "1px solid black"
    }

    let tds = document.querySelectorAll("td")
    for (let td of tds) {
        td.style.border = "1px solid black"
        td.style.padding = "5px"
    }
}
function createProductRows(){
    let table = document.querySelector("#tbody-artikli")
    table.innerHTML = ''

    for(let artikal of artikli){
        let tabela = document.querySelector("#tbody-artikli") 
        let tr = document.createElement("tr")
    
        let jedinstveniBroj= document.createElement("td") 
        let naziv= document.createElement("td") 
        let cena= document.createElement("td") 
    
        jedinstveniBroj.textContent = artikal.jedinstveniBroj
        naziv.textContent = artikal.naziv
        cena.textContent = artikal.cena + " $"
        
        tr.appendChild(jedinstveniBroj)
        tr.appendChild(naziv)
        tr.appendChild(cena)
        tabela.appendChild(tr)
    }
}

function handleFormSubmission() {
    let dodajBtn = document.querySelector('#dodajBtn')
    dodajBtn.addEventListener('click', function() {
        const forma = document.querySelector('#forma')
        const formData = new FormData(forma)
  
        const naziv = formData.get('naziv')
        const cena = formData.get('cena')
        const opis = formData.get('opis')
  
        const noviArtikal = new Artikal(naziv, cena, opis)
        artikli.push(noviArtikal)
  
        createProductRows()
    })
}
         
    
     








