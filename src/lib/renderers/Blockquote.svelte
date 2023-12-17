<script lang="ts">
   import { rendermap } from "./renderUtil";
   import type {
      Tokens,
   } from 'marked'
   
   export let token : Tokens.Blockquote;
</script>
   
   <div class="side">
      <div class="main">
         {#each token.tokens as t }
            <svelte:component this={rendermap.get(t.type)} token={t}/>   
         {/each}
      </div>
   </div>

<style>
   div.side {
      border-radius: 7px;
      background-color: var(--highlight-med);
      width: 100%;
      height: 100%;
      overflow: hidden;
   }
   .main {
      border-radius: 0px 7px 7px 0px;
      background-color: var(--overlay);
      padding-left: 1rem;
      margin-left: 0.25rem;
      width: 100%;
      height: 100%;
   }

</style>
