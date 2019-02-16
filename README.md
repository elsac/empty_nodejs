# empty_nodejs
empty project with mongoose + CRUD + express

IMPORTANT :

Pour utiliser mongodb atlas : 

- se rendre sur : https://cloud.mongodb.com/user#/atlas/login
- créer un compte
- créer un cluster en mode FREE 
- attendre qu'il soit monté
- A côté d'overview cliquer sur Security 
- add new user avec tous les droits possibles
- aller dans IP Whitelist 
- add ip address et mettre son IP 
- retourner dans Overview puis cliquer sur connect
- choisir "connect your application" et cliquer sur "standard connection string"
- aller dans le projet server.js et copier coller le string dans la variable nomée : dev_db_url
- remplacer <PASSWORD> par le mot de passe que vous avez entré pour votre utilisateur
  
run node js with the command : "node server.js"
