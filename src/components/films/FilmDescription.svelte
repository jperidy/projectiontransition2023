<script>
  import CustomLayout from "../CustomLayout.svelte";
  import FilmSummary from "../films/FilmSummary.svelte";

  /**
   * @type {import("../../data-local").Film}
   */
  export let film;
  /**
   * @type {string}
   */
  export let city;

  const getCityInformations = (
    /** @type {import("../../data-local").Film} */ film,
    /** @type {string} */ city
  ) => film.cities.find((item) => item.city === city);

  $: cityInformation = getCityInformations(film, city);

  $: ticketingIsfulfillAndOpen =
    ((cityInformation?.cinema.ticketingOpenDate &&
      cityInformation?.cinema.ticketingRedirection) ||
      cityInformation?.ticketingRedirection) &&
    new Date() > new Date(cityInformation.cinema.ticketingOpenDate);

  $: ticketingMessage =
    cityInformation?.cinema.ticketingMessage ||
    cityInformation?.ticketingMessage;
</script>

<h1
  class="banner d-flex justify-content-center align-items-center"
  style={`background-image: ${
    film.image.programmation
      ? `url(/films/programmation/${film.image.programmation})`
      : ""
  }; background-position: ${
    film.image.programmationPosition ? film.image.programmationPosition : ""
  };`}
>
  {film.title}
</h1>

<CustomLayout>
  <div class="row justify-content-center align-items-start py-3 g-4">
    <div
      class="col-12 col-lg-2 d-flex flex-column align-items-center align-items-lg-start side-panel"
    >
      <img
        src={`/films/summary/${film.image.summary}`}
        alt="affiche"
        class="img-fluid d-none d-lg-flex"
      />
      <p class="text-pomme fw-bold pt-2">Un film de {film.author}</p>
      <p class="text-white m-0 p-0">
        <strong>Année de sortie :</strong>
        {film.releaseDate}
      </p>
      <p class="text-white m-0 p-0"><strong>Durée :</strong> {film.duration}</p>
      {#if film.originalTitle}
        <p class="text-white m-0 p-0">
          <strong>Titre original :</strong>
          {film.originalTitle}
        </p>
      {/if}
    </div>
    <div
      class="col-12 col-lg-8 d-flex flex-column align-items-center align-items-lg-start px-5 content"
    >
      {#if film.disclaimer}
        <p class="disclaimer">{film.disclaimer}</p>
      {/if}
      <h1 class="text-white text-center text-lg-start">Résumé du film</h1>
      <p class="text-pomme">
        Début du film : {cityInformation && cityInformation.moment}.
      </p>
      <div class="border-bottom border-3 border-pomme line" />
      <p class="text-center text-lg-start">{film.summary}</p>
      <h1 class="text-white text-center text-lg-start pt-3">
        Débat. {(cityInformation && cityInformation.theme) || film.theme}
      </h1>
      <p class="text-pomme">
        Début du débat :
        {#if cityInformation && cityInformation.debatMoment}
          {cityInformation.debatMoment}.
        {:else}
          à venir
        {/if}
        {#if cityInformation && cityInformation.animator}
          Débat animé par {cityInformation.animator}
        {/if}
      </p>

      <div class="border-bottom border-3 border-pomme line" />

      <p class="text-pomme fw-bold">Intervenants :</p>

      {#if cityInformation}
        {#each cityInformation.participants as participant}
          {#if participant && participant.name}
            <p class="text-white">
              <span class="fw-bold">{participant.name.toUpperCase()}</span>
              <span
                >{participant.description &&
                  ` - ${participant.description}`}</span
              >
            </p>
          {/if}
        {/each}
      {/if}

      <div class="border-bottom border-3 border-pomme line" />

      <p class="text-center text-lg-start">
        {(cityInformation && cityInformation.debat) || film.debat}
      </p>

      <h1 class="text-white text-center text-lg-start pt-3">Bande-annonce</h1>
      <iframe
        width="848"
        height="476"
        src={`https://www.youtube.com/embed/${film.trailer}`}
        title={film.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <div
      class="col-12 col-lg-2 d-flex flex-column align-items-start align-items-center align-items-lg-start side-panel"
    >
      <h2 class="text-pomme">
        Projection à {cityInformation && cityInformation.cinema.city}
      </h2>
      <p class="fw-bold">{cityInformation && cityInformation.cinema.name}</p>
      <p class="p-0 m-0">{cityInformation && cityInformation.cinema.address}</p>
      <p class="p-0 m-0">
        {cityInformation && cityInformation.cinema.zip}
        {cityInformation && cityInformation.cinema.city}
      </p>
      <h3 class="text-pomme mt-3">
        {cityInformation && cityInformation.day} à {cityInformation &&
          cityInformation.moment}
      </h3>
      <a class="text-white mt-3" href="/informations-pratiques">Plan d'accès</a>
      {#if ticketingMessage}
        <div class="mt-3 fst-italic">
          {cityInformation?.ticketingMessage ||
            cityInformation?.cinema.ticketingMessage}
        </div>
      {:else if ticketingIsfulfillAndOpen}
        <button
          class="btn btn-outline-pomme rounded-0 mt-3"
          on:click={() =>
            cityInformation &&
            window.open(
              cityInformation.ticketingRedirection ||
                cityInformation.cinema.ticketingRedirection,
              "_blank"
            )}
        >
          Réserver
        </button>
      {:else}
        <div class="mt-3 fst-italic">
          Ouverture de la billetterie prochainement
        </div>
      {/if}
    </div>
  </div>
</CustomLayout>

<FilmSummary {city} />

<style>
  .banner {
    min-height: 400px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.4);
    font-size: 48px;
    padding: 16px;
  }
  .disclaimer {
    margin-bottom: 16px;
    font-style: italic;
  }
  .line {
    max-width: 64px;
    margin: 8px 0;
    width: 64px;
  }

  p {
    margin: 0;
  }
  iframe {
    max-width: 100%;
  }
</style>
