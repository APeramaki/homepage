<script lang="ts">
   import { rendermap } from "./renderUtil";
   import type {
      Tokens
   } from 'marked'
   
   export let token : Tokens.Paragraph;

</script>
   <p>
      {#if token.tokens }
         {#each token.tokens as t }
            {#if t.type === "paragraph"}
               <svelte:self token={t}/>
            {:else if t.type !== "text"}
               <svelte:component this={rendermap.get(t.type)} token={t}/>
            {:else}
               {t.text}
            {/if}
         {/each}
      {/if}
   </p>

