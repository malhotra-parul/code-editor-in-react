import React, { useState } from "react";
import { StyledButton } from "../styles";

const Button = () => {

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setLoading(true);
        //make api call to compiler 
        
        setLoading(false);
    }

    return ( 
        <StyledButton onSubmit={handleSubmit}>
            {loading ? "Compiling..." : "Compile"}
        </StyledButton>
     );
}
 
export default Button;