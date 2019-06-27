# Application de gestion des hôtels

## Installation

- Cloner le projet à partir de git et installer les dépendances:
```
git clone https://github.com/agigox/react-hotel.git
cd react-hotel
npm i
```
- Les donnés des hôtels sont contenu dans le dossier fixtures
## Fonctionement

Dans la page home, pour ajouter un produit cliquer sur son titre

Aprés validation de panier, vous allez être redirigé dans la page information

Dans ce formulaire le bouton pour envoyer le formulaire est disable tant que l'email n'est pas préciser, en plus du message d'erreur qui indique que l'email est required

Si vous avez fait le processus à partir de la première étape les données vont être affichés, sinon si par exemple vous essayer d'accéder directement à l'URL http://localhost:3000/order-summary alors les données ne sont affichées parceque la gestion des données s'effectue avec redux en mémoire (pour des raison de simplifier au maximum possible le processus (question de temps))

Enfin la page de confirmation de la commande

## Régles de gestion
L'application permettra de:
- Vendre des chambes sur internet
- Un internaute peut commander autant de nuit qu'il veut en même temps
- Si le panier est vide, on le fait diparaître et on affiche à sa place un message qui invite l'utilisateur à ajouter des chambres au panier (pour implémenter la régle: pas zero nuit)
- Un panier affiche toutes les nuits sélectionnées et le total des coûts
- Lorsque l'utilisateur clique sur le bouton finir ma commande, il va passer dans la deuxième étape, ou il faut remplir le formulaire ces informations (Email obligatoire, nom, prénom, et adresse). La 3ème étape consiste à afficher un récapitulatif. L'étape finale consite à rediriger l'utilisateur vers la page confirmation de la commande

## Stack technique
- **react**: Librairie à utiliser en combinaison avec _TypeScript_
- **redux**: La gestion de l'état au niveau de toute l'application
- **react-redux**: Outil de connection entre React et Redux
- **react-router-dom**: Le gestion des routes

- Le store de Redux contient:
    - Le panier
    - Les informations de l'utilisateur courant
    - La liste des chambres disponibles

### Les composants:

- **Home**
- **UserDetails**
- **OrderSummary**
- **OrderConfirmation**
- **HotelItem**
- **Hotels**
- **Cart**
- **Header**

## Colors:

- Header background color: #929292
- Background Hotels : #D4D4D4
- Background Panier : #EBEBEB

