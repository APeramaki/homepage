<script lang="ts">
   import type {
      Tokens,
   } from 'marked'
   
   export let token : Tokens.Codespan;
</script>

   <div>
      {#each token.text.split('\n') as r}
         {r}<br>
      {/each}
   </div>

<style>
   div {
      background-color: var(--bg-2);
      width: min(100%, 520px);
      border-radius: 9px;
   }
</style>