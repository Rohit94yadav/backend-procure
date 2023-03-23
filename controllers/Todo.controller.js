const { TodosModel}=require("../model/todo.model");
const {UserModel}=require("../model/user.model")

const AddTodos=async(req,res)=>{
    const {taskname,user_id,title,tag}=req.body
 const addTodo=new TodosModel({
     title:title,
    image:image,
   description:description,
   price:price,
   category:category,
 })    
 await addTodo.save();
 res.send({mag:"Product Added Successfully"});
}

const DeleteTodos=async(req,res)=>{
    const id =req.params.id;
    
    await TodosModel.deleteOne({_id:id})
    res.send({msg:"Product Deleted Successfully"})
}

const GetTodos=async(req,res)=>{
    const {title}=req.query;
    const _id=req.body._id;
    console.log(title,_id)
    if(title){
        const result=await TodosModel.find({_id:_id,title:title})
        res.send(result)  
    }else{
   
    const result=await TodosModel.find({_id:_id})
    res.send(result)
    }
}
const UpdateTodos=async(req,res)=>{
    const id =req.params._id;
    const {title,
        image,
       description,
       price,
       category}=req.body;

   await TodosModel.updateOne({_id:id},{$set:{title:title,
    image:image,
   description:description,
   price:price,
   category:category}})
    res.send({msg:"Product updated Successfully"});
}

const TodosController={
    AddTodos,DeleteTodos,UpdateTodos,GetTodos
}

module.exports={
    TodosController
}