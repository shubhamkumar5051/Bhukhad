import { useEffect, useState } from "react";

const useOnlineStatus=()=>{
    const[status, setStatus] = useState(true);

    useEffect(()=>{
        checkOnline();
    },[]);

    const checkOnline=()=>{
        window.addEventListener("online", () => {
            setStatus(true);
        });
        window.addEventListener("offline", () => {
            setStatus(false);
        });
    }

    return status;
}

export default useOnlineStatus;
