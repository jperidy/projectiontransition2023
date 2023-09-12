<div class="container">
  <slot />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-top: 56px;
    align-items: center;
    max-width: 1000px;
  }
</style>
