const express=require('express');
const multer=require('multer');
const path=require('path');
const app=express();
const port=4000;

//storage engine

const storage=multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,file.filename+'_'+Date.now()+path.extname(file.originalname))
    }
})

const upload=multer({
    storage:storage
})

app.post('/upload', upload.single('profile'),(req,res)=>{
    console.log(req.file);
})

app.listen(port,()=>{
    console.log('Server is running');
})