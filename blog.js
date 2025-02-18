// 2)
// impariamo le operazioni più comuni di MANIPOLAZIONE degli elementi
// recuperati con le tecniche viste al punto 1)

const changeTitle = function () {
  // andiamo a modificare il contenuto TESTUALE di un elemento
  // prima recupero il riferimento all'h1
  const mainTitle = document.getElementById('main-title')
  console.log('mainTitle', mainTitle)
  // la proprietà innerText accede al contenuto testuale di un tag,
  // ovvero il testo incluso tra il tag di apertura e il tag di chiusura
  // è possibile utilizzarla per LEGGERE l'attuale valore testuale di un elemento
  console.log(mainTitle.innerText)
  // allo stesso modo è possibile SOVRASCRIVERE il valore di innerText, andando quindi
  // a MANIPOLARNE il contenuto!

  // calcoliamo la data di oggi
  const now = new Date()
  const day = now.getDate() // il giorno del mese
  const month = now.getMonth() + 1 // il mese dell'anno (però parte da 0!)
  const year = now.getFullYear() // l'anno corrente

  //   mainTitle.innerText = 'EPIBlog - ' + day + '/' + month + '/' + year
  mainTitle.innerText = `EPIBlog - ${day}/${month}/${year}`
}

changeTitle()

const addUnderline = function () {
  // applicare una classe CSS ad un elemento
  // selezioniamo il titolo del PRIMO articolo
  // con un querySelectorAll scelgo TUTTI gli h2 contenuti negli article
  const subTitles = document.querySelectorAll('article h2')
  // subTitles è una NodeList (una specie di array)
  console.log(subTitles)
  //   subTitles[0].classList.add('underline') // aggiunge la class="underline" all'elemento

  for (let i = 0; i < subTitles.length; i++) {
    subTitles[i].classList.add('underline')
  }

  // FATE BENE ATTENZIONE A COSA È UN OGGETTO E A COSA È UN ARRAY
  // le proprietà innerText, classList sono PROPRIETÀ DI ELEMENTI HTML!
  // se recuperate un array di elementi, LO DOVETE CICLARE per ottenere i SINGOLI
  // RIFERIMENTI AGLI ELEMENTI!
}

addUnderline()

// applicare uno stile inline ad un elemento
const makeArchiveRed = function () {
  // selezioniamo l'h3 all'interno dell'aside con id="archive"
  // const title = document.querySelector('#archive h3')
  // o, in alternativa:
  // document.querySelector('aside h3')
  const title = document.getElementById('h3-title')
  title.style.color = 'red'
  title.style.fontStyle = 'italic'
  title.style.fontSize = '1.5em'
}

makeArchiveRed()

// CAMBIARE IL VALORE DEGLI ATTRIBUTI IN HTML
// cambiamo la src di un'immagine già caricata nella pagina

const makeItACat = function () {
  // prendo TUTTE le immagini
  // 1)
  const allTheImages = document.getElementsByTagName('img')
  const doggo = allTheImages[0]
  // 2)
  doggo.setAttribute('src', 'https://placecats.com/400/400')
}

const makeItACatToggle = function () {
  // prendo TUTTE le immagini
  // 1)
  const allTheImages = document.getElementsByTagName('img')
  const doggo = allTheImages[0]
  // 2)
  // getAttribute mi fornisce il VALORE ATTUALE di un attributo
  if (doggo.getAttribute('src') === 'https://placedog.net/400/400') {
    // l'immagine è un cane! la facciamo diventare un gatto
    doggo.setAttribute('src', 'https://placecats.com/400/400')
  } else {
    // l'immagine è un gatto! la facciamo diventare cane
    doggo.setAttribute('src', 'https://placedog.net/400/400')
  }
}

// CREARE ELEMENTI NUOVI
// aggiungiamo nuovi elementi alla <ul> nell'aside
const addALink = function () {
  // selezioniamo innanzitutto l'elemento su cui andremo ad INSERIRE il nuovo link
  // la lista dentro l'aside
  const list = document.querySelector('aside ul')
  // creiamo un nuovo elemento di lista
  const newLi = document.createElement('li') // <li></li>
  // creiamo l'ancora da inserire nell'li
  const newAnchor = document.createElement('a') // <a></a>
  // inserisco l'href sull'ancora
  newAnchor.setAttribute('href', '#') // <a href="#"></a>
  newAnchor.innerText = 'Maggio 2024' // <a href="#">Maggio 2024</a>
  // ora l'ancora dovrebbe essere inserita nell'li
  newLi.appendChild(newAnchor) // <li> <a href="#">Maggio 2024</a> </li>
  // inseriamolo dentro la lista
  list.appendChild(newLi)
}

// appendChild aggiunge un elemento come ULTIMO FIGLIO di un altro!
