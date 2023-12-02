<script>
  import menuItems from "../../db/navbar/menuItems.json"
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <a class="navbar-brand" href="/">SVELTE SKELETON</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ms-auto">
        {#each menuItems as { title, href, status }}
          {#if status === 1}
            <li class="nav-item active">
              <a class="nav-link" {href}>{title}</a>
            </li>
          {/if}
        {/each}
      </ul>
    </div>
  </div>
</nav>
