# svelte-skeketon-basic
git repository: https://github.com/logicinfocursos/svelte-skeleton-basic.git


## svelte-kit
https://kit.svelte.dev/docs/creating-a-project


## svelte examples
https://svelte.dev/examples/hello-world


### Creating a project
npm create svelte@latest my-app
cd my-app
npm install
npm run dev


### svelte tutorials
https://www.youtube.com/watch?v=-EHUpl99Ua8
https://www.youtube.com/watch?v=NBHGpuWpiw4
https://www.youtube.com/watch?v=_WJUfcx4iMU
https://www.youtube.com/watch?v=1ikFumI2pXc
https://www.udemy.com/course/sveltejs-the-complete-guide/learn/lecture/14689430#overview
https://github.com/artneo7/academialocal


### bootstrap
https://getbootstrap.com/docs/5.1/getting-started/download/
https://github.com/svelte-add/bootstrap


#### startbootstrap snippets / templates
https://startbootstrap.com/template/shop-homepage


## json server
https://www.npmjs.com/package/json-server


### Install JSON Server
npm install -g json-server


### Create a db.json file with some data
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ]  
}


### Start JSON Server
json-server --watch db.json ''' irá executar na porta 3000 por padrão
json-server --watch db.json --port 3005