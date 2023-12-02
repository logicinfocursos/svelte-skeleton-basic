<script>
  import PortfolioCard from "./PortfolioCard.svelte";
  import PortfolioPagination from "./PortfolioPagination.svelte";
  import portfolio from "../../db/portfolio/portifolio.json";

  let _portfolio = portfolio;
  export let title,
    subtitle,
    pagination,
    numItems = 0;

  if (numItems && numItems > 0) _portfolio = portfolio.slice(0, numItems);

  _portfolio = _portfolio.filter((p) => p.status === 1);

  console.log("_portfolio", _portfolio);
</script>

<div>
  {#if title}
    <h1 class="my-4">{title}</h1>
  {/if}

  {#if subtitle}
    <h6 class="my-4">{subtitle}</h6>
  {/if}

  <div class="row">
    {#each _portfolio as item}
      <PortfolioCard {item} />
    {/each}
  </div>

  {#if pagination}
    <PortfolioPagination />
  {/if}
</div>
