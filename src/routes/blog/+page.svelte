<script lang="ts">
   import { marked } from 'marked';
   import type { Token, TokensList } from "marked";
   import Markup from '$lib/Markup.svelte';
   
   $: text = '# Marked in Node.js\n\nRendered by **marked**.'
   let html : TokensList;

   $: if(text) {
      const tokens : TokensList = marked.lexer(text, {gfm: true});
      html = tokens;
   }

</script>
   <textarea bind:value={text}/>
   {#if html}
      {#each html as el}
            <Markup token={el}/>           
      {/each}
   {/if}
<style>

</style>
