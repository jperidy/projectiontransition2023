<script>
  import { communiques, photos2023 } from "../../data-local/2023/presse";
  import Container from "../../ui/Container.svelte";
  import Title from "../../ui/Title.svelte";
</script>

<Container>
  <Title>Espace médias</Title>
  <p>
    Cet espace est dédié aux journalistes, professionnel.le.s des médias et
    créateur.rice.s de contenus.
  </p>
  <div class="container">
    <h2>Communiqués de presse</h2>
    <ul>
      {#each communiques as communique}
        <li><a href={communique.href} download="">{communique.title}</a></li>
      {/each}
    </ul>
    <h2>Photos 2023</h2>
    <p>Retrouvez une sélection des photos officielles du festival :</p>
    <ul>
      {#each photos2023 as photo}
        <li><a href={photo.href} target="_blank">{photo.title}</a></li>
      {/each}
    </ul>
    <h2>Bande-annonce 2023</h2>
    <p>
      Revivez la 4ème édition de Projection Transition à travers la <a
        href="https://www.youtube.com/watch?v=SxB9j0tnHJk"
        target="_blank">bande-annonce</a
      >.
    </p>
    <h2>Valise graphique 2023</h2>
    <a href="/presse/valise-graphique-2023.zip" download=""
      >Téléchargez les logos et visuels de l'édition 2023</a
    >
    <h2>Contacts presse</h2>
    <p>
      Pour toute demande d'interviews & d'accréditations, contactez-nous :
      presse@projectiontransition.fr
    </p>
  </div>
</Container>

<style>
  .container {
    display: block;
  }
  h2 {
    border-top: 1px solid white;
    padding-top: 16px;
    margin-top: 16px;
  }
  a {
    color: white;
  }
</style>
