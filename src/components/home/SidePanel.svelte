<script>
  /**
   * @type {string}
   */
  export let description;
  /**
   * @type {string}
   */
  export let author;
  /**
   * @type {string}
   */
  export let authorDescription;
</script>

<div
  class="d-none d-lg-flex flex-column border-top border-bottom border-2 border-white py-2 align-items-center side-panel"
>
  <img src={`home/guillemet-up.png`} alt="guillement haut" class="img-fluid" />
  <div class="text-center py-2 fw-bold fst-italic">{description}</div>
  <img src={`home/guillemet-down.png`} alt="guillement bas" class="img-fluid" />
  <div class="text-center py-2 fst-italic">
    {author}<br />{authorDescription}
  </div>
</div>

<style>
  .side-panel {
    min-width: 210px;
    max-width: 210px;
  }
  img {
    max-width: 40px;
  }
</style>
