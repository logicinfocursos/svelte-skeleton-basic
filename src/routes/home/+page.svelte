<script>
  import { onMount } from "svelte";

  import ProductList from "../../lib/components/products/productsList.svelte";
</script>



<section>
  <div class="container">
    <div class="mt-4 p-5 bg-secondary text-white rounded">
      <h1>Jumbotron Example</h1>
      <p>Lorem ipsum...</p>
    </div>
  </div>

  <ProductList title="lançamentos" subtitle="tudo em promoção" numItems={8}/>

</section>
