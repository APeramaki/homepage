<script lang="ts">
   import { rendermap } from "./renderUtil";
   import type {
      Tokens,
   } from 'marked'

   export let token : Tokens.Strong;
</script>

   <strong>
      {#each token.tokens as t }
         <svelte:component this={rendermap.get(t.type)} token={t} />   
      {/each}
   </strong>

<style>

</style>
