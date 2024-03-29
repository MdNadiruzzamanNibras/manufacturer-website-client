import { useEffect, useState } from "react"

const useTools =()=>{
    const [tools, setTools] = useState([])
    useEffect(()=>{
        fetch('https://manufacturer-website-t9g0.onrender.com/tools')
        .then(res=>res.json())
        .then(data=> setTools(data))
    },[tools])
    return [tools, setTools]
}
export default useTools