<script>
  import SeoComponent from "./../components/SeoComponent.svelte";
  import Home from "./../components/home/Home.svelte";

  export let data;
</script>

<Home />

<SeoComponent
  pageContent={{
    titleSeo: "Projection Transition | 17 > 19 novembre 2023",
    descriptionSeo: "Festival de ciné-débat pour la transition écologique",
    titleOG: "Projection Transition | 17 > 19 novembre 2023",
    descriptionOG: "Festival de ciné-débat pour la transition écologique !",
  }}
  url={data.url}
  defaultSeo={data.defaultSeo}
/>