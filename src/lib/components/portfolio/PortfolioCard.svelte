<script>

    export let item

    const { id, code, name, overview, categorycode, image, status } = item

    const gotoPorfolioDetails = (code) => {
    window.location.href = `/portfolio/${code}`;
  };


</script>

{ #if status === 1 }
    
<div class="col-lg-3 mb-4">
    <div class="card h-100">
        <button type="button" on:click={()=>gotoPorfolioDetails(code)}>
            <img 
                class="img-fluid" 
                src={ image } 
                alt={ `imagem do portifólio: ${ name }` } 
                title={ `imagem do portifólio: ${ name }` }
            >
        </button>
        <div class="card-body">
            <h4 class="card-title">
                <a href={ code }>{ name }</a>
            </h4>
            <p class="card-text">{ overview }</p>
        </div>
    </div>
</div>

{ /if }