<script lang="ts">
   import { rendermap } from "./renderUtil";
   import type {
      Tokens,
   } from 'marked'

   export let token : Tokens.ListItem;
   export let index : Number | "";
   const t = token;
   
</script>
   <li>
      {#if token.task}
         <span>{token.checked ? '🗹' : '☐'}</span>
      {:else}
         <span>{index ? `${index}. ` : "⬤ "}</span>
      {/if}
      {#each token.tokens as t}
         <svelte:component this={rendermap.get(t.type)} token={t}/>
      {/each}
      
   </li>
   

<style>
   ul li span, ol li span {
      display: inline-block;
      color: var(--text);
      width: 1.2em;
      height: 1.2em;
   }

</style>
