const app = require('./app');
const { PORT } = require('./config/serverConfig');

const fastify=require('fastify')({logger:false});   // root app instance, on requiring it gives us a function, so to create a fastify app instance, we have to call it and in parameter we can pass an object containing extra configurations

fastify.register(app);

fastify.get('/ping',function (req,res) {
    console.log("Ping requested");
    return res.send("pong");
});

fastify.listen({port:PORT}, ()=> {
    fastify.log.info(`Server is started at PORT ${PORT}`);
});

