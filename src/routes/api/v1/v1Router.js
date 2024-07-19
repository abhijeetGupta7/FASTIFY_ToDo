const todosRouter = require("./todos");

async function v1Router(fastify,options) {
    fastify.register(todosRouter, { prefix: "/todos" });
}

module.exports=v1Router;