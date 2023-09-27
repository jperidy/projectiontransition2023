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
  <h2 class="text-center">{sectionTitle}</h2>
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
    gap: 50px;
    justify-content: center;
    padding-top: 24px;
  }
  .partenaire {
    max-width: 250px;
    border-radius: 8px;
    background-color: white;
    margin-left: 12px;
    margin-right: 12px;
  }
  img {
    border-radius: 8px;
    width: 250px;
    height: 250px;
    object-fit: contain;
  }

  .dark {
    background-color: black;
  }

  h2 {
    font-size: 30px;
  }
</style>
