<script>
  import config from "../../../config.json";
  import { cinemas, films } from "../../data-local";
  import CustomContainer from "../CustomContainer.svelte";
  import SelecteCity from "../programmation/SelecteCity.svelte";
  import { city } from "../../store";

  const edition = config.EDITION;
  $: billetteries = Object.values(cinemas[edition])
    .map((cinema) => ({
      hideTicketingPage: cinema.hideTicketingPage || false,
      cinemaName: cinema.name,
      cinemaAddress: `${cinema.address} - ${cinema.city}`,
      organization: cinema.organization,
      billetterie: cinema.ticketingRedirection,
    }))
    .filter((item) => !item.hideTicketingPage && item.organization === $city);

  const filmsList = films[edition].flatMap((film) =>
    film.cities
      .filter((city) => !city.withoutTicketing)
      .map((city) => ({
        title: film.title,
        moment: city.moment,
        day: city.day,
        cinemaName: city.cinema.name,
        ticketingRedirection: city.ticketingRedirection,
      }))
  );
</script>

<CustomContainer>
  <div class="container mt-5">
    <div>
      <h1 class="text-primary">Retrouvez toutes les billetteries</h1>
      <SelecteCity />
    </div>

    {#each billetteries as billetterie}
      <div>
        <h3 class="text-pomme">
          {billetterie.cinemaName} ({billetterie.cinemaAddress})
        </h3>
        {#each filmsList.filter((film) => film.cinemaName === billetterie.cinemaName && film.day && film.moment) as item}
          <p class="text-center">
            <a
              href={item.ticketingRedirection || billetterie.billetterie}
              target="_blank">{item.day} - {item.moment} : {item.title}</a
            >
          </p>
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

  a {
    color: white;
  }
</style>
