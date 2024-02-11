import { useEffect, useState } from "react";

export function useFetch({url,options={}}){
     const [data,setData]=useState(null)
     const [loading,setLoading]=useState(false)
     const [error,setError]=useState(null)
     
    async function fetchData(){
        setLoading(true)
        try{   
        let dat=await fetch(url,{...options});
           let res=await dat.json();
           setData(res)
           console.log(data);
           setLoading(false)
        }
        catch(e){
            setError(e)
            setLoading(false)
        }
     }

     useEffect(()=>{
        fetchData()
     },[url])
     
    return {data,error,loading}


}