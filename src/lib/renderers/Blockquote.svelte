<script lang="ts">
   import { rendermap } from "./renderUtil";
   import type {
      Tokens,
   } from 'marked'
   
   export let token : Tokens.Blockquote;
</script>
   <div class="quote-container">
      <div class="side"></div>
      <div>
         {#each token.tokens as t }
            <svelte:component this={rendermap.get(t.type)} token={t}/>   
         {/each}
      </div>
   </div>
<style>
   div {
      border-radius: 7px;
      background-color: var(--bg-3);
   }
   div .side {
      background-color: var(--bg-2);
      width: 4rem;
      height: 100%;
      border-radius: 0px 0px 0 0px;
      overflow: hidden;
   }
   .quote-container {
      display: grid;
      grid-template-columns: 4rem 1fr;
      grid-gap: 0;
   }
</style>
