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
        birthDay:["", "", ""],
        gender: "",
        email: "",
        password: ""

    })

    //birthDay: [dd/mm/yyyy]
    const[error, setError]= useState("");
    

    const handleChange = ( { currentTarget:input } ) => {

        const {name, value} = input;
        if(input.name === "birthDay" ||
            input.name === "birthMonth" ||
            input.name === "birthYear"
        ){
            console.log("setting array");
            const index = name === "birthDay" ? 0 : name === "birthMonth" ? 1 : 2;
            const newBirthDay = [...data.birthDay];
            newBirthDay[index] = input.value;

            setData(( prevData ) =>({
                ...prevData,
                birthDay: newBirthDay
            }));
            setData({ ...data, birthDay: newBirthDay})
            console.log(data.birthDay)
        }
        else{
            setData(( prevData ) => ({
                ...prevData,
                [name]: value,
            }))
        }
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
                        value={data.birthDay[0]}
                        onChange={handleChange}
                        defaultValue={"01"}
                        required
                        >   
                             <option value="">Dia</option>
                            {Array.from({ length: 31 }, (_, i) => (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            ))}
                        </BirthSelect>

                        <BirthSelect
                        name="birthMonth"
                        value={data.birthDay[1]}
                        onChange={handleChange}
                        required>
                            <option value="">Mês</option>
                            <option value="01">Jan</option>
                            <option value="02">Fev</option>
                            <option value="03">Mar</option>
                            <option value="04">Abr</option>
                            <option value="05">Mai</option>
                            <option value="06">Jun</option>
                            <option value="07">Jul</option>
                            <option value="08">Ago</option>
                            <option value="09">Set</option>
                            <option value="10">Out</option>
                            <option value="11">Nov</option>
                            <option value="12">Dez</option>

                        </BirthSelect>

                        <DefaultInput style={{width: "100px"}}
                        type="number"
                        min="1900"
                        max="2025"
                        name="birthYear"
                        value={data.birthDay[2]}
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