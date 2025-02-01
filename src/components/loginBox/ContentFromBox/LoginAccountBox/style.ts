import styled from "styled-components";



export const Container = styled.div`

    word-wrap: break-word;
    background-color: #fff;
    width: 100%;
    max-width: 300px;
    padding: 18px 18px;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 1, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);

`

export const BoxHeader = styled.div `
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
export const BoxHeaderMsg = styled.div`
    width: 153.38;
    height: 24px;
 

`

export const BoxHeaderBtn = styled.button`
    background-color: #fff;
    border: none;
    font-size: 17px;
    color: #1763cf;
    padding: 6px;
    &:hover{
        cursor: pointer;
        border: #8a8d91 1px solid;
    }
`


export const UserContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    height: 65%;
    width: 100%;
`


export const SignInBtn = styled.div`
    border-radius: 6px;
    background-color: #e4e6eb;
    color: #000;
    font-size: 14px;
    height: 20px;
    width: 64px;
    padding: 5px;
    font-weight: bold;

`

export const LoginBoxFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SignUpBtn = styled.button`
    border: none;
    background-color: #fff;
    color: #000;
    font-weight: bold;
    font-size: 16px;
    width: 397;
    height: 21.99;
    line-height: 70px;
    &:hover{
        cursor: pointer;
    }
`

export const CreateAccount = styled.a`
    color: #1763cf;
    &:hover {
        text-decoration: underline;
    }
`