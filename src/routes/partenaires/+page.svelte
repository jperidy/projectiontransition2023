<script>
  import SeoComponent from "../../components/SeoComponent.svelte";
  import PartenairesSection from "../../components/partenaires/PartenairesSection.svelte";
  import Title from "../../ui/Title.svelte";
  import config from "../../../config.json";
  import { partenairesSections } from "../../data-local";

  const edition = config.EDITION;
</script>

<div class="container">
  <Title>Nos partenaires 2023</Title>
  <p>
    Ils nous font confiance et nous soutiennent, un grand MERCI à tous nos
    partenaires.
  </p>
  {#each partenairesSections[edition] as section}
    <PartenairesSection
      sectionTitle={section.title}
      partenaires={section.partenaires}
    />
  {/each}
</div>
<SeoComponent
  pageContent={{
    titleSeo: "Projection Transition - Nos partenaires 2023",
    descriptionSeo:
      "Projection Transition - Le festival ciné-débat pour la transition écologique",
    titleOG: "Projection Transition - Nos partenaires 2023",
    descriptionOG: "Retrouvez nos partenaires de l'édition 2023 !",
  }}
/>

<style>
  .container {
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    max-width: 1200px;
    margin: auto;
  }
</style>
