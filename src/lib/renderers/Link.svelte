<script lang="ts">
   import {rendermap} from './renderUtil'
   import type {
      Tokens,
   } from 'marked'

   export let token : Tokens.Link;
</script>

   <a href={token.href} title={token.title}>
      {#each token.tokens as t }
         <svelte:component this={rendermap.get(t.type)} token={t} />   
      {/each}
   </a>

<style>
   a {
      color: var(--link);
   }
   a:hover {
      color: var(--link-hover);
   }
   a:active {
      color: var(--link-active);
   }
</style>
