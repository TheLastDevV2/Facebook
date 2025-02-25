import React from "react";
import { BigLogo, Container, Content, LogoBox, Text }   from "./style.ts";
import Logo from "../../assets/faceLogo.svg";
import Box from "../../components/loginBox/BoxMain/index.tsx";
import Footer from "../../components/footer/index.tsx";


function LoginPage( ){
        
    return(

        <>
        
            <Container> 
                <Content>
                    <LogoBox>
                        <BigLogo src={Logo}/>
                        <Text>Conecte-se a amigos e ao mundo à sua volta no Facebook.</Text>
                    </LogoBox>

                    <Box /> 
                    
                </Content>

                
            </Container>
            <Footer/>
        </>
    )
}


export default LoginPage;