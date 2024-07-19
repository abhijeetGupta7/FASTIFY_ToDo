const fastifyPlugin = require("fastify-plugin");

class TodoRepository {
    constructor(db) {
        this.db=db;
    }
    
    async create(todoText) {
        const todoList=this.db.todos;
        this.db.todos.push({
            text:todoText,
            id:todoList.length
        });
        return await this.db.todos;
    } 

    async getAll() {
        return await this.db.todos;
    }

    async getOne(id) {
        return this.db.todos.find(todo => todo.id==id);   // shorthand for below logic

        // const todoList=this.db.todos;
        // console.log(todoList);
        // for(let i=0;i<todoList.length;i++) {
        //     const obj=todoList[i];
        //     if(obj.id==id) {
        //         return await obj;
        //     }
        // }
    }

    async deleteAll() {
        
    }

    async deleteOne(id) {
        
    }
};

async function todoRepository(fastify,options) {
    const { db } = fastify;
    const repo=new TodoRepository(db);
    fastify.decorate('todoRepository',repo);
}

module.exports=fastifyPlugin(todoRepository);