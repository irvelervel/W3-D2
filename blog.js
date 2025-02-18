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
