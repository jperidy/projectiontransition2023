<script>
  import { city } from "../../store";
  import config from "../../../config.json";
  import { cities } from "../../data-local";

  const edition = config.EDITION;
</script>

<div class="col d-flex flex-column align-items-center pt-3">
  <em>Sélectionnez votre ville</em>
  <div>
    <select name="city" id="city" bind:value={$city}>
      {#each Object.values(cities[edition]) as item}
        <option value={item}>{item}</option>
      {/each}
    </select>
  </div>
</div>

<style>
  select {
    width: 200px;
    background-color: transparent;
    color: white;
    height: 40px;
    text-align: center;
  }
  option {
    color: black;
  }
</style>
