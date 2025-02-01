import styled from "styled-components"





export const UserContainer = styled.div`
  
    font-size:  17px;
    margin-top: 13px;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`   

export const  User = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const UserInfo = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`
export const UserImg = styled.img`
    width: 44px;
    height: 44px;
    border-radius: 120px;
    background-size: cover;
`
export const UserName = styled.div`
    margin-left: 5px;
    &:hover{
        cursor: pointer; 
      
    }
`

export const LoginBtn = styled.button`

    background-color: #2d88ff;
    color: #fff;
    border: none;
    height: 30px;
    width: 60px;
    border-radius: 6px;
    font-weight: bold;
    &:hover{
        cursor: pointer;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1);
        background-color: #1763cf;
    }
`

export const EndLine = styled.hr`
    background: #dadde1;
    border-width: 0;
    color: #dadde1;
    height: 1px;
    `
