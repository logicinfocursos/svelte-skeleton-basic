<script>
  import Footer from "../lib/components/layout/footer.svelte";
  import Header from "../lib/components/layout/header.svelte";
</script>

<div class="container mt-5 mb-5">

  <Header />

  <slot />
  
</div>

<Footer />
