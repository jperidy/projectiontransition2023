<script>
  import Container from "../../ui/Container.svelte";
</script>

<Container>
  <div class="organisation">
    <img src="/the-shift-project/the-shifters.png" alt="les shifters" />
    <div class="organisation-description">
      <div>
        Les Shifters est le réseau de 25 000 bénévoles associé à The Shift
        Project. Ses bénévoles sont portés par le même intérêt : libérer nos
        sociétés de la contrainte carbone.
      </div>
      <div>
        Pour appuyer la mission du groupe de réflexion, les bénévoles
        s’informent, débattent et se forment à la décarbonation de l’économie.
      </div>
      <div>
        Grâce à des initiatives au plus proche des citoyens, les bénévoles
        Shifters diffusent les idées et travaux du think tank : fresques du
        climat, ateliers locaux, festival de cinéma, universités d’été, etc.
      </div>
    </div>
  </div>
  <div class="organisation">
    <img src="/the-shift-project/the-shiftproject.png" alt="le shift project" />
    <div class="organisation-description">
      <div>
        The Shift Project est un groupe de réflexion (ou think tank) qui œuvre
        en faveur d’une économie libérée de la contrainte carbone.
      </div>
      <div>
        Association loi 1901 reconnue d’intérêt général, sa mission est
        d’éclairer et influencer le débat sur la transition énergétique, en
        France et en Europe.
      </div>
      <div>
        Groupes de travail, analyses robustes et chiffrées, propositions
        innovantes sont autant de travaux produits par The Shift Project pour
        influencer les décideurs politiques et économiques.
      </div>
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
