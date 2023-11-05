<script>
  /**
   * @type {string}
   */
  export let href;
  /**
   * @type {string}
   */
  export let text;
</script>

<div class="container">
  <div class="link-container border-primary">
    <a class="text-primary" {href} target="_blank"><h5>{text}</h5></a>
  </div>
</div>

<style>
  .container {
    display: flex;
    padding: 0;
    margin-bottom: 16px;
  }
  .link-container {
    border: 1px solid;
    padding: 4px 8px;
  }
  h5 {
    margin: 0;
  }
  a {
    text-decoration: none;
  }
</style>
