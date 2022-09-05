import React, { useEffect, useState } from "react"; 
import {useSelector } from "react-redux";

const Annotations=(props)=>{
    const {item,index}=props;
   
    const annotations=useSelector((state)=>state.annotationList.annotationList);
    const annotationUpdated=useSelector((state)=>state.annotationUpdated.annotationUpdated);
    const getAnnotations=()=>{
        console.log(annotations);
    }

useEffect(()=>{
     getAnnotations();
},[annotationUpdated]);

return(<div>
   {annotations ?
    (annotations.map((item,index)=><tr> <td key={index}>{item}</td></tr>)):null}
     </div>)
}
export default Annotations;