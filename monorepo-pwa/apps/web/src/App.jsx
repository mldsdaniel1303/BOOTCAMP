import React,{useState} from "react";
import { buscarCep } from "./api";
export default function App(){
  const [cep,setCep]=useState('');
  const [res,setRes]=useState(null);
  const [err,setErr]=useState(null);
  const [loading,setLoading]=useState(false);
  async function handleBuscar(e){
    e.preventDefault();
    setLoading(true);setErr(null);setRes(null);
    try{
      const data=await buscarCep(cep);
      setRes(data);
    }catch(error){setErr(error.message);}finally{setLoading(false);}
  }
  return(<div><h1>Bootcamp PWA — ViaCEP</h1><form onSubmit={handleBuscar}><input value={cep} onChange={e=>setCep(e.target.value)} placeholder="Digite o CEP"/><button>Buscar</button></form>{loading&&<p>Carregando...</p>}{err&&<p>{err}</p>}{res&&<pre data-testid="api-ok">{JSON.stringify(res,null,2)}</pre>}</div>);
}
