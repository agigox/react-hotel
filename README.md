# Application de gestion des hôtels

## Régles de gestion
L'application permettra de:
- Vendre des chambes sur internet
- Un internaute peut commander autant de nuit qu'il veut en même temps
- Si le panier est vide, on le fait diparaître et on affiche à sa place un message qui invite l'utilisateur à ajouter des chambres au panier (pour implémenter la régle: pas zero nuit)
- Un panier affiche toutes les nuits sélectionnées et le total des coûts
- Lorsque l'utilisateur clique sur le bouton finir ma commande, il va passer dans la deuxième étape, ou il faut remplir le formulaire ces informations. La 3ème étape consiste à afficher un récapitulatif. L'étape finale consite à rediriger l'utilisateur vers la page confirmation de la commande

## Stack technique
- **react**: Librairie à utiliser en combinaison avec _TypeScript_
- **redux**: La gestion de l'état au niveau de toute l'application
- **react-redux**: Outil de connection entre React et Redux
- **react-router-dom**: Le gestion des routes

- Le store de Redux contient le panier

### Les composants:

- **Home**
- **UserDetails**
- **OrderSummary**
- **OrderConfirmation**