<script lang="ts">
  import SendButton from './SendButton.svelte';

  import FormFields from './FormFields.svelte';

  import YAML from 'yaml'

  import {formStruct} from './construct';

  
  // digest form
  const digest = (formStruct:object) => {
    const remapped = Object.keys(formStruct).map( sessaoKey => 
      Object.keys(formStruct[sessaoKey]).map(fieldKey => {

        let resolved = formStruct[sessaoKey][fieldKey].choice;
        
        if(typeof formStruct[sessaoKey][fieldKey].choice === "string" ||
           typeof formStruct[sessaoKey][fieldKey].choice === "boolean")
          resolved +=  "%0a";
        
        if(typeof formStruct[sessaoKey][fieldKey].choice === "object"){
          resolved = Object.keys(formStruct[sessaoKey][fieldKey].choice)
            .filter(d => {
              console.log(formStruct[sessaoKey][fieldKey].choice[d])
              return formStruct[sessaoKey][fieldKey].choice[d] == true
            })
            .map( d => 
              `${d}: ${formStruct[sessaoKey][fieldKey].choice[d]}%0a`
            );
        }
        
        return {[fieldKey]: resolved } 
      })
    );

    let rewritten = YAML.stringify(remapped)
    .split("\"").join("")
    .split("false").join("[  ]")
    .split("true").join("[X]")
    .split("[]").join("[  ]")
    .split("-").join("");

    return rewritten;
  }

  $: digested = digest(formStruct);



</script>

<div class="wrapper">
  <form onsubmit="event.preventDefault();">

    <FormFields struct={formStruct}></FormFields>

    <SendButton digested={digested}></SendButton>

  </form>
</div>


<style lang="sass">
  form
    display: flex
    flex-direction: column
    grid-gap: 20px
    min-height: 100vh
    padding-bottom: 12vh
</style>
