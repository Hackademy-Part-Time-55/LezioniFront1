
Seperation of Concerns


Combinare i selettori:
- descendant selector (space)
- child selector >

- group selector
- class selector multipli


Responsive design con approccio:
- mobile first (sviluppiamo il sitoweb come sappiamo già fare sul telefono in portrait - verticale - e poi applichiamo il numero minimo di modifiche al layout per schermi aventi width via via crescenti)
- desktop first (NOOOOO)

Una media query (direttiva CSS) permette di applicare del CSS su condizione (da un minimo di width di screen (viewport) in su): 
@media screen and (min-width: 400px) {
    h1 {
        background-color: blue;
    }
}

if(min-width >= 700px) {
    
}



La proprietà position (di default al valore static) va sempre utilizzata in combinazione con:
- top oppure bottom
- left oppure right


position relative modifica la posizione di un elemento rispetto alla posizione che lui stesso avrebbe normalmente

position absolute modifica la posizione di un elemento rispetto:
- al primo elemento antenato che a sua volta ha una position diversa dal valore di default
- al body


position fixed modifica la posizione di un elemento rispetto alla viewport