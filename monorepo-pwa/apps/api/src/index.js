import express from "express";
import fetch from "node-fetch";
import cors from "cors";
const app = express();
app.use(cors());
app.get('/api/health', (req,res)=>res.json({ok:true,now:new Date().toISOString()}));
app.get('/api/cep/:cep', async (req,res)=>{
  try {
    const cep=(req.params.cep||'').replace(/\D/g,'');
    if(!/^\d{8}$/.test(cep)) return res.status(400).json({message:'CEP inválido'});
    const r=await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const json=await r.json();
    if(json.erro) return res.status(404).json({message:'CEP não encontrado'});
    res.json(json);
  } catch(err){res.status(500).json({message:'Erro interno'});}
});
app.listen(3000, ()=>console.log('API on :3000'));
