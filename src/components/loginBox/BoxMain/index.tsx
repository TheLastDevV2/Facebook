import React, { useState } from "react";
import LoginBox from "../ContentFromBox/LoginAccountBox/index.tsx";
import AddAccountBox from "../ContentFromBox/AddAccountBox/index.tsx";
import RegisterBox from "../ContentFromBox/RegisterBox/index.tsx";

function Box(){
   
    const [defaultBox, setDefaultBox] = useState(1);

    return(

        <>
            {defaultBox == 1 ? 

            // <LoginBox setDefaultBox={setDefaultBox}/> 
            <AddAccountBox setDefaultBox={setDefaultBox}/>
            : 
            <RegisterBox setDefaultBox={setDefaultBox}/>
            
            }
        
        </>
       
    )
}


export default Box;