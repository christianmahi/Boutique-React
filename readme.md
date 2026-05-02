# TP 5 : projet 2 "React"

## Mise en place du TP

  Cette mise en place est similaire à celle du TP précédent. Le dossier `tp5` contient une structure telle que celle décrite dans ce [document](https://www.fil.univ-lille.fr/~routier/enseignement/licence/js-s4/html/template-app.html).

  1. Dans le dossier `tp5/` exécutez
```bash  	  
tp5$  npm install
```  
  2. Exécutez la commande `npm run build` pour créer le dossier `./dist/` et construire un premier *bundle*
  3. Vous pouvez ouvrir le fichier `dist/index.html`, pour vérifier que tout s'est bien déroulé en consultant la console (<kbd>Ctrl Shift K</kbd>) dans laquelle vous devez lire le message `le bundle a été généré`.  

  >  Attention, le résultat <strong>ne se consulte pas</strong> avec le fichier `src/index.html` : vous devez faire vos modifications et votre travail dans le dossier `src/` **mais le résultat du travail est observé dans le dossier `dist/`**.

  4.	Pendant le TP vous devrez compléter ou créer les modules JavaScript demandés.  
    Comme dans le TP précédent, profitez des facilités offertes par Webpack pendant la phase de développement pour construire le bundle et visualiser les résultats "à chaud" en démarrant le serveur de développement :Après chaque modification, il faut générer le <q>nouveau</q> <i>bundle</i>, toujours à l'aide de la commande <code>npm run build</code> et c'est le fichier **`dist`**`/index.html` qu'il faut consulter pour avoir le résultat

```bash
tp5$  npm run dev-server
```

  **C'est la solution que l'on vous conseille d'adopter.**

  5. N'oubliez pas d'exécuter la commande <code>npm run build</code> après l'arrêt du serveur de développement pour mettre à jour le dossier `dist/`.

> NB : le dossier `dist/` ne sera pas mis sur le dépôt car il peut être regénéré à partir des sources.

## Votre travail
le projet consiste a realiser une application React de Boutique en ligne.l'appli nous permet :
  - d'afficher les produits a gauche
  - afficher le panier a droite
  - d'ajouter les produits au panier
  - de supprimer des produit du panier
  - de modifier la quantiter de produits qui est dans le panier
  - de mettre automatiquement a jour le stock dispo
  - d'afficher le poid total et le total des commandes

### installation de la boutique 

  1- recuperer le projet et louvrir sur vs code car je lai fais dessus et si vous ne l'avez pas le telecharger au prealable voila le lien pour le telecharger si vous ne l'avez pas https://code.visualstudio.com/download
  2- ouvrir soit votre terminal ou celui de vs code dans le dossier tp5
  3- et ensuite installer les dependance:
    ``` npm install ```
    la commande de compilation :
    ``` npm run build ```
    executer avec le dev server 
    ``` npm run dev-server ```
    ou aussi apres compilation ouvrir le fichier dist/index.html

  ### fonctionnalites supplementaire ( ajout dautre produit)
  j'ai ajouter 2 produit a la boutique :
    - une peluche dragon 
    - et une Playstation 5
  Comment jai fait:
  deja dabors ajouter leurs images dans le dossier src/images et complete le fichier src/data/products.js 
  dans products.js jai juste ajouter leur id,weight,name,description,image,price,stock a chaque produit que jai ajouter

