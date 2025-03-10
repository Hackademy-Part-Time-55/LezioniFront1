

Programmazione Sincrona

Programmazione Asincrona

task gravosi (potenzialmente bloccanti):
- iterazione su array
- letture e scritture su file
- richieste e risposte in rete


WebAPI (in ambiente Browser):
- DOM API
- Fetch API



Una promise rappresenta un contenitore (la funzione executor) per un task sincrono o asincrono.
Una promise può trovarsi in uno dei seguenti stati:
- pending in corso di svolgimento
- fulfilled (resolved) cioè task terminato in modo positivo
- rejected cioè task terminato in modo negativo





// serializzazione e deserializzazione di un oggetto
serializzazione -> conversione da oggetto a stringa in un certo formato
deserializzazione -> conversione da stringa a oggetto in un certo formato


application/x-www-form-urlencoded
firstname=Eric&lastname=Cartman&age=10

application/json    (javascript object notation)
