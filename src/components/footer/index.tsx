import React from "react";
import { FooterContainer, 
    FooterList,
    ListItem 
} from "./styles.ts";


function Footer() {

    return(
        <FooterContainer>
            <FooterList>
                
            <ListItem >Português (Brasil)</ListItem>
            <ListItem >English (US)</ListItem>
            <ListItem >Español</ListItem>
            <ListItem >Français (France)</ListItem>
            <ListItem >Italiano</ListItem>
            <ListItem >Deutsch</ListItem>
            <ListItem >لعربية</ListItem>
            <ListItem >हिन्दी</ListItem>
            <ListItem >中文(简体)</ListItem>
            <ListItem >日本語</ListItem>
                
            </FooterList>
            <hr style={{width:"40%", color: "#f1f1f1" }}/>

            <FooterList>
                <ListItem >Cadastre-se</ListItem>
                <ListItem >Entrar</ListItem>
                <ListItem >Messenger</ListItem>
                <ListItem >Facebook-List</ListItem>
                <ListItem >Watch</ListItem>
                <ListItem >Locais</ListItem>
                <ListItem >Jogos</ListItem>
                <ListItem >MarketPlace</ListItem>
                <ListItem >Meta Pay</ListItem>
                <ListItem >Loja da Meta </ListItem>
                <ListItem >Meta Quest</ListItem>
                <ListItem >Instagram</ListItem>
                <ListItem >Boletim</ListItem>
                <ListItem >Campanha de arrecadação de fundos</ListItem>
                <ListItem >Serviços</ListItem>
                <ListItem >Central de Informações de Votação</ListItem>
                <ListItem >Política de Privacidade</ListItem>
                <ListItem >Central de Privacidade</ListItem>
                <ListItem >Grupos</ListItem>
                <ListItem >Sobre</ListItem>
                <ListItem >Criar anúncio</ListItem>
                <ListItem >Criar Página</ListItem>
                <ListItem >Desenvolvedores</ListItem>
                <ListItem >Carreiras</ListItem>
                <ListItem >Escolhas para anúncios</ListItem>
                <ListItem >Termos</ListItem>
                <ListItem >Ajuda</ListItem>
                <ListItem >Carregamento de contatos e não usuários</ListItem>


            </FooterList>
        </FooterContainer>

    )
}

export default Footer;

