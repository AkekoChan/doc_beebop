---
sidebar_position: 2
---

# Sécurité

Symfony possède un **système de sécurité** avancé qui permet de gérer **l'authentification** et **l'autorisation** des utilisateurs, géré dans le fichier **LoginFormAuthentificator.php**. Beebop l'utilise pour l'authentification, l'autorisation, la vérification et la **gestion** des utilisateurs pour garantir la **sécurité** de l'application. Il permet notamment de gérer les **rôles** et les permissions des utilisateurs de manière fine et flexible. Avec ce système de sécurité, Symfony offre une **protection solide** contre les attaques malveillantes et les failles de sécurité.

Dans Symfony, il est possible de mettre en place des systèmes de sécurité au niveau des **formulaires** pour protéger les données entrées par les utilisateurs. Pour cela, on peut utiliser les fichiers de configuration de formulaire tels que **form_login**, **form_logout**, et **form_login_check** qui sont définis dans le fichier de configuration de sécurité (security.yaml). Ces fichiers permettent de configurer les actions à prendre en cas de requête liée au formulaire. Les contraintes de sécurité peuvent aussi être **définies sur les champs de formulaire** pour s'assurer que les données entrées par les utilisateurs respectent certaines règles (par exemple, un mot de passe doit contenir au moins 8 caractères). Ces règles sont définies dans les classes de validation et peuvent être appelées dans les classes de formulaire pour assurer la **sécurité des données**.

Pour créer des formulaires simplement :

```
composer require symfony/form
```

Afin de sécuriser les **formulaires**, nous avons utilisé **validator** qui permet de passer les conditions à remplir directement dans l'entité, impossible à modifier par l'utilisateur. Pour chaque champ, les conditions sont passées sous form d'assert avec un **message d'erreur** spécifique pour l'utilisateur, améliorant son expérience.

```
composer require symfony/validator
```

```php title='/pages/Beekeeper.php'
    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    #[Assert\Email(
        message: 'Le mail "{{ value }}" n\'est pas valide.',
    )]
    private ?string $mail = null;

```

# Authentification

Le système d'authentification de Symfony permet de **vérifier l'identité** des utilisateurs de l'application. Le système d'authentification de Symfony est facilement **configurable** et personnalisable pour s'adapter aux besoins spécifiques de Beebop. Il permet d'empêcher l'accès aux vues tant qu'un utilisateur ayant le rôle ['ROLE_BEEKEEPER'] n'ai pas connecté. Il a la même fonction concernant les routes de l'admin, avec le rôle ['ROLE_ADMIN'].

```php title="/pages/BeekeeperController.php"
$this->denyAccessUnlessGranted('ROLE_BEEKEEPER');
```
