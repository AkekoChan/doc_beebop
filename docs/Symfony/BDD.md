---
sidebar_position: 1
---

# Base de données

[Symfony](https://symfony.com/) est un **framework PHP** pour le développement d'applications web. Il permet de créer des applications modernes et flexibles en suivant les principes de l'**architecture MVC** :

Le **modèle** : représente la structure des données de l'application et contient les méthodes pour les manipuler.
La **vue** : représente l'interface utilisateur de l'application et permet d'afficher les données du modèle.
Le **contrôleur** : traite les requêtes utilisateur, récupère les données du modèle et les transmet à la vue pour affichage.
En utilisant ce modèle, le code est organisé de manière plus claire et facilite la maintenance, avec une séparation claire des responsabilités entre les différentes parties de l'application.

## Entités

Les entités dans Symfony sont des **classes PHP** qui correspondent aux tables dans une base de données. Ce concept permet de manipuler les données plus facilement et de manière plus intuitive. Les entités sont l'un des concepts clés de Symfony et facilitent la création et la maintenance d'applications web.

**Beekeeper** : Apiculteurs soit les utilisateurs. Chacun possède son compte avec des informations personnelles. La classe Beekeeper est une des entités clés de l'application Beebop.

```twig title="/src/pages/Beekeeper.php"
class Beekeeper implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $lastName = null;

    #[ORM\Column(length: 100)]
    private ?string $firstName = null;

    #[ORM\Column(length: 100, unique: true)]
    private ?string $login = null;

    #[ORM\Column(length: 100)]
    private ?string $password = null;

    #[ORM\Column(length: 255)]
    private ?string $mail = null;

    #[ORM\Column]
    private ?bool $verified = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\OneToMany(mappedBy: 'beekeeper', targetEntity: Apiary::class)]
    private Collection $apiaries;

    #[ORM\Column]
    private array $roles = [];

```

**Apiary** : Rucher; représente un lieu où les ruches sont **installées**. Chaque rucher est **associé** à un **apiculteur** et peut contenir plusieurs ruches. L'entité Apiary contient des informations sur le **nom** du rucher, son **adresse**, et son **nombre de ruches**. Cette entité permet aux apiculteurs de regrouper et **organiser** leurs ruches en petits groupes.

**Beehive** : Ruche; représente une structure où les abeilles vivent et produisent du miel. Chaque ruche est **associée** à un **rucher** et héberge une **race** d'abeille. Cette entité permet aux apiculteurs de gérer les activités apicoles liées à chaque ruche, telles que les **tâches**, mais aussi la **production** et les **rendements**.

**Product** : Production; Représente les produits de la ruche à savoir le **miel**, la **cire** et le **pollen**. Elle contient des informations sur la **quantité** récoltée, la **date** de production et la ruche d'origine. L'entité Product permet aux apiculteurs de suivre leur production et de gérer leur stock.

**Task** : Tâches; représente les tâches apicoles, telles que l'inspection des ruches, le traitement contre les maladies et la récolte du miel. Elle contient des informations sur la **date** de réalisation, la **ruche concernée** et la **description** de la tâche. L'entité Task permet aux apiculteurs de suivre l'**historique** de leurs actions et de **planifier** les tâches à venir.

**Admin** : Admin; Représente l'administrateur de l'application. Elle contient des informations confidentielles. L'entité Admin doit gérer les comptes d'apiculteurs et valider toutes les créations de compte et de garantir la sécurité de l'application.

## Fixtures

Les **fixtures** dans Symfony sont des **classes** qui permettent de créer des **fausses données** pour une application web. Elles sont utilisées pour **initialiser une base de données** avec des données prédéfinies et ainsi **faciliter les tests** unitaires et fonctionnels. Les fixtures peuvent être créées manuellement ou à l'aide d'un **générateur automatique** de données. Les fixtures sont une fonctionnalité pratique pour les développeurs car elles permettent de **simuler** des scénarios réels et d'assurer que l'application fonctionne correctement avant sa mise en production.

Beebop utilise un système d'**imbrication** pour gérer les **relations** entre ses entités. Cela signifie que certaines entités peuvent être liées à d'autres entités pour former une **hiérarchie**. Par exemple, une ruche est liée à un rucher, qui est lui-même lié à un apiculteur. Les fixtures de Beebop reflètent cette hiérarchie en créant des données liées entre elles pour simuler un environnement réel. Cela permet de **tester** l'application dans des conditions proches de la réalité, ce qui est important pour s'assurer de son bon fonctionnement.
