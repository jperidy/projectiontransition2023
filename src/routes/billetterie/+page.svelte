<script>
  import config from "../../../config.json";
  import SeoComponent from "../../components/SeoComponent.svelte";
  import BilletterieComponent from "../../components/billetterie/BilletterieComponent.svelte";
</script>

<BilletterieComponent />

<SeoComponent
  pageContent={{
    titleSeo: `Projection Transition - ${config.EDITION} - Billetterie`,
    descriptionSeo:
      "Projection Transition - Le festival ciné-débat pour la transition écologique",
    titleOG: `Projection Transition - ${config.EDITION} - Billetterie`,
    descriptionOG: `Retrouvez les billetterie de l'édition ${config.EDITION} !`,
  }}
/>
