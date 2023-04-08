---
sidebar_position: 3
---

# CRUD

### Description

Le principe du **CRUD** (Create, Read, Update, Delete) consiste à fournir des fonctionnalités de base pour **manipuler les données** d'une application. Cela inclut la **création**, la **lecture**, la **mise à jour** et la **suppression** d'informations stockées dans une base de données.

Dans le système MVC de Symfony, le CRUD est mis en œuvre à travers les **contrôleurs** et les **entités**. Les contrôleurs gèrent les actions de l'utilisateur et appellent les **méthodes** correspondantes des entités pour effectuer les opérations de CRUD.
Le composant MakerBundle **facilite** ainsi **la mise en place du CRUD** dans l'application.

```
symfony console make:crud NameEntity
```

Suite à cette commande, tout le CRUD est créé et nous n'avons plus qu'à le renforcer grâce aux sécurités, puis à la modifier selons nos préférences. Par exemple, certaines infos étaient à attribuer en back office et non dans le formulaire, comme l'id de référence d'un rucher pour une ruche.

### Les contraintes

Les **contraintes** rejoignent le système de sécurité alloué aux formulaires. Les contraintes sont des **règles** qui sont appliquées à une entité, comme par exemple une longueur maximale pour un champ ou une valeur minimale requise pour un autre champ. Si les contraintes ne sont pas correctement définies, cela peut causer des **erreurs** lors de la création, de la mise à jour ou de la suppression des données. Il est donc **important de définir avec soin** les contraintes pour **garantir l'intégrité** des données dans le système CRUD.
