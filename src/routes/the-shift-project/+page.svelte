<script>
  import Container from "../../ui/Container.svelte";
</script>

<Container>
  <div class="organisation">
    <img src="/the-shift-project/the-shifters.png" alt="les shifters" />
    <div class="organisation-description">
      <p>
        Les Shifters est le réseau de 10 000 bénévoles associé à The Shift
        Project. Ses bénévoles sont portés par le même intérêt, libérer nos
        sociétés de la contrainte carbone.
      </p>
      <p>
        Pour appuyer la mission groupe de réflexion, les bénévoles s’informent,
        débattent et se forment à la décarbonation de l’économie.
      </p>
      <p>
        Grâce à des initiatives au plus proche des citoyens, les bénévoles
        Shifters diffusent les idées et travaux du think tank : fresques de la
        mobilité, ateliers locaux, festival de cinéma, universités d’été, etc.
      </p>
    </div>
  </div>
  <div class="organisation">
    <img src="/the-shift-project/the-shiftproject.png" alt="le shift project" />
    <div class="organisation-description">
      <p>
        Les Shifters est le réseau de 10 000 bénévoles associé à The Shift
        Project. Ses bénévoles sont portés par le même intérêt, libérer nos
        sociétés de la contrainte carbone.
      </p>
      <p>
        Pour appuyer la mission groupe de réflexion, les bénévoles s’informent,
        débattent et se forment à la décarbonation de l’économie.
      </p>
      <p>
        Grâce à des initiatives au plus proche des citoyens, les bénévoles
        Shifters diffusent les idées et travaux du think tank : fresques de la
        mobilité, ateliers locaux, festival de cinéma, universités d’été, etc.
      </p>
    </div>
  </div>
</Container>

<style>
  .organisation {
    display: flex;
    flex-direction: row;
    gap: 40px;
    align-items: center;
    flex-wrap: wrap;
  }
  .organisation-description {
    flex: 1;
    min-width: 250px;
  }
</style>
