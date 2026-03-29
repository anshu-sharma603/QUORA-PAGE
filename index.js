const express=require("express");
const app=express();
let port=8080;
const { v4 : uuidv4 } =require('uuid');
const methodOveride=require("method-override");



const path=require("path");

app.use(express.urlencoded({extended:true}));
app.use(methodOveride("_method"));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {
        id:uuidv4(),
        username:"anshu",
        content:"Builds Things From Nothing -that's a superpower",
        },
    {
        id: uuidv4(),
        username: "ankush",
        content: "Hard-working & Consistency is the key of success",
    },
    {
        id: uuidv4(),
        username: "dev",
        content: "Always work on UPSKILLING",
    },
]

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});
app.post("/posts", (req, res) => {
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id, username, content });
    res.redirect("/posts");
});
app.get("/posts/:id",(req,res)=>{
    let{id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("show.ejs",{post});
});
app.patch("/posts/:id", (req, res) => {
    let {id}=req.params;
    let newContent=req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content=newContent;
    console.log(post);
    res.redirect("/posts");

});

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs",{post});
});

app.delete("/posts/:id",(req,res)=>{
    let { id } = req.params;
    posts= posts.filter((p) => id!== p.id);
    res.redirect("/posts");  
});
app.listen(port,()=>{
    console.log(`app is listening to port:${port}`);
});