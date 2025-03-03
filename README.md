> Why do I have a folder named ".expo" in my project?
The ".expo" folder is created when an Expo project is started using "expo start" command.
> What do the files contain?
- "devices.json": contains information about devices that have recently opened this project. This is used to populate the "Development sessions" list in your development builds.
- "settings.json": contains the server configuration that is used to serve the application manifest.
> Should I commit the ".expo" folder?
No, you should not share the ".expo" folder. It does not contain any information that is relevant for other developers working on the project, it is specific to your machine.
Upon project creation, the ".expo" folder is already added to your ".gitignore" file.


Questo progetto simula l'applicazione di un'agenzia di viaggi. Aprendo l'applicazione viene visualizzata un'immagine 
che scompare dopo pochi secondi. Successivamente appare la pagina della home. Qui è possibile visualizzare i contatti dell'agenzia, 
la sua storia e il logo dell'agenzia. E' pissibile accedere ai servizi tramite autenticazione.
Le crendenziali sono:
username: a
password: a
Ad accesso effettuato con successo, verrà visualizzata una pagina dedicata ai servizi. La pagina è composta da:
- un menù in alto con un bottone per tornare alla pagina di home e il logo dell'agenzia. 
- un corpo centrale con un carosello di immagini
- un menù in basso con tre bottoni
Con il menù in basso è possibile visualizzare un elenco di hotels di città diverse con i rispettivi recapiti, un elenco di voli di diverse compagnie, con arrivi, paertenze e durata del volo. E' possibile visualizzare anche un elenco di attività, 
situtate in diverse città e di diversa durata. I dati sono organizzati in tre file json. l'applicazione è disponibile per tutti i medelli di smartphone e tablet
Per scaricare il progetto:

- clonare la repository da GitHub:
    bash: git clone <URL del progetto>

- installare i pacchetti Node.js:
    sudo apt-get update
    sudo apt-get install nodejs
    sudo apt-get install npm

- installare le dipendenze Node.js:
    npm install
    npm install @react-navigation/native @react-navigation/stack
    npm install axios

- installare i pacchetti Python:
    sudo apt-get install python3-pip
    pip3 install Flask
    pip3 install flask-cors

- avvio del server: (conviene aprire un altro terminale e andare sulla cartella di progetto)
    python server.py
        oppure
    python3 server.py

- avvio dell'applicazione: (terminale usato prima della fase "avvio del server")
    npm run web
 


