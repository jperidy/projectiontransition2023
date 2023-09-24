<script>
  import { goto } from "$app/navigation";
  import CustomLayout from "../CustomLayout.svelte";
  import Film from "./Film.svelte";
  import config from "../../../config.json";
  import { films } from "../../data-local";

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
    <h1 class="text-center text-pomme">La programmation {config.EDITION}</h1>
    <div class="d-flex flex-wrap justify-content-center">
      {#each filmList as film}
        <Film {film} {city} />
      {/each}
    </div>
    <!-- <div class="mt-3">
            <Splide 
                aria-label="Liste des films"
                options={{
                    perPage: 4,
                    breakpoints: {
                        800: {
                            perPage: 2,
                        },
                        600: {
                            perPage: 1,
                        }
                    },
                    gap: 8,
                }}
            >
                {#each filmList as film}
                    <SplideSlide>
                        <div class="carousel-slide">
                            <Film film={film} city={city}/>
                        </div>
                    </SplideSlide>
                {/each}
            </Splide>
        </div> -->
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
  /* .carousel-slide {
        display: flex;
        justify-content: center;
    } */
</style>
