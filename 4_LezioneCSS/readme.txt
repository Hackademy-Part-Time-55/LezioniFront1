
unità di misura:
- unità di misura assolute: px
- unità di misura relative (a qualcos'altro)

unità di misura relative
% rispetto alla width dell'elemento parent (eccezione quando usiamo height)
vw (viewport width) rispetto alla width della viewport
vh (viewport height) rispetto alla height della viewport



margin collapsing: uno dei margini "verticale" tra 2 elementi successivi collassa (ATTENZIONE: meglio usare il margin-bottom)

box-sizing: border-box; significa che width e height si riferiscono al bordo e non più al contenuto


elementi block (display: block)
- width: 100%
- impilati in verticale


elementi inline (display: inline)

Gli elementi inline non rispettano il box-model

display: inline-block -> restano elementi inline su cui posso applicare tutte le proprietà del box model


flex-direction modifica la direzione e il verso del main axe (e di conseguenza del cross axe)
justify-content posiziona gli elementi lungo il main axe
align-items posiziona gli elementi lungo il cross axe