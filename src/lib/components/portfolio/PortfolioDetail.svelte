<script>

    export let item
 
     const { id, code, name, overview, categorycode, image, status } = item
 
 </script>



{ #if item }

    <div class="row">
        
        <div class="col-md-8">
            <img class="img-fluidx" src={ image } alt={ `imagem do portifólio: ${name}`} title={ `imagem do portifólio: ${name}`}  style="max-width: 350px; max-height: 400px">
        </div>

        <div class="col-md-4">
            <h3 class="my-3">{ name }</h3>
            <p>{ overview }</p>
            <h3 class="my-3">Project Details</h3>
            <ul>
            <li>Lorem Ipsum</li>
            <li>Dolor Sit Amet</li>
            <li>Consectetur</li>
            <li>Adipiscing Elit</li>
            </ul>
        </div>

    </div>

{ /if }