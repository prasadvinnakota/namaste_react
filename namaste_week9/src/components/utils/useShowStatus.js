import { useEffect, useState } from "react"

const useShowStatus = ()=>
{
    const [status, setStatus] = useState(true);
    
    const online =  ()=>
    {
        console.log("hi")
        setStatus(true)
    }

    const offline = ()=>
    {
        console.log("hi")
        setStatus(false)
    }

    useEffect(()=>
    {
        console.log("hi")
      window.addEventListener("online", online)
      window.addEventListener("offline", offline)

      return ()=>
      {
            window.removeEventListener(online)
            window.removeEventListener(offline)
      }
    },[])

    return status;
}

export default useShowStatus;