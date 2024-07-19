const fastifyPlugin = require("fastify-plugin");

class TodoService {
    constructor(todoRepository) {
        this.todoRepository=todoRepository;
    }

    async create(todoText) {
        return await this.todoRepository.create(todoText);
    } 

    async getAll() {
    return await this.todoRepository.getAll();
    }

    async getOne(id) {
    return await this.todoRepository.getOne(id);
    }

    async deleteAll() {
    return await this.todoRepository.deleteAll();
    }

    async deleteOne(id) {
    return await this.todoRepository.deleteOne(id);
    }
};

async function todoService(fastify,options) {
    const { todoRepository } = fastify;
    const service=new TodoService(todoRepository);
    fastify.decorate('todoService',service);
}

module.exports=fastifyPlugin(todoService);