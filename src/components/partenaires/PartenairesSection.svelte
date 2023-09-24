<script>
  /**
   * @type {string}
   */
  export let sectionTitle;
  /**
   * @type {import("../../data-local").Partenaire[]}
   */
  export let partenaires;
</script>

<div class="partenaire-container">
  <h2>{sectionTitle}</h2>
  <div class="logo-container">
    {#each partenaires as partenaire}
      <a class="partenaire" href={partenaire.url} target="_blank">
        <img
          src={`/partenaires/${partenaire.logo}`}
          alt={`logo ${partenaire.name}`}
          class={`${partenaire.dark ? "dark" : ""}`}
        />
      </a>
    {/each}
  </div>
</div>

<style>
  .partenaire-container {
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    padding-top: 16px;
    margin-top: 16px;
  }
  .logo-container {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    padding-top: 24px;
  }
  .partenaire {
    max-width: 200px;
    border-radius: 8px;
    background-color: white;
  }
  img {
    border-radius: 8px;
    width: 200px;
    height: 200px;
    object-fit: contain;
  }

  .dark {
    background-color: black;
  }
</style>
