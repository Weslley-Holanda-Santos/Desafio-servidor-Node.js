const express=require('express')
const app=express()



app.get("/",function(req,res){
    res.sendFile(__dirname+"/views/index.html")
    
})

app.get("/contato",function(req,res){
  res.sendFile(__dirname+"/views/contato.html")
   
})

app.get("/abertura/tipoJpeg",function(req,res){
    res.sendFile(__dirname+"/recursos/arquivo.jpeg")
})

app.get("/abertura/tipoMp3",function(req,res){
    res.sendFile(__dirname+"/recursos/arquivo.mp3")
})

app.get("/abertura/tipoMp4",function(req,res){
    res.sendFile(__dirname+"/recursos/arquivo.mp4")
})

app.get("/abertura/tipoJson",function(req,res){
    res.sendFile(__dirname+"/recursos/arquivo.json")
})

app.get("/abertura/tipoMd",function(req,res){
    res.sendFile(__dirname+"/recursos/arquivo.md")
})

app.use(express.static(__dirname + '/recursos'));
app.use(function(req,res,next){
res.sendFile(__dirname + "/views/404.html")
})

app.listen(3000,function(){console.log("server rodando na porta 3000")})