<script lang="ts">
   import { marked } from 'marked';
   import type { TokensList } from "marked";
   import Markup from '$lib/Markup.svelte';
   import type { PageData } from './$types';
   
   export let data : PageData
   let html : TokensList;

   $: if(data.article) {
      const tokens : TokensList = marked.lexer(data.article, {gfm: true});
      html = tokens;
   }

</script>
<div>
   <h1>{data.title}</h1>
   {#if html}
      {#each html as el}
            <Markup token={el}/>           
      {/each}
   {/if}
</div>
<style>
   div {
      background-color: var(--surface);
      padding: 1rem;
      margin: 1rem;
   }
</style>
