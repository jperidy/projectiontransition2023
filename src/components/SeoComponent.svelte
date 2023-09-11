<script>
  import { page } from "$app/stores";
  import { defaultSEO } from "../config/seo";

  export let pageContent;
  const href = $page.url.href;
</script>

<svelte:head>
  <title
    >{`${
      pageContent && pageContent.titleSeo
        ? pageContent.titleSeo
        : defaultSEO.DEFAULT_TITLE
    }`}</title
  >
  <meta
    name="description"
    content={`${
      pageContent && pageContent.descriptionSeo
        ? pageContent.descriptionSeo
        : defaultSEO.DEFAULT_DESCRIPTION
    }`}
  />
  <meta
    property="og:title"
    content={`${
      pageContent && pageContent.titleOG
        ? pageContent.titleOG
        : defaultSEO.DEFAULT_OG_TITLE
    }`}
  />
  <meta
    property="og:description"
    content={`${
      pageContent && pageContent.descriptionOG
        ? pageContent.descriptionOG
        : defaultSEO.DEFAULT_OG_DESCRIPTION
    }`}
  />
  <meta property="og:type" content="website" />
  <meta property="og:image" content={defaultSEO.DEFAULT_OG_IMAGE} />
  <meta property="og:image:width" content="800" />
  <meta property="og:image:height" content="400" />
  <meta property="og:url" content={href} />
  <meta property="og:locale" content="fr_FR" />
  <meta name="twitter:image" content={defaultSEO.DEFAULT_OG_IMAGE} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:description"
    content={`${
      pageContent && pageContent.descriptionOG
        ? pageContent.descriptionOG
        : defaultSEO.DEFAULT_OG_DESCRIPTION
    }`}
  />
</svelte:head>
