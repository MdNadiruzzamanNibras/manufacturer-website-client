import { useEffect, useState } from "react"

const useTools =()=>{
    const [tools, setTools] = useState([])
    useEffect(()=>{
        fetch('https://manufacturer-website-server-mdnadiruzzamannibras.vercel.app/tools')
        .then(res=>res.json())
        .then(data=> setTools(data))
    },[tools])
    return [tools, setTools]
}
export default useTools