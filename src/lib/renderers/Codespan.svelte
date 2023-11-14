<script lang="ts">
   import type {
      Tokens,
   } from 'marked'
   
   export let token : Tokens.Codespan;
</script>

   <pre><code>{#each token.text.split('\n') as r}{r}<br>{/each}</code></pre>

<style>
   pre {
      background-color: var(--bg-2);;
      width: fit-content;
      padding: 1px;
      border-radius: 4px;
      font: var(--font-mono);
      line-height: 75%;
   }
</style>
