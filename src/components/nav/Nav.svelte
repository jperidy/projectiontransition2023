<script>
  import { menu } from "../../config/menu";
  import { socialNetworks } from "../../config/social-networks";

  const handleNavBarClick = () => {
    const collapse = document.getElementsByClassName("navbar-collapse");
    if (collapse[0]) {
      collapse[0].classList.remove("show");
    }
  };
</script>

<nav class="navbar fixed-top navbar-expand-xl navbar-light bg-white">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img
        class="img-fluid"
        style="max-width: 20vh; height:auto;"
        src="/logo/Logo_Principal.jpg"
        alt="Retour à la page d'accueil"
      />
    </a>
    <div class="mx-auto d-none d-lg-flex align-items-center">
      {#each socialNetworks as item}
        <div class="fw-bold">
          <a class="" target={item.target} href={item.redirect}>
            <img
              style="max-width: 7vh;height: auto;"
              src={item.icon}
              alt={item.alt}
            />
          </a>
        </div>
      {/each}
    </div>
    <button
      class="navbar-toggler border-0"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto align-items-center">
        {#each menu as item, ind}
          <li class="nav-item active">
            <a
              class={`nav-link ${
                ind === menu.length - 1 ? "text-outremer" : "text-outremer mx-1"
              }`}
              href={item.url}
              style="font-family: Roboto-Regular;font-size: 1.2rem;font-weight: bold;"
              aria-current="page"
              on:click={() => handleNavBarClick()}>{item.name.toString()}</a
            >
          </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>

<style>
  .nav-item:last-child {
    background-color: #3c3f78;
    border-radius: 8px;
    color: white;
  }
  .nav-item:last-child a {
    color: white !important;
    padding: 4px 8px !important;
  }
  .navbar-toggler {
    filter: invert(1);
  }
</style>
