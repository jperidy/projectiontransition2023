<script>
  import config from "../../../config.json";
  import CustomContainer from "../../components/CustomContainer.svelte";
  import CustomLayout from "../../components/CustomLayout.svelte";
  import { cinemas, films } from "../../data-local";

  const edition = config.EDITION;
  const billetteries = Object.values(cinemas[edition]).map((cinema) => ({
    cinemaName: cinema.name,
    cinemaAddress: `${cinema.address} - ${cinema.city}`,
    billetterie: cinema.ticketingRedirection,
  }));

  const filmsList = films[edition].flatMap((film) =>
    film.cities.map((city) => ({
      title: film.title,
      moment: city.moment,
      day: city.day,
      cinemaName: city.cinema.name,
    }))
  );
</script>

<CustomContainer>
  <div class="container mt-5">
    <h1 class="text-primary">Retrouvez toutes les billetteries</h1>

    {#each billetteries as billetterie}
      <div>
        <h3>
          <a class="text-pomme" href={billetterie.billetterie} target="_blank"
            >{billetterie.cinemaName} ({billetterie.cinemaAddress})</a
          >
        </h3>
        {#each filmsList.filter((film) => film.cinemaName === billetterie.cinemaName && film.day && film.moment) as item}
          <p class="text-center">{item.day} - {item.moment} : {item.title}</p>
        {/each}
      </div>
    {/each}
  </div>
</CustomContainer>

<style>
  .container {
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    max-width: 1200px;
    margin: auto;
  }
</style>
