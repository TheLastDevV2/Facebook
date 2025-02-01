import React from "react";
import { UserContainer, User, UserImg, UserName, 
    LoginBtn, EndLine, UserInfo} from "./style.ts";

import {  useNavigate } from "react-router-dom";

function UserComponent({name, photo}){

  

    const navigate = useNavigate()
    return(
        <UserContainer>
            <User onClick={() => navigate("/feed")}>
                <UserInfo>  
                    <UserImg src={photo} />
                  
                    <UserName>{name}</UserName>
                </UserInfo>
           
                <LoginBtn >Login</LoginBtn>
            </User> 
            <EndLine />
        </UserContainer>
    )
}


export default UserComponent;