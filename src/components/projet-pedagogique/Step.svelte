<script>
  import UnderlineTitle from "../../ui/UnderlineTitle.svelte";

  /**
   * @type {string}
   */
  export let stepTitle;
  /**
   * @type {string[]}
   */
  export let descriptions;
  /**
   * @type {string[]?}
   */
  export let programs = null;
  /**
   * @type {string?}
   */
  export let duration = null;
  /**
   * @type {string?}
   */
  export let animation = null;
  /**
   * @type {string}
   */
  export let img;
</script>

<div class="container">
  <div class="img-container">
    <img class="step-img" src="projet-pedagogique/{img}" alt="step" />
  </div>
  <h4>{stepTitle}</h4>
  <UnderlineTitle />
  {#each descriptions as description}
    <p>
      {description}
    </p>
  {/each}
  {#if programs}
    {#each programs as program}
      <p>
        {program}
      </p>
    {/each}
  {/if}
  {#if duration}
    <UnderlineTitle />
    <p><strong>Durée : </strong>{duration}</p>
  {/if}
  {#if animation}
    <UnderlineTitle />
    <p><strong>Animation : </strong>{animation}</p>
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
  }
  .img-container {
    height: 90px;
  }
  .step-img {
    height: 100%;
    width: auto;
  }
</style>
