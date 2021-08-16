<script lang="ts">
  import YAML from 'yaml'

  type TCampo = {
    choice: Array<string|number> | string | {} | boolean
    requerido?: boolean | true
  }

  var formStruct = {
    "dados cliente": {
      "CONSULTOR(A)" : <TCampo>{
        choice: "", 
      },
      "SUPERVISOR(A)" : <TCampo>{
        choice: "", 
      },
      "NOME" : <TCampo>{
        choice: "", 
      },
      "CPF/CNPJ" : <TCampo>{
        choice: "", 
      },
      "RG" : <TCampo>{
        choice: "", 
      },
      "ÓRGÃO EMISSOR" : <TCampo>{
        choice: "", 
      },
      "NATURALIDADE" : <TCampo>{
        choice: "", 
      },
      "NASCIMENTO" : <TCampo>{
        choice: "", 
      },
      "NOME DA MÃE" : <TCampo>{
        choice: "", 
      },
      "ENDEREÇO" : <TCampo>{
        choice: "", 
      },
      "NÚMERO" : <TCampo>{
        choice: "", 
      },
      "NOME DO BLOCO DE PRÉDIO (SE APLICAR)": <TCampo>{
        choice: "",
        requerido: false
      },
      "NÚMERO DE APARTAMENTO (SE APLICAR)": <TCampo>{
        choice: "",
        requerido: false
      },
      "CEP" : <TCampo>{
        choice: "", 
      },
      "CDOE" : <TCampo>{
        choice: "", 
      },
      "BAIRRO" : <TCampo>{
        choice: "", 
      },
      "PONTO REFERENCIA" : <TCampo>{
        choice: "", 
      },
      "CIDADE" : <TCampo>{
        choice: "", 
      },
      "E-MAIL" : <TCampo>{
        choice: "", 
      },
      "WHATSAPP/DDD" : <TCampo>{
        choice: "", 
      },
      "TELEFONE1/DDD" : <TCampo>{
        choice: "", 
      },
      "TELEFONE2/DDD" : <TCampo>{
        choice: "", 
      },
    },
    "venda" : {
      "VENDA NOVA" : <TCampo>{
        choice: false, 
      },
      "PORTABILIDADE": <TCampo>{
        choice: false,
      }, 
      "FIXO/OPERADORA DDD" : <TCampo>{
        choice: "", 
      },
      "MIGRAÇÃO": <TCampo>{
        choice: false
      },
      "OIFIXO DDD" : <TCampo>{
        choice: "", 
      },
      "COBRANÇA EM DÉBITO " : <TCampo>{
        choice: "", 
      },
      "BANCO" : <TCampo>{
        choice: "", 
      },
      "AG" : <TCampo>{
        choice: "", 
      },
      "OPERAÇÃO" : <TCampo>{
        choice: "", 
      },
      "CONTA" : <TCampo>{
        choice: "", 
      },
      "DIGITO" : <TCampo>{
        choice: "", 
      },
      "PLANOS" : <TCampo>{
        choice: "", 
      },
      "VALOR FINAL" : <TCampo>{
        choice: "", 
      },
      "VENCIMENTO (DIA)" : <TCampo>{
        choice: {2: false,  7: false, 11: false, 16: false, 20: false, 26: false},
      },
    },
    "instalação" : {
      "PREFERÊNCIA DIA  INSTALAÇÃO" : <TCampo>{
        choice: "", 
      },
      "PERÍODO" : <TCampo>{
        choice: {
          "M": false, 
          "T": false
        }, 
      },
    },
  }

  // handle user input
  const handleInput = (sessao:string, campo:string) => (e) => {
    formStruct[sessao][campo].choice = e.target.value;
    console.log(sessao, campo, e.target.value);
  }

  
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
  $: console.log(digested);

  // utilitários
  const capitalize = function(s: string) :string{
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

</script>

<form action="">

{#each Object.keys(formStruct) as sessão}
  <h3>{capitalize(sessão)}</h3>
  {#each Object.keys(formStruct[sessão]) as campo}
    
    <label for={campo}>{campo}: </label>

    {#if typeof formStruct[sessão][campo].choice === 'object'}
      {#each Object.keys(formStruct[sessão][campo].choice) as opt}
        <label for="{campo}">{opt}</label>
        <input type="checkbox" bind:checked={formStruct[sessão][campo].choice[opt]}/>
        <br/>
      {/each}

    {:else}
        {#if typeof formStruct[sessão][campo].choice === 'boolean' }
          <input type="checkbox" bind:checked={formStruct[sessão][campo].choice}/>
        {/if}

        {#if typeof formStruct[sessão][campo].choice === 'string'}
          <input type="text" bind:value={formStruct[sessão][campo].choice}/>
        {/if}
    {/if}

    <br/>
  {/each}
  <hr/>
{/each}

<a href="whatsapp://send?text={digested}" data-action="share/whatsapp/share">
  Enviar para Whatsapp
</a>


</form>


<style lang="sass">
</style>
