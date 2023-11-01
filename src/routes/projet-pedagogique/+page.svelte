<script>
  import CustomLayout from "../../components/CustomLayout.svelte";
  import SeoComponent from "../../components/SeoComponent.svelte";
  import config from "../../../config.json";
  import ProjetPedagogique from "../../components/projet-pedagogique/ProjetPedagogique.svelte";
</script>

<CustomLayout>
  <ProjetPedagogique />
</CustomLayout>

<SeoComponent
  pageContent={{
    titleSeo: `Projection Transition - Projet pédagogique`,
    descriptionSeo:
      "Projection Transition - Le festival ciné-débat pour la transition écologique",
    titleOG: `Projection Transition - Projet pédagogique`,
    descriptionOG: `Retrouvez projet pédagogique de l'édition ${config.EDITION} !`,
  }}
/>
