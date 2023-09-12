<script>
  import Container from "../../ui/Container.svelte";
  import Title from "../../ui/Title.svelte";
</script>

<Container>
  <Title>L'édito</Title>
  <div class="content">
    <div class="column">
      <p>
        Les récits et le cinéma jouent un rôle majeur dans nos conceptions du
        monde et nos sensibilités. En nous projetant dans d’autres univers que
        le nôtre, ils façonnent nos identités collectives, nos désirs, notre
        rapport aux autres, à ce qui nous entoure ; ils dessinent aussi les
        limites de nos imaginaires. Nous sommes convaincu.e.s que pour
        transformer le monde, il faut d’abord construire de nouveaux repères et
        imaginaires, afin que chacun.e puisse créer son propre récit plein
        d’espoir.
      </p>
      <p>
        Plus que jamais, l’urgence de la crise climatique qui nous touche toutes
        et tous rend nécessaire un changement de paradigme. L’enjeu est immense
        et les transformations nécessaires innombrables. Il nous faut repenser
        nos utopies, imaginer ensemble d’autres modèles dans lesquels la
        consommation et la domination perdraient leurs suprématies. Il nous faut
        voir le monde et les êtres vivants qui le composent sous un nouveau
        jour, à commencer par les êtres humains qui nous entourent.
      </p>
      <p>
        Ainsi, en 2020 nous* avons créé le festival de ciné-débat Projection
        Transition avec la volonté de mobiliser un large public autour de la
        transition écologique grâce au pouvoir évocateur du cinéma. Notre
        ambition ? Rassembler des spectateurs.trices de tout horizon autour de
        récits qui forgent notre culture commune.
      </p>
    </div>
    <div class="column">
      <p>
        Les projections de films sont suivies de réflexions approfondies portant
        sur notre système de société et les transformations à opérer
        collectivement. Lors de ces débats, les intervenants sont invités à
        questionner les modèles de pensée proposés par les films et à dialoguer
        avec le public autour d’autres modèles possibles. Nous accueillons des
        intervenants et des partenaires de sensibilités diverses tout en
        maintenant une ligne éditoriale totalement indépendante.
      </p>
      <p>
        Nous sommes également convaincus que la jeunesse doit avoir sa place
        dans cette démarche collective, c’est pourquoi nous invitons des classes
        de lycée au festival et organisons avec leurs professeurs des ateliers
        pédagogiques qui permettent d’amorcer la réflexion avant l’évènement.
      </p>
      <p>
        Venez découvrir le festival avec votre entourage, vous serez
        transporté.e.s par des films passionnants, et probablement intrigué.e.s,
        captivé.e.s , inspiré.e.s ou consterné.e.s par les débats qui suivent.
        Nous sommes impatient.e.s de vous voir et de vous entendre.
      </p>
      <p>Mobilisons-nous !</p>
      <p>
        <i
          >*Le festival est organisé par des bénévoles engagés de l’association
          « The Shifters ».</i
        >
      </p>
    </div>
  </div>
</Container>

<style>
  .content {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
  }
  .column {
    flex: 1;
    min-width: 400px;
    text-align: justify;
  }
</style>
