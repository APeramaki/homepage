<script lang="ts">
   import { rendermap } from "./renderUtil";
   import type {
      Tokens
   } from 'marked'
   export let token : Tokens.Heading;

</script>
   <svelte:element this={`h${token.depth}`}>
      {#if token.tokens}
         {#each token.tokens as t}
            <svelte:component this={rendermap.get(t.type)} token={t}/>
         {/each}
      {/if}
   </svelte:element>

<style>
   h1 {
      color: var(--text);
   }
   h2 {
      color: var(--text);
   }
   h3, h4, h5, h6 {
      color: var(--text)
   }
</style>