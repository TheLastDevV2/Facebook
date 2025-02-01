import React, { useState } from "react";
import LoginBox from "../ContentFromBox/LoginAccountBox/index.tsx";
import AddAccountBox from "../ContentFromBox/AddAccountBox/index.tsx";

function Box(){
   
    const [defaultBox, setDefaultBox] = useState(true);

    return(

        <>
            {defaultBox ? 

            <LoginBox setDefaultBox={setDefaultBox}/> 
            : 
            <AddAccountBox setDefaultBox={setDefaultBox}/>}
        
        </>
       
    )
}


export default Box;