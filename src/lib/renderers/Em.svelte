<script lang="ts">
   import { rendermap } from "./renderUtil";
   import type {
      Tokens,
   } from 'marked'

   export let token : Tokens.Em;
</script>

   <i>
      {#each token.tokens as t }
         <svelte:component this={rendermap.get(t.type)} token={t} />   
      {/each}
   </i>

<style>

</style>
