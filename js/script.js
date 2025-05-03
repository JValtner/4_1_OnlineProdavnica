`use strict`
class Artikal{
    constructor(jedinstveniBroj, naziv, cena, dostupnost){
        this.jedinstveniBroj = jedinstveniBroj
        this.naziv = naziv
        this.cena = cena
    }
}
const artMonitor = new Artikal(1,"Monitor", 165)
const artTv = new Artikal(2,"TV", 650)
const artMis = new Artikal(3,"Mis", 20)
const artTastatura = new Artikal(4,"Tastatura", 55)

const artikli = [artMonitor,artTv,artMis,artTastatura];

let tabela = document.querySelector("#artikli") 
tabela.style.borderCollapse = "collapse"
tabela.style.border = "1px solid black"
tabela.style.textAlign = "center"

for(let artikal of artikli){
    let tr = document.createElement("tr")

    let jedinstveniBroj= document.createElement("td") 
    let naziv= document.createElement("td") 
    let cena= document.createElement("td") 

    jedinstveniBroj.textContent = artikal.jedinstveniBroj
    naziv.textContent = artikal.naziv
    cena.textContent = artikal.cena + " eur"
    
    
   

    tr.appendChild(jedinstveniBroj)
    tr.appendChild(naziv)
    tr.appendChild(cena)
    tabela.appendChild(tr)
}

let ths = document.querySelectorAll("th")
for (let th of ths) {
  th.style.border = "1px solid black"
}

let tds = document.querySelectorAll("td")
for (let td of tds) {
    td.style.border = "1px solid black"
    td.style.padding = "5px"
  }


         
    
     








