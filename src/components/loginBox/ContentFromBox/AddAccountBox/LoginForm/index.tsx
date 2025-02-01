import React, {useState} from "react";
import { InputBox, Form, Input, LoginTittle, LoginBtn } from "./styles.ts";

function LoginForm({onLogin} ){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
    
        if (!email || !password){
            
            return;
        }
    }

    onLogin(email, password);
    

    return(
        <>
        <LoginTittle>Login</LoginTittle>
        <Form onSubmit={handleSubmit}>
            <InputBox >
                
                <Input
                type="email"
                id="email"
                placeholder="Email ou Telefone"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                >
                </Input>
            </InputBox>

            <InputBox>
            <Input
                type="password"
                id="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                >
                </Input>
            
            </InputBox>   

            <LoginBtn type="submit">Entrar</LoginBtn>
        </Form>

        </>
    )
}

export default LoginForm;