<script>
  import { city } from "../../store";
  import SelecteCity from "../programmation/SelecteCity.svelte";
  import ContactForm from "../ContactForm.svelte";
  import MapComponent from "../MapComponent.svelte";
  import config from "../../../config.json";
  import { cinemas } from "../../data-local";
  import Title from "../../ui/Title.svelte";

  const edition = config.EDITION;

  const onlyUnique = (
    /** @type {{ name: string; }} */ value,
    /** @type {number} */ index,
    /** @type {import("../../data-local").Cinema[]} */ self
  ) => {
    return (
      self.findIndex((selfValue) => selfValue.name === value.name) === index
    );
  };
  $: cinemasList = Object.keys(cinemas[edition])
    .map((key) => cinemas[edition][key])
    .filter((cinema) => cinema.organization === $city)
    .filter(onlyUnique);

  let contactType = "";
  const selectContactHandler = (e) => {
    contactType = e.target.value;
  };
</script>

<div class="d-flex flex-column my-5 text-center align-items-center">
  <Title>Informations pratiques</Title>
  <SelecteCity />
</div>

{#each cinemasList as location, index}
  <div class="row g-3 mt-3 align-items-center">
    <h2>{location.name}</h2>
    <div class="col-12 col-md-6">
      <MapComponent
        adresse={`${location.name}, ${location.address}, ${location.zip} ${location.city}`}
        latitude={Number(location.gps.latitude)}
        longitude={Number(location.gps.longitude)}
        mapid={`${index}`}
      />
    </div>

    <div class="col-12 col-md-6 text-center">
      {#if location.access}
        <div>
          <strong>Accès</strong> : {location.access}
        </div>
      {/if}
      {#if location.bus}
        <div>
          <strong>Bus</strong> : {location.bus}
        </div>
      {/if}
      {#if location.ter}
        <div>
          <strong>Ter</strong> : {location.ter}
        </div>
      {/if}
      {#if location.otherTransport}
        <div>
          {location.otherTransport.description} :
          <a href={location.otherTransport.link} target="_blank"
            >{location.otherTransport.name}</a
          >
        </div>
      {/if}
      <div class="d-flex flex-wrap justify-content-center py-3">
        <button
          class="btn btn-pomme m-3"
          on:click={() => window.open(location.website, "_blank")}
        >
          Site web du cinéma
        </button>
        <button
          class="btn btn-pomme m-3"
          on:click={() => window.open(location.navigation, "_blank")}
        >
          Se rendre au cinéma
        </button>
      </div>
    </div>
  </div>
{/each}

<div class="contact">
  <h2 id="contact">Contactez-nous</h2>
  <div class="col-12 col-md-6 mb-3 pe-4">
    <select class="form-select" on:change={selectContactHandler}>
      <option selected disabled>Qui souhaitez-vous contacter ?</option>
      <option value="contact">Contact grand public</option>
      <option value="presse">Contact presse</option>
      <option value="dev">Développeur web</option>
    </select>
  </div>
  <ContactForm values={[{ type: contactType }]} />
</div>

<style>
  button {
    min-width: 180px;
  }
  .contact {
    max-width: 600px;
    margin: auto;
    padding-top: 64px;
    padding-bottom: 32px;
  }
</style>
