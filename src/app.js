import express, { response } from "express";

const app = express(); 

const port = 8088;


const productos = [
    {id:"1", producto:"Iphone"},
    {id:"2", producto:"Notebook"},
    {id:"3", producto:"PS5"},
    {id:"4", producto:"Cocina"},
    {id:"5", producto:"Refrigerador"},
    {id:"6", producto:"Comedor"},
    {id:"7", producto:"Plantas"},
    {id:"8", producto:"Sofa"},
    {id:"9", producto:"Mesa"},
    {id:"10", producto:"Licuadora"},
    ]; 


//query limit
app.get("/productos", (req,res)=>{
    console.log(req.query)
   const limit = parseInt(req.query.limit)|| productos.length;;
    const resultado = productos.slice(0,limit); //limit "numero de id" ingresando desde la url
    res.send(resultado)

})

//param
app.get("/productos/:pid", (req,res)=>{
 
   const productid = (req.params.pid);

    const seleccion = productos.find(u=>u.id ==productid); //ingresando el id me trae el producto
    res.send(seleccion)

})
app.listen(port,()=>console.log(`server listening on import ${port}`));