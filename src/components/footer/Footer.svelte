<script>
  import { goto } from "$app/navigation";
  import { bottomMenu } from "../../config/footer";
  import { socialNetworks } from "../../config/social-networks";
</script>

<!-- display the footer -->
<div class="row bg-white text-dark align-items-center">
  <div
    class="row bg-white text-dark align-items-center px-3 py-2"
    style="min-height:15vh;"
  >
    <div class="col-3 text-start">
      <a href="#up">
        <img
          class="img-fluid mx-2"
          src="/logo/Logo_Principal.jpg"
          alt="Lien vers le haut de la page"
          style="width: 100%; max-width:130px;"
        />
      </a>
    </div>
    <div class="col-6 text-center">
      <div class="row align-items-center">
        <div class="col text-center">
          {#each bottomMenu as item, position}
            <a
              class="mx-3 fw-bold text-outremer"
              style="font-size:1rem;text-decoration:none;"
              href={item.url}>{item.name}</a
            >
            {#if position < bottomMenu.length - 1}
              <span class="fw-bold" style="font-size:1rem;cursor:pointer;"
                >|</span
              >
            {/if}
          {/each}
        </div>
      </div>
    </div>
    <div class="col-3 text-center">
      <div class="row my-1">
        <div class="col text-center" style="font-size:1.4rem">
          {#each socialNetworks as item}
            <span class="fw-bold">
              <a class="" target={item.target} href={item.redirect}>
                <img
                  class=""
                  style="max-width: 7vh;height: auto;"
                  src={item.icon}
                  alt={item.alt}
                />
              </a>
            </span>
          {/each}
        </div>
      </div>
    </div>
  </div>

  <div class="row align-items-center my-1" style="">
    <div class="col text-center">
      <span class="mx-3" style="font-size:1rem;"
        >©2023 - Projection Transition</span
      >
    </div>
  </div>
</div>
