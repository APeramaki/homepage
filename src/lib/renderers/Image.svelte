<script lang="ts">
   import type {
      Tokens,
   } from 'marked'

   export let token : Tokens.Image;
</script>
   <img src={token.href} alt={token.text}/>

<style>

</style>
