<script>
  import { cities, days, films } from "../../data-local";
  import config from "../../../config.json";
  import { city } from "../../store";
  import SelecteCity from "./SelecteCity.svelte";
  import Thumbnail from "./Thumbnail.svelte";

  const edition = config.EDITION;
</script>

<div class="d-flex flex-column my-5 text-center align-items-center">
  <h1 class="text-pomme">La programmation {config.EDITION}</h1>
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
          .sort((a, b) => Number(a.cities[0].moment.split("h")[0]) - Number(b.cities[0].moment.split("h")[0])) as film}
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
