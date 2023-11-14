<script lang="ts">
   import type {
      Tokens,
   } from 'marked'
   
   export let token : Tokens.Codespan;
</script>

   <pre><code>{#each token.text.split('\n') as r}{r}<br>{/each}</code></pre>

<style>
   pre {
      background-color: var(--bg-2);
      width: min(100%, 520px);
      border-radius: 9px;
      font: var(--font-mono);
      line-height: 75%;
   }
</style>
