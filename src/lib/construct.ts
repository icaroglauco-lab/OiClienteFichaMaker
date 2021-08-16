type TCampo = {
   choice: Array<string|number> | string | {} | boolean
   requerido: boolean | true
 }

 export const formStruct = {
   "Dados de Cliente": {
     "NOME" : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
     "CPF/CNPJ" : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
     "RG" : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
     "ÓRGÃO EMISSOR" : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
     "NATURALIDADE" : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
     "NASCIMENTO" : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
     "NOME DA MÃE" : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
     "ENDEREÇO" : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
     "NÚMERO" : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
     "NOME DO BLOCO DE PRÉDIO (SE APLICAR)": <TCampo>{
       "requerido" : true,
       choice: "",
     },
     "NÚMERO DE APARTAMENTO (SE APLICAR)": <TCampo>{
       "requerido" : true,
       choice: "",
     },
     "CEP" : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
     "CDOE" : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
     "BAIRRO" : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
     "PONTO REFERENCIA" : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
     "CIDADE" : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
     "E-MAIL" : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
     "WHATSAPP/DDD" : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
     "TELEFONE1/DDD" : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
     "TELEFONE2/DDD" : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
   },
   "Venda" : {
     "VENDA NOVA" : <TCampo>{
       "requerido" : true,
       choice: false, 
     },
     "PORTABILIDADE": <TCampo>{
       "requerido" : true,
       choice: false,
     }, 
     "FIXO/OPERADORA DDD" : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
     "MIGRAÇÃO": <TCampo>{
       "requerido" : true,
       choice: false
     },
     "OIFIXO DDD" : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
     "COBRANÇA EM DÉBITO " : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
     "BANCO" : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
     "AG" : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
     "OPERAÇÃO" : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
     "CONTA" : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
     "DIGITO" : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
     "PLANOS" : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
     "VALOR FINAL" : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
     "VENCIMENTO (DIA)" : <TCampo>{
       "requerido" : true,
       choice: {2: false,  7: false, 11: false, 16: false, 20: false, 26: false},
     },
   },
   "Instalação" : {
     "PREFERÊNCIA DIA  INSTALAÇÃO" : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
     "PERÍODO" : <TCampo>{
       "requerido" : true,
       choice: {
         "M": false, 
         "T": false
       }, 
     },
   },
   "Certificação" : {
     "CONSULTOR(A)" : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
     "SUPERVISOR(A)" : <TCampo>{
       "requerido" : true,
       choice: "", 
     },
   }
 }