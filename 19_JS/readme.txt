

programmazione imperativa (come risolvere un problema):
- programmazione strutturata (if, if else, switch, while, do while, for)    1960
- programmazione procedurale (funzioni) 1970
- programmazione orientata agli oggetti 1980



programmazione dichiarativa (cosa fare per risolvere il problema):
- programmazione funzionale (funzioni pure e impure - forEach, map, filter, find, findIndex, reduce, sort) anni 2000







tipi di dato primitivi:
- number
- string
- boolean

tipi di dato riferimento (oggetti):
- array
- function


Ogni oggetto ha:
- proprietà (al pari delle variabili)
- metodi (al pari di una funzione)

La Dot Notation è utile per accedere (il lettura o scrittura) al valore di una proprietà


la keyword this, utilizzata all'intenrno di un metodo di un oggetto, può essere vista come un parametro nascosto del metodo
che assume come valore il riferimento all'oggetto attraverso il quale abbiamo chiamato il metodo


La keyword new:
1) crea un oggetto vuoto
2) imposta (bind) il this (all'interno della funzione costruttore) all'oggetto vuoto creato al passo 1
3) viene chiamata la funzione costruttore
4) terminata l'esecuzione della funzione, new restituisce il riferimento all'oggetto creato

Una funzione costruttore definisce un NUOVO tipo di dato


per ogni tipo di dato primitivo esiste un corrispondente tipo di dato riferimento (cioè un oggetto) :
- number -> Number
- string -> String
- boolean -> Boolean


truthy e falsy

