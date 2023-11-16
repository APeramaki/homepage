<script lang="ts">
   import { rendermap } from "./renderUtil";
   import type {
      Tokens
   } from 'marked'
   export let token : Tokens.Text;
</script>
{#if token.tokens}
   {#each token.tokens as t}
      <svelte:component this={rendermap.get(t.type)} token={t}/>
   {/each}
{:else}
   {token.text}
{/if}

<style>

</style>