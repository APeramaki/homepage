<script lang="ts">
   import { rendermap } from "./renderUtil";
   import type {
      Tokens,
   } from 'marked'

   export let token : Tokens.Strong;
</script>

   <strong>
      {#each token.tokens as t }
      {/each}
   </strong>

<style>

</style>
