<script>
  import Title from "../../ui/Title.svelte";
  import UnderlineTitle from "../../ui/UnderlineTitle.svelte";
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
        <div class="border-bottom border-primary border-2 w-100 mb-4">
          <h3 class="text-primary text-start">
            Embarquer la jeunesse dans la construction de son avenir
          </h3>
        </div>
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
        <div class="border-bottom border-primary border-2 w-100 mb-4">
          <h3 class="text-primary text-start">Le thème de l'année 2023</h3>
        </div>
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
        <div class="border-bottom border-primary border-2 w-100 mb-4">
          <h3 class="text-primary text-center">Les étapes du projet</h3>
        </div>
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
  </div>
</div>

<style>
  .content-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 16px;
    font-size: 16px;
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
</style>
