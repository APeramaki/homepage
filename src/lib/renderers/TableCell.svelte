<script lang="ts">
   import { rendermap } from "./renderUtil";
   import type {
      Tokens
   } from 'marked'
   export let token : Tokens.TableCell;
   export let align : 'center' | 'left' | 'right' | null;
   export let isHeader : boolean;
   export let isEvenRow : boolean;
</script>
{#if token}
   {#each token.tokens as t}
      <svelte:element this={isHeader ? "th" : "td"} data-rowId={isEvenRow} {align}>
         <svelte:component this={rendermap.get(t.type)} token={t}/>
      </svelte:element>
   {/each}
{/if}

<style>
   th, td {
      padding: 0.2rem 0.45rem;
   }
   th {
      background-color: var(--highlight-high);
   }
   td[data-rowId="true"] {
      background-color: var(--highlight-low);
   }
   td[data-rowId="false"] {
      background-color: var(--highligh-med);
   }
</style>