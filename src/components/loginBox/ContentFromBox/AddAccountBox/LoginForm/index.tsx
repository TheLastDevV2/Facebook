import React, {useState} from "react";
import { InputBox, Form, Input, LoginTittle, LoginBtn } from "./styles.ts";

import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

function LoginForm(){

    const[data, setData] = useState({
        email: "",
        password: ""
    });

    const [error,setError]= useState("");
    
    const navigate = useNavigate();


    const handleChange = ({currentTarget: input}) =>{
        setData({...data, [input.name]: input.value});
    };

    const handleSubmit = async (e) =>{
       e.preventDefault();
       try {
            const url = "http://localhost:8000/api/auth";
            const {data: res} = await axios.post(url, data);
            console.log(res.message);
            navigate("/dashboard");           
        } catch (error) {
            if(error.response && 
               error.response.status >= 400 &&
               error.response.status <= 500
            ){
                setError(error.response.data.message);
            }
       }
    }
    return(
        <>
        <LoginTittle>Login</LoginTittle>
        <Form onSubmit={handleSubmit}>
            <InputBox >
                
                <Input
                type="email"
                id="email"
                name="email"
                placeholder="Email ou Telefone"
                value={data.email}
                onChange={handleChange}
                required
                >
                </Input>
            </InputBox>

            <InputBox>
            <Input
                type="password"
                id="password"
                name="password"
                placeholder="Senha"
                value={data.password}
                onChange={handleChange}
                required
                >
                </Input>
            
            </InputBox>   
            
        {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}
            <LoginBtn type="submit">Entrar</LoginBtn>
        </Form>

        </>
    )
}

export default LoginForm;