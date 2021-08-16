<script lang="ts">
   import { Textfield, Checkbox, ExpansionPanel } from 'svelte-mui';

   export let data = {s:{}};
   export let section = "s";

   let expanded = false;
   const toggleExpand = () =>  expanded = !expanded

</script>



   <ExpansionPanel name="{section}" class="section" expand={expanded} on:click={toggleExpand}>
      {#each Object.keys(data[section]) as campo}
      
         {#if typeof data[section][campo].choice === 'object'}
            <span>{campo}</span>
            {#each Object.keys(data[section][campo].choice) as opt}
               <Checkbox class="field checkbox" bind:checked={data[section][campo].choice[opt]}>
               <span>
                  {opt}
               </span>
               </Checkbox>
      
               <br/>
            {/each}
      
         {:else}
               {#if typeof data[section][campo].choice === 'boolean' }
               <Checkbox class="field checkbox" bind:checked={data[section][campo].choice}>
                  <span>
                     {campo}
                  </span>
               </Checkbox>
               {/if}
      
               {#if typeof data[section][campo].choice === 'string'}
               <Textfield
                     class="field"
                     autocomplete="on"
                     label={campo}
                     required={data[section][campo].requerido}
                     bind:value={data[section][campo].choice}
               />
               {/if}
         {/if}
   
      {/each}
   </ExpansionPanel>
 

<style lang="sass">
   :global(.panel.section)
      display: flex
      flex-direction: column-reverse
   :global(.section .content)
      display: flex
      flex-direction: column
      grid-gap: 10px
</style>

