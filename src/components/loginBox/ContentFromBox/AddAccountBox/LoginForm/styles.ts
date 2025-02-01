import styled from "styled-components";



export const LoginTittle = styled.div`
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
    width: 100%;
    padding: 0 0 14px 0;

`

export const InputBox = styled.div`

    padding: 12px 7px;
    width: 100%;
    height: 100%;

    overflow: hidden;
`;
export const Form = styled.form`
    width: 100%;
    height: 80%;

    display: flex;
    align-items: center;
    flex-direction: column;
  
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    color: #fff;
    border: 1px solid #dddfe2;
    border-radius: 4px;
    background-color: #fff;
    color: #000;
 

`;

export const LoginBtn = styled.button`
   background-color: #0866ff;
    color: #fff;
    border: none;
    height: 30px;
    width: 100%;
    border-radius: 6px;
    font-weight: bold;
    &:hover{
        cursor: pointer;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1);
        background-color: #1763cf;
    }
`

