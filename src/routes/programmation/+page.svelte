<script>
  import CustomLayout from "../../components/CustomLayout.svelte";
  import SeoComponent from "../../components/SeoComponent.svelte";
  import Programmation from "../../components/programmation/Programmation.svelte";
  import config from "../../../config.json";
</script>

<CustomLayout>
  <Programmation />
</CustomLayout>

<SeoComponent
  pageContent={{
    titleSeo: `Projection Transition - Programmation ${config.EDITION}`,
    descriptionSeo:
      "Projection Transition - Le festival ciné-débat pour la transition écologique",
    titleOG: `Projection Transition - Programmation ${config.EDITION}`,
    descriptionOG: `Retrouvez la programmation de l'édition ${config.EDITION} !`,
  }}
/>
