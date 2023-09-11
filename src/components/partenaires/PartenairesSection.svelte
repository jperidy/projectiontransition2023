<script>
  export let sectionTitle;
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
  }
  img {
    border-radius: 8px;
    width: 200px;
    height: 200px;
  }
</style>
