import { useEffect, useState } from "react"

const useTools =()=>{
    const [tools, setTools] = useState([])
    useEffect(()=>{
        fetch('https://pure-depths-02632.herokuapp.com/tools')
        .then(res=>res.json())
        .then(data=> setTools(data))
    },[])
    return [tools, setTools]
}
export default useTools