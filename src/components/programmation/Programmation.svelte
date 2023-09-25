<script>
  import { cities, days, films } from "../../data-local";
  import config from "../../../config.json";
  import { city } from "../../store";
  import SelecteCity from "./SelecteCity.svelte";
  import Thumbnail from "./Thumbnail.svelte";
  import Title from "../../ui/Title.svelte";

  const edition = config.EDITION;

  const sortByDate = (
    /** @type {import("../../data-local").Film} */ a,
    /** @type {import("../../data-local").Film} */ b
  ) => {
    const cityA = a.cities.find((item) => item.city === $city) || {
      moment: "",
    };
    const cityB = b.cities.find((item) => item.city === $city) || {
      moment: "",
    };
    if (cityA.moment > cityB.moment) {
      return 1;
    }
    return -1;
  };
</script>

<div class="d-flex flex-column my-5 text-center align-items-center">
  <Title>La programmation {config.EDITION}</Title>
  <SelecteCity />
</div>

<div class="day-container mx-auto">
  {#each Object.values(days[edition]) as day}
    {#if films[edition].filter( (film) => film.cities.find((item) => item.city === $city && item.day === day) ).length > 0}
      <div class="row mt-3">
        <div class="col border-top border-bottom border-white py-3">
          <h2 class="text-uppercase text-center m-0">{day}</h2>
        </div>
      </div>

      <div class="row mt-1">
        {#each films[edition]
          .filter( (film) => film.cities.find((item) => item.city === $city && item.day === day) )
          .sort(sortByDate) as film}
          <Thumbnail
            film={{
              ...film,
              ...film.cities.find(
                (item) => item.city === $city && item.day === day
              ),
            }}
          />
        {/each}
      </div>
    {/if}
  {/each}
</div>

<style>
  .day-container {
    max-width: 1200px;
  }
</style>
