<script lang="ts">
   import type { Tokens } from 'marked'
   import { codeToThemedTokens, themeBgColor, themeFgColor } from "$lib/shiki";
   import type { FontStyle, IThemedToken } from 'shiki';
   export let token : Tokens.Code;

   let themedTokens: IThemedToken[][]
   $: toThemedTokens = (token: Tokens.Code) => {
      const tt = codeToThemedTokens(token.text, token.lang)
      console.log(tt);
      return tt;
   }

</script>
<pre style='--data-bg:{themeBgColor()}; --data-fg:{themeFgColor()}'><code>{#each toThemedTokens(token) as row}<span class="line">{#each row as item}<span style="color: {item.color};font-style: {item.fontStyle === 0 ? "" : item.fontStyle == 2 ? "bold": "italic" }">{item.content}</span>{/each}
</span>{/each}</code></pre>
<style>
   span.line::before {
      content: counter(rownum)". |";
      color: var(--subtle);
      width: 3rem;
      position: relative;
      right: 1rem;
      display: inline-block;
      text-align: right;
   }
   span.line {
      margin-left: 0.75rem;
      counter-increment: rownum 1;
   }
   pre {
      counter-reset: rownum 0;
      background-color: var(--data-bg);
      color: var(--data-fg);
      width: min(100%, 720px);
      padding: 2px;
      border-radius: 4px;
      font: var(--font-mono);
      line-height: 1.25;
   }
</style>
