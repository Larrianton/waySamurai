import React from "react";
import preloader from "../../../assets/images/preloader.svg";

export let Preloader = (props:any) => {
    return <div style={{backgroundColor:"aquamarine" }}>
        <img src={preloader}/>
    </div>
}