<script>
  export let product;

  const { id, code, name, url, status, price, pricepromo, badge, images } =
  product;
  const _price = pricepromo > 0 && pricepromo < price ? pricepromo : price;

  let _productMainImage =
    "https://logicinfo.com.br/myshop/assets/products/images/noimage.jpg";

  _productMainImage =
    product && product.images && product.images[0] && product.images[0].url
      ? product.images[0].url
      : _productMainImage;

  const handleClick = (code) => {
    window.location.href = `/products/${code}`;
  };
</script>

{#if status === 1}
  <div class="col mb-5">
    <div class="card h-100">
      <button on:click={() => handleClick(code)} class="btn btn-link">
        {#if badge}
          <div
            class={`badge bg-${
              badge === "lkd"
                ? "success"
                : badge === "promo"
                  ? "danger"
                  : "dark"
            } text-white position-absolute`}
            style="top: 0.5rem; right: 0.5rem"
          >
            {badge}
          </div>
        {/if}

        <img
          class="card-img-top"
          src={_productMainImage}
          alt={`imagem do portifólio (${name})`}
          title={`imagem do portifólio (${name})`}
        />

        <div class="card-body p-4">
          <div class="text-center">
            <h5 class="fw-bolder">{name}</h5>

            {#if pricepromo !== 0 && pricepromo < price}
              <span class="text-muted text-decoration-line-through"
                >R$ {price}</span
              >
            {/if}

            <h5 class="fw-bolder">R$ {_price}</h5>
          </div>
        </div>
      </button>

      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center">
          <button
            class="btn btn-outline-dark mt-auto"
            on:click={() => alert("item enviado para o carrinho!")}
            >comprar</button
          >
        </div>
      </div>
    </div>
  </div>
{/if}
