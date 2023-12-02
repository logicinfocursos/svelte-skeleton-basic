<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  const code = $page.params.code;

  import ProductsList from "../../../lib/components/products/productsList.svelte";
  import Breadcrumb from "../../../lib/components/layout/breadcrumb.svelte";

  let product = [];
  let _productMainImage =
    "https://logicinfo.com.br/myshop/assets/products/images/noimage.jpg";

  let _images = [];

  onMount(async () => {
    const res = await fetch(`http://localhost:3005/products?code=${code}`);
    product = await res.json();
    product = product[0];

    if(!product) window.location.href = "/notfound"
    
    _productMainImage =
      product && product.images && product.images[0] && product.images[0].url
        ? product.images[0].url
        : _productMainImage;

    if (product && product.images)
      _images = invertImagesOrder(await product.images);
  });

  const invertImagesOrder = (images) => {
    if (!images) return null;

    let _images = images.slice(1);

    if (images[1] && images[1].url) _images.push(images[0]);

    return _images;
  };
</script>

{#if product}
  <section class="py-0">
    <div class="container px-lg-5 my-5">
      <Breadcrumb currentPage={`detalhes do produto: ${product.name}`} />

      <h1 class="my-4x">Detalhes do projeto</h1>

      <div class="row gx-4x gx-lg-5x align-items-center mt-0">
        <div class="col-md-6">
          <img
            id="mainImage"
            class="card-img-topx"
            src={`${_productMainImage}`}
            width="600"
            height="700"
            alt={`imagem do produto (${product.name})`}
            title={`imagem do produto (${product.name})`}
          />

          {#if _images}
            <div class="row text-center text-lg-start">
              {#each _images as { url }}
                <div class="col-lg-3 col-md-4 col-6">
                  <button
                    class="d-block mb-4 h-100 btn btn-link"
                    on:click={() =>
                      (document.getElementById("mainImage").src = url)}
                  >
                    <img class="img-fluid img-thumbnail" src={url} alt="" />
                  </button>
                </div>
              {/each}
            </div>
          {/if}
        </div>
        <div class="col-md-6">
          <div class="small mb-1">SKU: {product.sku && product.sku}</div>
          <h1 class="display-5 fw-bolder">{product.name && product.name}</h1>
          <div class="fs-5 mb-5">
            {#if product.pricepromo && product.pricepromo < product.price}
              <span class="text-decoration-line-through"
                >R$ {product.price}</span
              >
            {/if}
            <span
              >R$ {product.pricepromo && product.pricepromo < product.price
                ? product.pricepromo
                : product.price}</span
            >
          </div>
          <p class="lead">{product.overview && product.overview}</p>
          <div class="d-flex">
            <input
              class="form-control text-center me-3"
              id="inputQuantity"
              type="num"
              value="1"
              style="max-width: 3rem"
            />
            <button
              class="btn btn-outline-dark flex-shrink-0"
              type="button"
              on:click={() => alert("produto adicionado ao carrinho")}
            >
              <i class="bi-cart-fill me-1"></i>
              comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
{/if}

<section class="py-5 bg-light">
  <ProductsList title="produtos relacionados" subtitle="..." numItems={5} />
</section>
