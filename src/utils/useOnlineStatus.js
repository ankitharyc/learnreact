import { useEffect , useState} from "react";

const useOnlineStatus = ()=>{
    const [onlinestatus, setOnlinestatus] = useState(true);
    //check if online
    useEffect(() =>{
        window.addEventListener("offline",()=>{
            setOnlinestatus(false);
        })
        window.addEventListener("online",()=>{
            setOnlinestatus(true);
        })
    },[])
    //return boolean value;
    return onlinestatus;
}

export default useOnlineStatus;