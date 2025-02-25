import React, { useState } from "react";
import LoginBox from "../ContentFromBox/LoginAccountBox/index.tsx";
import AddAccountBox from "../ContentFromBox/AddAccountBox/index.tsx";
import RegisterBox from "../ContentFromBox/RegisterBox/index.tsx";
import { Route, useNavigate } from "react-router-dom";

function Box(  ){
   
    const [defaultBox, setDefaultBox] = useState(1);
    const navigate = useNavigate()
    return(

        <>
            {defaultBox == 1 ? 

            // <LoginBox setDefaultBox={setDefaultBox}/> 
          
            <AddAccountBox  setDefaultBox={setDefaultBox}/>
        
           
            : 
            <RegisterBox setDefaultBox={setDefaultBox}/>
            
            }
        
        </>
       
    )
}


export default Box;