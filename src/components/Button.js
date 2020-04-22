import React, { useState } from "react";
import { CompileButton } from "../styles";

const Button = () => {

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setLoading(true);
        //make api call to compiler 
        
        setLoading(false);
    }

    return ( 
        <CompileButton onSubmit={handleSubmit}>
            {loading ? "Compiling..." : "Compile"}
        </CompileButton>
     );
}
 
export default Button;