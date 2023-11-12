<script lang="ts">
   import type {
      Tokens,
   } from 'marked'

   export let token : Tokens.Em;
</script>

   <i>
      {#each token.text.split('\n') as r}
         {r}<br>
      {/each}
   </i>

<style>

</style>