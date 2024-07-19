const fastifyPlugin=require('fastify-plugin');
const apiRouter = require('./routes/api/apiRouter');
const todoService = require('./services/todoService');
const todoRepository = require('./repository/todoRepository');
const db = require('./db');

async function app(fastify,options) {
    await fastify.register(db);                  // order of registration is very important
    await fastify.register(todoRepository);
    await fastify.register(todoService);

    fastify.register(apiRouter, { prefix: '/api' } )    
};

module.exports=fastifyPlugin(app);