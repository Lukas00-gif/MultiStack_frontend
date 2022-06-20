import { AxiosError } from "axios";
import { useState } from "react";
import { ApiService } from "../../../services/ApiServices";

export function useCadastro(){
    const [nome, setNome] = useState(''),
             [historia, setHistoria] = useState(''),
                 [foto, setFoto] = useState(''),
                    [mesagem, setMesagem] = useState('');
    
    function cadastrar(){
        if (validarFormulario()){
            ApiService.post('/pets',{
                nome,
                historia,
                foto
            })
                .then(() =>{
                    limpar();
                    setMesagem('pet cadastrado com sucesso')
                })
                .catch((error: AxiosError) =>{
                    setMesagem(error.response?.data.massage);
                })
        } else {
            setMesagem('Preencha todos os campos!')
        }
    }

    function validarFormulario(){
        return nome.length > 2 && historia.length > 10 && foto.length > 5 
    }

    function limpar(){
        setNome('');
        setHistoria('');
        setFoto('');
    }

    return {
        nome,
        historia,
        foto,
        setNome,
        setHistoria,
        setFoto,
        cadastrar,
        mesagem,
        setMesagem
    }
}