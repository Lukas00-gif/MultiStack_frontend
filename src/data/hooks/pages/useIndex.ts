import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/ApiServices";

export function useIndex(){
    const [listaPets, setListaPets] = useState<Pet[]>([]),
         [petSelecionado, setPetSelecionado] = useState<Pet | null>(null),
         [email, setEmail] = useState(''),
         [valor, setValor] = useState(''),
         [mensagem, setMensagem] = useState('')
    
    useEffect(() =>{
      ApiService.get('/pets')
        .then((resposta) => {
            setListaPets(resposta.data)
        })
    }, [])

         function adotar(){
            if(petSelecionado !== null){
              if(validarFuncaoAdocao()){
                ApiService.post('/adocoes', {
                  pet_id: petSelecionado.id,
                  email,
                  valor
                })
                  .then(() => {
                    setPetSelecionado(null);
                    setMensagem('Pet Adotado com Sucesso')
                    limparFormularios();
                  })
                  .catch((error: AxiosError) =>{
                      setMensagem(error.response?.data.message);
                  })
              } else{
                setMensagem('Preencha os campos corretamente');
              }
            }
         }

         function validarFuncaoAdocao(){
           return email.length > 0 && valor.length > 0;
         }

         function limparFormularios(){
           setEmail('');
           setValor('');
         }

    return {
        listaPets,
        petSelecionado,
        setPetSelecionado,
        email,
        setEmail,
        valor,
        setValor,
        mensagem,
        setMensagem,
        adotar
    }
}