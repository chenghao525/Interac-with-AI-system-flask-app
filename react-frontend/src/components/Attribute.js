import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../CSS/firstPage.css";



const Attribute = (props) => {
    const [attribute, setAttribute] = useState(0);
    const [value, setValue] = useState(0);

    useEffect(()=>{
        setAttribute(props.name);
        setValue(props.value);
    },[]);

    return (
        <div >
            {attribute} : {value}
        </div>
    )

};

export default Attribute;