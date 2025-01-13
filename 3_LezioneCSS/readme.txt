CSS    cascade style sheet

3 modi per applicare il CSS sugli elementi html
- inline attraverso l'attributo style
- embedded (affogato) attraverso l'elemento style nell'head
- file esterno


# sintassi CSS

selector {
    property1: value1;
    property2: value2;
}

alt gr + shift + è


# Selettori - specificità dei selettori (dal meno specifico al più specifico)
1) universal selector    *
2) tag selector          nomeDelTag
3) class selector        .nomeDellaClasse
4) id selector           #nomeDellId
5) l'attributo style

# ereditarietà
tutte le proprietà legate al testo sono ereditate agli elementi discendenti (figli, nipoti, ...)

# color value
- named color
- funzione rgb() richiede 3 numeri nell'intervallo 0 fino a 255 oppure funzione rgba() con a nell'intervallo 0.0 a 1.0
- hex color

# font-weight (spessore del carattere)
400 di default per i paragrafi
700 di default per gli heading tags