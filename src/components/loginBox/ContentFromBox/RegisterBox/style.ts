import styled from "styled-components";


export const Container = styled.div`
   word-wrap: break-word;
    background-color: #fff;
    width: 100%;
    max-width: 300px;
    padding: 18px 18px;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 1, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const BoxHeader = styled.div`
     display: flex;
    align-items: baseline;
    color: #1c1e21;
    font-family: SFProDisplay, Helvetica, Arial, sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 32px;
    margin-bottom: 0;
    justify-content: space-between;
    height: 23.99px;
    width: 90%;
    padding: 0 0 14px 0;

`

export const HeaderMessage = styled.div`
    width: 153.38;
    height: 24px;
    text-align: center;
`

export const SubTittleHeader = styled.div`
    font-size: 1rem;
    font-weight: 400;
    color: #8a8d91;
 
`
export const BoxForm = styled.form`


`

export const FormContent = styled.form`
    width: 100%;
    padding: 16px 0 0 7px;
    display: flex;
    flex-direction: column;
    text-align: center;

`

export const InputLine = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px 0 0 0;
    justify-content: space-between;

   
`

export const BirthSelect = styled.select`
    width: 70px;
    height: 30px;
    
`

export const GenderInput = styled.input`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
export const GenderLabel = styled.label`

  
`

export const DefaultInput = styled.input`
    width: 100%;
    margin: 7px;
    height: 30px;
    color: #fff;
    border: 1px solid #dddfe2;
    border-radius: 4px;
    background-color: #fff;
    color: #000;
`

export const SubmitBtn = styled.button`
    background-color:#42b72a;
    color: #fff;
    width: 60%;
    height: 50px;
    font-size: 1.2rem;
    border: none;
    border-radius: 12px;
    margin: 10px;
    &:hover{
        cursor: pointer;
    }
    align-self: center;

`

export const AccBtn = styled.button`
 
    
    color: #2d88ff;
    background-color: #fff;
    font-size: 14px;
    height: 20px;
    font-weight: normal ;
    border: none;
    &:hover{
        cursor: pointer;
    }

`