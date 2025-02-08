import React from "react";
import { BirthSelect, BoxForm, BoxHeader, Container,DefaultInput,FormContent, 
    GenderInput, HeaderMessage
    ,InputLine,SubTittleHeader,
    GenderLabel,
    SubmitBtn,
    AccBtn
} from "./style.ts";
import { useState } from "react";
import axios from "axios";
import { Link} from "react-router-dom";


function  RegisterBox( {setDefaultBox}){

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        birthDay: "",
        birthMonth: "",
        birthYear: "",
        gender: "",
        email: "",
        password: ""

    })
    const[error, setError]= useState("");
    

    const handleChange = ({currentTarget:input}) => {
        console.log(input.name, input.value);
        setData({...data, [input.name]: input.value})
    }

    const handleSubmit = async (e) => {
       
        e.preventDefault()
        try{
            const url = "http://localhost:8000/api/users";
            const { data:res } : any = await axios.post(url,data);    
            setDefaultBox(2);
            console.log(res)
        }catch(error){
            if( error.response && 
                error.response.status >= 400 &&
                error.response.status <= 500
               ){
                setError(error.data.message)
            }
        }
    };

    return (
        <Container> 
            <BoxHeader>
                <HeaderMessage>
                    Criar uma nova conta
                    <SubTittleHeader>É rápido e fácil</SubTittleHeader>
                </HeaderMessage>

            </BoxHeader>

            <BoxForm>

                <FormContent onSubmit={handleSubmit}>
                    <InputLine>
                        <DefaultInput
                        name="firstName"
                        placeholder="Nome"
                        value={data.firstName}
                        onChange={handleChange}
                        required
                        >

                        </DefaultInput>

                        <DefaultInput

                        name="lastName"
                        value={data.lastName}
                        placeholder="Sobrenome"
                        onChange={handleChange}
                        required
                        >
                            
                        </DefaultInput>
                    </InputLine>

                    <InputLine>
                        <BirthSelect name="birthDay"
                        value={data.birthDay}
                        onChange={handleChange}
                        required
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            <option>26</option>
                            <option>27</option>
                            <option>28</option>
                            <option>29</option>
                            <option>30</option>
                            <option>31</option>
                        </BirthSelect>

                        <BirthSelect
                        name="birthMonth"
                        value={data.birthMonth}
                        onChange={handleChange}
                        required>
                            <option>Jan</option>
                            <option>Fev</option>
                            <option>Mar</option>
                            <option>Abr</option>
                            <option>Mai</option>
                            <option>Jun</option>
                            <option>Jul</option>
                            <option>Ago</option>
                            <option>Set</option>
                            <option>Out</option>
                            <option>Nov</option>
                            <option>Dez</option>

                        </BirthSelect>

                        <DefaultInput style={{width: "100px"}}
                        type="number"
                        min="1900"
                        max="2025"
                        name="birthYear"
                        value={data.birthYear}
                        placeholder="Ano"
                        onChange={handleChange}
                        required>

                        </DefaultInput>
                    </InputLine>

                    <InputLine >
                        <GenderInput 
                        type="radio" 
                        id="homem" 
                        name="gender"
                        value="man"
                        onChange={handleChange}
                        required>
                        </GenderInput>
                        <GenderLabel htmlFor="man">Homem</GenderLabel>


                        <GenderInput 
                        type="radio" 
                        name="gender"
                        id="mulher"
                        value="woman"
                        onChange={handleChange}
                        >
                        </GenderInput>
                        <GenderLabel htmlFor="man">Mulher</GenderLabel>


                        <GenderInput 
                        type="radio" 
                        name="gender"
                        id="personalizado"
                        value="other"
                        onChange={handleChange}
                        >
                        </GenderInput>
                        <GenderLabel htmlFor="personalizado">Personalizado</GenderLabel>
                        
                    </InputLine>

                    <InputLine style={{flexDirection: "column"}}>
                        <DefaultInput
                        type="email"
                        placeholder="Email"
                        value={data.email}
                        name="email"
                        onChange={handleChange}
                        required>    

                        </DefaultInput>
                        <DefaultInput
                        value={data.password}
                        name="password"                        
                        type="password"
                        placeholder="Senha"
                        onChange={handleChange}
                        required>

                        </DefaultInput>
                    
                    </InputLine>
                    {error && <div>{error}</div>}
                    <SubmitBtn type="submit">Cadastre-se</SubmitBtn>
                </FormContent>

              

            </BoxForm>
            <AccBtn onClick={() => setDefaultBox(2)}>Já tem uma conta?</AccBtn>

        </Container>

    )

}

export default RegisterBox;