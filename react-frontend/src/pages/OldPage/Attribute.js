import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../CSS/firstPage.css";



const Attribute = (props) => {

    return (
        <div >
            {props.name} : {props.value}
        </div>
    )

};

export default Attribute;