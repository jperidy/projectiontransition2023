<script>
  export let color = "text-primary";
</script>

<div class="title-container">
  <h1 class={`${color} px-3 py-2`}>
    <slot />
  </h1>
</div>

<style>
  .title-container {
    display: flex;
    justify-content: center;
  }
</style>
