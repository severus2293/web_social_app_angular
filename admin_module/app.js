import express from "express";
import  path from "path";
import Rout from "./router.js"
import cors from "cors";

const corsOptions = {
  'credentials': true,
  'origin': true,
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'allowedHeaders': 'Authorization,X-Requested-With,X-HTTP-Method-Override,Content-Type,Cache-Control,Accept',
};
const __dirname = path.resolve()
const PORT = 3000;
const app = express();
app.use(cors(corsOptions))
app.use(express.json());
app.use(express.static(__dirname+ "\\public"))
app.use(Rout)
app.set("view engine", "pug");
app.set("views",__dirname +"\\public\\" + "\pug_files");
app.listen(PORT,() =>{
  console.log(`Server has been started on port ${PORT}...`)
});
