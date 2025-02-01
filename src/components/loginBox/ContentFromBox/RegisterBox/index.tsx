import React from "react";
import { BirthSelect, BoxForm, BoxHeader, Container,DefaultInput,FormContent, 
    GenderInput, HeaderMessage
    ,InputLine,SubTittleHeader,
    GenderLabel,
    SubmitBtn,
    AccBtn
} from "./style.ts";



function  RegisterBox( {setDefaultBox}){


    return (
        <Container> 
            <BoxHeader>
                <HeaderMessage>
                    Criar uma nova conta
                    <SubTittleHeader>É rápido e fácil</SubTittleHeader>
                </HeaderMessage>

            </BoxHeader>

            <BoxForm>

                <FormContent>
                    <InputLine>
                        <DefaultInput

                        placeholder="Nome"
                        required
                        >

                        </DefaultInput>

                        <DefaultInput
                        placeholder="Sobrenome"
                        required
                        >
                            
                        </DefaultInput>
                    </InputLine>

                    <InputLine>
                        <BirthSelect required>
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

                        <BirthSelect required>
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
                        placeholder="Ano"
                        required>

                        </DefaultInput>
                    </InputLine>

                    <InputLine >
                        <GenderInput 
                        type="radio" 
                        id="homem" 
                        name="gender"
                        value='man'
                        required>
                        </GenderInput>
                        <GenderLabel htmlFor="man">Homem</GenderLabel>


                        <GenderInput 
                        type="radio" 
                        name="gender"
                        id="mulher"
                        value='woman'>
                        </GenderInput>
                        <GenderLabel htmlFor="man">Mulher</GenderLabel>


                        <GenderInput 
                        type="radio" 
                        name="gender"
                        id="personalizado"
                        value='other'
                        >
                        </GenderInput>
                        <GenderLabel htmlFor="personalizado">Personalizado</GenderLabel>
                        
                    </InputLine>

                    <InputLine style={{flexDirection: "column"}}>
                        <DefaultInput
                        type="email"
                        placeholder="Email"
                        required>    

                        </DefaultInput>
                        <DefaultInput
                        type="password"
                        placeholder="Senha"
                        required>

                        </DefaultInput>
                    
                    </InputLine>

                    <SubmitBtn type="submit">Cadastre-se</SubmitBtn>
                </FormContent>

              

            </BoxForm>
            <AccBtn onClick={() => setDefaultBox(2)}>Já tem uma conta?</AccBtn>

        </Container>

    )

}

export default RegisterBox;