<script>
  import FilmDescription from "../../../components/films/FilmDescription.svelte";
  import SeoComponent from "../../../components/SeoComponent.svelte";
  import config from "../../../../config.json";

  export let data;
</script>

<FilmDescription film={data.film} city={data.city} />

<SeoComponent
  pageContent={{
    titleSeo: `Projection Transition - ${data.film.title} de ${data.film.author} à ${data.city}`,
    descriptionSeo:
      "Projection Transition - Le festival ciné-débat pour la transition écologique",
    titleOG: `Projection Transition - Programmation ${config.EDITION}`,
    descriptionOG: `Retrouvez la programmation de l'édition ${config.EDITION} !`,
  }}
/>
