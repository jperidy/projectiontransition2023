<script>
  import CustomLayout from "../../components/CustomLayout.svelte";
  import SeoComponent from "../../components/SeoComponent.svelte";
  import Programmation from "../../components/programmation/Programmation.svelte";

  export let data;
</script>

<CustomLayout>
  <Programmation />
</CustomLayout>

<SeoComponent
  pageContent={{
    titleSeo: "Projection Transition - Programmation 2022",
    descriptionSeo:
      "Projection Transition - Le festival ciné-débat pour la transition écologique",
    titleOG: "Projection Transition - Programmation 2022",
    descriptionOG: "Retrouvez la programmation de l'édition 2022 !",
  }}
/>
