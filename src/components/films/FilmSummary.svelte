<script>
  import { goto } from "$app/navigation";
  import CustomLayout from "../CustomLayout.svelte";
  import Film from "./Film.svelte";
  import config from "../../../config.json";
  import { films } from "../../data-local";
  import Title from "../../ui/Title.svelte";
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";

  const edition = config.EDITION;

  /**
   * @type {string | null}
   */
  export let city = null;

  let filmList = films[edition];
  if (city) {
    filmList = filmList.filter((film) =>
      film.cities.find((item) => item.city === city)
    );
  }
</script>

<div>
  <CustomLayout size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
    <Title>La programmation {config.EDITION}</Title>
    <!-- <div class="d-flex flex-wrap justify-content-center">
      {#each filmList as film}
        <Film {film} {city} />
      {/each}
    </div> -->
    <div class="splide-container mt-3">
      <Splide
        aria-label="Liste des films"
        hasTrack={false}
        options={{
          perPage: 5,
          breakpoints: {
            800: {
              perPage: 3,
            },
            600: {
              perPage: 2,
            },
          },
          gap: 8,
        }}
      >
        <div class="custom-wrapper">
          <SplideTrack>
            {#each filmList as film}
              <SplideSlide>
                <div class="carousel-slide">
                  <Film {film} {city} />
                </div>
              </SplideSlide>
            {/each}
          </SplideTrack>
        </div>
      </Splide>
    </div>
  </CustomLayout>

  {#if !city}
    <div class="d-flex justify-content-center pb-3">
      <button
        class="btn btn-outline-pomme more-details"
        on:click={() => goto("/programmation")}
      >
        En savoir plus
      </button>
    </div>
  {/if}
</div>

<style>
  .more-details {
    font-family: "omotenashi_2regular";
    font-size: 24px;
  }
  .carousel-slide {
    display: flex;
    justify-content: center;
  }
  .custom-wrapper {
    width: 85vw;
    max-width: 1400px;
    margin: auto;
  }
</style>
