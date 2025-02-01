import React, { useState } from "react";
import { 
  Container,
  BackButton,
  RecoverAccount,
  CreateAccount,



} from "./style.ts";

import LoginForm from "./LoginForm/index.tsx"


function AddAccountBox( { setDefaultBox }){
    const [loginError, setLoginError] = useState("");

    const handleLogin = (email, password) =>{
      
      console.log("Tentativa de login com:", email, password);

      if (email === "isaaclindo@gmail.com" ||  password === 'password'){
        alert("Login concluido");
      }
      else{
        // setLoginError("Email ou senha incorretos");
      }
    }




    return(
        
        <Container >
        

          {/* {loginError && <p style={{color: "red"}}>{loginError}</p>} */}
          
          <LoginForm onLogin={handleLogin}></LoginForm>


          {/* <BackButton onClick={() => setDefaultBox(true)}>
            back</BackButton> */}

            <RecoverAccount onClick={()=> 0}>Esqueceu sua conta? </RecoverAccount>
            <hr style={{width:"80%", color: "#dddfe2"}}/>
            <CreateAccount>Criar uma nova conta</CreateAccount>
        </Container>
    )
}


export default AddAccountBox;