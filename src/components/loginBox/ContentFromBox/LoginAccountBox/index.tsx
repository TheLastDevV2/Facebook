import React from "react";
import { 
    BoxHeader, 
    BoxHeaderMsg, Container,
    CreateAccount, LoginBoxFooter, 
    SignUpBtn, UserContent

} from "./style.ts";
import UserComponent from "./UserComponent/index.tsx";


function LoginBox({ setDefaultBox }){

  
    const preUsers = [
        {
            name: "mãe anatureza",
            photo: "https://hackspirit.com/wp-content/uploads/2021/06/Copy-of-Rustic-Female-Teen-Magazine-Cover.jpg"
        },
        {
            name: "Senhor Vapor",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg/1200px-Andrzej_Person_Kancelaria_Senatu.jpg"
        },
        {
            name: "Minato Namikaze",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk41KYOo58gIkFGDMOatn5KnZBdCoOryahRQ&s"
        }
    ]



    return(
    
        <Container >
            <BoxHeader>
                <BoxHeaderMsg>logins recentes </BoxHeaderMsg>
                
            </BoxHeader>

            <UserContent>
                {preUsers.map((key) => (
                    <UserComponent name={key.name} photo={key.photo}/>
               ))} 
               
            </UserContent>
         

            <LoginBoxFooter>
                <SignUpBtn onClick={() => setDefaultBox(false)}>
                    Sign up in another account
                </SignUpBtn>
                <CreateAccount>Create account</CreateAccount>
            </LoginBoxFooter>

        </Container>
    )
}

export default LoginBox;