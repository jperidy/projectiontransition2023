<script>
  import { goto } from "$app/navigation";
  /**
   * @type {import('../../data-local').Film}
   */
  export let film;
  /**
   * @type {string?}
   */
  export let city;
</script>

<div class="p-2 film">
  {#if city}
    <button
      class="btn btn-transparent m-0 p-0"
      on:click={() => goto(`${film.redirect}/${city}`)}
    >
      <img
        src={`/films/summary/${film.image.summary}`}
        alt={film.title}
        class="img-fluid"
      />
    </button>
  {:else}
    <img
      src={`/films/summary/${film.image.summary}`}
      alt={film.title}
      class="img-fluid"
    />
  {/if}
  <h2 class="mt-2">{film.title}</h2>
  <p class="fst-italic mb-1">de {film.author}</p>
  <div class="border-top border-white w-25 border-2 mb-1" />
  <p>
    Projection, suivie d'un débat sur le thème <span class="fst-italic"
      >{film.theme}</span
    >
  </p>
</div>

<style>
  img {
    height: 256px;
  }
  .film {
    width: 200px;
  }
</style>
