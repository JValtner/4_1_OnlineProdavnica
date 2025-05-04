`use strict`
class Artikal{
    constructor(jedinstveniBroj, naziv, cena, opis){
        this.jedinstveniBroj = jedinstveniBroj
        this.naziv = naziv
        this.cena = cena
        this.opis = opis
    }
}
let artikli = []


document.addEventListener('DOMContentLoaded', initializeApartments)

function initializeApartments() {

    const artMonitor = new Artikal(1,"Monitor", 165, "Veliki monitor najnovije generacije")
    const artTv = new Artikal(2,"TV", 650, "Ultra hd curved screen smart tv")
    const artMis = new Artikal(3,"Mis", 20, "Gejmerski bluetooth mis")
    const artTastatura = new Artikal(4,"Tastatura", 55, "Najnovija tastatura sa svetlecim tipkama")
    //JSON
    artikli = JSON.parse(localStorage.getItem("artikli"))

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
        let button = document.createElement("td")
        
        let prikaziButton = document.createElement("button")
        prikaziButton.textContent = "Prikazi"

        prikaziButton.addEventListener('click',
        function (event) {
                displayProductDetails(artikal)
                event.stopPropagation()
         })
        
        button.appendChild(prikaziButton)
    
        jedinstveniBroj.textContent = artikal.jedinstveniBroj
        naziv.textContent = artikal.naziv
        cena.textContent = artikal.cena + " $"
        
        tr.appendChild(jedinstveniBroj)
        tr.appendChild(naziv)
        tr.appendChild(cena)
        tr.appendChild(button)
        tabela.appendChild(tr)
    }
}

function maxJedinstveniBroj(artikli){
    let maxJedinstveniBroj  =0
    for(let artikal of artikli){
       if(artikal.jedinstveniBroj>maxJedinstveniBroj){
        maxJedinstveniBroj = artikal.jedinstveniBroj
       } 
    }
    return maxJedinstveniBroj

}
function handleFormSubmission() {
    let dodajBtn = document.querySelector('#dodajBtn')
    dodajBtn.addEventListener('click', function() {
        const forma = document.querySelector('#forma')
        const formData = new FormData(forma)
  
        const naziv = formData.get('naziv')
        const cena = formData.get('cena')
        const opis = formData.get('opis')
        
        let jedinstveniBroj = maxJedinstveniBroj(artikli) +1
        const noviArtikal = new Artikal(jedinstveniBroj,naziv, cena, opis)
        artikli.push(noviArtikal)
        //JSON
        localStorage.removeItem("artikli");
        let artikliJSON =JSON.stringify(artikli)
        localStorage.setItem("artikli", artikliJSON)
  
        createProductRows()
        loadTabeleStyles()
    })
}

function displayProductDetails(artikal) {
    
    let nazivTd = document.createElement("td");
    let cenaTd = document.createElement("td");
    let opisTd = document.createElement("td");

    nazivTd.textContent = artikal.naziv;
    cenaTd.textContent = artikal.cena;
    opisTd.textContent = artikal.opis;

    let detaljiNaziv = document.querySelector("#naziv-detalji");
    let detaljiCena = document.querySelector("#cena-detalji");
    let detaljiOpis = document.querySelector("#opis-detalji");

    if (detaljiNaziv.children.length > 1) detaljiNaziv.removeChild(detaljiNaziv.children[1]);
    if (detaljiCena.children.length > 1) detaljiCena.removeChild(detaljiCena.children[1]);
    if (detaljiOpis.children.length > 1) detaljiOpis.removeChild(detaljiOpis.children[1]);

    detaljiNaziv.appendChild(nazivTd);
    detaljiCena.appendChild(cenaTd);
    detaljiOpis.appendChild(opisTd);
}

         
    
     








