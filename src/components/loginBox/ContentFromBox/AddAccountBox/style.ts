import styled from "styled-components";



export const Container = styled.div`

    word-wrap: break-word;
    background-color: #fff;
    width: 100%;
    max-width: 300px;
    padding: 18px 18px;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 1, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);
    align-items: center;
    display: flex;
    flex-direction: column;
    align-items: center;

`


export const BackButton = styled.button`

    width: 100px;
    height: 100px;

`


export const RecoverAccount = styled.button`
    border-radius: 6px;
    margin: 30px 0 10px 0;
    color: #2d88ff;
    background-color: #fff;
    font-size: 14px;
    height: 20px;
    width: 100%;
    padding: 5px;
    font-weight: normal ;
    border: none;
    &:hover{
        cursor: pointer;
    }

`

export const CreateAccount = styled.button`
    background-color:#42b72a;
    color: #fff;
    width: 70%;
    height: 50px;
    font-size: 1.2rem;
    border: none;
    border-radius: 12px;
    margin: 10px;
    &:hover{
        cursor: pointer;
    }

`
