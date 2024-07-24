import { useEffect, useState } from "react";
import { MENU_URL } from "./link";
const useRestroMenu= (resId)=>{
   
    const[resInfo, setResInfo]=useState(null);

    useEffect(()=>{
        fetchData();
    },[]);
    

    const fetchData = async ()=>{
        const data = await fetch(MENU_URL+ resId +"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setResInfo(json.data);
       
    };
    console.log(resInfo);
    return resInfo;
};

export default useRestroMenu;



