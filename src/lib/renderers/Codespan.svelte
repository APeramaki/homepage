<script lang="ts">
   import { themeBgColor } from '$lib/shiki';
   import type {
      Tokens,
   } from 'marked'
   
   export let token : Tokens.Codespan;
</script>

   <pre style="background-color: {themeBgColor()}"><code>{#each token.text.split('\n') as r}{r}<br>{/each}</code></pre>

<style>
   pre {
      width: fit-content;
      padding: 1px;
      border-radius: 4px;
      font: var(--font-mono);
      line-height: 75%;
      display: inline-block;
   }
</style>
