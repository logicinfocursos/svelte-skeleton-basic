<script>
  export let title=null, subtitle=null, numItems=0, pagination=null;

  import { onMount } from "svelte";

  import ProductCard from "./ProductCard.svelte";
  import ProductsPagination from "./ProductsPagination.svelte";

  let products = [];

  onMount(async () => {
    const res = await fetch(`http://localhost:3005/products`);
    products = await res.json();

    products = await products.filter((p) => p.status === 1);

    if (numItems && numItems > 0) products = await products.slice(0, numItems+1);
  });
</script>

<section class="py-5">

  {#if title}
  <h1>{title}</h1>
  {/if}

  {#if subtitle}
  <h6>{subtitle}</h6>
  {/if}

  <div class="container px-4 px-lg-5 mt-5">
    <div
      class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
    >
      {#each products as item}
        <ProductCard product={item} />
      {/each}
    </div>
  </div>

  {#if pagination}
  <ProductsPagination />
  {/if}
</section>
