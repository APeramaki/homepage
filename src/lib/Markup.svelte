<script lang="ts">
   import {rendermap} from './renderers/renderUtil'
   import type { Token } from "marked";

   export let token : Token;   
   
</script>
   <svelte:component this={rendermap.get(token.type)} {token}/>
<style>

</style>