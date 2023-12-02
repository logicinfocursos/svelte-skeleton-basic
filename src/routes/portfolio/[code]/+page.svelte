<script>
  import { page } from "$app/stores";
  import Breadcrumb from "../../../lib/components/layout/breadcrumb.svelte";

  import PortfolioDetail from "../../../lib/components/portfolio/PortfolioDetail.svelte";
  import PortfolioList from "../../../lib/components/portfolio/PortfolioList.svelte";
  import portfolio from "../../../lib/db/portfolio/portifolio.json";

  const item = portfolio.filter((p) => p.code == $page.params.code)[0];

  if(!item) window.location.href = "/notfound"

</script>

{#if item}
  <section class="container">
    <Breadcrumb currentPage={`detalhes do projeto: ${item.name}`} />

    <h1 class="my-4">Detalhes do projeto</h1>

    <PortfolioDetail {item} />

    <PortfolioList title="outros projetos" numItems={4} />
  </section>
{/if}
