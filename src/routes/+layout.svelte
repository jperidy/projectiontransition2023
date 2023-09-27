<script>
  import Nav from "./../components/nav/Nav.svelte";
  import "../mains.min.css";
  import Footer from "./../components/footer/Footer.svelte";
</script>

<svelte:head>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
    crossorigin="anonymous"
  >
  </script>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
  />
  <link rel="icon" type="image/png" href="/favicon_48x48.png" sizes="48x48" />
  <link rel="icon" type="image/png" href="/favicon_64x64.png" sizes="64x64" />
  <link rel="icon" type="image/png" href="/favicon_96x96.png" sizes="96x96" />
  <link
    rel="icon"
    type="image/png"
    href="/favicon_128x128.png"
    sizes="128x128"
  />
  <link
    rel="icon"
    type="image/png"
    href="/favicon_196x196.png"
    sizes="196x196"
  />
</svelte:head>

<div id="up" />

<main>
  <Nav />
  <div class="m-0">
    <!-- <div class="overlay">
      <div class="warning bg-tangerine px-3 py-3 text-center rounded">
        <h1>
          Le festival revient du 17 au 19 novembre 2023 à Paris, Angers,
          Toulouse, Lyon et Bruxelles ! Toutes les informations seront
          disponibles ici prochainement.<br />
        </h1>
        <p class="contact mt-3">
          Pour toute question :
          <a href="mail:contact@projectiontransition.fr"
            >contact@projectiontransition.fr</a
          >
        </p>
      </div>
    </div> -->
    <slot />
  </div>
</main>

<footer>
  <Footer />
</footer>

<style>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.6);
    z-index: 10;
  }

  .warning {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 8px 8px 10px rgba(255, 255, 255, 0.4);
  }

  .contact {
    font-size: 20px;
  }

  a {
    color: white;
  }
</style>
