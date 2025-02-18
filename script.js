// ATTRAVERSAMENTO E MANIPOLAZIONE DEL DOM
// Tutte le web app moderne prevedono un'interazione con il documento HTML e CSS
// in una fase SUCCESSIVA al caricamento iniziale!

// È fondamentale sapere come interagire con la pagina tramite JS perchè in tantissime
// situazioni un contenuto "statico" non è adatto alla nostra esperienza web
// es. Un'app di un calendario non può sperare di arrivare con sempre la data corretta
// nell'HTML!

// Questo processo di interazione avviene in DUE FASI:
// 1) ATTRAVERSAMENTO del DOM -> c'è bisogno di imparare come raggiungere gli elementi
// che intendiamo modificare
// 2) MANIPOLAZIONE del DOM -> serie di tecniche che ci permettono di ALTERARE un elemento
// es. cambiarne il testo, le proprietà CSS, le classi CSS, eliminare/aggiungere figli etc.

// 1) SELEZIONE DEGLI ELEMENTI (DOM TRAVERSING)
// tutte queste tecniche ci permetterano di "selezionare" un elemento della pagina
// "selezionare" -> ottenere un RIFERIMENTO a quell'elemento
// questo riferimento all'elemento sarà SEMPRE un OGGETTO JS
console.log(document)

// a) tramite l'attributo "id"
const h1Title = document.getElementById('title')
// ho recuperato un riferimento univoco all'elemento della pagina con id="title"
console.log('h1Title', h1Title)
const header = document.getElementById('header')
console.log('header', header)

// b) tramite l'attributo "class"
const elements = document.getElementsByClassName('menu-element')
// recupera i riferimenti di TUTTI gli elementi dotati di class "menu-element" e
// le li ritorna in UN ARRAY (una lista di elementi)
console.log('menu elements', elements)
// getElementsByClassName torna SEMPRE UN ARRAY!

const navigations = document.getElementsByClassName('navigation')
// ho selezionato TUTTI gli elementi con class="navigation"
// ma ho solo UN elemento dotato di quella classe...
console.log('navigations', navigations)
// ...quindi in questo caso mi tornerà un ARRAY con dentro un elemento!!!

// c) tramite il nome del tag
const paragraphs = document.getElementsByTagName('p')
// ho recuperato UN ARRAY con dentro i riferimenti a TUTTI i tag <p>
console.log('PRIMO PARAGRAFO', paragraphs[0]) // primo p
console.log('ULTIMO PARAGRAFO', paragraphs[paragraphs.length - 1]) // ultimo p

const bodies = document.getElementsByTagName('body')
console.log('BODIES', bodies)

// es., voglio selezionare lo span con contenuto "TOPOGIGIO"
// potrei utilizzare la sua classe, "special-text"
document.getElementsByClassName('special-text')

// d) tramite un SELETTORE CSS
const topoGigio = document.querySelector('p .special-text')
// p .special-text { }
console.log('TOPOGIGIO', topoGigio)

// e) tramite un SELETTORE CSS, ma con un ARRAY come valore di ritorno!
const carli = document.querySelectorAll('article span') // tutti gli span dentro gli article
console.log('CARLI', carli)

// querySelector e querySelectorAll sono metodi potentissimi ma da grandi poteri
// derivano grandi responsabilità! utilizziamoli solamente quando i metodi più "semplici"
// non ci portano al risultato... non utilizziamoli per cercare una classe o un id!

// OGNI elemento trovato possiede una proprietà "parentElement", che altro non è che
// un riferimento al SUO elemento contenitore (il suo "parend")
console.log('HEADER', h1Title.parentElement)

// OGNI elemento trovato possiede una proprietà "children", che altro non è che un
// "array" con dentro TUTTI i suoi figli diretti
console.log('HEADER CHILDREN', header.children)
header.children[2] // nav

// proseguiamo con il punto 2) nel file ./blog.js
