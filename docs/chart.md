---
title: Chart.js
sidebar_position: 4
---

# Graphiques

ChartJS est une **bibliothèque JavaScript** open-source qui permet de créer des **graphiques interactifs** pour les pages web. Elle offre une grande variété de graphiques et permet de personnaliser leur apparence.

ChartJS génère des graphiques à partir de données grâce aux bundles et des composants tiers. Les données sont passées sous forme de **tableaux** ou d'**objets** à des fonctions. Les graphiques peuvent être **intégrés** aux vues **Twig**. Les vues modulables en Twig permettent de générer facilement du HTML pour intégrer les graphiques générés avec ChartJS, en utilisant des blocs modulables et des templates Twig réutilisables. Cela permet une **gestion** facile et **modulaire** des vues de l'application.

```twig title="/pages/showBeehive.html.twig"

{% set miel = 0 %}
    {% set pollen = 0 %}
    {% set cire = 0 %}

    {% if product.type == "miel" %}
        {% set miel = miel + product.quantity %}
    {% endif %}

    {% if product.type == "pollen" %}
        {% set pollen = pollen + product.quantity %}
    {% endif %}

    {% if product.type == "cire" %}
        {% set cire = cire + product.quantity %}
    {% endif %}

    [...]

    const ctx = document.getElementById('production_chart');

    new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Miel', 'Pollen', 'Cire'],
        datasets: [{
        label: 'Quantité',
        data: [{{miel}}, {{pollen}}, {{cire}}],
        backgroundColor: [
            '#FEE12B',
            '#F1E9D9',
            '#F5D547'
        ],
        borderWidth: 0
        }]
    }});

```

### Faciliter la compréhension

Produire des graphiques avec Chart JS dans Beebop permet aux apiculteurs de **visualiser** et d'analyser plus facilement les données relatives à leur activité apicole. Les graphiques offrent une **représentation visuelle claire** des informations, ce qui facilite la compréhension et l'assimilation des données, tout en offrant un aperçu rapide des **tendances** et des **évolutions** au fil du temps. Cette visualisation des données permet aux apiculteurs de prendre des **décisions** plus éclairées pour leur activité.
