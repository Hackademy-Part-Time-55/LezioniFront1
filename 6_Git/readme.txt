git è un distribuited version control system
version control system (VCS) un sistema che tiene traccia di come un progetto si evolve nel tempo attraverso le sue versioni
distribuited xke git permette di collaborare con altri sviluppatori (in team)


git config --global user.name "Eric Cartman"
git config --global user.email "eric.cartman@gmail.com"


Parole chiave:
- repository una struttura dati (sottoforma di file e cartelle) ke permette di tenere traccia dei cambiamenti apportati al progetto nel tempo
- una repository è composta da branches
- un branch è una linea di sviluppo nel tempo
- un branch è formato da commits
- un commit è una istantanea del progetto


Inizializziamo una repository locale posizionandoci all'interno della cartella del progetto ed eseguendo il comando (operazione onetime):
git init


# Staging Area (anteprima di stampa o della foto)
A partire dai file presenti nella working directory, aggiungiamo i file all'interno della staging area:
git add nomeDelFile
oppure
git add .

Il comando git status permette di visualizzare la situazione nella staging area

# Commit
A partire dai file presenti nella staging area possiamo effettuare un commit (una foto) eseguendo:
git commit -m "un messaggino descrittivo del commit - cosa c'è dentro"

Il comando git log oppure git log --oneline permette di visualizzare la history del progetto (la sequenza dei commit creati)


# ssh keygen
apro un terminale nella home
eseguo il comando dando sempre invio: ssh-keygen
sarà creata una cartella .ssh contenente la coppia di chiavi
cd .ssh
cat id_ed25519.pub


git remote permette di collegare la repository locale con la repository remota (solo a livello di link)
git remote add origin urlDellaRepoRemota

git push origin main permette di effettuare l'upload del contenuto del branch main della repo locale all'interno del branch main della repo remote il cui URL ha come alias origin
git pull origin main permette di effettuare il download del contenuto del branch main della repo remota all'interno del branch main della repo locale



La procedura sarà:
1) git add .
2) git commit -m "un messaggino descrittivo del commit - cosa c'è dentro"
3) git push origin main

Il comando git clone (operazione onetime x i soli collaborators) permette di copiare la repo remota a formare una repo locale + tutto il progetto