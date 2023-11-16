<script lang="ts">
   import { TableCell } from ".";
   import { rendermap } from "./renderUtil";
   import type {
      Tokens
   } from 'marked'
   export let token : Tokens.Table;
</script>

<table>
   {#if token.header}
   <thead>
      
      {#each token.header as h, i}
         <TableCell token={h} align={token.align[i]} isEvenRow={true} isHeader={true}/>
      {/each}      
   </thead>
   {/if}
   
   {#each token.rows as row, rowId}
      <tr>   
         {#each row as cell, ColId}
            <TableCell token={cell} align={token.align[ColId]} isEvenRow={rowId % 2 == 0}  isHeader={false}/>
         {/each}
      </tr>
   {/each}

</table>
<style>
   table {
      border-spacing: 0.2rem;
   }
</style>