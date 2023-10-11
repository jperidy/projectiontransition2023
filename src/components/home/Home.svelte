<script>
  import CustomLayout from "../CustomLayout.svelte";
  import FilmSummary from "../films/FilmSummary.svelte";
  import SidePanel from "./SidePanel.svelte";
</script>

<CustomLayout>
  <div class="d-flex justify-content-center align-items-center py-3 mt-5">
    <SidePanel
      description="Pouvons-nous faire autre chose qu'utiliser le cinéma, cette arme d'émotion massive, pour réveiller les consciences et bousculer les indifférences ? Je ne l'imagine pas."
      author="Vincent Lindon,"
      authorDescription="discours d'ouverture du Festival de Cannes 2022"
    />
    <div class="text-center px-lg-5 content">
      <h1 class="text-primary">Ouvrir le débat écologique via le cinéma</h1>
      <p>
        Projection Transition le festival de ciné-débat autour de la transition
        écologique organisé par Les Shifters, association de bénévoles du Shift
        Project, fait son grand retour du 17 au 19 novembre prochains. A travers
        films et débats, les festivaliers sont invités à se créer leur propre
        récit plein d'espoir et de nouveaux repères et imaginaires.
      </p>
      <img src="home/feuille-jaune.png" alt="" class="img-fluid petale my-4" />
      <h1 class="text-primary">Un monde à rebâtir</h1>
      <p>
        Face à la multiplication des crises, la tentation est grande de perdre
        espoir et de se sentir impuissant. En adaptant nos modes de vie, nous
        pouvons changer le cours des choses, mais pour y parvenir, nous devons
        mobiliser la société toute entière. <strong
          >C'est ensemble que nous pouvons relever le défi de la reconstruction
          écologique et sociale de nos sociétés. C'est ensemble que nous devons
          imaginer, réinventer et réenchanter le monde que nous partagerons
          demain.</strong
        >
      </p>
      <p>
        Pour nous aider à nous projeter dans cet avenir, nous avons besoin
        d'histoires qui nourrissent notre imagination. Le cinéma possède un
        pouvoir évocateur exceptionnel et une capacité à susciter des questions,
        à mobiliser et à inspirer qui sont plus nécessaires que jamais pour
        accompagner cet élan. C'est pourquoi Projection Transition s'engage à
        semer les graines de l'action collective, de la réflexion commune et de
        la vie en communauté. <strong
          >Les solutions existent, et l'avenir dépend de notre capacité à
          coopérer vers ce monde en commun.</strong
        >
      </p>
      <!-- <iframe
        width="848"
        height="476"
        src="https://www.youtube.com/embed/8jyFzkIz86g"
        title="Projection Transition - 2è édition - Bande-annonce officielle (2021)"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      /> -->
    </div>
    <SidePanel
      description="Depuis toujours le cinéma s'est emparé de thèmes de société, et, pour une partie c'est une question environnementale qui était au centre de l'intrigue (...) Venez nombreux !"
      author="Jean-Marc Jancovici,"
      authorDescription="Président du Shift Project"
    />
  </div>
</CustomLayout>

<FilmSummary />

<style>
  .content {
    max-width: 992px;
  }
  .petale {
    width: 32px;
  }

  iframe {
    max-width: 100%;
  }
</style>
