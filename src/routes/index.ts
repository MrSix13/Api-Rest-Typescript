import { Router } from 'express';
import {readdirSync} from 'fs'

const PATH_ROUTER = `${__dirname}`
const router = Router();

const celanFileName = (fileName: string)=>{
    const file = fileName.split(".").shift();
    return file
}

readdirSync(PATH_ROUTER).filter((fileName)=>{
    //tenemos un arreglo con todos los archivos de
    //la carpeta routes
    const cleanName = celanFileName(fileName);
    if(cleanName !== "index"){
        import(`./${cleanName}`).then((moduleRouter)=>{
            console.log("Se esta cargando la ruta...", cleanName);
            router.use(`/${cleanName}`, moduleRouter.router);
        })
    }
})


export {router};