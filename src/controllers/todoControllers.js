// NOTE: controllers here by default have access to the fastify instance as they are used in the routes,
// Also dont make this controllers as arrow functions bcz in arrow functions "this" is not resolved by the 
// calling instance but is resolved by the local scope, that is why if we make it arrow functions,then this
// will not refer to "fastify" instance. 

async function getAllTodos(req,res) {
   const { todoService } = this;
   const response= await todoService.getAll();
   return res.status(200).send({ response });
}

async function createTodo(req,res) {
    const { todoService } = this;
    const response= await todoService.create(req.body.todoText);
    return res.status(201).send({ response });
}

async function getOne(req,res) {
    const { todoService } = this;
    const response= await todoService.getOne(req.params.id);
    return res.status(201).send({ response });
}

module.exports={
    getAllTodos,
    createTodo,
    getOne
}