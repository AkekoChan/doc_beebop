import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Facile à utiliser",
    Svg: require("@site/static/img/happy.svg").default,
    description: (
      <>
        Notre documentation est simple, claire et facile à naviguer pour vous
        aider à profiter rapidement de notre application
      </>
    ),
  },
  {
    title: "Répondre aux problème",
    Svg: require("@site/static/img/issues.svg").default,
    description: (
      <>
        Notre documentation répond aux problèmes courants rencontrés par les
        utilisateurs, en fournissant des instructions détaillées pour vous aider
        à résoudre ces problèmes rapidement et facilement.
      </>
    ),
  },
  {
    title: "Utilisation de Symfony",
    Svg: require("@site/static/img/symfony.svg").default,
    description: (
      <>
        Notre application utilise le framework PHP Symfony, qui est reconnu pour
        sa robustesse et sa flexibilité. Cela nous permet de fournir une
        application stable et performante pour répondre à vos besoins
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
