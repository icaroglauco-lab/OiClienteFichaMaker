<script lang="ts">
  import SingleSection from './SingleSection.svelte';

   export let struct;
</script>

{#each Object.keys(struct) as sessão}
   <SingleSection data={struct} section={sessão}></SingleSection>
{/each}

<style lang="sass">
</style>

