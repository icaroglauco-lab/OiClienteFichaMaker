<script lang="ts">
  import { Button, Icon } from 'svelte-mui';

   export let digested;
</script>

<Button color='#000' type='submit' id="wp-send-button" on:click="{(event) => {event.preventDefault(); window.open(`whatsapp://send?text=${digested}`)}}" data-action="share/whatsapp/share">
      Enviar para Whatsapp
      <!-- right icon -->
      <Icon path="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" style="margin: 0 -4px 0 8px;" />
    </Button>

<style lang="sass">
  :global(#wp-send-button)
    position: fixed
    bottom: 10px
    left: 50%
    width: 270px
    transform: translateX(-50%) scale(1)
    transition: transform 250ms
    &:hover
      transform: translateX(-50%) scale(1.05)
  :global(#wp-send-button::before)
    background-color: #64ada5
    opacity: 0.4

</style>

