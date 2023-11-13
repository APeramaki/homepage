<script lang="ts">
   import type {
      Tokens,
   } from 'marked'

   export let token : Tokens.Strong;
</script>

   <strong>
      {#each token.text.split('\n') as r}
         {r}
      {/each}
   </strong>

<style>

</style>
