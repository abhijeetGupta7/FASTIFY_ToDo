const { getAllTodos, createTodo, getOne } = require("../../../../controllers/todoControllers");

async function todosRouter(fastify,options) {
    fastify.get("/", getAllTodos );

    fastify.post("/", createTodo);

    fastify.get("/:id",getOne);
}

module.exports=todosRouter;