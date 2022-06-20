import { 
    CabecalhoContainer,
    Logo,
    LinksContainer } from './CabecalhoAdmin.style';

import { Link } from "@mui/material";
import NextLink from 'next/link';

export default function CabecalhoAdmin(){
    return (
        <CabecalhoContainer>
            <div>
                <Logo src={'/imagens/logo.svg'} alt={'Adote um Pet'}/>  
                <LinksContainer>
                    <Link component={NextLink} href={'/pets/cadastro'}>
                        <a>Cadastrar Pet</a> 
                    </Link>
                    <Link component={NextLink} href={'/pets/relatorio'}>
                        <a>Relatorio de Adoção</a> 
                    </Link>
                </LinksContainer>          
            </div>
        </CabecalhoContainer>
    )
}