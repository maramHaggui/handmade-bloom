HANDMADE BLOOM - VERSION PHP + JS

Ce dossier contient maintenant un petit backend PHP pour :
- inscription client
- connexion client/admin
- session PHP
- dashboard admin protégé
- gestion produits admin : ajouter, modifier, supprimer
- consultation commandes admin
- consultation feedbacks admin
- commande client seulement après connexion

COMMENT LANCER LE PROJET :
1. Copier le dossier dans htdocs si vous utilisez XAMPP.
   Exemple : C:/xampp/htdocs/handmade-bloom/
2. Lancer Apache dans XAMPP.
3. Ouvrir : http://localhost/handmade-bloom/index.html

IMPORTANT :
Il ne faut pas ouvrir le site directement avec file:// car le backend PHP ne fonctionnera pas.
Il faut utiliser localhost.

COMPTE ADMIN :
Email : admin@handmade.com
Mot de passe : admin123

FICHIERS PHP :
api/auth.php       -> login, register, logout, session
api/products.php   -> gestion des produits
api/orders.php     -> commandes
api/feedbacks.php  -> feedbacks
api/config.php     -> fonctions communes

DONNEES :
Les données sont stockées en JSON dans api/data/ :
- users.json
- products.json
- orders.json
- feedbacks.json

Vous pouvez remplacer plus tard ce stockage JSON par MySQL.
