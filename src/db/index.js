const fastifyPlugin = require("fastify-plugin");

async function db(fastify,options) {
    fastify.decorate('db', {
        todos: []
    });
}

module.exports=fastifyPlugin(db);