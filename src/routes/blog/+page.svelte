<script lang="ts">
   import { marked } from 'marked';
   import type { TokensList } from "marked";
   import Markup from '$lib/Markup.svelte';

   $: text = '# Marked in Node.js\n\nRendered by **marked**.\n\n ```js\nlet i = 0;\n```'
   let html : TokensList;

   $: if(text) {
      const tokens : TokensList = marked.lexer(text, {gfm: true});
      html = tokens;
   }

</script>
<textarea bind:value={text}/>
<div>
   
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
