<script lang=ts>
   import { onMount } from 'svelte';
   import init, { sum, product } from '$lib/wasm/rust';

   onMount( () => {
      init().then(() => {
      console.log('init wasm-pack');
      let arr = new Float64Array([0.2, 0.1]);
      console.log(sum(arr));
      console.log(product(arr));

   });
   })
   
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<style>
   h1 {
      color: var(--text);
   }
</style>