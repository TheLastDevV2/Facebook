import React, { useState } from "react";
import { 
  Container,
  BackButton,
  RecoverAccount,
  CreateAccount,



} from "./style.ts";

import LoginForm from "./LoginForm/index.tsx"


function AddAccountBox( { setDefaultBox }){
    
    return(
        
        <Container >
        

          {/* {loginError && <p style={{color: "red"}}>{loginError}</p>} */}
          
          <LoginForm></LoginForm>


          {/* <BackButton onClick={() => setDefaultBox(true)}>
            back</BackButton> */}

            <RecoverAccount onClick={()=> 0}>Esqueceu sua conta? </RecoverAccount>
            <hr style={{width:"80%", color: "#dddfe2"}}/>
            <CreateAccount onClick={() => setDefaultBox(2)}>Criar uma nova conta</CreateAccount>
        </Container>
    )
}


export default AddAccountBox;