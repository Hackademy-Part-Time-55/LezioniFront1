


CTRL + S per salvare

protocollo :// indirizzoIp : porta / path
http   ://   127.0.0.1   :   5500   /index.html


- sintassi elemento html
Un elemento html ha la seguente sintassi:
<tagname attribute1="value1" attribute2="value2" attribute3="value3">Content</tagname>


- heading tags (in ordine decrescente di importanzas)
h1
h2
h3
...
h6

- paragraph tag




- anchor tag (link)
attributo href hypertext reference

URL della pagina di partenza http://127.0.0.1:5500/index.html
URL della pagina di destinazione http://127.0.0.1:5500/giovanni.html

- link esterni e link interni




- web server
i web server convertono un URL in rete in un path del filesystem del sistema operativo
su cui è in esecuzione il programma server
URL in rete ->          http://127.0.0.1:5500  /giovanni.html 
path del filesystem ->  /Users/kutta/Desktop/HPT55/1-LezioneHTML  /giovanni.html


URL in rete ->          http://127.0.0.1:5500   /allevatori/michele.html 
path del filesystem ->  /Users/kutta/Desktop/HPT55/1-LezioneHTML  /allevatori/michele.html





- block level elements
1) gli elementi block si estendono in orizzontale il più possibile (questa definizione sarà migliorata con il CSS)
2) gli elementi block sono impilati in verticale cioè uno sotto l'altro

h1, h2, ..., h6
p

div (division - contenitore degli elementi block)

ul
li


- inline level elements (nascono per contenere testo)
1) gli elementi inline sono larghi tanto quanto il loro contenuto
2) gli elementi inline sono impilati in orizzontale cioè uno di fianco all'altro

a

span (contenitore degli elementi inline)





Un elemento html può avere come contenuto:
- testo
- elementi html detti innestati (nascono relazioni parent-child) 


Regole per elementi html innestati:
- un elemento block può contenere al suo interno elementi block, elementi inline e testo
- un elemento inline può contenere al suo interno elementi inline e testo
Eccezione alla regola precedente:
- gli elementi block h1, h2, ..., h6 e p al loro interno non possono contenere altri elementi block


Self closing tags:
sono elementi html che non potendo avere contenuto non presentano tag di chiusura
meta
img