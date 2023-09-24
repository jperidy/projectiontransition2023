<script>
  import CustomLayout from "../../components/CustomLayout.svelte";
  import SeoComponent from "../../components/SeoComponent.svelte";
  import InformationsPratiques from "../../components/informations-pratiques/InformationsPratiques.svelte";

  import config from "../../../config.json";
</script>

<CustomLayout>
  <InformationsPratiques />
</CustomLayout>

<SeoComponent
  pageContent={{
    titleSeo: `Projection Transition - ${config.EDITION} - Informations pratiques`,
    descriptionSeo:
      "Projection Transition - Le festival ciné-débat pour la transition écologique",
    titleOG: `Projection Transition - ${config.EDITION} - Informations pratiques`,
    descriptionOG: `Retrouvez les informations pratiques de l'édition ${config.EDITION} !`,
  }}
/>
