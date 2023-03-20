# EVALUATION: CRUD PRODUIT

## Vous êtes chargé de:
Créer un dashboard admin afin de pouvoir lire creer modifier supprimer des produits via une API.

Chaque produit sera composé de:
  * nom
  * prix
  * quantité
Pour la partie front, vous devrez vous inspirer des screenshots fourni en ressources pour creer une maquette.

## Critères de performance:
le site correspond a la maquette
l'affichage des produits fonctionne
l'ajout de produit fonctionne
l'édition d'un produit fonctionne
la suppression d'un produit fonctionne
le site est responsive
le backend renvoie des reponses avec un statusCode vallide
le backend permet de recuperer une liste de tout les produits
le backend permet d'ajouter un produit
le backend permet de supprimer un produit
le backend permet de modifier un produit
le backend renvoie un message d'erreur explicite en cas de route incorrecte

## Installation:

### Dans le Terminal 'bash':

```
$ npm install

$ npm install -g @nestjs/cli

$ nest new .

$ npm install --save @nestjs/swagger @nestjs/config

$ npm install --save @nestjs/typeorm typeorm pg

$ npm i --save class-validator class-transformer

$ npm install --save @nestjs/serve-static

$ npm install --save postgres

```
### Création des tables typeorm dans le Terminal 'bash':

```
$ nest g resource produits

```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


