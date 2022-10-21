import {Router} from "express"
import body_parser from "body-parser"
import users from "./public/json_files/users.json" assert { type: "json" };
import  path from "path";
import fs from "fs"
const router = Router()
const __dirname = path.resolve() + "/public"
router.use(body_parser.json());
router.use(body_parser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
router.get("/",(req,res,next) =>
{
  res.render("index",{users: users});
  next();
})

router.post("/editmail",(req,res,next) =>
{
  var new_mail = req.body.text;
  var usid = parseInt(req.body.user);
  for (let value of users)
    if (value.id === usid) {
      if (/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(new_mail))
        value.mail = new_mail;
    }
  fs.writeFileSync(__dirname + "/json_files/users.json",JSON.stringify(users))
  res.redirect("/");
  next();

})

router.get("/users",(req,res,next) =>
{
  res.json(users)
})

router.post("/editdate",(req,res,next) =>
{
  var new_date = req.body.text;
  var usid = parseInt(req.body.user);
  for (let value of users)
    if (value.id === usid) {
      if (new_date)
        value.birthday = new_date;
    }
  fs.writeFileSync(__dirname + "/json_files/users.json",JSON.stringify(users))
  res.redirect("/");
  next();

})

router.post("/user/:num/addnews",(req,res,next) =>
{
  const usid = parseInt(req.params.num)
  var text = req.body.text
  var now = new Date().toLocaleDateString();
  for (let value of users)
    if (value.id === usid) {
      if (text)
        value.messages.push({
          "date": now,
          "mes": text
        })
    }
  fs.writeFileSync(__dirname + "/json_files/users.json",JSON.stringify(users))
  res.redirect("/user/" + usid);
  next();

})

router.post("/editrole",(req,res,next) =>
{
  var new_role = req.body.text;
  var usid = parseInt(req.body.user);
  for (let value of users)
    if (value.id === usid) {
      if (new_role)
        value.role = new_role;
    }
  fs.writeFileSync(__dirname + "/json_files/users.json",JSON.stringify(users))
  res.redirect("/");
  next();

})

router.post("/editstat",(req,res,next) =>
{
  var new_stat = req.body.text;
  var usid = parseInt(req.body.user);
  for (let value of users)
    if (value.id === usid) {
      if (new_stat)
        value.status = new_stat;
    }
  fs.writeFileSync(__dirname + "/json_files/users.json",JSON.stringify(users))
  res.redirect("/");
  next();

})



router.get("/user/:num",(req,res,next) =>
{
  const id = parseInt(req.params.num)
  var string = "";
  for (let value of users[id].messages){
    string += value.date +":" + value.mes + "\n"
  }


  res.render("user",{user: users[id],resmes:string});
  console.log(res)
  next();
})

router.get("/user/:num/friends",(req,res,next) =>
{
  const id = parseInt(req.params.num)
  res.render("friends_list",{friends: users[id].friends,users:users});
  next();
})

router.get("/user/:num/news",(req,res,next) =>
{
  const id = parseInt(req.params.num)
  res.render("news_list",{friends: users[id].friends,users:users});
  next();
})

router.get("/appusers",(req,res,next) =>
{
   console.log("file quest")
    res.json(users)
  next();
})

router.get("/user/:num/appnews",(req,res,next) =>
{
  const id = parseInt(req.params.num)
  var string = "";
  for (let value of users[id].messages){
    string += value.date +":" + value.mes + "\n"
  }
  console.log("newstring")
  res.json(string)
  next();
})

router.post("/user/:num/appaddnews",(req,res,next) =>
{
  console.log("new news")
  const usid = parseInt(req.params.num)
  const text = req.body.text
  var now = new Date().toLocaleDateString();
  for (let value of users)
    if (value.id === usid) {
      if (text)
        value.messages.push({
          "date": now,
          "mes": text
        })
    }
  fs.writeFileSync(__dirname + "/json_files/users.json",JSON.stringify(users))
  res.redirect("/user/" + usid +"/appnews");
  next();
})




export default router
