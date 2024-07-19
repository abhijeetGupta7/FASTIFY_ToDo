NOTES and STEPS FOR FASTIFY PROJECTS...  (for more details, refer to docs)

1. We know the basics like how to install it using npm and how to setup the fstify app instance, about .listen and so.

2. Concept of LifeCycle and Hooks in FASTIFY:
Basically, there are two types of Lifecycle: Resquest and Application Lifecycle,
Request lifecycle basically contains all the functions and instances from the beginning of the request to its processing and up to the stage fo giving back the response (see docs)

App lifecycle contains the steps and instances of the fasitfy app instance, it has different stages:
OnRoute, OnReady, OnRegister, Onclose, etc
Bascially these four are events name, we can setup an Event handler(event listenter) on each of these, on triggering of these events, the corresponding handler will get executed. So in this way we can do some tasks based on state of app instance.

HOOKS: Hooks are basically like adding handlers to these different events.
we can use " fastify.addHook(eventName, listener function); "

Example:
const fastify=require('fastify')({logger:true});   // root app instance, on requiring it gives us a function, so to create a fastify app instance, we have to call it and in parameter we can pass an object containing extra configurations

fastify.addHook("onReady",function() {
    console.log("Server is getting ready to take response");
});

fastify.addHook("onClose",function () {
    console.log("Server is getting closed");
})

const PORT=8080;
fastify.listen({port:PORT},()=> {
    console.log("Started");
    fastify.close();
});

3. FASTFIY PROVIDES ITS OWN DEDICATED LOGGER
for example { logger:true } can be done at the time of onvoking fastify app instance.
Apart from this, we can also use fastify.log.info("Something something"). 
We can also configure the logger but for that fastify uses "pino-pretty" due to performance reasons. 

4. ADDING ENDPOINTS (ROUTES): there are basically two ways for this: ".get" and ".route", 
.route method is quite powerful bcz it gives us the facility to configure status codes, setup schema and response validations in much detailed way.

Example:
fastify.get('/ping',function (req,res) {    // NORMAL METHOD
    return res.send("pong");
});

fastify.route(
{                          
    method: 'GET',
    url: '/home',
    handler: function (req,res) {
        res.send("Home sweet home");
    }
});

NOTE: In fastify arrow functions are not recommended to use, bcz in arrow functions as we know, the parameters are determined by lexical scope but not by calling instance. so for e.g. use of "this" keyword is differnet here in normal and arrow functions.

5. Fastify by default, supports "plain text and json for request body", no need of having body parser as was in express, however for others like "urlencoded data etc", we have to add.

6. We know about Fastify Plugins and fastify.decorate();
Basically Plugins is a reusable piece of code that has its own scope
We need to study more about Plugins.

7. fastify-cli is also there to help us to create a new fastify project with sample code





