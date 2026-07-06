import MessageController from "../controllers/message.controller.js"
import WhatsappController from "../controllers/whatsappController.js"

export default async function routes (fastify, options) {
    fastify.get("/health", async(request, reply) => {
        return { message: "Hello world"}
    })

    fastify.post("/message", async (request, reply) => {
        await MessageController.postMessage(request, reply)
        
    })

    fastify.get("/webhook", async (request, reply) => {
        await WhatsappController.verifyWebhook(request, reply)
    })


    fastify.post("/webhook", async (request, reply) => {
        await WhatsappController.receiveMessage(request, reply)
    })
}