<script>
  import { page } from "$app/stores";
  import { defaultSEO } from "../config/seo";

  /**
   * @type {{ titleSeo: string; descriptionSeo: string; titleOG: string; descriptionOG: string; homePage?: boolean; }}
   */
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
    content={pageContent && pageContent.descriptionSeo}
  />
  <meta property="og:title" content={pageContent && pageContent.titleOG} />
  <meta
    property="og:description"
    content={pageContent && pageContent.descriptionOG}
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
    content={pageContent && pageContent.descriptionOG}
  />
  {#if pageContent.homePage}
    <meta
      name="google-site-verification"
      content="bQsBDj2jHI9Il3ch7mdAPAyFAlXtwwBn7dAEGwqTMwk"
    />
  {/if}
</svelte:head>
