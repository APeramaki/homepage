<script lang="ts">
   import { rendermap } from "./renderUtil";
   import type {
      Tokens,
   } from 'marked'
   
   export let token : Tokens.List;
   const t = token.start;
   function getStart() {
      console.log(token.start);
      return token.start;
   }
</script>
   
   <svelte:element this={token.ordered ? 'ol' : 'ul' } data-start="{getStart()}">
      {#each token.items as t, i }
         <svelte:component this={rendermap.get(t.type)} token={t} index={token.start ? token.start + i : ""} />   
      {/each}
   </svelte:element>

<style>
   ul {
      list-style-type: none;
   }
   ul, ol {
      list-style-type: none;
      list-style-position: inside;
   }

</style>
