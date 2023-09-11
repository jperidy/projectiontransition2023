<script>
  import {
    partenairesAssociatifs,
    partenairesMedia,
    partenairesPrives,
  } from "./../../data-local/2023/partenaires.ts";
  import SeoComponent from "../../components/SeoComponent.svelte";
  import PartenairesSection from "../../components/partenaires/PartenairesSection.svelte";
  import { partenairesInstitutionnels } from "../../data-local/2023/partenaires";
  import Title from "../../ui/Title.svelte";
</script>

<div class="container">
  <Title>Nos partenaires 2021 & 2022</Title>
  <p>
    Ils nous font confiance et nous soutiennent, un grand MERCI à tous nos
    partenaires.
  </p>
  <PartenairesSection
    sectionTitle="Partenaires institutionnels et publics"
    partenaires={partenairesInstitutionnels}
  />
  <PartenairesSection
    sectionTitle="Partenaires privés"
    partenaires={partenairesPrives}
  />
  <PartenairesSection
    sectionTitle="Partenaires associatifs"
    partenaires={partenairesAssociatifs}
  />
  <PartenairesSection
    sectionTitle="Partenaires média"
    partenaires={partenairesMedia}
  />
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
