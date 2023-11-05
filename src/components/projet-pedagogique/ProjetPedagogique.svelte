<script>
  import Title from "../../ui/Title.svelte";
  import UnderlineTitle from "../../ui/UnderlineTitle.svelte";
  import ColumnTitle from "./ColumnTitle.svelte";
  import ParticipateButton from "./ParticipateButton.svelte";
  import Step from "./Step.svelte";
</script>

<div class="d-flex flex-column my-5 text-center align-items-center">
  <Title color="text-white">Le projet pédagogique</Title>
  <div class="content-container">
    <div class="img-container">
      <img
        class="banner-img"
        src="projet-pedagogique/banner.jpg"
        alt="banner"
      />
    </div>

    <div class="line">
      <div class="column">
        <ColumnTitle>
          Embarquer la jeunesse dans la construction de son avenir
        </ColumnTitle>

        <p>
          Tous les ans, Projection Transition met un point d'honneur à démarrer
          le festival avec des lycéennes et lyceens ! Porté par un film projeté
          le vendredi aprè-midi, il se construit un lien avec des professeurs de
          divers établissements scolaires, pour impliquer et accueillir leurs
          élèves. Convaincu que la jeunesse doit avoir sa place dans notre
          démarche collective et que l'enseignement leur donne des clés
          précieuses pour préparer leur avenir, le festival propose des
          ateliers, un film et un débat.
          <br />
          À travers plusieurs formats d'ateliers ludiques, les élèves découvrent,
          (se) questionnent et s'engagent sur les sujets de la transition écologique.
          Grâce à ces ateliers, les classes sont prêtes à questionner et échanger
          avec les intervenants le jour du festival.
        </p>
        <p>
          En 2022, ce sont près de 500 élèves dont les réflexions ont été
          nourries par le projet pédagogique.
        </p>
      </div>
      <div class="column">
        <ColumnTitle>Le thème de l'année 2023</ColumnTitle>
        <div class="line">
          <img src="projet-pedagogique/affiche.jpg" alt="affiche gagarine" />
          <div>
            <h4>Dans quelle ville vivre demain ?</h4>
            <UnderlineTitle />
            <p>
              Autour du film Gagarine (2020), de Fanny Liatard et Jérémy
              Trouilh.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="line">
      <div class="column">
        <ColumnTitle>Les étapes du projet</ColumnTitle>
        <div class="line">
          <Step
            img="atelier1.png"
            stepTitle="Le climat: pourquoi s'y intéresser ?"
            descriptions={[
              "Ce permier atelier a pour objectif d'établir un socle commun de connaissances sur le sujet du climat.",
              "Le format est à préciser dans chaque ville avec les enseignant-es : fresque du climat, arbre EduClimat, jeu Inventons nos vies bas carbone...",
            ]}
            duration="2 ou 3 heures"
            animation="équipe Projection transition, ou externe par un-e bénévole des associations Fresques du climat / EduClimat, ou par les professeurs s'il-elles sont formé-es à ces outils."
          />
          <Step
            img="atelier2.png"
            stepTitle="Un débat ça se prépare !"
            descriptions={[
              "Cet atelier est axé autour des enjeux du film avec pour objectif de définir les problématiques et questionnements que les lycéens partageront aux intervenant-es lors du débat le jour du festival.",
            ]}
            programs={[
              "Le déroulé et le suivant :",
              "Phase introductive : rappeler la problématique générale",
              "Phase créative : En petit groupe, les élèves approfondissent une thématique du film, à l'aide d'un extrait du film et d'un ou plusieurs supports (article, infographie...). Chaque groupe réalise une affiche qui doit présenter les constats de la thématique et la / les problématiques associée(s).",
              "Phase présentation : chaque groupe présente son affiche au reste de la classe, et les élèves font émerger des questions pour le débat.",
              "Phase conclusive : les élèves font le bilan de toutes les problématiques qui ont été évoquées afin de synthétiser et choisir quelques questions ou sujets à présenter aux intervenant-es.",
            ]}
            duration="2 heures"
            animation="équipe Projection transition et professeurs."
          />
          <Step
            img="festival-clap.png"
            stepTitle="Participation au festival"
            descriptions={[
              "Les élèves assistent à la projection du film au cinéma puis à la séance de débat et posent leurs questions, apportent leurs étonnements aux intervenant-es pour alimenter la discussion. Les questions préparées en amont ainsi que celles suscitées par le film sont posées, permettant un échange entre le jeune public et les expert-es.",
            ]}
          />
          <Step
            img="atelier3.png"
            stepTitle="Et après ?"
            descriptions={[
              "Suite à la séquence d'ateliers et au ciné-débat, il nous semble intéressant d'échanger avec les élèves pour comprendre ce qui les a marqués, ce qu'ils ont appris, mais aussi continuer à les embarquer dans une transition juste et souhaitable ! Nous avons pensé à différents angles à développer, que chaque équipe discutera avec les professeurs, qui peuvent eux-mêmes animer cet atelier ou le développer selon leurs objectifs pédagogiques.",
              '• En lien avec la problématique du projet pédagogique, "tirer le fil" : Où aimeriez-vous vivre demain ? (Atelier d\'écriture ou de dessin sur la ville de demain et ses imaginaires)',
              "• En lien avec l'engagement : parler concrètement, sans injonction, des manières de s'investir sur le sujet climatique (jeu, bilan carbone de l'établissement...)",
            ]}
            programs={[
              "Cet atelier peut par exemple être proposé sur 1 heure pendant les cours d'ECJS.",
            ]}
          />
        </div>
      </div>
    </div>
    <div class="line">
      <div class="column">
        <ColumnTitle>Ressources</ColumnTitle>
        <h4>
          Les ressources proposées par l'ADEME, partenaire du projet pédagogique
        </h4>
        <UnderlineTitle />
        <p>
          Tout au long de la construction du projet pédagogique, l'équipe est
          épaulée par le pôle <i>information et éducation</i> de l'ADEME.
        </p>
        <p>
          L'ADEME a aidé à sélectionner les ressources utiles permettant aux
          enseignants d'ouvrir le débat avec leurs élèves sur des questions
          liées au changement climatique.
        </p>
        <p>
          Retrouvez de nombreuses ressources sur le site <a
            href="https://mtaterre.fr/"
            target="_blank">M ta terre</a
          >
          et dans
          <a
            href="https://agirpourlatransition.ademe.fr/acteurs-education/"
            target="_blank"
            >l'espace de l'ADEME pour les acteurs de l'éducation</a
          >.
        </p>
      </div>
      <div class="column">
        <ColumnTitle>Poursuivre l'engagement de la classe</ColumnTitle>
        <p>
          <strong>
            À la suite du festival, les professeurs peuvent continuer à
            mobiliser leurs élèves sur les sujets climats, en lien les
            programmes scolaires, avec les projets de l'établissement, etc.
            Voici quelques initiatives repérées par l'équipe du projet
            pédagogique&nbsp;:
          </strong>
        </p>
        <h4>Ma petite Planète</h4>
        <UnderlineTitle />
        <p>
          Engager une classe dans le prochain challenge Ma Petite Planète qui
          aura lieu en mars 2014.
        </p>
        <ParticipateButton
          href="https://mapetiteplanete.org/"
          text="Je participe"
        />
        <h4>Bilan carbone</h4>
        <UnderlineTitle />
        <p>
          Réaliser le bilan carbone de votre établissement, avec les élèves.
        </p>
        <ParticipateButton href="/" text="Je participe" />
      </div>
      <div class="column">
        <ColumnTitle>Kit pédagogique</ColumnTitle>
        <h4>
          Utiliser le kit pédagogique pour mener un ciné-débat avec vos élèves
        </h4>
        <UnderlineTitle />
        <p>
          Les contenus produits par notre équipe dans le cadre du projet
          pédagogique du festival Projection Transition ont vocation à servir
          aux professeurs et aux élèves. Vous pouvez utiliser librement le
          déroulé que nous proposons ci-dessus et ajuster :
        </p>
        <p>
          • Atelier 1 : vous pouvez contacter l'association de la Fresque du
          climat pour vous former et l'animer auprès de vos élèves, ou
          solliciter un-e bénévole pour l'animer.
        </p>
        <p>
          • Atelier 2 : télécharger le kit avec les "fiches profs" et "fiches
          élèves" et rapprochez-vous des professeurs documentalistes de votre
          établissement pour accéder à un maximum de ressources.
        </p>
        <p>
          • Ciné : contacter un cinéma local pour organiser une séance, ou
          rapprochez-vous des professeurs documentalistes de votre établissement
          pour connaître les modalités d'une projection en classe.
        </p>
        <p>
          • Débat : contacter (vous ou vos élèves) des expert-es locaux pour
          mener un débat en classe ou au cinéma, ou visionner l'enregistrement
          du débat mené au festival Projection Transition à Paris sur la <a
            href="https://www.youtube.com/channel/UCgSSefHpeDC42nXZcOy97aA"
            target="_blank">page Youtube du festival</a
          >.
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  .content-container {
    display: flex;
    flex-direction: column;
    gap: 64px;
    margin-top: 16px;
    /* font-size: 16px; */
  }
  .img-container {
    width: 100%;
  }
  .banner-img {
    width: 100%;
  }
  .line {
    display: flex;
    flex-direction: column;
    gap: 40px;
    text-align: start;
    @media screen and (min-width: 800px) {
      flex-direction: row;
    }
  }
  .column {
    display: flex;
    flex-direction: column;
    align-items: start;
    flex: 1;
  }
  a {
    color: white;
  }
</style>
