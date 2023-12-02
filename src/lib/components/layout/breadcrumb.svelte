<script>
export let currentPage, previusPage, previusPageLink
</script>
<br/>
<nav aria-label="breadcrumb">
    <ol class="breadcrumb mt-5">
      <li class="breadcrumb-item"><a href="/">home</a></li>
      {#if previusPage && previusPageLink}
      <li class="breadcrumb-item"><a href={previusPageLink}>{previusPage}</a></li>
      {/if}
      <li class="breadcrumb-item active" aria-current="page">{currentPage}</li>
    </ol>
  </nav>