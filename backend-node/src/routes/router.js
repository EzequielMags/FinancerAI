import MessageController from "../controllers/message.controller.js"

export default async function routes (fastify, options) {
    fastify.get("/health", async(request, reply) => {
        return { message: "Hello world"}
    })

    fastify.post("/message", async (request, reply) => {
        await MessageController.postMessage(request, reply)
        
    })
}